# print 输出函数 {#print-function}

## print函数可以输出哪些内容 {#What-can-the-print-function-output}

- `print` 函数可以输出数字 `print(1)` 或 `print(1.22)`

- `print` 函数可以输出字符串 `print('hello')`

- `print`函数可以输出含有运算符的表达式 `print(1+1)`

## print函数可以将内容输出到哪里 {#where-can-the-print-function-output-the-content-to}

- 显示器(默认输出到显示器)
- 文件
    ```python
    with open("demo.txt", "w") as f:
        add_text = "This text will be added to the file"
        print(add_text, file=f)
    ```

## print函数输出的形式 {#the-form-of-the-output-of-the-print-function}

- 换行(默认换行输出)
- 不换行
  ```python
  print('hello', 'world', end=' ')  # hello world 
  ```
