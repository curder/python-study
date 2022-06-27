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


