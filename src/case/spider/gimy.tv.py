"""
剧迷站 下载 "越狱" 第一季

1. 从视频播放页获取源代码，分析出m3u8地址
  1.1 视频播放页地址：https://gimy.tv/ep-8Lmab-6-1.html
  1.2 m3u8地址：https://dy3.yle888.vip/20220705/Mpy9Swvf/index.m3u8
2. 下载 m3u8 文件内容，转而下载另一个目标 m3u8 文件
    2.1 第一个 m3u8 下载地址（从视频播放页源代码的JS中获取）：https://dy3.yle888.vip/20220705/Mpy9Swvf/index.m3u8
    2.2 第二个 m3u8 下载地址（从第一个 m3u8 响应中分析得到）：https://dy3.yle888.vip/20220705/Mpy9Swvf/1500kb/hls/index.m3u8
3. 下载视频
4. 下载视频需要的密钥
5. 对下载的视频进行解密操作
6. 合并所有下载的视频 ts 片段到一个 mp4 文件

pip3 install requests
pip3 install aiofiles
pip3 install asyncio
pip3 install aiohttp
pip3 install pycryptodome
"""
import os.path
import re
from urllib.parse import urlparse

import aiofiles
import requests
import asyncio
import aiohttp
from Crypto.Cipher import AES

headers = {
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) '
                  'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36'
}
base_path = './越狱/01'
first_m3u8_path = f'{base_path}/first.m3u8.txt'
second_m3u8_path = f'{base_path}/second.m3u8.txt'
video_path = f'{base_path}/ts'
key_path = f'{base_path}/key.key'


def get_m3u8_url(url):
    detail_response = requests.get(url, headers=headers, )

    # 从页面源代码中分析出第一个m3u8地址
    return re.compile(r'"url":"(?P<m3u8_url>https.*?)"', re.S) \
        .search(detail_response.text).group('m3u8_url').replace(r"\/", '/')


def download_m3u8_file(url, path):
    """
    下载m3u8文件
    :param url: m3u8文件
    :param path: 文件存储路径
    :return: None
    """
    response = requests.get(url, headers=headers)
    with open(path, mode='wb') as f:
        f.write(response.content)


def get_m3u8_file(url):
    """
    获取 m3u8 文件
    :param url: m3u8文件
    :return:
    """
    # 发送请求获取m3u8内容
    download_m3u8_file(url, first_m3u8_path)
    second_m3u8_url = f'{urlparse(url).scheme}://{urlparse(url).netloc}'
    # 下载第二层m3u8文件
    with open(first_m3u8_path, 'r') as f:
        for line in f:
            if line.startswith('#'):
                continue
            else:
                line = line.strip()
                second_m3u8_url += line  # 拼接 m3u8 URL 路径
                download_m3u8_file(second_m3u8_url, second_m3u8_path)


def get_key():
    """
    获取ts片段加密的key
    :return:
    """
    if not os.path.exists(key_path):
        with open(second_m3u8_path, mode='r', encoding='utf-8') as f:
            key_url = re.compile('URI="(?P<key>.*?)"', re.S).search(f.read()).group('key')
            with open(key_path, mode='wb') as k:
                k.write(requests.get(key_url).content)

    return open(key_path).read()


async def decrypt_ts(name, key):
    """
    解密 ts 片段
    :param name: 原 ts 片段的名称
    :param key: 密钥
    :return:
    """
    aes = AES.new(key=key, IV=b'0000000000000000', mode=AES.MODE_CBC)
    async with aiofiles.open(f'{video_path}/{name}', mode='rb') as rf:
        async with aiofiles.open(f'{video_path}/tmp_{name}.ts', mode='wb') as wf:
            origin_content = await rf.read()
            await wf.write(aes.decrypt(origin_content))
    print(name, '处理完毕')


async def aio_decrypt(key):
    """
    创建解密协程
    :param key: 密钥
    :return:
    """
    tasks = []
    async with aiofiles.open(second_m3u8_path, mode='r') as f:
        async for line in f:
            if line.startswith("#"):
                continue
            line = line.strip()

            name = line.split('/hls/')[1]
            task = asyncio.create_task(decrypt_ts(name, key))
            tasks.append(task)
        await asyncio.wait(tasks)


async def download_ts_file(session, url, name):
    """
    下载 ts 文件
    :param session: 异步请求 session
    :param url: 请求URL
    :param name: 保存名称
    :return:
    """
    async with session.get(url) as response:
        async with aiofiles.open(f'{video_path}/{name}', mode='wb') as f:
            await f.write(await response.content.read())
    print(name, '下载完毕')


async def download_video():
    tasks = []
    async with aiohttp.ClientSession() as session:
        async with aiofiles.open(second_m3u8_path, mode='r', encoding='utf-8') as f:
            async for line in f:
                if line.startswith('#'):
                    continue
                line = line.strip()

                task = asyncio.create_task(download_ts_file(session, line, line.split('hls/')[1]))
                tasks.append(task)
            await asyncio.wait(tasks)


def merge_ts():
    ts_list = []
    with open(second_m3u8_path, mode='r') as f:
        for line in f:
            if line.startswith('#'):
                continue
            line = line.strip()
            name = f'{video_path}/tmp_{line.split("hls/")[1]}.ts'
            ts_list.append(name)

    s = ' '.join(ts_list)
    os.system(f'cat {s} > {base_path}/movie.mp4')


def main(url):
    # 0. 判断目录是否存在
    if not os.path.exists(video_path):
        os.makedirs(video_path)

    # 1. 从视频播放页获取源代码，分析出m3u8地址
    m3u8_url = get_m3u8_url(url)
    # 2. 下载 m3u8 文件内容，转而下载另一个目标 m3u8 文件
    get_m3u8_file(m3u8_url)
    # 3. 下载视频
    asyncio.run(download_video())
    loop = asyncio.get_event_loop()
    loop.run_until_complete(download_video())
    # 4. 下载视频需要的密钥
    key = get_key()
    # 5. 对下载的视频进行解密操作
    asyncio.run(aio_decrypt(key))
    # 6. 合并所有下载的视频 ts 片段到一个 mp4 文件
    merge_ts()


if __name__ == '__main__':
    url = 'https://gimy.tv/ep-8Lmab-6-1.html'  # 视频播放页面
    main(url)
