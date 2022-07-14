# 编辑字典

## 增加字典元素

```python {3}
d = {"name": "curder", "hobby": "coding"}

d["married"] = False  # 增加一个字典元素
print(d)  # {'name': 'curder', 'hobby': 'coding', 'married': False}
```

## 删除字典元素

- 使用 `del` 关键字删除字典元素

```python {3}
d = {"name": "curder", "hobby": "coding"}

del d["hobby"]  # 删除字典的 hobby key
print(d)  # {'name': 'curder'}
```
> 如果删除了一个不存在于字典中的key，则会抛出 `KeyError` 错误。

- 使用 `pop()` 方法

```python
d = {"name": "curder", "hobby": "coding"}
result = d.pop('hobby')
print(d)  # {'name': 'curder'}
print(result)  # coding
```

> 值得注意的是：
> 1. 使用字典的 `pop` 方法移除指定键，会返回该键对应字典中的值。
>
> 2. 如果删除了一个不存在于字典中的key，则会抛出 `KeyError` 错误。

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

## `update` 方法修改字典

`update` 方法接受两个参数，分别是两个字典。

- 如果字典2的键在字典1中存在，则对字典1进行修改。
- 如果字典2的键在字典1中不存在，则对字典1进行添加。

```python
d1 = {"name": "curder", "married": False}
d2 = {"name": "luo", "hobby": 'coding'}

d1.update(d2)
print(d1)  # {'name': 'luo', 'married': False, 'hobby': 'coding'}
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

## 删除字典最后一个元素

`popitem()` 方法用于从字典中删除最后一项，并以元组形式返回该项所对应的键和值。

```python
d = {"name": "curder", "hobby": "coding"}

result = d.popitem()

print(result) # ('hobby', 'coding')
print(d)  # {'name': 'curder'}
```
> 如果字典为空，调用 `popitem()` 方法，会抛出 `KeyError` 错误。
 
## 设置字典默认值

`setdefault()` 方法用于设置字典的默认值。

- 如果字典中已已经存在对应的键，则忽略
- 如果不存在则添加该键和值

```python
d = {"name": "curder", "hobby": "coding"}
d.setdefault('married', False) # 设置不存在的key
d.setdefault('name', 'luo')  # 设置已存在的key，忽略添加
print(d)  # {'name': 'curder', 'hobby': 'coding', 'married': False}
```