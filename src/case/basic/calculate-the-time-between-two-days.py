"""
计算两个日期相隔天数

1. 使用 `datetime.strptime()` 方法将日期字符串转换为 `datetime.datetime` 类
2. 两个时间 `datetime.datetime` 类相减后可以调用 `.days` 可以获取到天数
"""

import datetime

birthday = '1999-08-16'
birthday_date = datetime.datetime.strptime(birthday, '%Y-%m-%d')  # 生日日期时间
print(type(birthday_date))
current_datetime = datetime.datetime.now()  # 当前时间

print(
    (current_datetime - birthday_date).days  # 相隔天数
)
