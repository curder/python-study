# 系统保留字

在 Python 中，系统保留字（也称为关键字或保留关键字）是 Python 语言中预定义的、具有特殊含义的词汇。

这些词汇保留用于执行特定的功能，因此不能将它们用作变量、函数、类、模块或其他标识符的名称。

## 打印保留字

要查看 Python 中的所有保留字，可以使用 `keyword` 模块中的 `kwlist` 属性：

```python
import keyword

print(keyword.kwlist)
```

截至 Python 3.x，以下是 Python 的系统保留字列表：

```python
['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 
 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 
 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 
 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']
```

## 保留字简介

- **`False`, `True`, `None`**: 布尔值和空值
- **`and`, `or`, `not`, `is`, `in`**: 布尔运算符和成员运算符
- **`if`, `elif`, `else`**: 条件语句
- **`for`, `while`, `break`, `continue`, `pass`**: 循环控制
- **`def`, `return`, `lambda`**: 函数定义和返回值
- **`class`, `yield`, `global`, `nonlocal`**: 类和作用域控制
- **`try`, `except`, `finally`, `raise`**: 异常处理
- **`import`, `from`, `as`**: 模块导入
- **`with`, `async`, `await`**: 上下文管理和异步操作
- **`del`, `assert`**: 删除对象和调试工具

## 示例

如果试图使用这些保留字作为变量名，Python 会抛出语法错误。例如：

```python
def = 10  # 错误，"def" 是保留字
```

这会导致以下错误：
```
SyntaxError: invalid syntax
```