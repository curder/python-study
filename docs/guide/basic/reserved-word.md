# 系统保留字

## 打印出当前保留字

使用 [keyword 包](https://docs.python.org/zh-cn/3.10/library/keyword.html#module-keyword)的 `kwlist` 属性可以看到当前系统的所有保留字。

```python
import keyword

print(keyword.kwlist)

# False
# None
# True
# and
# as
# assert
# async
# await
# break
# class
# continue
# def
# del
# elif
# else
# except
# finally
# for
# from
# global
# if
# import
# in
# is
# lambda
# nonlocal
# not
# or
# pass
# raise
# return
# try
# while
# with
# yield
```

## 标识符

变量、函数、类、模块和其他对象的名称。

## 标识符规则

- 字母、数字、下划线
- 不能以数字开头
- 不允许使用保留字
- 严格区分大小写
