"""
获取百度小说中"西游记"


1. 使用同步请求 `/getCatalog` 获取对应小说的所有章节
2. 使用异步请求 `/getChapterContent` 获取文章内容并下载到本地
3. 使用异步 aiofiles 将内存存储到文本

初始页面URL：https://dushu.baidu.com/pc/detail?gid=4306063500  点击页面章节中"查看更多"按钮可以看到所有章节URL
所有章节URL：https://dushu.baidu.com/api/pc/getCatalog?data={"book_id":"4306063500"} 点击任意章节可以看到对应章节内容URL
章节内容URL：https://dushu.baidu.com/api/pc/getChapterContent?data={"book_id":"4306063500","cid":"4306063500|1569782244","need_bookinfo":1}

pip3 install asyncio
pip3 install aiofiles
pip3 install aiohttp
"""
import asyncio
import os.path

import aiofiles
import aiohttp
import requests
import json


def get_chapters(url):
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                      "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36",
    }
    response = requests.get(url, headers=headers)
    response.encoding = 'utf-8'
    dicts = response.json()
    chapters = []
    for chapter in dicts['data']['novel']['items']:
        title = chapter['title']
        chapter_id = chapter['cid']
        chapters.append({'title': title, 'chapter_id': chapter_id})
    return chapters


async def download_chapter(book_id, chapter):

    if not os.path.exists(os.path.join('dushu.baidu.com', book_id)):
        os.makedirs(os.path.join('dushu.baidu.com', book_id))

    name = os.path.join('dushu.baidu.com', book_id, chapter['title'] + '.txt')
    data = json.dumps({"book_id": book_id, "cid": f"{book_id}|{chapter['chapter_id']}", "need_bookinfo": 1})
    url = f'https://dushu.baidu.com/api/pc/getChapterContent?data={data}'
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            resp = await response.json()
            content = resp['data']['novel']['content']
            # 异步将响应写入到文件
            async with aiofiles.open(name, mode='w') as f:
                await f.write(content)


async def download_chapters(book_id, chapters):
    tasks = []
    for chapter in chapters:
        tasks.append(asyncio.create_task(download_chapter(book_id, chapter)))
    await asyncio.wait(tasks)


if __name__ == '__main__':
    book_id = '4306063500'
    url = 'https://dushu.baidu.com/api/pc/getCatalog?data={"book_id":"%s"}' % book_id  # 章节URL
    chapters = get_chapters(url)

    asyncio.run(download_chapters(book_id, chapters))
