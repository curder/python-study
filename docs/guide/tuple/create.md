# 创建元祖 {#top}

## 字典的创建 {#create-tuple}

- 使用小括号 `(`、`)`
    ```python
    t = (1, 2, "hello", "world")

    print(type(t))  # <class 'tuple'>
    print(t)  # (1, 2, 'hello', 'world')
    ```

  > **注意：** 当元组中仅有一个元素，使用小括号的形式创建元组时，需要在后面添加逗号","。

    ```python {1}
    t = ("hello",)
    print(type(t))  # <class 'tuple'>
    print(t)  # ('hello',)
    ```

- 使用内置函数 `tuple()`
    ```python
    t = tuple((1, 2, "hello", "world"))

    print(type(t))  # <class 'tuple'>
    print(t)  # (1, 2, 'hello', 'world')
    ```
  
## 创建空元组 {#create-empty-tuple}

- 使用小括号方式
  ```python
  t = ()

  print(type(t))  # <class 'tuple'>
  print(t)  # ()
  ```

- 使用内置函数 `tuple`
  ```python
  t = tuple()

  print(type(t))  # <class 'tuple'>
  print(t)  # ()
  ```