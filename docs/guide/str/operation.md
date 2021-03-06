# 字符串常用操作

## 字符串的查询操作

字符串查询操作有：`find()`、`reindex()`、`find()` 和 `rfind()`。

| 方法名         | 作用                                                          |
|-------------|-------------------------------------------------------------|
| `index()`   | 查找子字符串 `substr` 第一次出现的位置，如果查找的子字符串不存在时，则抛出 `ValueError` 异常  |
| `reindex()` | 查找子字符串 `substr` 最后一次出现的位置，如果查找的子字符串不存在时，则抛出 `ValueError` 异常 |
| `find()`    | 查找子字符串 `substr` 第一次出现的位置，如果查找的子字符串不存在时，则返回 `-1`             |
| `rfind()`   | 查找子字符串 `substr` 最后一次出现的位置，如果查找的子字符串不存在时，则返回 `-1`            |

### 子字符串存在的情况

```python
s = "hello world, hello python"

print(s.index('lo'))  # 3
print(s.find('lo'))  # 3

print(s.rindex('lo'))  # 16
print(s.rfind('lo'))  # 16
```

### 子字符串不存在的情况

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

## 字符串内容对齐

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

## 字符串分割操作

| 方法名称 | 作用 |
|--|-----|
| `split()` | 从字符串的**左边**开始分割，默认分割符是空格，返回的值为列表。可选参数：<br />1. 通过 `spe` 参数修改分割符<br /> 2. 通过参数 `maxsplit`
指定分割符最大分割次数，余下未分割的字符串会左右列表的一部分 |
| `rsplit()` | 从字符串的** 右边**开始分割，默认分割符是空格，返回的值为列表。可选参数：<br />1. 通过 `spe` 参数修改分割符<br /> 2. 通过参数 `maxsplit`
指定分割符最大分割次数，余下未分割的字符串会左右列表的一部分 |

### split

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

### rsplit

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

## 去除字符串首位字符

使用 `strip()` 方法并且不传参数时可以去除字符串的首位空格。

```python
s = '  python '
print(s.strip())  # python
```

给 `strip()` 传递参数可以指定要去除的字符。

```python
s = '6666python:6666'
print(s.strip('6'))  # python:
```

## 判断字符串操作

| 方法名称                                                                                       | 作用                                    |
|--------------------------------------------------------------------------------------------|---------------------------------------|
| [`isidentifier()`](https://docs.python.org/zh-cn/3/library/stdtypes.html#str.isidentifier) | 判断指定的字符串是否为合法的标识符                     |
| [`isspace()`](https://docs.python.org/zh-cn/3/library/stdtypes.html#str.isspace)           | 判断指定的字符串是否全部由空白字符串组成（包含：回车、换行、水平制表符等） |
| [`isalpha()`](https://docs.python.org/zh-cn/3/library/stdtypes.html#str.isalpha)           | 判断指定的字符串是否全部由字母组成                     |
| [`isdecimal()`](https://docs.python.org/zh-cn/3/library/stdtypes.html#str.isdecimal)       | 判断指定的字符串是否全部由十进制数字组成                  |
| [`isnumeric()`](https://docs.python.org/zh-cn/3/library/stdtypes.html#str.isnumeric)       | 判断指定的字符串是否全部由数字组成                     |
| [`isalnum()`](https://docs.python.org/zh-cn/3/library/stdtypes.html#str.isalnum)           | 判断指定字符串是否全部由数字和字母组成                   |

### isidentifier

如果字符串是有效的标识符，返回 `True`。

```python
print('hello, world'.isidentifier())  # False
print('123'.isidentifier())  # False
print(' '.isidentifier())  # False
print(''.isidentifier())  # False
print('\t'.isidentifier())  # False
```

### isspace

如果字符串中只有空白字符且至少有一个字符则返回 `True` ，否则返回 `False` 。

```python
print('\t'.isspace())  # True
print(' '.isspace())  # True
print(''.isspace())  # False
```

### isalpha

如果字符串中的所有字符都是字母，并且至少有一个字符，返回 `True` ，否则返回 `False`。

```python
print('abc'.isalpha())  # True
print('张三1'.isalpha())  # False
print('123'.isalpha())  # False
```

### isdecimal

如果字符串中的所有字符都是十进制字符且该字符串至少有一个字符，则返回 `True` ， 否则返回 `False` 。

```python
print('123'.isdecimal())  # True
print('123四'.isdecimal())  # False
print('IIV'.isdecimal())  # False
```

### isnumeric

如果字符串中至少有一个字符且所有字符均为数值字符则返回 `True` ，否则返回 `False` 。

```python
print('123'.isnumeric())  # True
print('123四'.isnumeric())  # True
print('IIV'.isnumeric())  # False
```

### isalnum

如果字符串中的所有字符都是字母或数字且至少有一个字符，则返回 `True` ， 否则返回 `False` 。

```python
print('abc1'.isalnum())  # True
print('张三123'.isalnum())  # True
print('abc!'.isalnum())  # False
```

## 字符串替换操作

`str.replace(old, new[, count])` 返回字符串的副本，其中出现的所有子字符串 `old` 都将被替换为 `new`。如果给出了可选参数 `count`，则只替换前 `count` 次出现。

```python
s = 'hello, world'

print(s.replace('world', 'Python'))  # hello, Python
print(s.replace('l', '1', 2))  # he11o, world
```

## 字符串合并操作

返回一个由 `iterable` 中的字符串拼接而成的字符串，可以用于字符串、列表或元组。

```python
s = ['hello', 'world', '!']
print(' '.join(s))  # hello world !

t = ('hello', 'world', '!')
print(' '.join(t))  # hello world !

print('*'.join("Hello"))  # H*e*l*l*o
```

也可以使用 `+` 对字符串进行拼接

```python
str1 = 'hello'
str2 = 'world'

print(str1 + str2)  # hello world
```

## 判断字符串是否纯数字

通过对字符串调用其 `isdigit()` 方法可以判断给定的字符串是否是纯数字。

```python
print(str(1).isdigit())  # True
print('1a'.isdigit())  # False
```

## 统计字符出现次数

Python 中默认的 `count()` 方法统计字符串出现的次数时是不忽略大小写的方式进行的统计，找不到时返回 `0` 。比如：

```python
string = 'Hello World, Hello Python, Hello Golang, Hello php'
sub_str = 'p'
string.count(sub_str)  # 2
```

通过自定义编写函数，达到忽略大小写的统计字符串出现次数统计的目的。

```python
def get_count(string, sub_str):
    count = 0
    for s in string:
        if sub_str.upper() == s or sub_str.lower() == s:
            count += 1
    return count


string = 'Hello World, Hello Python, Hello Golang, Hello php'
sub_str = 'p'
print(f'{sub_str} 字符在字符串中出现的次数为：{get_count(string, sub_str)}')  # p 字符在字符串中出现的次数为：3
```

## 获取字符串长度

调用 Python 自带的函数 `len()` 可以获取字符串长度。

```python
print(len('Python'))  # 6
```

## 获取最大字符

使用 `max()` 函数获取字符串中的最大字符，比较的是字符的 ASCII 码值。

```python
print(max('hello你好啊'))  # 好
```

## 获取最小字符

使用 `min()` 函数获取字符串中的最小字符，比较的是字符的 ASCII 码值。

```python
print(min('hello你好啊'))  # e
```

## 字符串乘法操作

```python
s = 'hello'

print(s * 2)  # hellohello
```

## 字符串反转

```python
s = 'python'
print(s[::-1])  # nohtyp
```