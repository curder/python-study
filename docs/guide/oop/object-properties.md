# 对象属性

## 动态绑定属性

直接通过给类属性赋值的方式可以给对象动态绑定属性。

```python {6}
class Student:
    pass


stu1 = Student
stu1.age = 18

print(stu1.age)  # 18
```

## 特殊属性

### __dict__ 属性

`__dict__` 属性获得类对象或实例对象所绑定的素偶有属性和方法的字典。


```python
class A:
    pass


class B:
    pass


class C(A, B):

    def __init__(self, name):
        self.name = name

x = C('curder')

print(x.__dict__)  # 输出实例对象的所有属性 {'name': 'curder'}
```