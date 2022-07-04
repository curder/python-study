"""
对列表元素去重

输入包含重复元素的原始列表：[10, 20, 30, 10, 20]，返回：[10, 20, 30]

解答：
方法一：通过编写函数
方法而二：使用set函数
"""


def deduplicate_list_elements(origin):
    result = []
    for item in origin:
        if item not in result:
            result.append(item)

    return result


if __name__ == '__main__':
    origin_list = [10, 20, 30, 10, 20]
    print(f"原始列表{origin_list}，去除重复后的列表：{deduplicate_list_elements(origin_list)}")

    #  使用 set 集合数据结构
    print(f"原始列表{origin_list}，去除重复后的列表：{list(set(origin_list))}")
