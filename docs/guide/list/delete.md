# 删除列表对象

使用 `del` 关键字删除存在的列表。

```python
l = [1, 2, 3, 1, 2, 3]

del l
print(l)  # NameError: name 'l' is not defined
```

> 如果被删除的列表没有定义也将抛出 `NameError` 错误。