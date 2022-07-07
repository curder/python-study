"""
获取 17k小说网 我的书架图书列表

1. 初始化一个session会话
2. 使用会话登录
3. 再次使用会话获取我的书架图书列表

目的：由于获取我的书架上的图片列表数据需要用户登录后再进行实际操作，所以需要我们在登录前后使用的是同一个会话。

pip3 install requests
"""

import pprint

import requests

login_url = 'https://passport.17k.com/ck/user/login'
login_form_data = {
    "loginName": "",  # 输入登录用户名
    "password": "mxb_DVZ9hyk.dhk3",  # 输入密码
}

book_self_url = 'https://user.17k.com/ck/author/shelf?page=1&appKey=2406394919'

session = requests.session()  # 记录请求当前会话

# 登录
login_response = session.post(url=login_url, data=login_form_data)
# print(login_response.cookies) # 查看服务器响应cookies

# 获取我的书架
book_self_response = session.get(book_self_url).json()

# 打印输出JSON响应结果
pprint.pprint(book_self_response)
