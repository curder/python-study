# `is` 和 `is not`

`is` 和 `is not` 用于判断两个对象是否相同。

- `is` 用于判断对象是否相同
- `is not` 用于判断对象是否不相同

```python
str1 = 'curder'
str2 = 'luo'

print(str1 is str2)  # False
print(str1 is not str2)  # True
```

- `字符串 str`、`数字 int`、`元组 tuple` 值一样则是同一个对象，因为它们是不可变对象。
```python
print('abc' is 'abc')  # True
print(1 is 1)  # True
print((1, 2, 3) is (1, 2, 3))  # True
```

- `列表 list`、`字典 dict`、`集合 set` 值一样也不是同一个对象，因为它们是可变对象。

```python
print([1, 2, 3] is [1, 2, 3])  # False
print({'name': "curder"} is {"name": "curder"})  # False
print({1, 2, 3} is {1, 2, 3})  # False
```