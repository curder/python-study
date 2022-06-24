# 类

## 类属性

类中方法外的变量称为类属性，被该类的所有对象所共享。

```python
Student.name # 访问类属性
```


## 类方法

使用 `@classmethod` 修饰的方法，使用类名直接访问的方法。

```python
Student.callClassMethod()  # 调用类方法
```

## 类的静态方法

使用 `@staticmethod` 修饰的方法，使用类名直接方法的方法。

```python
Student.callStaticMethod()  # 调用类静态方法
```


## object 类

- object 类是多有类的父类，因此所有类都有 object 类的属性和方法
- 内置函数 `dir()` 可以查看指定对象的所有属性
- object 类有一个 `__str()` 方法，用于返回一个对于 "对象的描述"，对应于内置函数 `str()` 经常用于 `print()` 方法时候的输出格式化

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __str__(self):
        return 'I am {0}, and my age is {1}'.format(self.name, self.age)

stu = Student("Curder", 18)

print(stu)  # I am Curder, and my age is 18
```