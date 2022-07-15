"""
获取所有邮箱地址

邮箱地址正则表达式：
"""
import re

regex = re.compile(r'[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+', re.S)

if __name__ == '__main__':
    content = '''
    寻隐者127325@qq.com不遇
    朝代：唐4587ds2#qq.com代
    作者：贾pyton-abc@gmail.com岛
    松下python@666.com问童子，言师采Pyton@sina.com.cn药去。
    只在hello_python@gmail.com此山中，云深World@163.com不知处。
'''
    result = regex.findall(content)
    print(result)
