# 动态绑定属性和方法

## 动态绑定属性

直接通过给类属性赋值的方式可以给对象动态绑定属性。

```python {6}
class Student:
    pass


stu1 = Student
stu1.age = 18

print(stu1.age)  # 18
```

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

print(stu1.eating())  #
```