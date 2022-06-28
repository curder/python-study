# 目录操作

- `os` 模块是 Python 内置的与操作系统功能和文件系统相关的模块，该模块中的语句的执行结果通常与操作系统有关，在不同的操作系统上运行，得到的结果可能不同。
- `os` 模块与 `os.path` 模块用于对目录或文件进行操作。

```python
import os

os.system('open -a "/Applications/Google Chrome.app" "https://google.com.hk"')  # 打开电脑Chrome浏览器并输入 google 网址
```

| 函数                                | 说明               |
|-----------------------------------|------------------|
| `getcwd()`                        | 返回当前工作目录         |
| `listdir(path)`                   | 返回指定路径下的文件和目录信息  |
| `mkdir(path[,mode])`              | 创建目录             |
| `mkdirs(path[,path[,mode],mode])` | 创建多级目录           |
| `rmdir(path)`                     | 删除目录             |
| `removedirs(path[,path])`         | 删除多级目录           |
| `chdir(path)`                     | 将 path 设置为当前工作目录 |

```python
import os

print(os.getcwd())  # /Users/curder/Codes/python-study/src/os

print(os.listdir('../os'))  # ['new-logo.png', 'test.py', 'index.md', 'logo.png']

os.mkdir('./a')  # 创建目录
os.makedirs('./a/b/c')  # 递归创建目录
os.rmdir('./a/b/c')  # 删除目录
os.removedirs('./a/b')  # 删除目录

os.chdir('/')  # 设置目录位置
print(os.getcwd())
```

| 函数                 | 说明                  |
|--------------------|---------------------|
| `abspath(path)`    | 用于获取文件或目录的绝对路径      |
| `exists(path)`     | 用于判断文件或目录是否存在，返回布尔值 |
| `join(path, name)` | 将目录与目录或文件名拼接起来      |
| `splitext()`       | 分离文件名和拓展名           |
| `basename(path)`   | 从一个目录中提取文件名         |
| `dirname(path)`    | 从一个路径中提取文件路径，不包括文件名 |
| `isdir(path)`      | 用于判断是否为路径           |


```python
import os.path

print(os.path.abspath('./test.py'))  # /Users/curder/Codes/python-study/src/os/test.py
print(os.path.exists('./test.py'),os.path.exists('./main.py'))  # True False
print(os.path.join("/Users/curder/Codes/python-study/src/os", 'test.py'))  # /Users/curder/Codes/python-study/src/os/test.py
print(os.path.split('/Users/curder/Codes/python-study/src/os/test.py'))  # ('/Users/curder/Codes/python-study/src/os', 'test.py')
print(os.path.splitext('/Users/curder/Codes/python-study/src/os/test.py'))  # ('/Users/curder/Codes/python-study/src/os/test', '.py')
print(os.path.basename('/Users/curder/Codes/python-study/src/os/test.py'))  # test.py
print(os.path.dirname('/Users/curder/Codes/python-study/src/os/test.py'))  # /Users/curder/Codes/python-study/src/os
print(os.path.isdir('/Users/curder/Codes/python-study/src/os'))  # True
```

## 遍历目录

### 获取当前目录

```python
# 列出对应目录下的所有 .py 后缀文件

import os

path = os.getcwd()

lst = os.listdir(path)

for filename in lst:
    if filename.endswith(".py"):
        print(filename)
```


### 遍历所有目录
```python
# 遍历列出对应目录下的所有 .py 后缀文件

import os

path = '/Users/curder/Codes/python-study/src'

files = os.walk(path)

for dir_path, dir_name, file_name in files:
    for dir in dir_name:
        print(os.path.join(dir_path, dir))
        
    for file in file_name:
        print(os.path.join(dir_path, file))
```