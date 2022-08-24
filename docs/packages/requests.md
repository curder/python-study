# Requests

[`requests` 模块](https://requests.readthedocs.io/en/latest/) 主要用于发送请求获取响应，该模块有很多的替代模块，比如 [`urllib` 模块](https://docs.python.org/3/library/urllib.html) 或 [`httpx` 模块](https://www.python-httpx.org/)等。

文档地址：[Requests Quickstart](https://requests.readthedocs.io/en/latest/user/quickstart/)

## 安装

requests 模块是一个第三方模块，需要在 python (虚拟)环境中额外安装，使用下面的命令直接在终端中安装：

```
pip install requests
```

::: details 安装 requests 输出
```text
➜  pip install requests
Looking in indexes: https://pypi.tuna.tsinghua.edu.cn/simple/, http://pypi.douban.com/simple/, http://mirrors.aliyun.com/pypi/simple/
Collecting requests
  Downloading http://mirrors.aliyun.com/pypi/packages/ca/91/6d9b8ccacd0412c08820f72cebaa4f0c0441b5cda699c90f618b6f8a1b42/requests-2.28.1-py3-none-any.whl (62 kB)
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 62.8/62.8 kB 1.0 MB/s eta 0:00:00
Collecting idna<4,>=2.5
  Downloading http://mirrors.aliyun.com/pypi/packages/04/a2/d918dcd22354d8958fe113e1a3630137e0fc8b44859ade3063982eacd2a4/idna-3.3-py3-none-any.whl (61 kB)
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 61.2/61.2 kB 973.2 kB/s eta 0:00:00
Collecting certifi>=2017.4.17
  Downloading http://mirrors.aliyun.com/pypi/packages/e9/06/d3d367b7af6305b16f0d28ae2aaeb86154fa91f144f036c2d5002a5a202b/certifi-2022.6.15-py3-none-any.whl (160 kB)
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 160.2/160.2 kB 1.8 MB/s eta 0:00:00
Collecting charset-normalizer<3,>=2
  Downloading http://mirrors.aliyun.com/pypi/packages/94/69/64b11e8c2fb21f08634468caef885112e682b0ebe2908e74d3616eb1c113/charset_normalizer-2.1.0-py3-none-any.whl (39 kB)
Collecting urllib3<1.27,>=1.21.1
  Downloading http://mirrors.aliyun.com/pypi/packages/d1/cb/4783c8f1a90f89e260dbf72ebbcf25931f3a28f8f80e2e90f8a589941b19/urllib3-1.26.11-py2.py3-none-any.whl (139 kB)
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 139.9/139.9 kB 1.3 MB/s eta 0:00:00
Installing collected packages: urllib3, idna, charset-normalizer, certifi, requests
Successfully installed certifi-2022.6.15 charset-normalizer-2.1.0 idna-3.3 requests-2.28.1 urllib3-1.26.11
```
:::

## 请求方法

```python
import requests

# 简单请求方法 get、post、put、delete、head、options
r = requests.get('https://httpbin.org/get')

r = requests.post('https://httpbin.org/post', data={"key": "value"})  # 传递字典给请求主体
r = requests.put('https://httpbin.org/put', data={"key": "value"})  # 传递字典给请求主体
r = requests.delete('https://httpbin.org/delete')
r = requests.head('https://httpbin.org/get')
r = requests.options('https://httpbin.org/get')
```

## 发送请求

### 发送 `GET` 请求
```python
import requests

r = requests.get('https://httpbin.org/json')

print(r.request.headers)  # 获取响应对象的请求头
print(r.url)  # 获取响应 URL
print(r.status_code)  # 获取响应状态码
print(r.headers['content-type'])  # 获取响应头 Content-Type
print(r.content)  # 获取二进制响应内容
print(r.encoding)  # 获取响应的编码字符集，也可以设置编码字符集
print(r.text)  # 获取响应文本内容
print(r.json())  # 获取JSON输出内容
```

### 查看响应对象

使用 `dir` 函数查看响应对象

```python
r = requests.get('https://httpbin.org/get')
print(dir(r))
```

### 查看属性详情

使用 `help` 函数查看属性详情

```python
r = requests.get('https://httpbin.org/get')
print(help(r))
print(help(r.request))
```

## 自定义请求头

如果想将自定义的 HTTP 请求头添加到请求中，只需将 dict 字典传递给 `headers` 参数。

```python
import requests

r = requests.get('https://httpbin.org/get', headers={'user-agent': 'awesome-app/1.0.0'})
print(r.request.headers)
```


## 传递参数

`requests` 支持直接将字典参数传递给 `params` 参数。

```python
import requests

payload = {"key": "value", "key2": "value2"}
r = requests.get('https://httpbin.org/get', params=payload)
print(r.url) # https://httpbin.org/get?key2=value2&key1=value1

# 将列表作为值传递
payload = {'key1': 'value1', 'key2': ['value2', 'value3']}
r = requests.get('https://httpbin.org/get', params=payload)
print(r.url)  # https://httpbin.org/get?key1=value1&key2=value2&key2=value3
```
> 任何值为 `None` 的字典键都不会添加到 URL 的查询字符串中。

## 请求主体

### 传递字典

发送 POST 请求时可以传递字典作为请求主体。

```python
import requests

payload = {'username': 'curder', 'password': 'test'}
r = requests.post('https://httpbin.org/post', data=payload)
print(r.text)

r_dict = r.json()
print(r_dict.get('form'))  # 返回响应字典
```

### 传递 json

```python
import requests

url = 'https://httpbin.org/post'
payload = {'some': 'data'}
r = requests.post(url, json=payload)
print(r.text)
```

## HTTP 身份验证
requests 可以发送 [HTTP身份验证](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Authentication) 的信息给服务端。

```python
auth = ('curder', 'test')
r = requests.get('https://httpbin.org/basic-auth/curder/test', auth=auth)

print(r.ok)
```


## 请求超时时间

默认如果没有明确指定超时，则请求不会超时。

```python
import requests

try:
    r = requests.get('https://httpbin.org/delay/3', timeout=2)  # 设置请求超时时间为 2 秒
except requests.ReadTimeout:
    print('read timeout')
    # send mail or notification.
```

`timeout` 不是整个响应下载的时间限制；相反，如果服务器在 `timeout` 秒内没有发出响应（更准确地说，如果在 `timeout` 秒内底层套接字上没有收到任何字节），则会引发异常。


## 响应状态码

- 正常响应
```python
import requests

r = requests.get('https://httpbin.org/get')
print(r.status_code, r.status_code == requests.codes.ok) # 200 True
```

- 404响应

```python
import requests

r = requests.get('https://httpbin.org/status/404')
print(r.status_code) # 404
r.raise_for_status  # 获取错误详情，如果没有错误则返回 None
```

## 响应头

```python
import requests

r = requests.get('https://httpbin.org/get')

print(r.headers)  # 获取所有响应头
print(r.headers['Content-Type'])  # 获取某个响应头
print(r.headers.get('content-type'))  # 使用 get 方法获取具体响应头
```
> 响应头名不区分大小写


## Cookies

- 获取响应 Cookies
    在 httpbin.org 站点有一个 `https://httpbin.org/cookies` 的 GET 请求地址，响应中返回当前 cookies 值。我们可以借助它查看我们请求时设置的 cookies 是否成功。例如：
    ```python
    import requests

    cookies = {"chocolate": "chip"} # 配置 cookies 字典
    r = requests.get('https://httpbin.org/cookies', cookies=cookies)  # 获取 cookies
    print(r.text)
    ```

- 使用 `RequestsCookieJar` 自定义Cookies
    也可以通过 `requests.cookies.RequestsCookieJar()` 初始化一个 Cookies，对 Cookies 进行精细化的配置。
    ```python
    jar = requests.cookies.RequestsCookieJar()
    jar.set('tasty_cookie', 'yum', domain='httpbin.org', path='/cookies')
    jar.set('gross_cookie', 'blech', domain='httpbin.org', path='/elsewhere')
    url = 'https://httpbin.org/cookies'
    r = requests.get(url, cookies=jar)
    print(r.text)
    ```

- 自定义 Cookies 请求
    也可以通过上下问的 `cookies` 属性设置 Cookie，并将自定义的 `cookie` 发送到服务器。
    ```python
    import requests

    with requests.Session() as session:
        jar = session.cookies
        jar.set('tasty_cookie', 'yum', domain='httpbin.org', path='/cookies')
        jar.set('gross_cookie', 'blech', domain='httpbin.org', path='/elsewhere') # 不会被设置，因为访问的不是这个uri
        url = 'https://httpbin.org/cookies'
        r = requests.get(url, cookies=jar)
        print(r.text)
    ```

## 重定向和请求记录

通过 `history` 属性对响应对象的历史属性来跟踪重定向。

- 从http跳转到https
```python
import requests

# 模拟 302 跳转
r = requests.get('https://httpbin.org/redirect-to', params={"url": "https://www.baidu.com"})

print(r.url)  # https://www.baidu.com
print(r.status_code)  # 200
print(r.history)  # [<Response [302]>]
```

如果使用 `GET`、`OPTIONS`、`POST`、`PUT`、`PATCH` 或 `DELETE`，可以使用 `allow_redirects` 参数禁用重定向处理：

```python
import requests
r = requests.get('http://github.com/', allow_redirects=False)

print(r.status_code)  # 301
print(r.history)  # []
```

如果使用 `HEAD` 请求方法发起请求，也可以启用重定向：

```python
import requests


r = requests.head('https://httpbin.org/redirect-to', params={"url": "https://www.baidu.com"}, allow_redirects=True)

print(r.url)  # https://www.baidu.com
print(r.history)  # [<Response [302]>]
```

## 请求上下文

使用请求上下文模拟登录后在发送请求的操作。

```python
import requests

login_url = 'https://passport.17k.com/ck/user/login'  # 登录URL
login_form_data = {
    "loginName": "",  # 输入登录用户名
    "password": "mxb_DVZ9hyk.dhk3",  # 输入密码
}

book_self_url = 'https://user.17k.com/ck/author/shelf?page=1&appKey=2406394919'  # 登录后要操作的URL

with requests.Session() as session:  # 记录请求当前会话
    # 登录
    login_response = session.post(url=login_url, data=login_form_data)
    # print(login_response.cookies)  # 查看服务器响应cookies

    # 获取我的书架
    book_self_response = session.get(book_self_url).json()

    # 打印输出JSON响应结果
    print(book_self_response)

```

### 跨请求共用配置

公用请求头

```python
import requests

with requests.Session() as session:
    headers = {'User-Agent': 'my-app/1.0.0'}
    session.headers.update(headers)
    r = session.get('https://httpbin.org/headers')
    r2 = session.get('https://httpbin.org/get')
    print(r.json()['headers']['User-Agent'], r2.json()['headers'].get('User-Agent'), sep="\n")
```