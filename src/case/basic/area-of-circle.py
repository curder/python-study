"""
求圆的面积

输入圆的半径，求圆的面积
"""

from math import pi


def area_of_circle(r):
    """
    结果保留两位数小数
    :param r:
    :return:
    """
    return round(pi * r * r, 2)


print(f"半径为35的面积为：{area_of_circle(35)}")  # 半径为35的面积为：3848.45
print(f"半径为{3.14}的面积为：{area_of_circle(3.14)}")  # 半径为35的面积为：30.97
print(f"半径为{6.78}的面积为：{area_of_circle(6.78)}")  # 半径为35的面积为：144.41
