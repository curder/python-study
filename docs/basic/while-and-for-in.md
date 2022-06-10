# 循环结构

## while 循环 {#while}

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
count = 0  # 存储计算结果
n = 1  # 开始数
total = 100  # 最大数

while n <= total:
    if n % 2 == 0:
        count += n
    n = n + 1

print(f"从1到{total}之间的所有偶数和为：{count}")  # 2550
```

## for-in 循环 {#for-in}

`for-in`循环表示从字符串或序列等其他数据结构中依次取值。

注意：for-in遍历的对象必须是可以迭代的。

```python
# for-in循环字符串
for item in 'Python':
    print(item, end=" ")  # P y t h o n

# for-in循环range迭代器
for item in range(10):
    print(item, end=" ")  # 0 1 2 3 4 5 6 7 8 9

# for-in忽略循环变量
for item in range(2):
    print('hello', end=" ")  # hello hello
```

### 使用 for-in 求 1...100 之间偶数和

```python
count = 0  # 存储计算结果
n = 1  # 开始数
total = 100  # 最大数
for i in range(n, total + 1):
    if i % 2 == 0:
        count += i

print(f"从{n}到{total}之间的所有偶数和为：{count}")  # 从1到100之间的所有偶数和为：2550
```

### 使用 for-in 找到水仙花数

什么是水仙花数？例如：`153 = 3 * 3 * 3 + 5 * 5 * 5 + 1 * 1 * 1`

```python
for item in range(100, 1000):
    first = item // 100  # 获取百位上的数
    middle = ((item // 10) % 10)  # 获取十位数的值
    last = item % 10  # 获取个位数的值
    if first ** 3 + middle ** 3 + last ** 3 == item:
        print(item, end=" ")  # 153 370 371 407 
```

## break 关键字 {#break}

`break` 语句用于结束循环结构，通常会配合 `if` 语句使用。

```python
# 从键盘录入数字，如果正确则结束循环
for item in range(3):
    pwd = input("Pls enter your number: ")

    if int(pwd) == 11111:
        print('Success.')
        break  # 执行到里会跳出上层 for-in 循环
    else:
        print('error, Pls retry.')
```

## continue 语句 {#continue}

用于结束当前循环，进入下一次循环，通常与分支结构中的 `if` 一起使用。

```python
# 使用 continue 输出 [1,51)之间所有5的倍数的整数

for item in range(1, 51):
    if bool(item % 5):
        continue
    print(item, end=" ")  # 5 10 15 20 25 30 35 40 45 50
```


