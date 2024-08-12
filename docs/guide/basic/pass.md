---
outline: false
---

# pass语句

什么都不做，只是一个占位符，用到需要写语句的地方。

```python
answer = input('您是VIP吗 y/n ')

# 判断当前用户是否是VIP
if answer == 'y':
    pass # 这里还没有想好实现逻辑，可以使用pass语句临时替代，使得语法通过
else:
    pass
```


## 示例

1. **定义未完成的函数或方法**：

   ```python
   def incomplete_function():
       pass
   ```

2. **在条件语句中暂时不执行任何操作**：

   ```python
   if some_condition:
       pass
   ```

3. **在循环中暂时不执行任何操作**：

   ```python
   for _ in range(10):
       pass
   ```

4. **定义空类**：

   ```python
   class EmptyClass:
       pass
   ```