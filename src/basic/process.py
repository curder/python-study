"""
多进程

Python中实现多进程的写法有：
1. 函数
2. 自定义类，继承自系统的线程类：Process，并重写 run 方法
"""
from multiprocessing import Process


def func(name):
    for i in range(1000):
        print(name, i)


class MyProcess(Process):
    def __init__(self, name):
        Process.__init__(self)
        self.name = name

    def run(self) -> None:
        for i in range(1000):
            print('class', i)


if __name__ == '__main__':
    # 通过自定义函数编写多进程
    p = Process(target=func, args=('class',))
    p.start()

    # 通过自定义类的run方法编写多进程
    mp = MyProcess(name='func')
    mp.start()

    for i in range(1000):
        print('main', i)
