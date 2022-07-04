"""
求区间内所有素数

比如输入开始数字和结束数字，求区间内所有的素数并打印出来。
如：输入11和25，打印11 - 25的所有素数，包括25。

什么是素数？
数字只能被 1 和自己整除的数字就是素数，否则不是素数。比如 3 是素数，4 不是素数。
"""


def is_prime(number):
    """
    判断给定的数字是否为素数
    :param number:
    :return:
    """
    if number in (1, 2):
        return True
    for index in range(2, number):
        if number % index == 0:
            return False
    return True


def get_primes(start, end):
    """
    获取区间内的所有素数
    :param start:
    :param end:
    :return:
    """
    primes = []
    for number in range(start, end + 1):
        if is_prime(number):
            primes.append(number)

    return primes


if __name__ == '__main__':
    print(is_prime(7))
    begin = 11
    end = 25
    print(f"{begin} - {end} 之间的所有素数为：{get_primes(begin, end)}")
