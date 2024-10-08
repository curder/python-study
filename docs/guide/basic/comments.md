# 代码注释

在 Python 中，代码注释用于解释代码的意图、描述函数的功能、标记待办事项等。

注释可以提高代码的可读性，使其他开发者（或将来的你）能够更容易理解代码的目的和实现。

Python 支持两种主要的注释方式：单行注释和多行注释。

## 单行注释

单行注释以 `#` 开头，`#` 后的所有内容都被视为注释，直到行尾为止。单行注释通常用于解释代码的某一行或块。

**示例：**

```python
# coding:uft-8  # 这里声明编码格式，默认为utf-8

x = 10  # 这是另一个单行注释
```

## 多行注释

Python 并没有专门的多行注释语法，但可以通过多行字符串（用三重引号 `"""` 或 `'''` 包围的字符串）来实现多行注释。

虽然这些多行字符串主要用于文档字符串（docstrings），它们也可以用作多行注释。



```python
"""
这是一个多行注释的例子
可以用于注释多行内容
"""
x = 10

'''
这是另一个多行注释的例子
可以用于注释多行内容
'''
y = 20
```

## 文档字符串（Docstrings）

文档字符串是用于描述模块、类、函数或方法功能的字符串，它们位于定义的开头，并用三重引号包围。

它们不仅是注释的一种形式，还用于生成文档。

```python
def add(a, b):
    """
    返回两个数的和。
    
    参数:
    a -- 第一个数
    b -- 第二个数
    
    返回:
    两个数的和
    """
    return a + b
```

## 注释的最佳实践

1. **保持简洁和相关**：注释应简洁明了，直接解释代码的意图。避免过度注释或注释明显的内容。
2. **更新注释**：代码修改时应同时更新注释，以保持注释与代码的同步。
3. **使用文档字符串**：为模块、类、函数和方法编写文档字符串，以便生成文档并提供函数用途和参数说明。
4. **避免过多的注释**：良好的代码应该尽可能自解释，避免过多的注释。注释应当补充解释，而不是代替清晰的代码。

## 总结

- **单行注释**：以 `#` 开头，适用于简单解释和代码行注释。
- **多行注释**：使用三重引号包围的字符串，适用于长的解释或多行注释。
- **文档字符串**：用于描述模块、类、函数或方法的功能，通常放在定义的开头。