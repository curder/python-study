# 包

Python 中的包是一个分层次的目录结构，它将一组功能相近的模块组织在一个目录下。一方面可以使得代码规范，另一方面可以规避模块名称的冲突。

## 包与目录的区别

- 包含 `__init__.py` 文件的目录称之为包
- 目录里通常不包含 `__init__.py` 文件

#  包的导入

```text
import 包名.模块名 
```