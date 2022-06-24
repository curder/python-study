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