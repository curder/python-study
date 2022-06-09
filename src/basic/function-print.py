# 输出内容
# 1. print函数输出数字
print(1)  # 1
print(1.22)  # 1.22

# 2. print函数输出字符串
print('hello')  # hello
print("world")  # world

# 3. print函数输出含有运算符的表达式，输出表达式运算后的结果
print(1 + 1)  # 2

# 将数据输出到文件中
fp = open('./print.txt', 'a+')  # 输出到当前目录下的 print.txt 文件
print('hello world', file=fp)
fp.close()

# 不进行换行输出
print('hello', 'world', 'python', '!')  # hello world python !
