"""
按文件后缀整理文件夹

1. 获取文件的后缀
import os
os.path.splitext('/path/to/test.txt')

2. 文件移动
import shutil
shutil.move('test.txt', 'dir/foo.bar')
"""
import os
import shutil

if __name__ == '__main__':
    dir = './organize-folders-by-file-suffix'
    for file in os.listdir(dir):
        extension = os.path.splitext(file)[1]  # 获取文件后缀
        extension = extension[1:]  # 删除第一个字符

        sub_dir = os.path.join(dir, extension)
        if not os.path.exists(sub_dir):
            os.makedirs(sub_dir)

        file_source = os.path.join(dir, file)  # 待移动的文件位置+名称
        file_dist = os.path.join(dir, extension, file)  # 文件保存位置+名称
        if os.path.isfile(os.path.join(dir, file)):
            shutil.move(file_source, file_dist)  # 移动文件
