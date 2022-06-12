# 删除字典

使用 `del` 关键字删除存在的字典。

```python
d = {"name": "curder", "hobby": "coding"}

del d
print(d)  # NameError: name 'd' is not defined
```

> 如果被删除的字典没有定义也将抛出 `NameError` 错误。