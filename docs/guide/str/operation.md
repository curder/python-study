# 字符串常用操作

## 字符串的查询操作

字符串查询操作有：`find()`、`reindex()`、`find()` 和 `rfind()`。

| 方法名         | 作用                                                          |
|-------------|-------------------------------------------------------------|
| `index()`   | 查找子字符串 `substr` 第一次出现的位置，如果查找的子字符串不存在时，则抛出 `ValueError` 异常  |
| `reindex()` | 查找子字符串 `substr` 最后一次出现的位置，如果查找的子字符串不存在时，则抛出 `ValueError` 异常 |
| `find()`    | 查找子字符串 `substr` 第一次出现的位置，如果查找的子字符串不存在时，则返回 `-1`             |
| `rfind()`   | 查找子字符串 `substr` 最后一次出现的位置，如果查找的子字符串不存在时，则返回 `-1`            |

### 子字符串串存在的情况 {#sub-str-does-exists}

```python
s = "hello world, hello python"

print(s.index('lo'))  # 3
print(s.find('lo'))  # 3

print(s.rindex('lo'))  # 16
print(s.rfind('lo'))  # 16
```

### 子字符串不存在的情况 {#sub-str-does-not-exists}

```python
s = "hello world, hello python"

print(s.index('ls'))  # ValueError: substring not found
print(s.find('ls'))  # -1

print(s.rindex('ls'))  # ValueError: substring not found
print(s.rfind('ls'))  # -1
```

## 字符串大小写转换

| 方法名 | 作用 |
|--|-----|
| `upper()`  | 把字符串中所有字符都转换成大写字符 |
| `lower()` | 把字符串中所有字符都转换成小写字符 |
| `swapcase()` | 把字符串中所有大写字符转换成小写字符，所有小写字符转换成大写字符 |
| `capitalize()` | 把第一个字符转换成大写字符，把其余字符转换成小写字符 |
| `title()` | 把每个单词的第一个字符转换为大写字符，把每个单词的剩余字符转成小写字符 |

```python
s = "hello world"
print(s.upper())  # HELLO WORLD

s = "Hello World"
print(s.lower())  # hello world

s = "Hello World"
print(s.swapcase())  # hELLO wORLD

s = "Hello World"
print(s.capitalize())  # Hello world

s = "hello world"
print(s.title())  # Hello World
```

## 字符串内容对齐 {#string-content-alignment}

| 方法名称 | 作用 |
|--|-----|
| [`center()`](https://docs.python.org/zh-cn/3/library/stdtypes.html?highlight=center#str.center) |
居中对齐，第1个参数指定宽度，第2个参数指定填充符，其中第2个参数是可选的，默认是空格，如果设置宽度小于实际宽度则返回原字符串 |
| [`ljust()`](https://docs.python.org/zh-cn/3/library/stdtypes.html?highlight=center#str.ljust)  |
居左对齐，第1个参数指定宽度，第2个参数指定填充符，其中第2个参数是可选的，默认是空格，如果设置宽度小于实际宽度则返回原字符串 |
| [`rjust()`](https://docs.python.org/zh-cn/3/library/stdtypes.html?highlight=center#str.rjust)  |
居右对齐，第1个参数指定宽度，第2个参数指定填充符，其中第2个参数是可选的，默认是空格，如果设置宽度小于实际宽度则返回原字符串 |
| [`zfill()`](https://docs.python.org/zh-cn/3/library/stdtypes.html?highlight=center#str.zfill)  | 居右对齐，左边用 0
填充，该方法只接收一个参数，用于指定字符串的宽度，如果指定的宽度小于字符串长度，则返回字符串本身 |

```python
s = "hello world"
print(s.center(20, '*'))  # ****hello world*****
print(s.center(10))  # hello world

print(s.ljust(20, '*'))  # hello world*********
print(s.ljust(10))  # hello world

print(s.rjust(20, '*'))  # *********hello world
print(s.rjust(10))  # hello world

print(s.zfill(20))  # 000000000hello world
print(s.zfill(10))  # hello world

print('-1234'.zfill(10))  # -000001234
```

## 字符串分割操作 {#split-string-operation}

| 方法名称 | 作用 |
|--|-----|
| `split()` | 从字符串的**左边**开始分割，默认分割符是空格，返回的值为列表。可选参数：<br />1. 通过 `spe` 参数修改分割符<br /> 2. 通过参数 `maxsplit`
指定分割符最大分割次数，余下未分割的字符串会左右列表的一部分 |
| `rsplit()` | 从字符串的** 右边**开始分割，默认分割符是空格，返回的值为列表。可选参数：<br />1. 通过 `spe` 参数修改分割符<br /> 2. 通过参数 `maxsplit`
指定分割符最大分割次数，余下未分割的字符串会左右列表的一部分 |

### split {#split}

```python
# 默认分割符为空格
s = "hello world"
print(s.split())  # ['hello', 'world']

# 指定分割符
s = 'hello,world,hi,python'
print(s.split(sep=","))  # ['hello', 'world', 'hi', 'python']

# 指定最大分割次数
s = 'hello,world,hi,python'
print(s.split(sep=",", maxsplit=2))  # ['hello', 'world', 'hi,python']
```

### rsplit {#rsplit}

```python
# 默认分割符为空格
s = "hello world"
print(s.rsplit())  # ['hello', 'world']

# 指定分割符
s = 'hello,world,hi,python'
print(s.rsplit(sep=","))  # ['hello', 'world', 'hi', 'python']

# 指定最大分割次数
s = 'hello,world,hi,python'

print(s.rsplit(sep=",", maxsplit=2))  # ['hello,world', 'hi', 'python']
```

## 判断字符串操作

| 方法名称                                                                                       | 作用                                    |
|--------------------------------------------------------------------------------------------|---------------------------------------|
| [`isidentifier()`](https://docs.python.org/zh-cn/3/library/stdtypes.html#str.isidentifier) | 判断指定的字符串是否为合法的标识符                     |
| [`isspace()`](https://docs.python.org/zh-cn/3/library/stdtypes.html#str.isspace)           | 判断指定的字符串是否全部由空白字符串组成（包含：回车、换行、水平制表符等） |
| `isalpha()`                                                                                | 判断指定的字符串是否全部由字母组成                     |
| `isdecimal()`                                                                              | 判断指定的字符串是否全部由十进制数字组成                  |
| `isnumeric()`                                                                              | 判断指定的字符串是否全部由数字组成                     |
| `isalnum()`                                                                                | 判断指定字符串是否全部由数字和字母组成                   |

### isidentifier {#isidentifier}

如果字符串是有效的标识符，返回 `True`。

```python
print('hello, world'.isidentifier())  # False
print('123'.isidentifier())  # False
print(' '.isidentifier())  # False
print(' '.isidentifier())  # False
print(''.isidentifier())  # False
```

### isspace {#isspace}

如果字符串中只有空白字符且至少有一个字符则返回 `True` ，否则返回 `False` 。

```python
print('\t'.isspace())  # True
print(' '.isspace())  # True
print(''.isspace())  # False
```