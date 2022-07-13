# 切片操作

**字符串是不可变类型**，不具备增、删、改操作，**切片操作后会对应产生新对象**。

```python
s = 'hello,world'

s1 = s[:5]  # 没有提供起始位置，从索引 0 开始
s2 = s[6:]  # 没有指定结束位置，所以计算到字符串结尾
s3 = s1 + '-' + s2

print(s1)  # hello 
print(s2)  # world
print(s3)  # hello-world
```