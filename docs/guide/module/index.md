# 模块

模块英文为 `Modules`，一个模块中可以包含N个函数、N个类、N个语句。

```python
def fun():
    pass


def fun2():
    pass


class Person:
    name = 'Beijing'
```

在 Python 中一个扩展名为 `.py` 的文件就是一个模块。

使用模块的好处：

- 方便其他程序和脚本的导入并使用
- 避免函数名和变量名冲突
- 提高代码的可维护性
- 提高代码的可重写性

## 自定义模块

新建 `.py` 文件后缀的文件，名称尽量不要与 Python 自带的标准模块名称相同。


## 模块导入

使用 `import` 关键字可以导入模块，而使用 `from` 关键字可以导出模块指定的方法、变量或类。

```text
import module_name [as alias_name]

from module_name import function/variable/class
``` 

> **注意：** 
> 1. 使用 `import` 方式进行导入时，只能在后面的参数跟包名/模块名。
> 2. 使用 `from` 方式进行导入时，`import` 可以导入模块、方法、变量或类。

- 使用`import`语句导入
```python
import math

print(math.pi)  # 3.141592653589793
print(math.pow(2, 3))  # 8.0
```

- 使用 `from`  导入模块中指定的函数、变量或类
```python
from math import pi, pow # 同时导入math模块的pi和pow函数

print(pi, pow(2, 3))  # 3.141592653589793 8.0
```

## 常用模块

| 模块名        | 描述                             |
|------------|--------------------------------|
| `sys`      | 与 Python 解释器及其环境操作相关的标准库       |
| `time`     | 提供与时间相关的各种两数的标准库               |
| `os`       | 提供了访问操作系统服务功能的标准库              |
| `calendar` | 提供与日期相关的各种函数的标准库               |
| `urllib`   | 用于读取来自网上（服务器）的数据标准库            |
| `json`     | 用于使用JSON序列化和反序列化对象             |
| `re`       | 用于在字符串中执行正则表达式匹配和替换            |
| `math`     | 提供标准算术运算函数的标准库                 |
| `decimal`  | 用于进行精确控制运算精度、有效数位和四舍五入操作的十进制运算 |
| `logging`  | 提供了灵活的记录事件、错误、警告和调试信息等目志信息的功能  |

### `sys` 模块

```python
import sys

# 计算对象占用字节数
print(sys.getsizeof(1), sys.getsizeof(True), sys.getsizeof(False))  # 28 28 24
```

### `time` 模块

```python
import time

print(
    time.time(),  # 当前时间戳
    time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())  # 格式化时间戳
)  # 1656299802.897496 2022-06-27 11:16:42
```

### `os` 模块


### `calendar` 模块

```python
import calendar

print(calendar.month(2022, 6))  # 输出2022-6的日历

'''
     June 2022
Mo Tu We Th Fr Sa Su
       1  2  3  4  5
 6  7  8  9 10 11 12
13 14 15 16 17 18 19
20 21 22 23 24 25 26
27 28 29 30
'''
```

### `urllib` 模块

```python
from urllib import request

print(
    request.urlopen('https://www.baidu.com').read() # 抓取指定地址的内容
)
```

### `json` 模块


### `re` 模块


### `math` 模块

```python
from math import pi, ceil, floor

print(pi, ceil(10.22), floor(10.22))  # 3.141592653589793 11 10
```

### `decimal` 模块


### `logging` 模块