"""
进程池

一次性开辟一些进程，并将任务直接提交给进程池，进程任务的调度交由进程池完成

"""

from concurrent.futures import ProcessPoolExecutor


def func(name):
    for i in range(1000):
        print(name, i)


if __name__ == '__main__':
    # 创建50个进程的进程池
    with ProcessPoolExecutor(50) as t:
        for i in range(100):
            t.submit(func, name=f'thread {i}')
    # 进程池中任务执行完毕后再继续执行下面的代码
    print('Done')
