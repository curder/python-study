# 编辑字典

## 增加字典元素

```python {3}
d = {"name": "curder", "hobby": "coding"}

d["married"] = False  # 增加一个字典元素
print(d)  # {'name': 'curder', 'hobby': 'coding', 'married': False}
```

## 删除字典元素

使用 `del` 关键字删除字典元素。

```python {3}
d = {"name": "curder", "hobby": "coding"}

del d["hobby"]  # 删除字典的 hobby key
print(d)  # {'name': 'curder'}
```

### 清空列表元素

```python
d = {"name": "curder", "hobby": "coding"}

d.clear()
print(d)  # {}
```

## 修改字典元素

将key赋值新的值用于覆盖旧值则完成字典元素的修改。

```python
d = {"name": "curder", "married": False}

d['married'] = True
print(d)  # {'name': 'curder', 'married': True}
```

## 拷贝字典

```python
d = {"name": "curder", "married": False}

d2 = d.copy()
print(d2)  # {'name': 'curder', 'married': False}
```

> 对原字典进行增删改操作，不会影响拷贝后的字典 `d2` 。

##  `fromkeys` 创建新字典

`fromkeys` 函数用于创建一个新的字典。
- 第一个参数是一个序列（列表/元祖/集合），作为字典的键
- 第二个参数可以是任意数据类型，作为每个键的值，如果不传递的话，字典的键对应的值为 `None`

```python
d = {}

d1 = d.fromkeys(("name", "age"), ('curder', 18,))
print(d1)  # {'name': ('curder', 18), 'age': ('curder', 18)}
```
> 使用 `fromkeys()` 方法会产生一个新的字典，而不是在原字典上进行变更