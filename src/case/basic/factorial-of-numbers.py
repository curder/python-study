"""
数字的阶乘

例如：
- 6 的阶乘：6 x 5 x 4 x 3 x 2 x 1
- 3 的阶乘：3 x 2 x 1
"""


def get_factorial(number):
    result = 1
    
    while number > 1:
        result *= number
        number -= 1

    return result


if __name__ == '__main__':
    print('6的阶乘为：', get_factorial(6))  # 6的阶乘为： 720
    print('3的阶乘为：', get_factorial(3))  # 3的阶乘为： 720
    print('10的阶乘为：', get_factorial(10))  # 10的阶乘为： 3628800
