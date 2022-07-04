"""
简单列表元素排序

简单列表：元素类型不是复合类型(列表/元祖/字典)
形式1：[20, 50, 10, 40, 30]
形式2：['bb', 'ee', 'aa', 'dd', 'cc']

- 怎样做到原地排序? 怎样不改变原列表排序?
- 怎样指定是升序还是降序排序?
"""

origin_list = [20, 50, 10, 40, 30]
origin_list.sort()  # 调用 sort() 方法会改变原始列表排序
print(origin_list)
origin_list.sort(reverse=True)
print(origin_list)  # 降序排序


origin_list = [20, 50, 10, 40, 30]
print(sorted(origin_list), origin_list)  # 调用sorted函数不会改变原列表排序
print(sorted(origin_list, reverse=True), origin_list)  # 降序排序
