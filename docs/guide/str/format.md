# 字符串格式化

## `%` 作为占位符

```python
name = 'curder'
age = 18
print("I am %s" % (name,))  # I am curder
print("I am %d years old" % (age,))  # I am 18 years old
```

> `%s`占位的话，无需确定占位字符的变量类型。
>
> `%d` 占位符仅支持数值类型，如果传递的是浮点型，会获取其整型值。
>
> `%f` 占位符仅支持浮点类型，如果传递的是整型，获取其浮点数值。

## `{}` 作为占位符

```python
name = 'curder'
age = 18
print("I am {0}, I am {1} years old".format(name, age))  # I am curder, I am 18 years old
```

## `f` 标识

> Python 3.6 及以上版本支持。

```python
name = 'curder'
age = 18
print(f"I am {name}, I am {age} years old")  # I am curder, I am 18 years old
```

## 格式化精度

### 使用 `%` 占位符

- 指定宽度
  ```python
  # 指定字符串宽度为 10
  print('%10d' % 99)  # 99
    ```
- 指定精度
  ```python
  # 保留小数点后 3 位
  print('%.3f' % 3.1415926)  # 3.142
  ```
- 指定宽度+精度
  ```python
  # 指定宽度为 10，并保留小数点后 3 位
  print('%10.3f' % 3.1415926)  # 3.142
  ```

### 使用 `{}` 占位符

- 指定宽度
  ```python
  # 指定字符串宽度为 10
  print('{0:10f}'.format(3.1415926))  # 3.141593
  ```
- 指定精度
  ```python
  # 保留小数点后 3 位
  print('{0:.3f}'.format(3.1415926))  # 3.142
  ```
- 指定宽度+精度
  ```python
  # 指定宽度为 10，并保留小数点后 3 位
  print('{0:10.3f}'.format(3.1415926))  # 3.142
  ```

- 百分比
  ```python
  print('{:.2%}'.format(0.1415926))  # 14.16%
  ```
  > `2` 代表小数点后保留的几位