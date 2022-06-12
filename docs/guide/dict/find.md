# 字典查询操作 {#top}

## 获取字典元素

1. 使用 `[]` 中扩号 + 键的方式获取，比如：`l['name']`

    ```python
    d = {"name": "curder", "hobby": "coding"}
    print(d['name'])  # curder
    
    # 获取不存在的键的值，抛出 KeyError 异常
    print(d['age'])  # KeyError: 'age'
    ```

2. 使用 `get()` 方法 + 键的方式获取，比如：`l.get('name')`
 
    ```python
    d = {"name": "curder", "hobby": "coding"}

    print(d.get('name'))  # curder
    # 获取不存在的键的值，返回 None
    print(d.get('age'))  # None
    # 获取不存在的键的值，并传递默认值，最后返回默认值
    print(d.get('age', 18))  # 18
    ```

上面使用中扩号或使用 `get` 方法获取字典中的元素的方式不同之处在于：
1. `[]` 如果字典中不存在指定的key，则抛出 `KeyError` 异常
2. `get` 方法取值，如果字典中不存在指定的key，放回 `None`，可以通过参数设置默认值，以便指定的 Key 不存在时返回
