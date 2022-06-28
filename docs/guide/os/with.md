# with语句

`with` 语句可以自动管理上下文资源，不论什么原因跳出 `with` 块，都能确保文件正确的关闭，以此来达到释放资源的目的。

可以使用 `with` 来打开文件。

```python
# 使用 with 方式赋值二进制文件
with open('./logo.png', 'br') as origin_file:
    with open('./new-logo.png', 'bw') as new_file:
        new_file.write(origin_file.read())
```

`with` 语句体会自动调用上下文管理器 `__enter__` 和 `__exit__` 方法。

```python
class Cls:
    def __enter__(self):
        print("__enter__ method handle...")
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        print("__exit__ method handle...")

    @staticmethod
    def show():
        print('show method handle...')


with Cls() as cls:  # 相当于 cls=new Cls() 
    cls.show()
```