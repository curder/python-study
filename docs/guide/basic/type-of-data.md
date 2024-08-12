# 数据类型

Python 中的数据类型是指变量可以存储的数据形式，Python 支持多种内置的数据类型，每种类型都有不同的用途和特性。

## 数字类型

### 整数 `int`

英文`integer`，简写为 `int`，可以表示正数，负数和零。

整数的不同进制表示方式：

- 十进制（默认进制）
- 二进制，使用 **`0b`** 开头
- 八进制，使用 **`0o`** 开头
- 十六进制，使用 **`0x`** 开头

| 进制   | 基本数                             | 逢几进一 | 表示形式      |
|------|---------------------------------|------|-----------|
| 十进制  | 0，1，2，3，4，5，6，7，8，9             | 10   | 118       |
| 二进制  | 0，1                             | 2    | 0b1110110 |
| 八进制  | 0，1，2，3，4，5，6，7                 | 8    | 0o166     |
| 十六进制 | 0，1，2，3，4，5，6，7，8，9，A，B，C，D，E，F | 16   | 0x76      |

```python
number = 95

print(bin(number))  # 二进制    0b1011111
print(oct(number))  # 八进制    0o137
print(hex(number))  # 十六进制  0x5f
```

### 浮点数 `float`

浮点数由整数部分和小数部分组成。

```python
f = 3.1415926
print(f, type(f))  # 3.1415926 <class 'float'>
```

使用浮点数进行计算时，可能会出现小数位数不确定的情况

```python
print(1.1 + 2.2)  # 3.3000000000000003
print(1.1 + 2.1)  # 3.2
```

解决方案是使用 `decimal` 模块。

```python
from decimal import Decimal

print(Decimal('1.1') + Decimal('2.2'))  # 3.3
print(Decimal('1.1') + Decimal('2.1'))  # 3.2
```


### 复数 `complex`

用于表示复数，形式为 `a + bj`，其中 `a` 和 `b` 是浮点数，`j` 是虚数单位。

```python
z = 1 + 2j
```
 

## 布尔值 `bool`

只有两个值：`True` 和 `False`。通常用于逻辑操作和条件判断。

```python
f1 = True
f2 = False

print(f1, type(f1))  # True <class 'bool'>
print(f2, type(f2))  # False <class 'bool'>
```

布尔值可以转化为整数，其中 `True` 可以转化为整数 `1`，`False` 可以转化为整数 `0`。

```python
print(True + 1)  # 2
print(False + 1)  # 1
```

### `bool()` 函数

`bool()` 函数允许评估任何值，并返回 `True` 或 `False`。

下面对象的`bool`值均为 `False`，它们分别是：布尔值False，整型0，浮点数0.0，None，空字符串，空列表，空元组，空字典，空集合。

```python
print(bool(False))  # 布尔值 False
print(bool(0))  # 整型 0
print(bool(0.0))  # 浮点数 0.0
print(bool(None))  # None
print(bool(''))  # 空字符串
print(bool(""))  # 空字符串
print(bool([]))  # 空列表
print(bool(list()))  # 空列表
print(bool(()))  # 空元组
print(bool(tuple()))  # 空元组
print(bool({}))  # 空字典
print(bool(dict()))  # 空字典
print(bool(set()))  # 空集合

```

## 字符串 `str`

字符串又被成为不可变的字符序列，可以使用单引号 `'` 、双引号 `"` 或三重引号 `'''` `"""` 括起来。

其中在单引号和双引号中定义的字符串必须在一行，三引号定义的字符串可以分布在多行。

```python
str1 = 'hello world'
str2 = "hello world"
str3 = '''hello 
world'''
str4 = """hello 
world"""

print(str1, type(str1))  # 输出：hello world <class 'str'>
print(str2, type(str2))  # 输出：hello world <class 'str'>
print(str3, type(str3))  # 输出：hello 
#      world <class 'str'>
print(str4, type(str4))  # 输出：hello 
#      world <class 'str'>
```

## 列表 `list`

有序的可变集合，可以包含任意类型的元素。

```python
numbers = [1, 2, 3, 4, 5]
mixed_list = [1, "hello", 3.14, [1, 2]]
```

## 元组 `tuple`

有序的不可变集合，类似于列表，但一旦创建就不能修改。

```python
point = (10, 20)
person = ("Alice", 30)
```

## 字典 `dict`

无序的键值对集合，每个键（key）与一个值（value）相关联。键必须是不可变类型。

```python
student = {"name": "Alice", "age": 25, "courses": ["Math", "Science"]}
```

## 集合 `set`

无序的唯一元素集合。集合中的元素是唯一的，不允许重复。

```python
unique_numbers = {1, 2, 3, 4, 5}
```

## 空值 `None`

用于表示空值或无值。常用作函数的默认返回值。

```python
result = None
```

## 二进制数据类型

- **字节串（`bytes`）**: 不可变的字节序列。

  ```python
  byte_data = b"Hello"
  ```

- **字节数组（`bytearray`）**: 可变的字节序列。

  ```python
  byte_array = bytearray([65, 66, 67])
  ```
