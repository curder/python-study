"""
线程池

一次性开辟一些线程，并将任务直接提交给线程池，线程任务的调度交由线程池完成

"""

from concurrent.futures import ThreadPoolExecutor


def func(name):
    for i in range(1000):
        print(name, i)


if __name__ == '__main__':
    # 创建50个线程的线程池
    with ThreadPoolExecutor(50) as t:
        for i in range(100):
            t.submit(func, name=f'process {i}')
    # 线程池中任务执行完毕后再继续执行下面的代码
    print('Done')
