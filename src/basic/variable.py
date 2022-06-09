# 变量的定义和使用

name = "curder"  # 变量的定义和赋值
print("值：", name)  # 变量的使用
print("标识：", id(name))  # 获取变量存储位置
print("类型：", type(name))  # 获取变量类型

# 变量重新赋值后，之前赋值的内存空间指向将失效，成为内存垃圾
name = "luo"
print("值：", name)  # 变量的使用
print("标识：", id(name))  # 获取变量存储位置
print("类型：", type(name))  # 获取变量类型
