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
