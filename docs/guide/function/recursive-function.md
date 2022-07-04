<a name="recursive-function"></a>

# 递归函数

## 什么是递归函数

如果在一个函数的函数体内调用了该函数自身，这个函数就称为递归函数。

## 递归上限

在 Python 中默认递归上限设置为 1000 。

```python
number = 1


def func():
    global number
    number += 1
    print(number)
    func()


if __name__ == '__main__':
    func()
```

可以通过调用 `getrecursionlimit` 方法获取当前递归最大深度，也可以通过调用 `setrecursionlimit` 方法可以设置递归的最大深度。

```python
import sys

print(sys.getrecursionlimit())  # 查看递归最大深度 1000

sys.setrecursionlimit(5000)  # 设置递归最大深度 5000
print(sys.getrecursionlimit())  # 查看递归最大深度 1000
```

## 递归函数组成部分

1. 递归调用
2. 递归终止条件

## 递归的优缺点

- 优点：思路和代码简单
- 缺点：占用内存多，效率低下

## 递归指定文件夹下的所有文件

```python
"""
递归指定文件夹下的所有文件
"""

import os


def recursive(path, level):
    list_dir = os.listdir(path)  # 获取到路径下的所有文件，包括目录
    for file_name in list_dir:
        real_path = os.path.join(path, file_name)  # 拼接完整路径
        if os.path.isdir(real_path):  # 判断文件是是否是文件夹
            print('├──' * level + file_name)
            recursive(real_path, level + 1)  # 递归调用
        else:
            print('├──' * level + file_name)


if __name__ == '__main__':
    recursive("/Users/curder/Codes/python-study/docs", 1)
```

## 使用递归计算阶乘

```python
# 计算 10 的阶乘

def factorial(number):
    if number == 1:
        return 1
    else:
        return number * factorial(number - 1)


print(factorial(10))  # 3628800
```

## 斐波那契数列

```python
def fibonacci(number):
    if number == 1:
        return 1
    elif number == 2:
        return 1
    else:
        return fibonacci(number - 1) + fibonacci(number - 2)


print(fibonacci(10))  # 55

# 输出所有斐波那契数列的前10位数
for i in range(1, 11):
    print(fibonacci(i), end=" ")  # 1 1 2 3 5 8 13 21 34 55
```