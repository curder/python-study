# 编辑集合

## 增加集合元素

### `add` 方法添加一个元素

```python
s = {1, 2, 3, 4, 5}

s.add(6)
print(s)  # {1, 2, 3, 4, 5, 6}
```

### `update` 方法至少添加一个元素

```python
s = {1, 2, 3, 4, 5}

s.update({6, 7})  # 添加集合
print(s)  # {1, 2, 3, 4, 5, 6, 7}

s.update([8, 9])  # 添加列表
print(s)  # {1, 2, 3, 4, 5, 6, 7, 8, 9}

s.update((10,))  # 添加元组
print(s)  # {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```

## 删除集合元素

| 方法 | 操作描述 |
|--|-----|
| `remove(item)` | 一次删除一个指定的元素，如果指定的元素不存在则抛出 `KeyError` 异常 |
| `discard(item)` | 一次删除一个指定元素，如果指定的元素不存在不会抛出异常 |
| `pop()` | 一次只删除一个任意元素 |
| `clear()` | 清空集合 |

### `remove()` 方法

```python
s = {1, 2, 3, 4, 5}

s.remove(1)
print(s)  # {2, 3, 4, 5}

s.remove(10)  # 删除不存在元素，抛出 KeyError 错误
print(s)  # KeyError: 10
```

### `discard()` 方法

```python
s = {1, 2, 3, 4, 5}

s.discard(1)
print(s)  # {2, 3, 4, 5}

s.discard(10)  # 删除不存在的元素，并不会抛出 KeyError 错误
print(s)  # {2, 3, 4, 5}
```

### `pop()` 方法

```python
s = {1, 2, 3, 4, 5}

s.pop()
print(s)  # {2, 3, 4, 5}
```

> 随机删除集合的元素。

### `clear()` 方法

```python
s = {1, 2, 3, 4, 5}

s.clear()
print(s)  # set()
```