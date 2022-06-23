# 对象的创建

对象的创建又被称为类的实例化。语法是：`实例名 = 类名()`

```python
stu = Student(name="curder")

print(stu.name)  # 访问对象属性  curder
stu.eating()  # 访问实例方法  I am Eating...
stu.running()  # 访问类的静态方法  I am Running...
stu.crying()  # 访问类方法  I am Crying...
```