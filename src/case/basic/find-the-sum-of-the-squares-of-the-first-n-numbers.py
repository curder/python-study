""""
求前N个数字的平方和

输入数字N，计算：1² + 2² + 3² + 4² + ... + N²
"""


def sum_of_square(n):
    """
    计算n的平方和
    :param n:
    :return:
    """
    result = 0
    for number in range(1, n + 1):
        result += number * number
    return result


if __name__ == '__main__':
    print("3 的平方和：", sum_of_square(3))  # 3 的平方和： 14
    print("5 的平方和：", sum_of_square(5))  # 5 的平方和： 55
    print("10 的平方和：", sum_of_square(10))  # 10 的平方和： 385
