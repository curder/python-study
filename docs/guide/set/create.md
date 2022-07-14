# 创建集合

## 集合的创建

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
    > `set()` 函数可以接收 `字符串 str`，`列表 list`， `元组 tuple`，`字典 dict` 等。

## 创建空集合

使用内置函数 `set`，不添加任何参数即可创建空集合。

```python
s = set()

print(type(s))  # <class 'set'>
print(s)  # set()
```


## 集合生成式

当需要生成一定有规则的集合数据时，可以使用集合生成式生成集合。 它的语法格式为：[ i for i in range(1, 11) ]

```python
s = {i for i in range(1, 10)}

print(s)  # {1, 2, 3, 4, 5, 6, 7, 8, 9}
```