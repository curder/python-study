# 删除元组对象

使用 `del` 关键字删除存在的元组。

```python
t = (1, 2, 3, 4, 5)

del t
print(t)  # NameError: name 't' is not defined
```

> 如果被删除的元组没有定义也将抛出 `NameError` 错误。