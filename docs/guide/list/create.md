# 列表的创建

## 列表的创建

列表的创建有两种方式：

1. 使用中括号，元素之间使用 `,` 英文逗号分割
2. 使用内置函数 `list()`

```python
# 1. 使用中括号创建列表
print([1, True, "hello", 'world', False, 0.1])  # [1, True, 'hello', 'world', False, 0.1]

# 2. 使用list函数创建列表
print(list([1, True, "hello", 'world', False, 0.1]))  # [1, True, 'hello', 'world', False, 0.1]
```

### 创建空列表

- 使用中括号
    ```python
    l = []

    print(type(l))  # <class 'list'>
    print(l)  # []
    ```

- 使用内置函数 `list`
  ```python
  l = list()
  
  print(type(l))  # <class 'list'>
  print(l)  # []
  ```

## 列表生成式

当需要生成一定有规则的数据时，可以使用列表生成式生成列表。它的语法格式为：`[ i for i in range(1, 11) ]`

```python
# 生成 1-10 的列表
l = [i for i in range(1, 11)]
print(l)  # [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# 生成 1-6 的列表
l2 = [i * 2 for i in range(1, 6)]
print(l2)  # [2, 4, 6, 8, 10]
```