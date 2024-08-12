# 转义字符

在 Python 中，转义字符是通过反斜杠 `\` 引入的特殊字符序列，用于表示一些无法直接输入或具有特殊意义的字符。

## 常见的转义字符

### 换行符 (`\n`)

`\n` 表示换行。

```python
print("Hello\nWorld")

# Hello
# World
```

### 制表符 (`\t`)

插入一个水平制表符（通常为4或8个空格）。

```python
print("Hello\tWorld") # Hello   World
```

### 反斜杠 (`\\`)

插入一个反斜杠 `\` 本身。


```python
print("This is a backslash: \\") # This is a backslash: \
```

### 单引号 (`\'`)

在使用单引号定义字符串时插入一个单引号 `'`。

```python
print('It\'s a test.') # It's a test.
```

### 双引号 (`\"`)

在使用双引号定义字符串时插入一个双引号 `"`。

```python
print("He said, \"Hello\"") # He said, "Hello"
```

### 回车符 (`\r`)

回到当前行的开头，后续内容会覆盖已有内容。


```python
print("Hello\rWorld") # World
```

### 退格符 (`\b`)

删除前一个字符（光标向左移动一格）。

```python
print("Hello\bWorld") # HellWorld
```

### 空字符 (`\0`)

在 Python 中，`\0` 只是一个普通的字符，通常不会在字符串中看到其效果。
   
```python
print("Hello\0World") # HelloWorld
```

### Unicode 字符 (`\u` 或 `\U`)

表示一个 Unicode 字符。

```python
print("\u4e2d\u6587") # 中文
```

### 八进制数

表示八进制值对应的字符。

```python
print("\101\102\103") # ABC
```

### 十六进制数

表示十六进制值对应的字符。

```python
print("\x41\x42\x43") # ABC
```

## 原字符

使转义字符不起作用，写在字符串前面，用 `r` 或 `R`。

```python
print(r"Hello\n world")  # Hello\n world
print(R"Hello\n world")  # Hello\n world
```