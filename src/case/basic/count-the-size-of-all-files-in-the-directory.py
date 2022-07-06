"""
统计目录下所有文件大小

通过 os 模块的 `listdir()` 方法可以列出目录下的所有文件（包含目录）
通过 os 模块的 `isfile()` 方法可以判断是否为文件
通过 os 模块的 `path.getsize()` 方法可以获取文件大小，返回文件的字节数
"""
import os

if __name__ == '__main__':
    dir_name = './'  # 待计算的目录，当前目录
    sum_size = 0
    for file in os.listdir(dir_name):
        if os.path.isfile(file):
            sum_size += os.path.getsize(file)

    print(sum_size)
