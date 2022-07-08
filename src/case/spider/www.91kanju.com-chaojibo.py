"""
获取 91看剧 - 超级播视频源

流程：
1. 访问视频播放页获取源代码，比如：http://91kanju.com/vod-play/63125-1-1.html
2. 从源代码中获取 m3u8 的请求地址
3. 下载 m3u8 文件到本地
4. 读取并分析 m3u8 文件，下载视频到本地
5. 合并视频碎片为 mp4 文件

pip3 install requests
pip3 install asyncio
pip3 install aiofiles
pip3 install aiohttp
"""
import asyncio
import os.path
import re

import aiofiles
import aiohttp
import requests

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) '
                  'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36'
}


def fetch(url):
    """
    获取页面源代码
    :param url: 提供一个请求的URL
    :return: 返回响应主体
    """

    response = requests.get(url, headers=headers)
    response.encoding = re.compile(' content="text/html; charset=(?P<encoding>.*?)"', re.S) \
        .search(response.text) \
        .group('encoding')
    response.close()
    return response.text


def save_m3u8_file(url, path, m3u8_name):
    """
    下载m3u8文件并保存
    :param url: m3u8文件地址
    :param path: 保存的位置
    :param m3u8_name: 保存的名字
    :return:
    """
    response = requests.get(url, headers=headers)

    if not os.path.exists(path):
        os.makedirs(path)

    with open(os.path.join(path, m3u8_name), mode='w') as f:
        f.write(response.text)
    response.close()


def get_m3u8_content(path, m3u8_name):
    """
    获取并格式化 m3u8 文件内容
    :param path: 文件地址
    :param m3u8_name: 文件名
    :return: 格式化之后的 m3u8 下载列表
    """
    if not os.path.exists(os.path.join(path, m3u8_name)):
        url = 'http://91kanju2.com/vod-play/63125-1-1.html'
        video_m3u8_url = re.compile("url: '(?P<video_m3u8_url>.*?)',", re.S).search(fetch(url)).group('video_m3u8_url')
        save_m3u8_file(video_m3u8_url, video_path, m3u8_name)

    with open(os.path.join(video_path, m3u8_name), mode='r', encoding='utf-8') as f:
        m3u8_url_list = []
        for line in f:
            line = line.strip()  # 去掉空格
            if line.startswith('#'):  # 过滤掉#开头行
                continue
            m3u8_url_list.append(line)

        return m3u8_url_list


async def download_m3u8(path, number, url):
    """
    下载m3u8文件
    :param path: 文件保存路径
    :param number: 文件名
    :param url: m3u8文件下载地址
    :return: None
    """
    name = f"{path}/{number}.ts"
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            content = await response.content.read()
            async with aiofiles.open(name, mode="wb") as f:
                await f.write(content)


async def main(path, m3u8_urls):
    """
    异步处理 m3u8 下载
    :param path: 文件保存路径
    :param m3u8_urls: 待下载的m3u8地址列表
    :return:
    """
    tasks = []

    number = 1
    for url in m3u8_urls:
        tasks.append(asyncio.create_task(download_m3u8(path, number, url)))
        number += 1

    await asyncio.wait(tasks)


if __name__ == '__main__':
    video_path = 'www.91kanju.com/新居之约-第01集'
    m3u8_name = 'video.m3u8'
    m3u8_urls = get_m3u8_content(video_path, m3u8_name)
    # 使用协程下载
    asyncio.run(main(video_path, m3u8_urls))
    print('Done')
