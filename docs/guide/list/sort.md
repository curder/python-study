# 列表排序

## sort 方法

1. 默认为升序排列，使用 `reverse=True` 进行降序排序
2. 该方法对列表排序前后不会产生新列表

```python
l = [2, 4, 1, 9, 5]

l.sort()  # 排序后不会产生新列表
print(l)  # [1, 2, 4, 5, 9]

l.sort(reverse=True)
print(l)  # [9, 5, 4, 2, 1]
```

## sorted 函数

1. 默认为升序排列，使用 `reverse=True` 进行降序排序
2. 该方法对列表排序前后会产生新列表

```python
l = [2, 4, 1, 9, 5]

l2 = sorted(l)  # 排序后会产生新的列表
l3 = sorted(l, reverse=True)

print(l)  # [2, 4, 1, 9, 5]
print(l2)  # [1, 2, 4, 5, 9]
print(l3)  # [9, 5, 4, 2, 1]
```