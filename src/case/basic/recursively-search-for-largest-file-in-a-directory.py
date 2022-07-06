"""
递归搜索目录中最大的文件

递归搜索目录
import os
for root, dirs, files in os.walk('path/to/dir'):
    # root 为当前目录
    # dirs 为当前目录下的子目录
    # files 为当前目录下的普通文件
"""
import os

dir = '/Users/curder/Codes/python-study/src'

result_files = []

for root, dirs, files in os.walk(dir):
    for file in files:  # 遍历当前目录下的文件树
        file_path = os.path.join(root, file)  # 拼接完整文件路径
        result_files.append((file_path, os.path.getsize(file_path)))  # 使用元祖记录文件路径和文件大小

print(
    sorted(result_files, key=lambda x: x[1], reverse=True)[:10]  # 按照文件大小排序并获取前10条
)
