# 数据类型转换

## 为什么需要数据类型转换

目的：将不同的数据类型的数据拼接在一起。

```python
name = "lucy"
age = 18

print(type(name), type(age))  # <class 'str'> <class 'int'>
print('I am ' + name + ' and my age is' + age)  # 抛出错误，可以通过数据类型转换后再拼接
```

## 数据类型转换函数

| 函数名       | 作用            | 注意事项                                          | 举例                                                    |
|-----------|---------------|-----------------------------------------------|-------------------------------------------------------|
| `str()`   | 将其他数据类型转换为字符串 | 也可以通过添加单/双引号转换                                | `str(123) # 得到 '123'` <br />  `'123' # 得到 '123'`      | 
| `int()`   | 将其他数据类型转换成整型  | 非数字的字符串类型和小数类型字符串无法转换为整数;<br /> 浮点数转化为整型会抹零取整 | `int('123')  # 得到 123` <br /> `int(9.8)  # 得到 9`      |
| `float()` | 将其他数据类型转换为浮点数 | 非数字的字符串类型无法转换为浮点数 <br /> 整型转换为浮点数，末尾会添加 `.0`  | `float('9.9')  # 得到 9.9` <br /> `float(9)  # 得到 9.0 ` |

### str 函数

将其他数据类型转换为字符串：

```python
i = 10
f = 100.23
b = False

print(i, f, b, type(i), type(f), type(b))  # 10 100.23 False <class 'int'> <class 'float'> <class 'bool'>
print(str(i), str(f), str(b), type(str(i)), type(str(f)),
      type(str(i)))  # 10 100.23 False <class 'str'> <class 'str'> <class 'str'>
```

### int 函数

将其他数据类型转换成整型：

```python
s1 = "123"
s2 = "12.3"
s3 = "hello"

print(type(s1), type(s2), type(s3))  # <class 'str'> <class 'str'> <class 'str'>
print(int(s1), type(int(s1)))  # 123 <class 'int'>

print(int(s2), type(int(s2)))  # throw exception
print(int(s3), type(int(s3)))  # throw exception

f = 12.3
b = True
print(type(f), type(b))  # <class 'float'> <class 'bool'>
print(int(f), type(int(f)))  # 12 <class 'int'>
print(int(b), type(int(b)))  # 1 <class 'int'>
```

> 字符串中的数字串部分允许转换成整型，其他类型比如浮点型或者字符串都不允许转换成整型。
 
### float 函数

将其他数据类型转换为浮点数：

```python
s1 = "123"
s2 = "12.3"
s3 = "hello"

print(type(s1), type(s2), type(s3))  # <class 'str'> <class 'str'> <class 'str'>
print(float(s1), type(float(s1)))  # 123.0 <class 'float'>
print(float(s2), type(float(s2)))  # 12.3 <class 'float'>

print(float(s3), type(float(s3)))  # throw exception

f = 12
b = True
print(type(f), type(b))  # <class 'int'> <class 'bool'>
print(float(f), type(float(f)))  # 12.0 <class 'float'>
print(float(b), type(float(b)))  # 1.0 <class 'float'>
```