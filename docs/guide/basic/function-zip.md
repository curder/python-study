# zip 函数

内置函数 `zip` 用于将可叠戴的对象作为参数，将对象中对应的元素打包橙一个元组，然后返回由这些元组组成的列表。

```python
items = ["Fruits", "Books", "Others"]
prices = [41, 54, 85]

z = zip(items, prices)

# 生成列表
print(dict(z))  # [('Fruits', 41), ('Books', 54), ('Others', 85)]

# 生成字典
print(dict(z))  # {'Fruits': 41, 'Books': 54, 'Others': 85}
```
