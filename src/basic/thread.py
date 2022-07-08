"""
多线程

Python中实现多线程的写法有：
1. 函数
2. 自定义类，继承自系统的线程类：Thread，并重写 run 方法
"""
from threading import Thread


# def func():
#     for i in range(1000):
#         print('func', i)
#
#
# if __name__ == '__main__':
#     t = Thread(target=func)  # 创建线程并给线程安排任务
#     t.start()  # 多线程状态标识为可以开始工作状态
#
#     for i in range(1000):
#         print('main', i)

class FuncThread(Thread):
    def run(self):  # 当线程被执行时，run方法会被调用
        for i in range(1000):
            print('FuncThread', i)


if __name__ == '__main__':
    t = FuncThread()  # 实例化线程类
    t.start()  # 多线程状态标识为可以开始工作状态

    for i in range(1000):
        print('main', i)
