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

## 创建空字典 {#create-empty-dict}

- 使用花括号
    ```python
    d = {}

    print(type(d))  # <class 'dict'>
    print(d)  # {}
    ```

- 使用内置函数 `dict`
    ```python
    d = dict()

    print(type(d))  # <class 'dict'>
    print(d)  # {}
    ```


## 字典生成式 {#dict-comprehension}

当需要生成一定有规则的数据时，可以使用自定生成式生成字典。

它的语法格式为：`{ key: value for key, value in zipObject }`。

```python
items = ["Fruits", "Books", "Others"]
prices = [41, 54, 85]

d = {item: price for item, price in zip(items, prices)}
print(d)  # {'Fruits': 41, 'Books': 54, 'Others': 85}
```