# 获取列表元素索引 {#find-item-index}

如果列表中存在相同元素，index仅返回列表中相同元素的第一个元素索引

```python
l = ['hello', 'world', 100, 'hello']
print(l.index('hello'))
```

## 查找的元素不存在

如果查找的列表元素不存在于列表中，则会抛出异常。

```python
l = ['hello', 'world', 100, 'hello']
print(l.index('item'))  # 抛出异常 ValueError: 'item' is not in list
```

## 通过范围查找元素索引

在查找列表元素索引时，可以传递索引范围，如果不存在则抛出错误，如果存在则返回对应索引值。

```python
l = ['hello', 'world', 100, 'hello']
print(l.index('hello', 1, 3))  # 抛出异常，原因是从范围 [1,3)处找不到 hello 元素。 ValueError: 'hello' is not in list
print(l.index('hello', 1, 4))
```

> 查找的范围为前闭后开。