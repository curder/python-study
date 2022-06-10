# range 函数 {#function-range}

range 函数用于生成整数序列，它返回一个迭代器对象。

range 函数的有点事：不管 range 迭代器对象表示的整数序列有多长，所有 range 迭代器对象占用的内存空间都是相同的，因为仅仅需要存储 `start`, `stop` 和 `step`，只有当用到 range 函数生成的迭代器对象时才会计算序列中的相关元素。

可以使用 `in` 和 `not in` 判断整数是否存在于迭代器对象中。

以下是 range 函数创建对象的三种方式：

1. `range(stop)` 创建一个 `[0, stop)` 之间整数序列，步长为`1`
2. `range(start, stop)` 创建一个 `[start, stop)` 之间的整数序列，步长为`1`
3. `range(start, stop, step)` 创建一个 `[start, stop)` 之间的整数序列，步长为 `step`

```python
print(list(range(8)))  # [0, 1, 2, 3, 4, 5, 6, 7]
print(list(range(2, 8)))  # [2, 3, 4, 5, 6, 7]
print(list(range(2, 8, 2)))  # [2, 4, 6]

print(4 in range(2, 8))  # True
print(10 not in range(2, 8))  # True
```

> 使用 `list` 将 `range` 迭代器对象转换为列表。