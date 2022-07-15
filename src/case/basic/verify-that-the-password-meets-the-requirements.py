"""
校验密码是否满足要求

输入字符必须同时满足以下条件：
1. 字符串长度位于 6-20 之间
2. 必须包含至少 1 个小写字母
3. 必须包含至少 1 个大写字母
4. 必须包含至少 1 个数字
5. 必须包含至少 1 个特殊字符
"""
import re


def check_password(password):
    print(password)
    if not 6 < len(password) < 20:
        return False, {"message": "密码长度在 6 - 20 之间"}
    elif not re.compile(r'[a-z]', re.S).findall(password):
        return False, {"message": "密码必须包含小写字母"}
    elif not re.compile(r'[A-Z]', re.S).findall(password):
        return False, {"message": "密码必须包含大写字母"}
    elif not re.compile(r'\d', re.S).findall(password):
        return False, {"message": "密码必须包含数字"}
    elif not re.compile(r'[^\da-zA-Z]').findall(password):
        return False, {"message": "密码必须包含特殊字符"}
    else:
        return True, {"message": "密码满足要求"}


if __name__ == '__main__':
    while True:
        status, message = check_password(input("请输入密码："))
        if status:
            break
        print(message.get("message"))
