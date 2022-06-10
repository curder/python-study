# 列表的创建 {#top}

## 列表的创建 {#create-list}
列表的创建有两种方式：
1. 使用中括号，元素之间使用 `,` 英文逗号分割
2. 使用内置函数 `list()`

```python
# 1. 使用中括号创建列表
print([1, True, "hello", 'world', False, 0.1])  # [1, True, 'hello', 'world', False, 0.1]

# 2. 使用list函数创建列表
print(list([1, True, "hello", 'world', False, 0.1]))  # [1, True, 'hello', 'world', False, 0.1]
```