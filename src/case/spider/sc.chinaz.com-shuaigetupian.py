"""
站长之家-帅哥图片 异步下载

1. 分析出图片列表页中图片详情URL
2. 将图片详情URL添加到下载异步处理任务
3. 分析图片地址并下载到本地

pip3 install aiofiles aiohttp requests asyncio
"""
import os
import re

import aiofiles
import aiohttp.client
import requests
import asyncio

headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                  "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
}

start_url = 'https://sc.chinaz.com/tupian/shuaigetupian.html'  # 起始URL

regex_detail_page = re.compile(r'<p><a target="_blank" href="(?P<url>.*?)"')  # 在列表页分析出图片详情页地址
regex_image_url = re.compile(r'class="image_gall"><img.*?src=[\'|"](?P<url>.*?)["|\']')  # 在图片详情页面分析出图片地址


def format_url(url):
    """
    格式化URL，添加上协议
    :param url:
    :return:
    """
    return f"https:{url}"


async def download_image(session, url):
    """
    打开页面，获取到图片地址并下载到本地
    :param session:
    :param url:
    :return:
    """
    async with session.get(url) as response:
        result = regex_image_url.search(await response.text())

        image_url = format_url(result.group('url'))
        async with session.get(image_url) as image_response:
            file_path = 'sc.chinaz.com/shuaigetupian'
            file = os.path.join(file_path, image_url.split('/')[-1])
            if not os.path.exists(file_path):
                os.makedirs(file_path)

            # 写文件
            async with aiofiles.open(file, mode='wb') as f:
                await f.write(await image_response.content.read())


async def parse_detail_url(content):
    """
    分析详情页图片详情地址，并添加到异步下载任务
    :param content:
    :return:
    """
    result = regex_detail_page.finditer(content)
    tasks = []
    async with aiohttp.client.ClientSession() as session:
        for item in result:
            url = format_url(item.group('url'))
            task = asyncio.create_task(download_image(session, url))
            tasks.append(task)
        await asyncio.wait(tasks)


def main(url):
    response = requests.get(url, headers=headers)
    response.encoding = 'utf-8'

    if response.status_code == 200:
        asyncio.run(parse_detail_url(response.text))
    else:
        # 不存在的URL，请求时响应，返回404
        return True


if __name__ == '__main__':
    page = 1
    while True:
        url = start_url
        if page == 1:
            url = start_url
        else:
            url = start_url.replace('.html', f'_{page}.html')

        print(f'处理第{page}页图片下载')
        if main(url):
            print(f'总计{page}页图片下载完毕')
            break

        page += 1  # 下一页
