# 创建字典

## 字典的创建

字典的创建有两种方式：

1. 使用花括号，键值对之间使用 `:` 冒号分割，元素之间使用 `,` 英文逗号分割
2. 使用内置函数 `dict()`

```python
# 1. 使用花括号创建字典
d = {
  "name": "curder",
  "hobby": "coding"
}
print(d)  # {'name': 'curder', 'hobby': 'coding'}

# 使用dirt函数创建字典
## 2.1 直接传参 
d = dict(name="curder", hobby="coding")
print(d)  # {'name': 'curder', 'hobby': 'coding'}

# 2.2 使用元组参数
d = dict((('name', 'curder'), ('hobby', 'coding')))
print(d)
```

⚠️**注意**：字典的键可以使用 `字符串 str`, `数字 int`，`浮点数 float` 或 `元组 tuple`。

```python
d = {
  "name": "curder",
  1: "curder",
  0.1: "curder",
  (1,2,3): "curder",
  [1,3,4]: 'curder'
}
print(d)  # {'name': 'curder', 1: 'curder', 0.1: 'curder', (1, 2, 3): 'curder'}
```

## 创建空字典

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


## 字典生成式

当需要生成一定有规则的数据时，可以使用自定生成式生成字典。

它的语法格式为：`{ key: value for key, value in zipObject }`。

```python
items = ["Fruits", "Books", "Others"]
prices = [41, 54, 85]

d = {item: price for item, price in zip(items, prices)}
print(d)  # {'Fruits': 41, 'Books': 54, 'Others': 85}
```