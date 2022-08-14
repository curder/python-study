# Requests

[`requests` 模块](https://requests.readthedocs.io/en/latest/) 主要用于发送请求获取响应，该模块有很多的替代模块，比如 [`urllib` 模块](https://docs.python.org/3/library/urllib.html) 或 [`httpx` 模块](https://www.python-httpx.org/)等。

文档地址：[Requests Quickstart](https://requests.readthedocs.io/en/latest/user/quickstart/)

## 安装 `requests`

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


## 发送请求

### 发送 `GET` 请求
```python
import requests

r = requests.get('https://httpbin.org/json')

print(r.request.headers)  # 获取响应对象的请求头
print(r.url) # 获取响应 URL
print(r.status_code)  # 获取响应状态码
print(r.content)  # 获取二进制响应内容
print(r.headers['content-type'])  # 获取响应头 Content-Type
print(r.encoding)  # 获取编码字符集
print(r.json())  # 获取JSON输出内容
```

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

## 参数传递

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

## 发送JSON序列化数据

```python
import requests

url = 'https://httpbin.org/post'
payload = {'some': 'data'}
r = requests.post(url, json=payload)
```

## Cookies

- 获取响应 Cookies
    ```python
    import requests
    r = requests.get(
        url='https://httpbin.org/cookies/set?chocolate=chip',
        verify=False,
        allow_redirects=False
    )
    print(r.cookies['chocolate'])
    ```

- 自定义 cookies 请求
    将自定义的 `cookie` 发送到服务器，可以使用 `cookies` 参数
    ```python
    import requests
    cookies = dict(chocolate='chip')

    r = requests.get(
        url='https://httpbin.org/cookies',
        cookies=cookies,
        verify=False,
        allow_redirects=False
    )
    print(r.request.headers)
    ```
更多 Cookies 的使用[查看这里](https://requests.readthedocs.io/en/latest/user/quickstart/#cookies)。

## 请求超时时间

默认如果没有明确指定超时，则请求不会超时。

```python
import requests

requests.get('https://github.com/', timeout=1)  # 设置请求超时时间为 1 秒
```

`timeout` 不是整个响应下载的时间限制；相反，如果服务器在 `timeout` 秒内没有发出响应（更准确地说，如果在 `timeout` 秒内底层套接字上没有收到任何字节），则会引发异常。

## 请求上下文

```python
import requests

# requests.Session() <=> httpx.client()
with requests.Session() as client:
    r = client.get('https://httpbin.org/get')
```

### client 也具有跟 httpx 一样的请求方法#

```python
import requests

with requests.Session() as session:
    headers = {'X-Custom': 'value'}
    r = session.get('https://example.com', headers=headers)
    # client.post('...')
print(r.status_code, r.json())
```

### 跨请求共用配置
```python
import requests

url = 'https://httpbin.org/headers'
headers = {'User-Agent': 'my-app/1.0.0'}

with requests.Session() as session:
    session.headers.update(headers)
    r = session.get(url)
    print(r.json()['headers']['User-Agent'])
```
