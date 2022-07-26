"""
使用协程获取图片

1. 使用 asyncio 创建协程并添加下载任务
2. 使用 aiohttp 模块发送请求，异步读取响应，并使用 aiofiles 异步写入到文件

pip3 install asyncio
pip3 install aiohttp
pip3 install aiofiles
"""
import asyncio
import aiohttp
import aiofiles

# 待获取图片的地址
urls = [
    'http://kr.shanghai-jiuxin.com/file/2022/0708/6a8001b60ce8fdb63c958ca30a2e3d9a.jpg',
    'http://kr.shanghai-jiuxin.com/file/2022/0705/58a94d3459aefc1ee4df65ed4750be46.jpg',
    'http://kr.shanghai-jiuxin.com/file/2022/0623/8248da8a4677908d67ed10b1f7e13fad.jpg',
    'http://kr.shanghai-jiuxin.com/file/2022/0608/99ae86e677d1e56f55c427fe4c0fe343.jpg',
]


async def download(session, url):
    file_name = url.rsplit('/')[-1]  # 从URL中获取文件名作为本地保存的文件名
    # 使用 aiohttp 模块发送请求
    async with session.get(url) as response:  # 发送请求获取响应
        # 异步将响应写入到文件
        async with aiofiles.open(file_name, mode='wb') as f:
            await f.write(await response.content.read())  # 读取内容是异步的，需要 await 挂起


async def main():
    tasks = []
    async with aiohttp.client.ClientSession() as session:
        for url in urls:
            tasks.append(asyncio.create_task(download(session, url)))

        await asyncio.wait(tasks)


if __name__ == '__main__':
    asyncio.run(main())
    print('Done')
