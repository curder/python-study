# 函数参数传递

- 行参：一些函数在定义时可能需要传递参数，这些参数成为形参；

- 实参：函数在调用时传递的参数成为实参。

```python
# 形参：a b
def calc(a, b):
    result = a + b
    return result


# 实参：10 20
print(calc(10, 20))  # 30
print(calc(b=10, a=20))  # 30
```

> 如果函数有多个形参，调用函数时可以通过传递关键字参数的方式改变行参的默认位置。


在函数的调用过程中，进行参数传递时：

1. 不可变对象 `int，string，float，tuple` ，**函数体的修改不会影响实参的值，按值传递**；
2. 可变对象 `list, dict`，**函数体的修改会影响实参的值，按引用传递**。

```python
def test(arg1, arg2):
    arg1 = 100
    arg2.append(10)


a = 10
b = [1, 2, 3]

print(a, b)  # 10 [1, 2, 3]
test(arg1=a, arg2=b)
print(a, b)  # 10 [1, 2, 3, 10]
```