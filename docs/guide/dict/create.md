# 创建字典 {#top}

## 字典的创建 {#create-dict}

字典的创建有两种方式：

1. 使用花括号，键值对之间使用 `:` 冒号分割，元素之间使用 `,` 英文逗号分割
2. 使用内置函数 `dict()`

```python
# 1. 使用花括号创建字典
d = {"name": "curder", "hobby": "coding"}
print(d)  # {'name': 'curder', 'hobby': 'coding'}

# 2. 使用dirt函数创建字典
d = dict(name="curder", hobby="coding")
print(d)  # {'name': 'curder', 'hobby': 'coding'}
```