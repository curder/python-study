# 常量

在 Python 中，常量（constant）通常指的是在程序运行期间不应该改变的值。

Python 本身没有专门的语法来定义常量（像某些语言中的 `const` 关键字），但开发者可以通过使用特定的命名约定和习惯来表示常量。

## 命名约定

Python 社区普遍采用一种约定，即使用全大写字母来表示常量的名称。这是一种提示，表明该值不应被修改。

**示例：**

```python
PI = 3.14159
GRAVITY = 9.8
SPEED_OF_LIGHT = 299792458  # 单位为米/秒
```

在这个例子中，`PI`、`GRAVITY` 和 `SPEED_OF_LIGHT` 都被视为常量。

## 注意事项

1. **可变性**: 虽然使用大写字母命名的变量通常被视为常量，但 Python 并不会强制这些变量不可更改。开发者仍然可以修改这些值。

   ```python
   PI = 3.14159
   PI = 3.14  # 这是有效的，但不推荐这样做
   ```

2. **可变类型**: 如果使用的是可变类型（如列表、字典等）作为常量，即使该变量本身的引用不改变，其内容仍然可以被修改。

   ```python
   CONFIG = {
       "timeout": 120,
       "retries": 3
   }

   CONFIG["timeout"] = 150  # 这个操作是合法的，会改变字典内容
   ```

## 应用场景

常量在许多场景中都很有用，尤其是在定义一些固定的、不应改变的重要值时，例如物理常数、程序的配置选项、或程序中需要反复使用的固定字符串等。

**示例：**

```python
# 配置项常量
MAX_CONNECTIONS = 100
DEFAULT_TIMEOUT = 5  # 单位：秒

# 物理常量
PLANCK_CONSTANT = 6.62607015e-34  # 单位：焦耳·秒
EARTH_RADIUS = 6371  # 单位：公里
```

## 模拟常量

虽然 Python 没有原生的常量支持，但可以使用一些技巧来创建类似常量的行为。

例如，使用类的属性或模块级别的变量，结合只读属性和自定义的异常来防止修改常量值。

```python
class Constants:
    PI = 3.14159
    GRAVITY = 9.8

    @property
    def SPEED_OF_LIGHT(self):
        return 299792458  # 以米/秒为单位

constants = Constants()

# 读取常量
print(constants.PI)

# 尝试修改常量
try:
    constants.PI = 3.14  # 这个操作会引发异常
except AttributeError as e:
    print(f"Error: {e}")
```

## 总结

- **常量** 在 Python 中通常通过命名约定（使用全大写字母）来表示。

- **Python 并不强制常量不可变**，这是由约定和代码管理来保证的。

- **可变类型** 的常量需要特别注意，因为其内容仍然可以被修改。