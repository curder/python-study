# 查询元组

## 获取元组元素 {#find-one-item-from-tuple}
通过索引方式获取元组中的元素。

```python
d = (1, 2, "hello", True)

print(d[2])  # hello
```

> **注意：** 通过如果提供的索引超出元组的范围，会抛出 `IndexError` 错误。

```python
d = (1, 2, "hello", True)

print(d[5])  # IndexError: tuple index out of range
```

## 遍历元组 {#for-in-tuple-items}

元组是可以迭代对象，可以使用 `for-in` 进行遍历。

```python
d = (1, 2, "hello", True)

for item in d:
    print(item, end=" ")  # 1 2 hello True
```