"""
批量合并多个文本文件

在 Python 中，可以按行读取文件内容：
for lin in file:
    print(line)

也可以一次性读取所有文件内容：
content = file.read()
"""
import os

data_dir = './batch-merge-multiple-text-files'  # 待合并的文件所在路径

contents = []  # 初始化一个空列表，用于存储文件内容
for file in os.listdir(data_dir):
    file_path = os.path.join(data_dir, file)  # 拼接目录和文件所在位置为全路径
    if os.path.isfile(file_path) and file.endswith('.txt'):  # 判断是否为文件，且文件扩展名为 .txt 结尾
        with open(file_path, mode='r', encoding='utf-8') as f:
            contents.append(f.read())  # 一次行读取文件内容并写入到列表

final_content = "\n".join(contents)  # 最终的文件内容
with open(os.path.join(data_dir, 'final.txt'), mode='w', encoding='utf-8') as f:
    f.write(final_content)
