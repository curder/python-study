# print 输出

Python 中的 `print()` 函数用于将指定的输出内容打印到控制台或标准输出流。

## 基本用法

```python
print("Hello, World!") # Hello, World!
```


## 打印多个值

可以在 `print()` 中传递多个值，用逗号 `,` 分隔，`print()` 会自动在这些值之间插入一个空格：

```python
print("Hello", "World", 123) # Hello World 123
```

## 自定义分隔符 `sep`

`sep` 参数允许自定义多个值之间的分隔符：

```python
print("Hello", "World", 123, sep="-") # Hello-World-123
```

## 自定义结束符 `end`

默认情况下，`print()` 在输出内容后会自动添加一个换行符。使用 `end` 参数改变这一行为：

```python
print("Hello", end=" ")
print("World")
```

输出:

```text
Hello World
```

## 打印到文件

可以使用 `file` 参数将输出重定向到文件：

```python
with open("output.txt", "w") as f:
    print("Hello, World!", file=f)
```

这样会将 `"Hello, World!"` 写入 `output.txt` 文件中。

## 使用 `flush` 参数

默认情况下，`print()` 函数是缓冲输出的，可以通过设置 `flush=True` 来强制立即输出：

```python
print("Hello, World!", flush=True)
```

## 打印变量

可以直接打印变量的值：

```python
name = "Alice"
age = 30
print("Name:", name, "Age:", age) # Name: Alice Age: 30
```

## 使用格式化字符串

使用格式化字符串可以更灵活地控制输出：

```python
name = "Alice"
age = 30
print(f"Name: {name}, Age: {age}") # Name: Alice, Age: 30
```