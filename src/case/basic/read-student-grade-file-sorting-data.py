"""
读取学生成绩文件排序数据

假定有如下数据：

101,小张,88
102,小王,77
103,小李,99
104,小赵,66

处理结果预期：按照文件内容的成绩倒序排列，并输出排序后的四列数据
103,小李,99
101,小张,88
102,小王,77
104,小赵,66
"""


# 读取文件
def read_text(path):
    with open(path, mode='r', encoding="utf-8") as f:
        result = []
        for line in f:
            result.append(line[:-1].split(','))
        return result


# 数据排序
def sort_grade(data):
    return sorted(data, key=lambda x: int(x[2]), reverse=True)


# 写文件
def white_file(file_path, data):
    with open(file_path, mode='w', encoding='utf-8') as f:
        for line in data:
            f.write(line[0])
            f.write(',')
            f.write(line[1])
            f.write(',')
            f.write(line[2])
            f.write("\n")


if __name__ == '__main__':
    # 读取文件
    result = read_text('./student-scores-input.txt')

    # 排序数据
    result = sort_grade(result)

    # 写文件
    white_file('./student-scores-output-txt', result)
