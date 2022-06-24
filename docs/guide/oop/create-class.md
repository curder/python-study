# 类的创建

类的组成：类属性、实例方法、静态方法、类方法。

## 创建语法

```python
class ClassName:
    # 这里编写类的结构体
    pass
```

例如：

```python
class Student:  # Student为类名，由一个或多个单词组成，要求每个单词的首字母大写，其余小写
    native_place = 'Beijing'

    def __init__(self, name):
        self.name = name  # self.name 称为实例属性，进行赋值操作，将局部变量的name的值赋值给实例属性

    # 实例方法
    def eating(self):
        print('I am Eating...')

    # 静态方法
    @staticmethod
    def crying():
        print('I am Crying...')

    # 类方法
    @classmethod
    def running(cls):
        print('I am Running...')
```