"""
获取当前日期时间

1. 格式化时间
2. 获取当前时间的，年、月、日、时、分、秒
"""

import datetime

current_datetime = datetime.datetime.now()

print(current_datetime.strftime('%Y-%m-%d %H:%M:%S'))  # 格式化为字符串 2022-07-12 17:33:29

print(current_datetime.year)  # 年 2022
print(current_datetime.month)  # 月 7
print(current_datetime.day)  # 日 12
print(current_datetime.hour)  # 时 17
print(current_datetime.minute)  # 分 34
print(current_datetime.second)  # 秒 35
