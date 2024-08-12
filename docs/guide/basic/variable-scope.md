# 变量作用域

变量作用域指的是程序代码能访问对应变量的区域，根据变量的有效范围可以分为：局部变量和全局变量

## 局部作用域

在函数内部定义的变量，仅在函数内部可见。

```python
def fun(a, b):
    c = a + b
    print(c)
# 变量c为局部变量，因为c是在函数内部进行定义的变量，a、b为函数的形参，作用范围也是函数内部，相当于局部变量。

# 在函数体外无法访问 变量`a`、`b`、`c`
```
::: tip 提示
局部变量通过 `global` 声明可以转换成全局变量
:::

## 全局作用域

在模块或脚本的顶层定义的变量，在整个模块中可见

```python
name = 'curder'  # 全局变量
def fun2():
    print(name)

fun2()  # curder
```

## 内置作用域

Python 解释器内部定义的变量和函数，例如 `print()` 和 `len()`。

## 局部转全局作用域

将函数内的局部变量使用 `global` 关键字声明为全局变量。

```python
 def fun2():
    global name
    name = 'curder'
    print(name)


fun2()  # curder
print(name)  # curder
```