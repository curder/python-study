<a name="variable-scope"></a>
# 变量作用域

变量作用域指的是程序代码能访问对应变量的区域，根据变量的有效范围可以分为：局部变量和全局变量

- 局部变量

    在函数内定义并使用的变量，只在函数内部有效。**局部变量通过 `global` 声明可以转换成全局变量**
    ```python
    def fun(a, b):
        c = a + b
        print(c)
    # 变量c为局部变量，因为c是在函数内部进行定义的变量，a、b为函数的形参，作用范围也是函数内部，相当于局部变量。

    # 在函数体外无法访问 变量`a`、`b`、`c`
    ```

- 全局变量

    函数体外定义的变量，可作用于函数内外
    ```python
    name = 'curder'  # 全局变量
    def fun2():
        print(name)

    fun2()  # curder
    ```
  
## 局部变量转换为全局变量

将函数内的局部变量使用 `global` 关键字声明为全局变量。

```python
 def fun2():
    global name
    name = 'curder'
    print(name)

fun2()  # curder
print(name)  # curder
```