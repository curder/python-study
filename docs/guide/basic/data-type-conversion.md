# 数据类型转换

在 Python 中，数据类型转换是将一种数据类型的值转换为另一种数据类型的过程。

Python 提供了多种内置函数来进行类型转换。

以下是常见的数据类型转换方法和示例：

- **整数转换**：`int()`
- **浮点数转换**：`float()`
- **字符串转换**：`str()`
- **列表转换**：`list()`
- **元组转换**：`tuple()`
- **字典转换**：`dict()`
- **集合转换**：`set()`

## 常见的类型转换

### 整数转换 `int()`
将其他数据类型转换为整数。


```python
# 从浮点数转换为整数
num = int(3.14)  # 结果是 3

# 从字符串转换为整数
num = int("42")  # 结果是 42

# 字符串必须是数字格式，否则会引发 ValueError
# num = int("42abc")  # 错误
```

### 浮点数转换 `float()`

将其他数据类型转换为浮点数。

```python
# 从整数转换为浮点数
num = float(10)  # 结果是 10.0

# 从字符串转换为浮点数
num = float("3.14")  # 结果是 3.14

# 字符串必须是数字格式，否则会引发 ValueError
# num = float("abc")  # 错误
```

### 字符串转换 `str()`

将其他数据类型转换为字符串。

```python
# 从整数转换为字符串
text = str(123)  # 结果是 "123"

# 从浮点数转换为字符串
text = str(3.14)  # 结果是 "3.14"

# 从布尔值转换为字符串
text = str(True)  # 结果是 "True"
```

### 列表转换 `list()`

将其他可迭代对象转换为列表。


```python
# 从元组转换为列表
tup = (1, 2, 3)
lst = list(tup)  # 结果是 [1, 2, 3]

# 从字符串转换为列表
text = "hello"
lst = list(text)  # 结果是 ['h', 'e', 'l', 'l', 'o']
```

### 元组转换 `tuple()`

将其他可迭代对象转换为元组。


```python
# 从列表转换为元组
lst = [1, 2, 3]
tup = tuple(lst)  # 结果是 (1, 2, 3)

# 从字符串转换为元组
text = "abc"
tup = tuple(text)  # 结果是 ('a', 'b', 'c')
```

### 字典转换 `dict()`

将键值对序列转换为字典。


```python
# 从列表的键值对序列转换为字典
pairs = [("name", "Alice"), ("age", 25)]
dct = dict(pairs)  # 结果是 {'name': 'Alice', 'age': 25}

# 从两个列表转换为字典
keys = ["name", "age"]
values = ["Alice", 25]
dct = dict(zip(keys, values))  # 结果是 {'name': 'Alice', 'age': 25}
```

### 集合转换 `set()`

将其他可迭代对象转换为集合。

```python
# 从列表转换为集合
lst = [1, 2, 2, 3]
st = set(lst)  # 结果是 {1, 2, 3}

# 从字符串转换为集合
text = "hello"
st = set(text)  # 结果是 {'h', 'e', 'l', 'o'}
```

## 进阶示例

### 从字符串到数字的转换

```python
str_num = "123"
int_num = int(str_num)  # 结果是 123
float_num = float(str_num)  # 结果是 123.0
```

### 处理异常

在尝试将不可转换的数据类型转换为另一种类型时，通常会引发 `ValueError` 异常。

可以使用 `try...except` 语句来处理这些异常：

```python
try:
    value = int("abc")
except ValueError:
    print("无法转换字符串为整数")
```