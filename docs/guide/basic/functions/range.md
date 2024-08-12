# range 函数

在 Python 中，`range()` 函数用于生成一系列数字。它通常用于控制循环的次数，尤其是在 `for` 循环中。`range()` 函数可以生成从起始值到结束值（不包括结束值）的整数序列。

### 基本用法

`range()` 函数的基本用法有三种形式：

1. **`range(stop)`**：
   - **参数**：一个整数，表示生成序列的结束值（不包括该值）。
   - **返回**：从 `0` 到 `stop - 1` 的整数序列。
   
   ```python
   for i in range(5):
       print(i)
   
   # 结果：
   # 0
   # 1
   # 2
   # 3
   # 4
   ```

2. **`range(start, stop)`**：
   - **参数**：
     - `start`：起始值（包含）。
     - `stop`：结束值（不包含）。
   - **返回**：从 `start` 到 `stop - 1` 的整数序列。
   
   ```python
   for i in range(2, 6):
       print(i)

   # 结果：
   # 2
   # 3
   # 4
   # 5
   ```

3. **`range(start, stop, step)`**：
   - **参数**：
     - `start`：起始值（包含）。
     - `stop`：结束值（不包含）。
     - `step`：步长，表示生成序列的增量。
   - **返回**：从 `start` 到 `stop - 1` 的整数序列，以 `step` 为步长递增。
   
   ```python
   for i in range(1, 10, 2):
       print(i)

   # 结果：
   # 1
   # 3
   # 5
   # 7
   # 9
   ```

### 主要特性

- **生成器对象**：`range()` 返回的是一个可迭代的 `range` 对象，而不是一个列表。如果需要将其转换为列表，可以使用 `list()` 函数。
  
  ```python
  numbers = range(5)
  print(list(numbers))  # 输出: [0, 1, 2, 3, 4]
  ```

- **惰性计算**：`range()` 函数是惰性计算的，即它不会立即生成所有数字，而是按需生成。这使得它在处理大型序列时非常高效。

- **支持负步长**：`step` 参数可以是负数，用于生成递减的序列。

  **示例：**
  
  ```python
  for i in range(10, 0, -2):
      print(i)

  # 结果：
  # 10
  # 8
  # 6
  # 4
  # 2
  ```

### 使用场景

- **循环控制**：`range()` 函数常用于 `for` 循环中，控制循环的次数。
  
  ```python
  for i in range(3):
      print(f"Iteration {i}")
  ```
  
- **索引操作**：在需要通过索引访问列表或其他可迭代对象时，也可以使用 `range()`。

  ```python
  names = ["Alice", "Bob", "Charlie"]
  for i in range(len(names)):
      print(f"Index {i}: {names[i]}")
  ```

### 总结

- **`range(stop)`**：生成从 `0` 到 `stop - 1` 的整数序列。
- **`range(start, stop)`**：生成从 `start` 到 `stop - 1` 的整数序列。
- **`range(start, stop, step)`**：生成从 `start` 到 `stop - 1` 的整数序列，以 `step` 为步长递增。
- **生成器对象**：`range()` 返回一个可迭代的 `range` 对象，支持惰性计算和负步长。