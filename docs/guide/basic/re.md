# 正则表达式

Regular Expression 正则表达式，一种使用表达式的方式对字符串进行匹配的语法规则。

- 正则的优点：速度快，效率高，准确性高
- 正则的缺点：上手难度大

正则的语法：使用元宇符进行排列组合用来匹配字符串

在线测试正则表达式：[RegExr](https://regexr.com/) 或 [regex100](https://regex101.com/)

## 元字符

具有固定含义的特殊符号

常用元字符：

| 元字符              | 说明                                               |
|------------------|--------------------------------------------------|
| `.`              | 匹配除换行符以外的任意字符                                    |
| `\w`             | 匹配字母、数字或下划线                                      |
| `\s`             | 匹配任意的空白符                                         |
| `\d`             | 匹配数字                                             |
| `\n`             | 匹配一个换行符                                          |
| `\t`             | 匹配一个制表符                                          |
| `^`              | 匹配字符串的开始                                         |
| `$`              | 匹配字符串的结尾                                         |
| `\W`             | 匹配非字母或数字或下划线                                     | 
| `\D`             | 匹配非数字                                            |
| `\S`             | 匹醌非空白符                                           |
| `a｜b`（这里的｜是英文输入） | 匹配字符a或字符b                                        |
| `()`             | 匹配括号内的表达式，也表示一个组                                 |
| `[]`             | 匹配字符组中的字符，比如：`[abc123]` 是匹配 `[]` 中的任意字符          |
| `[^]`            | 匹配除了字符组中字符的所有字符，比如: `[^abc123]` 是匹配非 `[]` 中的任意字符 |

## 量词

| 量词      | 说明      |
|---------|---------|
| `*`     | 重复零次或多次 |
| `+`     | 重复一次或多次 |
| `?`     | 重复零次或一次 |
| `{n}`   | 重复N次    |
| `{n,}`  | 重复N次或多次 |
| `{n,m}` | 重复N到M次  |

## 匹配模式

- `.*` 贪婪匹配
- `.*?` 惰性匹配

`.*?` 表示尽可能少的匹配，`.*` 表示尽可能多的匹配。

例如：

需要匹配的字符：`玩吃鸡游戏，晚上一起上游戏。干嘛呢？打游戏啊`

使用正则表达式：`玩.*?游戏`

此时匹配的是：`玩吃鸡游戏`

## re模块

### findall

查找所有符合正则表达式的内容并返回列表。

```python
import re

regex = r'\d+'  # 对字符串内容不进行转义
result = re.findall(regex, '我的电话号码是：10086，你的电话号码是：10010')
print(result)  # 得到正则表达式预期结果，列表：['10086', '10010']
```

### search

查找符合正则表达式并将匹配到的第一个Match对象返回，通过调用 `.group()` 方法获取结果；如果匹配不上返回None。

```python
import re

regex = r'\d+'  # 对字符串内容不进行转义
result = re.search(regex, '我的电话号码是：10086，你的电话号码是：10010')
print(result.group())  # 10086
```

> 找到一个匹配项就返回。

### match

只能从字符串的开头进行匹配，成功则返回Match对象，不成功返回None。

```python
import re

regex = r'\d+'  # 对字符串内容不进行转义
result = re.match(regex, '10086，你的电话号码是：10010')
print(result.group())  # 10086
```

> 相当于在正则最开头添加了 `^` 的效果。

### finditer

功能同`findall`，也是查找所有符合正则表达式的内容，但返回的是迭代器。

```python
import re

regex = r'\d+'  # 对字符串内容不进行转义
result = re.finditer(regex, '我的电话号码是：10086，你的电话号码是：10010')
print(result)  # 得到正则表达式，迭代器：<callable_iterator object at 0x10147b280>
for i in result:
    print(i.group(), end=" ")  # 10086 10010
```

> 从迭代器中获取内容，可以通过 `for in`循环，并通过 `.group()` 获取到匹配结果。

### compile

可以将一个正则表达式进行预加载，方便程序后面引用。

```python
import re

regex = r'\d+'
obj = re.compile(regex)  # 预加载正则表达式

result = obj.finditer('我的电话号码是：10086，你的电话号码是：10010')
for i in result:
    print(i.group(), end=" ")  # 10086 10010
```

## 正则分组

在 Python 中可以给匹配到的内容进行分组，方便后续使用。

```python
import re

s = """
<ul>
    <li class="lucy">露西</li>
    <li class="lily">莉莉</li>
    <li class="li-lei">李雷</li>
    <li class="han-mei-mei">韩梅梅</li>
</ul>
"""

regex = r'<li class="(?P<class_name>.*?)">(?P<username>.*?)</li>'  # 正则表达式
# (?P<分组名>正则表达式) 可以从正则匹配的内容中进一步提取内容
obj = re.compile(regex, flags=re.S)  # flags 参数配置 re.S 使 . 能匹配换行符
result = obj.finditer(s)
for item in result:
    print(item.group('class_name'), item.group('username'))  # 获取正则匹配的自定的分组名
```
