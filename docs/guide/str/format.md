<a name="format"></a>
# 字符串格式化

<a name="using-percent-sign"></a>
## `%` 作为占位符

```python
name = 'curder'
print("I am %s" % (name))  # I am curder
```

<a name="using-big-parantheses"></a>
## `{}` 作为占位符

```python
name = 'curder'
print("I am {0}".format('curder'))  # I am curder
```

<a name="using-f-string"></a>
## `f` 标识

```python
name = 'curder'

print(f"I am {name}")  # I am curder
```

<a name="formatting-precision"></a>
## 格式化精度

<a name="formatting-precision-using-percent-sign"></a>
### 使用 `%` 占位符
- 指定宽度
  ```python
  # 指定字符串宽度为 10
  print('%10d' % 99)  #         99
    ```
- 指定精度
  ```python
  # 保留小数点后 3 位
  print('%.3f' % 3.1415926)  # 3.142
  ```
- 指定宽度+精度
  ```python
  # 指定宽度为 10，并保留小数点后 3 位
  print('%10.3f' % 3.1415926)  #     3.142
  ```

<a name="formatting-precision-using-big-parantheses"></a>
### 使用 `{}` 占位符

- 指定宽度
  ```python
  # 指定字符串宽度为 10
  print('{0:10f}'.format(3.1415926))  #  3.141593
  ```
- 指定精度
  ```python
  # 保留小数点后 3 位
  print('{0:.3f}'.format(3.1415926))  #3.142
  ```
- 指定宽度+精度
  ```python
  # 指定宽度为 10，并保留小数点后 3 位
  print('{0:10.3f}'.format(3.1415926))  #     3.142
  ```
