"""
统计学生成绩最高分、最低分和平均分

输入文件：

101,小张,88
102,小王,77
103,小李,99
104,小赵,66

输出最高分，最低分和平均分分值
"""


def compute_score(path):
    """
    给定数据文件路径，计算最后一列数值中最大值，最小值和平均值
    :param path:
    :return:
    """
    scores = []
    with open(path, mode='r', encoding='utf-8') as f:
        for line in f:
            line = line[:-1]  # 去掉最后的换行符
            fields = line.split(',')
            score = fields[-1]  # 成绩在最后一列
            scores.append(int(score))  # 将数据写入到列表

    return max(scores), min(scores), round(sum(scores) / len(scores), 2)


if __name__ == '__main__':
    max, min, avg = compute_score('./student-scores-input.txt')

    print(f'最高分：{max}，最低分：{min}，平均分：{avg}')
