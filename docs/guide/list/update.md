# 编辑列表 {#update-list}

## 增加列表元素 {#add-list-item}

| 方法 | 操作描述 |
|----------|--|
| `append(object)` | 在列表末尾添加一个元素 |
| `extend(object)` | 在列表末尾至少添加一个元素 |
| `insert(index, object)` | 在列表的任意位置处添加一个元素 |
| slice 切片 | 在列表任意位置至少添加至少一个元素 |


### `append` 方法 {#append-method}

```python {3}
l = [1, 2]

l.append("hello")
print(l)  # [1, 2, 'hello']
```

> **注意：** 增加列表元素操作前后列表的标识没有改变

```python {8}
l = [1, 2]

l.append("hello")
print(l)  # [1, 2, 'hello']

l2 = ["hello", "world"]
l.append(l2)
print(l)  # [1, 2, 'hello', ['hello', 'world']]
```

以上操作 `l2` 将作为一个元素添加到 `l` 列表中。

### `extend` 方法 {#extend-method}

`extend` 方法会在原列表末尾处一次性添加多个元素。

```python {5 }
l = [1, 2]

l2 = ["hello", "world"]
l.extend(l2)
print(l)  # [1, 2, 'hello', 'world']
```

### `insert` 方法 {#insert-method}

`insert` 方法可以在列表指定索引处添加元素，第一个参数为需要添加的元素所在索引，第二个参数是待添加的元素。

```python
l = [1, 2]

l.insert(1, "hello")
print(l)  # [1, "hello", 2] 
```

### slice 切片 {#add-items-using-slice}

```python
l = [1, 2]
l2 = ["hello", "world"]

l[1:] = l2
print(l)  # [1, 'hello', 'world']
```