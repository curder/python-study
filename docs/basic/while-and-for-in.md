# 循环结构

## while 循环

while 循环的执行流程为：

1. 初始化变量
2. 条件判断
3. 条件执行体
4. 改变变量

```python
a = 1
while a < 10:
    print(a, end=" ")  # 1 2 3 4 5 6 7 8 9
    a += 1
```

### 计算 `1...100` 之间的所有偶数和

```python
count = 0 # 存储计算结果
n = 1 # 开始数
total = 100 # 最大数

while n <= total:
    if n % 2 == 0:
        count += n
    n = n + 1

print(f"从1到{total}之间的所有偶数和为：{count}")  # 2550
```