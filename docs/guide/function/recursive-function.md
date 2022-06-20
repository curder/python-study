<a name="recursive-function"></a>

# 递归函数

## 什么是递归函数

如果在一个函数的函数体内调用了该函数自身，这个函数就称为递归函数。

## 递归函数组成部分

1. 递归调用
2. 递归终止条件

## 递归的优缺点

- 优点：思路和代码简单
- 缺点：占用内存多，效率低下

## 使用递归计算阶乘

```python
# 计算 10 的阶乘

def factorial(number):
    if number == 1:
        return 1
    else:
        return number * factorial(number - 1)


print(factorial(10))  # 3628800
```

## 斐波那契数列

```python
def fibonacci(number):
    if number == 1:
        return 1
    elif number == 2:
        return 1
    else:
        return fibonacci(number - 1) + fibonacci(number - 2)


print(fibonacci(10))  # 55

# 输出所有斐波那契数列的前10位数
for i in range(1, 11):
    print(fibonacci(i), end=" ")  # 1 1 2 3 5 8 13 21 34 55
```