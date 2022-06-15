<a name="parameter-definition"></a>

# 函数参数定义

<a name="default-parameter"></a>

## 默认值参数

函数定义时，给形参设置默认值，只有与默认值不同的情况才需要传递实参。

```python
def fun(a, b=10):
    print(a, b)


fun(a=100)  # 100 10
fun(a=10, b=20)  # 10 20
```

## 可变位置参数

定义函数时，可以使用可变的位置参数，使用 `*` 定义可变参数的位置形参，在函数中获取的是 **元组** 。

```python
def fun(*args):
    print(args)


fun(1, 2, 3, "hello world")  # (1, 2, 3, 'hello world')
```

## 可变关键字参数

定义函数时，可以使用可变的关键词参数，使用 `**` 定义个数可变的关键字形参，在函数中获取的是 **字典** 。

```python
def fun(**args):
    print(args)

fun(a=1, b=2, c=3, d="hello world")  # {'a': 1, 'b': 2, 'c': 3, 'd': 'hello world'}
```

如果使用的是可变关键字参数定义的函数，在函数调用时也同时需要传递参数名，否则会抛出 `TypeError` 的异常。

> 注意：在函数定义中，当同时存在可变位置参数和可变关键字参数，则可以将可变位置参数放在可变关键字参数之前。
> ```python
> def fun(*args1, **args2):
>     print(args1, args2)
> 
> fun('hello', b=2, c=3, d="world")  # ('hello',) {'b': 2, 'c': 3, 'd': 'world'}
> ```