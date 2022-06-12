# 查询集合 {#top}

## 集合元素查询操作

集合元素的查询操作是判断指定元素在集合中是否存在，使用 `in` 或 `not in`。

```python
s = {1, 2, 3, 4, 5}

print(1 in s)  # True
print(2 not in s)  # False
print(99 in s)  # False
print(100 not in s)  # True
```

> `in` 或 `not in` 判断元素是否存在于集合中，返回对应的布尔值。