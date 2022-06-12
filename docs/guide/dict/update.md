# 编辑字典 {#top}

## 增加字典元素 {#add-dict-item}

```python {3}
d = {"name": "curder", "hobby": "coding"}

d["married"] = False  # 增加一个字典元素
print(d)  # {'name': 'curder', 'hobby': 'coding', 'married': False}
```

## 删除字典元素 {#del-dict-item}

使用 `del` 关键字删除字典元素。

```python {3}
d = {"name": "curder", "hobby": "coding"}

del d["hobby"]  # 删除字典的 hobby key
print(d)  # {'name': 'curder'}
```

### 清空列表元素 {#clear-dict-items}

```python
d = {"name": "curder", "hobby": "coding"}

d.clear()
print(d)  # {}
```

## 修改字典元素 {#update-dict-item}

将key赋值新的值用于覆盖旧值则完成字典元素的修改。

```python
d = {"name": "curder", "married": False}

d['married'] = True
print(d)  # {'name': 'curder', 'married': True}
```

