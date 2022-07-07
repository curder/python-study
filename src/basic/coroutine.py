"""
协程

协程程序的运行需要 asyncio 模块的支持，使用 `asyncio.run()` 运行协程对象

一般的IO操作会阻塞进程，比如： time.sleep(), requests.get() 等
"""
import asyncio
import time


async def func1():
    print('I am async func1 started')
    # time.sleep(1)  # 同步阻塞
    await asyncio.sleep(1)  # 异步操作
    print('I am async func1 ended')


async def func2():
    print('I am async func2 started')
    # time.sleep(2)  # 同步阻塞
    await asyncio.sleep(2)
    print('I am async func2 ended')


async def func3():
    print('I am async func3 started')
    # time.sleep(3)  # 同步阻塞
    await asyncio.sleep(3)
    print('I am async func3 ended')


async def main():
    task1 = asyncio.create_task(func1())
    task2 = asyncio.create_task(func2())
    task3 = asyncio.create_task(func3())

    await task1
    await task2
    await task3


if __name__ == '__main__':
    start_time = time.time()  # 程序启动时间
    asyncio.run(main())
    end_time = time.time()  # 程序结束时间

    print(end_time - start_time)  # 程序总耗时
