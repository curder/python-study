"""
移除列表中的多个元素

输入原始元素：[3, 5, 7, 9, 11, 13]，待移除元素：[7, 11]，返回 [3, 5, 9, 13]
"""


def remove_elements_from_list(origin, remove):
    for item in remove:
        origin.remove(item)

    return origin


if __name__ == '__main__':
    origin_list = [3, 5, 7, 9, 11, 13]
    remove_list = [7, 11]
    print(f"从原始列表{origin_list}中移除列表元素{remove_list}，最终列表为：{remove_elements_from_list(origin_list, remove_list)}")  # 使用函数

    origin_list = [3, 5, 7, 9, 11, 13]
    remove_list = [7, 11]
    result = [item for item in origin_list if item not in remove_list]  # 使用列表推导式方式
    print(f"从原始列表{origin_list}中移除列表元素{remove_list}，最终列表为：{result}")
