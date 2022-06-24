# 对象方法

## 动态绑定方法

直接通过给类赋值的方式可以给对象动态绑定方法。

```python {10}
class Student:
    pass

stu1 = Student()  # 对象实例化

# 定义函数
def eating():
    return 'I am Eating...'

stu1.eating = eating  # 给对象动态添加方法

print(stu1.eating())
```


## 特殊方法

### __len__()

通过重写 __len__() 方法，让内置函数 `len()` 的参数可以自定义类型。

```python
class Obj:
    def __init__(self, name):
        self.name = name

    def __len__(self):
        return len(self.name)

obj1 = Obj("curder")

print(len(obj1))  # 由于重写了 __len__ 方法，可以直接调用函数 len() 获取长度
```

### __add__()

通过重写 __add__() 方法，可使用自定义对象具有 "+" 功能。

```python {5-6}
class Obj:
    def __init__(self, name):
        self.name = name

    def __add__(self, other):
        return self.name + ' ' + other.name


obj1 = Obj('ZhanSan')
obj2 = Obj('LiSi')

print(obj1 + obj2)  # ZhanSan LiSi
```


### __new__()

用于创建对象

### __init__()

对创建的对象进行初始化