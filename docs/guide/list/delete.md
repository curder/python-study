# 删除列表对象

使用 `del` 关键字删除存在的列表。

```python
l = [1, 2, 3, 1, 2, 3]

del l
print(l)  # NameError: name 'l' is not defined
```

> 如果被删除的列表没有定义也将抛出 `NameError` 错误。


## 删除列表中某个元素

通过列表的索引获取到对应值，再通过 `del` 关键字将其删除。

```python
l = [1, 2, 3, 4]
del l[2]
print(l)  # [1, 2, 4]
```