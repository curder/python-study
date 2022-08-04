# 文件操作

## 向文件输出"奋斗成就更好的你"

- 使用 `write` 方法
    ```python
    f = open('./test.txt', 'w', encoding='utf-8')
    f.write('奋斗成就更好的你')
    f.close()
    ```

- 使用 `print` 函数
    ```python
    f = open('./test2.txt', 'w', encoding='utf-8')
    print('奋斗成就更好的你', file=f)
    f.close()
    ```

- 使用 `with` 语句
    ```python
    with open('./test3.txt', 'w') as f:
        f.write('奋斗成就更好的你')
    ```
  
以上不同的方式均能将字符写入到指定文件。