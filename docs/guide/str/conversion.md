# 字符串编码转换

**编码**是指将字符串转换成二进制 `bytes` 数据，**解码**是指将二进制 `bytes` 类型的数据转换成字符串类型。

## 编码

编码时可以指定使用的字符编码，对于中文常用的字符编码有 `GBK` 和 `UTF-8`。

1. 字符编码为GBK，一个中文占 2 个字节
2. 字符编码为 UTF-8，一个中文占 3 个字节

```python
s = '你好，世界！'

# 字符编码为GBK，一个中文占 2 个字节
print(s.encode(encoding="GBK"))  # b'\xc4\xe3\xba\xc3\xa3\xac\xca\xc0\xbd\xe7\xa3\xa1'

# 字符编码为 UTF-8，一个中文占 3 个字节
print(s.encode(encoding="UTF-8"))  # b'\xe4\xbd\xa0\xe5\xa5\xbd\xef\xbc\x8c\xe4\xb8\x96\xe7\x95\x8c\xef\xbc\x81'
```

## 解码

> **注意**：解码时使用的字符编码需要跟编码时保持一致，否则会得到不符合的结果预期或抛出 `UnicodeDecodeError` 异常。

```python
s = '你好，世界！'

byte = s.encode(encoding='GBK')  # 使用 GBK 编码
print(byte.decode(encoding='GBK'))
```