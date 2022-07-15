# 函数返回值

1. 函数没有返回值：函数执行完毕后不需要给外部提供处理结果，则无需 `return` 语句。
    ```python
    def func():
        print('hello world')
    ```
2. 函数返回值为1个的情况，直接使用 `return Result`
    ```python
    def func():
        return 'hello world'
    ```

3. 函数返回值有多个的情况，返回的结果为元组
    ```python
    def calc(args):
        odd = []
        even = []

        for i in args:
            if i % 2:
                odd.append(i)
            else:
                even.append(i)
        return odd, even


    print(calc([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))  # ([1, 3, 5, 7, 9], [2, 4, 6, 8, 10])
    ```
