# 流程判断

## if else 分支判断

```python
current_monty = 1000  # 总余额
get_money = int(input('请输入取款金额：'))  # 获取用户输入的金额

if current_monty >= get_money:
    current_monty -= get_money
    print(f"取款成功，取款：{get_money} 当前余额：{current_monty}", )
else:
    print(f"您当前余额不足，当前余额为：{current_monty}")
```

## if elif else 多分支判断

```python
score = int(input("Please enter your score: "))
if 90 <= score <= 100:
    print("A")
elif 80 <= score < 90:
    print("B")
elif 70 <= score < 80:
    print("C")
elif 60 <= score < 70:
    print("D")
elif 0 <= score < 60:
    print("E")
else:
    print("incorrect input")
```

## 条件表达式

条件表达式是 `if`、`else` 的简写。

语法结构为： `x if condition else y`

当条件 `condiction` 成立则表达的结果为 `x`，否则为 `y`

```python
number_one = input('请输入一个整数：')
number_two = input('请输入另一个整数：')

result = (number_one + " 大于或等于 " + number_two) if int(number_one) >= int(number_two) else (
        number_one + ' 小于 ' + number_two)
print(result)

# 上面的if写法等价于：
if int(number_one) >= int(number_two):
    print(f"{number_one} 大于或等于 {number_two}")
else:
    print(f"{number_one} 小于 {number_two}")
```
