# 流程判断

在 Python 中，流程判断用于控制程序的执行路径，主要通过条件语句来实现，条件语句可以根据特定的条件执行不同的代码块。

Python 支持以下几种主要的条件语句和流程控制结构：

## `if` 语句

`if` 语句用于在满足特定条件时执行一段代码。基本语法如下：

```python
if condition:
    # 执行的代码
```

**示例：**

```python
x = 10
if x > 5:
    print("x 大于 5")
```

## `if-else` 语句

`if-else` 语句提供了两条执行路径：如果条件为 `True`，执行 `if` 部分的代码，否则执行 `else` 部分的代码。

```python
if condition:
    # 执行的代码
else:
    # 执行的代码
```

**示例：**

```python
x = 3
if x > 5:
    print("x 大于 5")
else:
    print("x 小于或等于 5")
```

## `if-elif-else` 语句

`if-elif-else` 语句用于处理多个条件。

`elif`（else if）部分用于检查其他条件，当第一个 `if` 条件不满足时，检查 `elif` 条件。

如果所有 `if` 和 `elif` 条件都不满足，则执行 `else` 部分的代码。

```python
if condition1:
    # 执行的代码
elif condition2:
    # 执行的代码
else:
    # 执行的代码
```

**示例：**

```python
x = 7
if x > 10:
    print("x 大于 10")
elif x > 5:
    print("x 大于 5 但小于或等于 10")
else:
    print("x 小于或等于 5")
```

## 嵌套的条件语句

条件语句可以嵌套在其他条件语句内部，以处理更复杂的逻辑。

**示例：**

```python
x = 8
y = 15

if x > 5:
    if y > 10:
        print("x 大于 5 且 y 大于 10")
    else:
        print("x 大于 5 但 y 小于或等于 10")
else:
    print("x 小于或等于 5")
```

## 条件表达式（三元运算符）

条件表达式允许你在一行中进行简单的条件判断和赋值。语法如下：

```python
value_if_true if condition else value_if_false
```

**示例：**

```python
x = 5
result = "x 大于 3" if x > 3 else "x 小于或等于 3"
print(result)
```

## 6. `match` 语句

`match` 语句是 Python 3.10 引入的结构性模式匹配语法，类似于其他语言中的 `switch-case` 语句，用于更复杂的模式匹配。

**示例：**

```python
def handle_value(value):
    match value:
        case 1:
            print("值是 1")
        case 2:
            print("值是 2")
        case _:
            print("值不是 1 也不是 2")

handle_value(2)  # 输出 "值是 2"
```

## 总结

- **`if` 语句**：用于基本的条件判断。
- **`if-else` 语句**：用于在条件不满足时执行另一段代码。
- **`if-elif-else` 语句**：用于处理多个条件。
- **嵌套的条件语句**：在条件语句内部使用其他条件语句，以处理复杂的逻辑。
- **条件表达式**：在一行中进行条件判断和赋值。
- **`match` 语句**（Python 3.10+）：用于结构化模式匹配，处理更复杂的匹配情况。