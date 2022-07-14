# `in` 和 `not in`

使用 `in` 和 `not in` 运算符来判断某个对象是否为序列的成员。

- `in` 判断对象是否在序列（列表/字符串/元祖/字典）中，如果存在则返回 `True`，否则返回 `False`
- `not in` 判断对象是否不在序列（列表/字符串/元祖/字典）中，如果存在则返回 `False`，否则返回 `True`

```python
print("4" in "1234")  # True
print(1 in [1, 2, 3, 4])  # True
print(1 in (1, 2, 3, 4,))  # True
print("name" in {"name": "curder", "age": 1})  # True
```

> 字典判断的是键，不是值。

```python
print("4" not in "1234")  # False
print(1 not in [1, 2, 3, 4])  # False 
print(1 not in (1, 2, 3, 4,))  # False
print("name" not in {"name": "curder", "age": 1})  # False
```

> 字典判断的是键，不是值。

