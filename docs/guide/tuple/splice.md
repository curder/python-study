# 元祖的拼接

可以使用 `+` 对元祖进行拼接操作。

```python
t1 = ('hello', 'python')
t2 = tuple(([1, 2], [2, 3]))

t3 = t1 + t2
print(t3)  # ('hello', 'python', [1, 2], [2, 3])

# 修改元祖元素中其他可变元素的值，比如下面的列表元素
t3[2][0] = 'curder'
print(t3)  # ('hello', 'python', ['curder', 2], [2, 3])
```