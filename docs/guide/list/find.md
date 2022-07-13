# 列表查询操作

## 获取列表元素索引

如果列表中存在相同元素，index仅返回列表中相同元素的第一个元素索引

```python
l = ['hello', 'world', 100, 'hello']
print(l.index('hello'))
```

### 查找的元素不存在

如果查找的列表元素不存在于列表中，则会抛出异常 `ValueError` 。

```python
l = ['hello', 'world', 100, 'hello']
print(l.index('item'))  # 抛出异常 ValueError: 'item' is not in list
```

### 通过范围查找元素索引

在查找列表元素索引时，可以传递索引范围，如果不存在则抛出错误 `ValueError` ，如果存在则返回对应索引值。

```python
l = ['hello', 'world', 100, 'hello']
print(l.index('hello', 1, 3))  # 抛出异常，原因是从范围 [1,3)处找不到 hello 元素。 ValueError: 'hello' is not in list
print(l.index('hello', 1, 4))
```

> 查找的范围为前闭后开。

## 获取列表单个元素

可以通过元素正向或逆向索引获取列表中元素。

- 正向索引从 `0` 到 `N - 1`，`N` 为列表元素个数。例如：`list[2]`；

- 逆向索引从 `-N` 到 `-1`。例如：`list[-N]`；

- 当指定的索引不存在时，会抛出 `IndexError` 错误。

```python
l = ['hello', 'world', 100, 'hello']

# 获取索引为 2 的元素
print(l[2])  # 100

# 获取索引为 -3 的元素
print(l[-3])  # world

# 获取索引为 10 的元素
print(l[10])  # 抛出错误： IndexError
```

## 获取列表多个元素

如果想一次获取列表中的多个元素，可以使用切片操作。例如：`list[start:stop:step]`，其中 `step`的值默认为 `1`。

- 切片的结果：原列表片段的**拷贝**
- 切片的范围：左闭右开的区间，即：`[start:stop)`，包含 `start`，不包含 `stop`。
- `step`参数：
    - 当 `step` 为正数时，从`start`开始往后计算切片。
        - `[:stop:step]` 获取切片中的新元素中第一个元素默认是列表的第一个元素。
        - `[start::step]` 获取切片中的新元素中最后一个元素默认是列表的第一个元素。
    - 当 `step` 为负数时，从 `start`开始往前计算切片。
        - `[:stop:step]` 获取切片中的新元素中第一个元素默认是列表的最后一个元素。
        - `[start::step]` 获取切片中的新元素中最后一个元素默认是列表的第一个元素。

```python
l = [1, 2, 3, 4, 5, 6, 7, 8]

# start=1,stop=6,step=1
print(l[1:6:1])  # 切片返回的结果为：[2, 3, 4, 5, 6]

# start=1,stop=6
print(l[1:6])  # step不提供默认为1，所以切片返回的结果为：[2, 3, 4, 5, 6]

# start=1,stop=6,step=2
print(l[1:6:2])  # 切片返回的结果为：[2, 4, 6]

# stop=6,step=2 [start不提供默认为0]
print(l[:6:2])  # 切片返回的结果为：[1, 3, 5]

# start=1,step=2 [stop不提供的话，默认值为列表的长度]
print(l[1::2])  # 切片返回的结果为：[2, 4, 6, 8]

# step=-1 反转列表元素
print(l[::-1])  # [8, 7, 6, 5, 4, 3, 2, 1]

# start=7,step=-1
print(l[7::-1])  # [8, 7, 6, 5, 4, 3, 2, 1]

# start=6,stop=0,step=-1
print(l[6:0:-2])  # [7, 5, 3]
```

## 列表元素查询操作

列表元素的查询操作是判断指定元素在列表中是否存在，使用 `in` 或 `not in`。

```python
l = [1, 2, 'hello', 'world', True]

print(1 in l)  # True
print(8 in l)  # False
print(False not in l)  # True
```

`in` 或 `not in` 判断元素是否存在于列表中，返回对应的布尔值。

## for-in遍历列表元素

```python
l = [1, 2, 'hello', 'world', True]

for item in l:
    print(item, end=" ")  # 1 2 hello world True 
```