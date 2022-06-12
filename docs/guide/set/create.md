# 创建集合 {#set}

## 集合的创建 {#create-set}

集合的创建有两种方式：

1. 使用花括号，元素之间使用逗号 `,` 分割
    ```python
    s = {1, 2, "hello", True}

    print(type(s))  # <class 'set'>
    print(s)  # {1, 2, 'hello'}
    ```

2. 使用内置函数 `set()`
    ```python
    s = set((1, 2, "hello", True))

    print(type(s))  # <class 'set'>
    print(s)  # {1, 2, 'hello'}
    ```
    > `set()` 函数可以接收 `列表 list`， `元组 tuple`，`字典 dict` 等。

## 创建空集合 {#create-empty-set}

使用内置函数 `set`，不添加任何参数即可创建空集合。

```python
s = set()

print(type(s))  # <class 'set'>
print(s)  # set()
```