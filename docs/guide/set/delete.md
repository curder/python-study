# 删除集合对象

使用 `del` 关键字删除存在的集合。

```python
s = {1, 2, 3, 1, 2, 3}

del s
print(s)  # NameError: name 's' is not defined
```

> 如果被删除的集合没有定义也将抛出 `NameError` 错误。