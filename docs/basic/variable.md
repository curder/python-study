# 变量的定义和使用 {#top}

## 变量组成 {#variable-composition}

1. 标识，表示变量所存储的内存位置，可以使用内置函数 `id(obj)` 获取内存位置。

2. 类型，表示对象的数据类型，可以使用内置函数 `type(obj)` 获取数据类型。

3. 值，表示存储的具体数据，可以使用内置函数 `print(obj)` 将值打印输出。

## 多次赋值，变量名指向新的空间 {#multiple-assignments-the-variable-name-points-to-a-new-space}

```python
name = "curder"  # 变量的定义和赋值
print("值：", name)  # 变量的使用
print("标识：", id(name))  # 获取变量存储位置
print("类型：", type(name))  # 获取变量类型

# 变量重新赋值后，之前赋值的内存空间指向将失效，成为内存垃圾
name = "luo"
print("值：", name)  # 变量的使用
print("标识：", id(name))  # 获取变量存储位置
print("类型：", type(name))  # 获取变量类型
```