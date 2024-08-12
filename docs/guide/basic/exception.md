# 错误异常

在 Python 中，错误和异常用于处理程序运行时出现的问题。异常处理机制允许你捕捉错误，防止程序崩溃，并处理异常情况。

以下是 Python 中处理错误和异常的基本概念和语法：

## 基本概念

1. **异常（Exception）**：指程序在运行时遇到的错误情况。异常会中断程序的正常执行流程。

2. **错误（Error）**：通常指语法错误或其他问题，在程序编译或解释阶段出现，无法处理。

## 基本的异常处理

使用 `try` 和 `except` 语句来捕获和处理异常。

**基本语法：**

```python
try:
    # 可能会引发异常的代码
    ...
except ExceptionType:
    # 异常处理代码
    ...
```

**示例：**

```python
try:
    x = 1 / 0  # 这会引发 ZeroDivisionError 异常
except ZeroDivisionError:
    print("不能除以零")
```

## 捕获多个异常

可以在一个 `try` 语句块中捕获多个不同的异常类型。

**示例：**

```python
try:
    x = int("abc")  # 会引发 ValueError 异常
except (ValueError, TypeError) as e:
    print(f"发生错误: {e}")
```

## 捕获所有异常

使用 `Exception` 类可以捕获所有的异常，但应谨慎使用，因为它可能会掩盖程序中的其他错误。

**示例：**

```python
try:
    x = int("abc")
except Exception as e:
    print(f"发生错误: {e}")
```

## 使用 `else` 子句

`else` 子句在 `try` 语句块中没有异常时执行。

**示例：**

```python
try:
    x = 10 / 2
except ZeroDivisionError:
    print("不能除以零")
else:
    print("操作成功")
```


## 使用 `finally` 子句

`finally` 子句无论是否发生异常都会执行，通常用于清理资源。

**示例：**

```python
try:
    file = open("file.txt", "r")
    # 读取文件内容
except FileNotFoundError:
    print("文件未找到")
finally:
    file.close()  # 确保文件被关闭
```

## 自定义异常

可以定义自定义异常类来表示特定的错误情况。

**示例：**

```python
class MyCustomError(Exception):
    pass

def check_value(x):
    if x < 0:
        raise MyCustomError("负数不允许")

try:
    check_value(-1)
except MyCustomError as e:
    print(f"发生自定义错误: {e}")
```


## 异常链

可以在异常处理代码中重新引发异常，以保持异常链。

**示例：**

```python
try:
    x = int("abc")
except ValueError as e:
    print("捕获到 ValueError")
    raise  # 重新引发异常
```

## 常见异常类型

| 异常类型                 | 描述                |
|----------------------|-------------------|
| `ZeropDivisionError` | 除（取模）零            |
| `IndexError`         | 序列中没有此索引          |
| `KeyError`           | 映射中没有这个键          |
| `NameError`          | 未声明/初始化对象或属性      |
| `SyntaxError`        | 语法错误              |
| `ValueError`         | 传入无效的参数           |
| `TypeError`          | 当操作或函数应用于不适当类型的对象 |
| `FileNotFoundError`  | 当请求文件或目录但不存在      |

## 总结

- **`try` 和 `except`**：用于捕获和处理异常。
- **`else` 子句**：在 `try` 语句块中没有异常时执行。
- **`finally` 子句**：无论是否发生异常都会执行，通常用于清理资源。
- **自定义异常**：可以定义自定义的异常类来表示特定的错误情况。
- **异常链**：可以在异常处理代码中重新引发异常，以保持异常链。