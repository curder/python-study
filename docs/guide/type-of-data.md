# 数据类型 {#top}

- [字符串 str](#str)
- [整数 int](#int)
- [浮点数 float](#float)
- [布尔类型 bool](#bool)

## 字符串 {#str}

字符串又被成为不可变的字符序列，可以使用单引号 `'` 、双引号 `"` 或三个引号 `'''` `"""` 来定义。

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

## 整型 {#int}

英文integer，简写为int，可以表示正数，负数和零。

整数的不同进制表示方式：

- 十进制（默认进制）
- 二进制，使用 **`0b`** 开头
- 八进制，使用 **`0o`** 开头
- 十六进制，使用 **`0x`** 开头

| 进制 | 基本数 | 逢几进一 | 表示形式 |
|--|---------------------|------|-----------|
| 十进制 | 0，1，2，3，4，5，6，7，8，9 | 10 | 118 |
| 二进制 | 0，1 | 2 | 0b1110110 |
| 八进制 | 0，1，2，3，4，5，6，7 | 8 | 0o166 |
| 十六进制 | 0，1，2，3，4，5，6，7，8，9，A，B，C，D，E，F | 16 | 0x76 |

## 浮点数 {#float}

浮点数由整数部分和小数部分组成。

```python
f = 3.1415926
print(f, type(f))  # 3.1415926 <class 'float'>
```

### 浮点数的存储不精确

使用浮点数进行计算时，可能会出现小数位数不确定的情况

```python
print(1.1 + 2.2)  # 3.3000000000000003
print(1.1 + 2.1)  # 3.2
```

解决方案：导入 decimal 模块

```python
from decimal import Decimal

print(Decimal('1.1') + Decimal('2.2'))  # 3.3
print(Decimal('1.1') + Decimal('2.1'))  # 3.2
```

## 布尔值 {#bool}

布尔值用于表达真/假的值，`True` 表示真， `False` 表示假。

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

### bool 函数 {#bool-function}

`bool()` 函数允许评估任何值，并返回 `True` 或 `False`。

下面对象的`bool`值均为 `False`，它们分别是：布尔值False，整型0，浮点数0.0，None，空字符串，空列表，空元祖，空字典，空集合。

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
print(bool(tuple()))  # 空元祖
print(bool({}))  # 空字典
print(bool(dict()))  # 空字典
print(bool(set()))  # 空集合

```
