"""
验证字符串是否为日期格式

怎么验证一个字符串是日期 YYYY-MM-DD 格式
"""
import re


def date_is_right(date_string):
    return re.compile(r'\d{4}-\d{2}-\d{2}', re.S).search(date_string) is not None


if __name__ == '__main__':
    data1 = '2022-07-15'
    data2 = '2022/07/15'
    data3 = '22/07/15'
    data4 = '20220715'

    print(date_is_right(date_string=data1))  # True
    print(date_is_right(date_string=data2))  # False
    print(date_is_right(date_string=data4))  # False
    print(date_is_right(date_string=data3))  # False

