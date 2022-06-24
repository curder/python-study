# 面向对象

## 类与对象

类是多个类似食物组成的群体的统称。能够帮助我们快速理解和判断事物的性质。

类：类别，分门别类，人类，鸟类，动物类，植物类...

### 数据类型

- 不同的数据类型属于不同的类
 
- 使用内置函数 `type` 可以查看数类型
  ```python
  print(type(100))  # <class 'int'>
  ```
  
## 面向对象特征

### 封装

将数据（类属性）和行为（类方法）封装到类对象中，在方法内部对属性进行操作，在类对象的外部调用方法。这样，调用类方法时无需考虑方法内部的具体实现细节，从而隔离了复杂度。

Python 中没有专门的修饰符用于属性的私有，如果该属性不希望在类对象外部被访问，前面使用两个下划线 "__"


### 继承

提高代码复用性。

- 如果一个类没有继承任何类，则默认继承自 `object` 类。
- 注意：在定义子类时，必须在其构造函数中调用父类的 `__init` 构造函数
- Python 中支持多继承
  ```python
  class A:
    pass

  class B(object):
      pass

  class C(A, B):
      pass

  # 类 C 分别继承自 类 A 和类 B
  ```

- 方法重写
  - 如果子类对继承自父类的某个属性或方法不满足需求，可以在子类中对齐方法体进行重写
  - 子类重写后的方法中可以通过 `super().method()` 调用父类中被重写的方法

```python
class Person:  # 默认继承自object
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def info(self):
        print(self.name, self.age)


class Student(Person):  # 继承自 Person
    def __init__(self, name, age, number):
        super().__init__(name, age)
        self.number = number
    def info(self):  # 重写父类方法
      super().info()  # 调用父类方法
      print(self.number)


class Teacher(Person):  # 继承自 Person
    def __init__(self, name, age, year):
        super().__init__(name, age)
        self.year = year
    def info(self):  # 重写父类方法
      super().info()  # 调用父类方法
      print(self.year)

stu = Student('ZhangSan', 20, 10000023)
teacher = Teacher('Lisi', 40, 4)

print(stu.info(), teacher.info())
```

### 多态

提高程序的可扩展和可维护性。


简单的说，多态就是"具有多种形态"，它指的是：即便不知道一个变量所引用的对象到底是什么类型，仍然可以通过这个变量调用方法，在运行过程中根据变量所引用对象的类型，动态决定调用哪个对象的方法。


```python
class Animal(object):
    def eat(self):
        return '动物会吃东西'

class Dog(Animal):
    def eat(self):
        return '小狗吃骨头'

class Cat(Animal):
    def eat(self):
        return '小猫吃鱼'

class Person(object):
    def eat(self):
        return '人类吃五谷'


def fun(o):
    print(o.eat())  # 调用对象的 eat 方法

fun(Cat())  # 小猫吃鱼
fun(Dog())  # 小狗吃骨头
fun(Animal())  # 动物会吃东西
fun(Person())  # 人类吃五谷
```