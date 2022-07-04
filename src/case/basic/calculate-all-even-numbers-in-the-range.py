"""
计算数字范围中所有偶数

输入开始和结束值（不包含），得到所有偶数
偶数：能够被 2 所整除的整数，是 2 的倍数

比如：begin = 4, end = 15 返回 [4, 6, 8, 10, 12, 14]
"""


def get_even_numbers(start, end):
    result = []
    for number in range(start, end):
        if number % 2 == 0:
            result.append(number)

    return result


if __name__ == '__main__':
    begin = 4
    end = 15
    print(f"开始值：{begin}，结束值：{end}，之间的偶数值：{get_even_numbers(begin, end)}")

    data = [item for item in range(begin, end) if item % 2 == 0]
    print(f"开始值：{begin}，结束值：{end}，之间的偶数值：{data}")  # 使用列表推导式方式
