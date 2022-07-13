# 编辑列表

## 增加列表元素

| 方法 | 操作描述 |
|----------|--|
| `append(object)` | 在列表末尾添加一个元素 |
| `extend(object)` | 在列表末尾至少添加一个元素 |
| `insert(index, object)` | 在列表的任意位置处添加一个元素 |
| slice 切片 | 在列表任意位置至少添加至少一个元素 |

### `append` 方法

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

### `extend` 方法

`extend` 方法会在原列表末尾处一次性添加多个元素。

```python {5 }
l = [1, 2]

l2 = ["hello", "world"]
l.extend(l2)
print(l)  # [1, 2, 'hello', 'world']
```

### `insert` 方法

`insert` 方法可以在列表指定索引处添加元素，第一个参数为需要添加的元素所在索引，第二个参数是待添加的元素。

```python
l = [1, 2]

l.insert(1, "hello")
print(l)  # [1, "hello", 2] 
```

### slice 切片

```python
l = [1, 2]
l2 = ["hello", "world"]

l[1:] = l2
print(l)  # [1, 'hello', 'world']
```

## 删除列表元素

| 方法/其他 | 操作描述 |
|----------|--|
| `remove(item)` | 一次删除一个元素<br />重复元素仅删除第一个<br />元素不存在时抛出 `ValueError` 异常 |
| `pop(index)` | 删除一个指定索引位置的元素<br />指定索引不存在时抛出IndexError异常<br />不指定索引则删除列表最后一个元素 |
| 切片操作 | 一次至少删除一个元素<br />会产生新的列表 |
| `clear()` | 清空列表元素 |

### `remote` 方法

- 一次删除一个元素
    ```python
    l = [1, 2, 3, 1, 2, 3]

    l.remove(1)
    print(l)  # [2, 3, 1, 2, 3]
    ```
  > 如果存在重复元素仅删除第一个元素

- 删除一个不存在的元素抛出 `ValueError` 错误
    ```python
    l = [1, 2, 3, 1, 2, 3]

    l.remove(10)  # ValueError: list.remove(x): x not in list
    ```

### `pop` 方法

- 删除指定索引位置的元素
    ```python
    l = [1, 2, 3, 1, 2, 3]

    print(l.pop(1))  # 2
    print(l)  # [1, 3, 1, 2, 3]
    ```
  > 返回值为指定索引对应的操作。

- 删除不存在的索引抛出 IndexError 错误
    ```python
    l = [1, 2, 3, 1, 2, 3]

    l.pop(10)  # IndexError: pop index out of range
    ```

- 不指定索引参数，删除列表最后一个元素
    ```python
    l = [1, 2, 3, 1, 2, 3]

    print(l.pop())  # 3
    print(l)  # [1, 2, 3, 1, 2]
    ```

### 切片方式

1. 不改变原列表
2. 默认产生的新列表为切片对应的列表结果
3. 使用空列表赋值给切片后的结果，则会改变原列表

```python
l = [1, 2, 3, 1, 2, 3]

print(l)  # 1. [1, 2, 3, 1, 2, 3]
print(l[1:3])  # 2. [2, 3]

l[1:3] = []  # 3.
print(l)  # [1, 1, 2, 3]
```

### 清除列表中所有元素

```python
l = [1, 2, 3, 1, 2, 3]

l.clear()
print(l)  # []
```

## 修改列表元素

### 为指定索引的元素赋予一个新值

```python
l = [1, 2, 3, 4]

l[2] = 30  # 将索引为 2 的元素赋值为 30
print(l)  # [1, 2, 30, 4]
```

> 使用索引修改元素一次仅修改一个值

### 为指定的切片赋予新列表值

```python
l = [1, 2, 3, 4]

l[1:] = [20, 30, 40, 50, 60]
print(l)  # [1, 20, 30, 40, 50, 60]
```
