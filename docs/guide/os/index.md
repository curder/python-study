# 文件读写操作

使用内置函数 `open()` 创建文件对象。比如：`file = open(filename, [mode, encoding])`。

## 打开文件

可以使用内置函数 `open()` 创建文件对象。

```python {1}
f = open('./index.md', 'r')
print(f.readlines())
f.close()
```
上面文件打开模式为只读模式，除了只读模式，还有很多其他模式：

- `r` 以只读模式打开文件，文件的指针将会放在文件的开头
- `w` 以只写模式打开文件，如果文件不存在则创建，如果文件存在则覆盖原有内容，文件指针在文件的开头
- `a` 以追加模式打开文件，如果文件不存在则创建，文件指针在文件开头；如果文件存在则在文件末尾追加内容，文件指针在文件末尾
- `b` 以二进制方式打开文件，不能单独使用，需要与其他模式配合一同使用, `rb` 或 `wb`
- `+` 以读写模式打开文件，不能单独使用，需要与提起他模式一起使用，`a+`

### 只写模式
```python {1}
f = open('./index.md', 'w')
f.write('Hello')
f.close()
```

### 追加模式

```python
f = open('./index.md', 'a')
f.write('Hello')
f.close()
```

### 二进制方式

使用二进制模式拷贝二进制。

```python{2-3}
# 假如当前目录有一个logo.png，读取并拷贝为新文件 new-logo.png
f = open('logo.png', 'rb')
target_file = open('new-logo.png', 'wb')

target_file.write(f.read())

f.close()
target_file.close()
```