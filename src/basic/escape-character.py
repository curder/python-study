# 转义字符
# \n newline 转义换行
# \t tab 转义水平制表符，tab键
# \r return 转义回车
# \b backspace 转义退格

print('hello\nworld')  # hello\nworld
print('hello\tworld')  # hello	world
print('hello\rworld')  # world
print('hello\bworld')  # hellworld

# 转义单双引号
print('you\'re my friend')  # you're my friend
print("\"say\"")  # "say"

# 原字符，不解析输出的转义字符，可以使用r或者R。注意：最后一个输出的字符不能是 \ 结尾
print(r'hello\nworld')  # hello\nworld
