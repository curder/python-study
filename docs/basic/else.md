# else 语句 {#else}

## 与 else 语句配合 {#works-with-else-statement}

- `if-else` 表示条件不成立时执行else
- `while-else` 没有碰到break时，执行else
- `for-else` 没有碰到break时，执行else


### if-else 和 for-else {#if-else-and-for-else}
```python {8-9}
for _ in range(3):
    pwd = input("Pls enter your password：")
    if pwd == '123':
        print("correct password")
        break
    else:
        print("incorrect password")
else:
    print("too many times retry.")
    
# 运行结果如下： 
#
# Pls enter your password：111        # 输入错误 111
# incorrect password
# Pls enter your password：124        # 输入错误 124
# incorrect password
# Pls enter your password：111        # 输入错误 111
# incorrect password
# too many times retry.
```

### while-else {#while-else}

```python
i = 0
while i < 3:
    pwd = input("Pls enter your password：")
    if pwd == '123':
        print("correct password")
        break
    else:
        print("incorrect password")
    i += 1
else:
    print("too many times retry.")

# 运行结果如下：  
#
# Pls enter your password：111        # 输入错误 111
# incorrect password
# Pls enter your password：222        # 输入错误 222
# incorrect password
# Pls enter your password：333        # 输入错误 333
# incorrect password
# too many times retry.
```

