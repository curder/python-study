"""
计算列表数字的和

- 输入：[1, 2, 3, 4, 5] 输出：10
- 输入：[17, 3, 5, 5] 输出：30
"""


# 可以自定义函数，也可以是直接使用系统自带的 sum 函数
def sum_of_list(param_list):
    total = 0
    for number in param_list:
        total += number
    return total


if __name__ == '__main__':
    list1 = [1, 2, 3, 4, 5]
    list2 = [17, 3, 5, 5]
    print(sum_of_list(list1))  # 15
    print(sum(list2))  # 30
