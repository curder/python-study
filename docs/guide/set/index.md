# 集合 {#set}

集合是可变的，集合元素是不可重复，同时也是无序的，使用 `{value, another-value}` 形式定义。

## 什么是集合 {#what-is-set}

- 集合是Python语言提供的内置数据结构
- 与列表、字典相同的是，都属于可变类型的序列
- 集合是没有value的字典

## 集合的特点 {#set-futures}

- 集合中的元素不允许重复
- 集合中的元素是无序的

## 集合的关系判断 {#relational-judgment-of-sets}

- 使用运算符 `==` 或 `!=` 判断两个集合是否相等（判断集合元素是否相等）
  ```python
  s1 = {1, 2, 3, 4, 5}
  s2 = {2, 4, 5, 1, 3}

  print(s1 == s2)  # True
  ```
- 调用方法 `issubset` 判断一个集合是否是另一个集合的子集
  ```python
  s1 = {1, 2, 3, 4, 5}
  s2 = {1, 2, 3}

  print(s2.issubset(s1))  # True
  print(s1.issubset(s2))  # False
  ```

- 调用方法 `issuperset` 判断一个集合是否是另一个集合的超集
  ```python
  s1 = {1, 2, 3, 4, 5}
  s2 = {1, 2, 3}

  print(s2.issuperset(s1))  # False
  print(s1.issuperset(s2))  # True
  ```

- 调用方法 `isdisjoint` 判断两个集合之间是否没有交集
  ```python
  s1 = {1, 2, 3, 4, 5}
  s2 = {1, 2, 3}

  print(s1.isdisjoint(s2))  # False
  print(s2.isdisjoint(s1))  # True
  ```
  > 存在交集时，返回 `False` ，否则返回 `True`。