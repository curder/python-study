"""
获取文件中所有手机号

匹配电话号的正则表达式：1[3-9]\d{9}

"""

import re


if __name__ == '__main__':
    regex = re.compile(r'1[3-9]\d{9}', re.S)
    with open('./web-page-phone-number.txt') as f:
        content = f.read()
        result = regex.findall(content)
        print(result)
