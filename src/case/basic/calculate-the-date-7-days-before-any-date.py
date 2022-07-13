"""
计算任意日期7天前的日期

比如,输入 2022-08-16，计算出7天前的值为：2022-08-09
"""

import datetime


def get_diff_days(start_date, days):
    """
    计算任意日期的指定天数之前的日期
    :param start_date: 开始日期
    :param days: 天数
    """
    format_date = '%Y-%m-%d'  # 格式化日期格式
    start_date_obj = datetime.datetime.strptime(start_date, format_date)  # 将用户输入的日期转换成日期对象
    time_gap = datetime.timedelta(days=days)  # 返回日期的 Date 对象 7 days, 0:00:00
    date_result = start_date_obj - time_gap  # 计算差值，得到距开启日期前的指定日期对象
    return date_result.strftime(format_date)


if __name__ == '__main__':
    print(get_diff_days('2022-08-16', 7))  # 2022-08-09
    print(get_diff_days('2022-04-28', 7))  # 2022-04-21
    print(get_diff_days('2022-04-01', 7))  # 2022-03-25
