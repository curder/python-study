"""
获取字符串中包含的所有手机号

比如文本：
白13800138000日依12345678910111213141516山尽，黄河18800184541入海流。
欲654321穷千里目，更上15523545541一层楼。
"""
import re

if __name__ == '__main__':
    str = '''
    白13800138000日依12345678910111213141516山尽，黄河18800184541入海流。
    欲654321穷千里目，更上15523545541一层楼。
    '''
    result = re.compile(r'1[3-9]\d{9}', re.S).findall(str)
    print(result)