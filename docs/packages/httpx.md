# httpx

HTTPX 依赖 Python 版本 3.6+，使用异步请求需要 Python 版本 3.8+

## 安装

使用 pip 安装:

```bash
pip install httpx

pip install 'httpx[http2]' # 如果需要 HTTP/2 支持
```

## 简单使用

### requests 和 httpx 对比

`httpx` 与 `requests` 库的基本使用方法几乎是一模一样。

::: details 点击展开 `requests` 代码

```python
import requests

r = requests.get('https://api.github.com/user', auth=('user', 'password'))

print(r.status_code)
print(r.content)
print(r.headers['content-type'])
print(r.encoding)
print(r.json())
```

:::

::: details 点击展开 `httpx` 代码

```python
import httpx

r = httpx.get('https://api.github.com/user', auth=('user', 'password'))

print(r.status_code)
print(r.content)
print(r.headers['content-type'])
print(r.encoding)
print(r.json())
```

:::

### 请求方法

httpx 支持常见的请求方法：`get`、`post`、`put`、`delete`、`head`、`options`

```python
import httpx

# 简单请求方法 get、post、put、delete、head、options
r = httpx.get('https://httpbin.org/get')

r = httpx.post('https://httpbin.org/post', data={"key": "value"})  # 传递字典给请求主体
r = httpx.put('https://httpbin.org/put', data={"key": "value"})  # 传递字典给请求主体
r = httpx.delete('https://httpbin.org/delete')
r = httpx.head('https://httpbin.org/get')
r = httpx.options('https://httpbin.org/get')
```

### 参数传递

httpx 支持直接将字典参数传递给 `params` 参数。

```python
import httpx

params = {"key": "value", "key2": "value2"}
r = httpx.get('https://httpbin.org/get', params=params)
```

### 发送JSON序列化数据

```python
import httpx

json = {'integer': 123, 'boolean': True, 'list': ['a', 'b', 'c']}
r = httpx.post('https://httpbin.org/post', json=json)
```

### Cookie

```python
import httpx

r = httpx.get('https://httpbin.org/cookies/set?chocolate=chip')
print(r.cookies['chocolate'])
```

### 基础授权

```python
import httpx

httpx.get('https://example.com', auth=('username', 'password'))
```

### 请求超时时间

默认为5秒

```python
import httpx

httpx.get('https://github.com/', timeout=1)  # 设置请求超时时间为 1 秒
```

## 请求上下文

```python
import httpx

# httpx.Client() <=> requests.Session()
with httpx.Client() as client:
    r = client.get('https://httpbin.org/get')
```

### client 也具有跟 httpx 一样的请求方法

```python
import httpx

with httpx.Client() as client:
    headers = {'X-Custom': 'value'}
    r = client.get('https://example.com', headers=headers)
    # client.post('...')
print(r.status_code, r.json())
```

### 跨请求共用配置

```python
import httpx

url = 'https://httpbin.org/headers'
headers = {'User-Agent': 'my-app/1.0.0'}
with httpx.Client(headers=headers) as client:
    r = client.get(url)
    print(r.json()['headers']['User-Agent'])
```


## 异步请求

```python
import httpx
import asyncio


async def main():
    async with httpx.AsyncClient() as client:
        response = await client.get('https://httpbin.org/get', timeout=1)
        print(response)

if __name__ == '__main__':
    asyncio.run(main())
```


## 性能比较

- Requests: `50.05813503265381` seconds.
- Httpx: `51.318145751953125` seconds.

::: details `httpx` 和 `requests` 速度对比
```python
import time
import httpx
import requests


def main_requests():
    pokemons = []

    for number in range(1, 51):
        pokemon_url = f'https://pokeapi.co/api/v2/pokemon/{number}'
        response = requests.get(pokemon_url)
        pokemons.append(response.json()['name'])

    # for pokemon in pokemons:
        # print(pokemon)

start_time = time.time()
main_requests()
print(f"Requests: {time.time() - start_time} seconds.")

def main_httpx():
    pokemons = []

    for number in range(1, 51):
        pokemon_url = f'https://pokeapi.co/api/v2/pokemon/{number}'
        response = httpx.get(pokemon_url)
        pokemons.append(response.json()['name'])

    # for pokemon in pokemons:
    #     print(pokemon)

start_time = time.time()
main_httpx()
print(f"Httpx: {time.time() - start_time} seconds.")
```
:::

- Requests with Session(): `17.950651168823242` seconds.
- Httpx with Client(): `16.29722499847412` seconds.

::: details `requests.Session()` <==> `httpx.Client()`
```python
import time
import httpx
import requests


def main_requests():
    pokemons = []

    with requests.Session() as session:

        for number in range(1, 51):
            pokemon_url = f'https://pokeapi.co/api/v2/pokemon/{number}'
            response = session.get(pokemon_url)
            pokemons.append(response.json()['name'])

        # for pokemon in pokemons:
        #     print(pokemon)

start_time = time.time()
main_requests()
print(f"Requests with Session(): {time.time() - start_time} seconds.")

def main_httpx():
    pokemons = []

    with httpx.Client() as client:
        for number in range(1, 51):
            pokemon_url = f'https://pokeapi.co/api/v2/pokemon/{number}'
            response = client.get(pokemon_url)
            pokemons.append(response.json()['name'])

        # for pokemon in pokemons:
        #     print(pokemon)

start_time = time.time()
main_httpx()
print(f"Httpx with Client(): {time.time() - start_time} seconds.")
```
:::


- Httpx Async: `17.0742449760437` seconds.
- Httpx Async with tasks: `3.0165648460388184` seconds.
::: details Httpx Async with tasks 

```python
import time
import httpx
import asyncio


async def main1():
    async with httpx.AsyncClient() as client:
        pokemons = []
        for number in range(1, 51):
            pokemon_url = f'https://pokeapi.co/api/v2/pokemon/{number}'
            response = await client.get(pokemon_url)
            pokemons.append(response.json()['name'])

        # for pokemon in pokemons:
        #     print(pokemon)

start_time = time.time()
asyncio.run(main1())
print(f"Httpx Async: {time.time() - start_time} seconds.")


async def get_pokemon(client, url):
    response = await client.get(url)
    return response.json()['name']

async def main2():
    async with httpx.AsyncClient() as client:
        tasks = []
        for number in range(1, 51):
            url = f'https://pokeapi.co/api/v2/pokemon/{number}'
            tasks.append(asyncio.create_task(get_pokemon(client, url=url)))
        original_pokemon = await asyncio.gather(*tasks)
        
        # for pokemon in original_pokemon:
        #     print(pokemon)

start_time = time.time()
asyncio.run(main2())
print(f"Httpx Async with tasks: {time.time() - start_time} seconds.")
```
:::

总结：假设请求API接口响应速度不变的情况下，使用AsyncClient + tasks队列同时发送多个请求会更加高效，其次是使用连接池发送请求。

更多参考[Asynchronous HTTP Requests in Python with HTTPX and asyncio](https://www.twilio.com/blog/asynchronous-http-requests-in-python-with-httpx-and-asyncio)

## 使用命令行客户端

### 安装 `httpx[cli]`

```bash
pip install 'httpx[cli]'
```

### 参数说明

使用 `--help` 查看当前 `httpx` 命令行客户端支持的参数：

```bash
httpx --help
```

::: details httpx 参数说明
```text
用法：httpx <URL> [选项]


 -m, --method METHOD 请求方法，如GET、POST、PUT、PATCH、DELETE、OPTIONS、HEAD。
                                 [默认：GET，如果包含请求正文，则为 POST]

 -p, --params <NAME VALUE> ... 要包含在请求 URL 中的查询参数。

 -c, --content TEXT 要包含在请求正文中的字节内容。

 -d, --data <NAME VALUE> ... 要包含在请求正文中的表单数据。

 -f, --files <NAME FILENAME> ... 要包含在请求正文中的表单文件。

 -j, --json TEXT 要包含在请求正文中的 JSON 数据。

 -h, --headers <NAME VALUE> ... 在请求中包含额外的 HTTP 标头。

 --cookies <NAME VALUE> ... 要包含在请求中的 Cookie。

 --auth <USER PASS> 请求中包含的用户名和密码。为密码指定“-”以使用密码提示。请注意，使用
                                 --verbose/-v 将公开授权标头，包括以简单可逆格式编码的密码。

 --proxies URL 通过代理发送请求。应该是提供代理地址的 URL。

 --timeout FLOAT 用于网络操作的超时值，例如建立连接、读取一些数据等... [默认值：5.0]

 --follow-redirects 自动跟随重定向。

 --no-verify 禁用 SSL 验证。

 --http2 如果远程服务器支持，则使用 HTTP/2 发送请求。

 --download FILE 将响应内容保存为文件，而不是显示它。

 -v, --verbose 详细输出。显示请求和响应。

 --help 显示此消息并退出。
```
:::

### 简单使用

- `get` 请求
    > 若要在 `GET` 请求中添加请求参数，可以使用 `-p` 或 `--params` 传递参数的名称和值
    ```bash
    httpx https://httpbin.org/get  # 基础用法
  
    httpx -p key1 value1 -p key2 value2 https://httpbin.org/get  # 添加请求参数
    ```

- `post` 请求
    > 若要以 `POST` 传递表单数据，可以使用 `-m` 或 `--method` 指定採用 `POST` 方式，并以 `-d` 或 `--data` 指定表单参数和对应的值
    ```bash
    # 如果使用 -d 参数传递表单数据，默认可以将请求方法参数 `-m` 删除
    # 默认会以 `POST` 方法发出请求
    httpx -d key1 value1 -d key2 value2 https://httpbin.org/post
    # 等同于 
    httpx -m POST -d key1 value1 -d key2 value2 https://httpbin.org/post
  
    # 发送 JSON 请求
    httpx -j '{"key1": "value1", "key2": "value2"}' https://httpbin.org/post
    ```

- `put` 请求
    ```bash
    httpx -m PUT https://httpbin.org/put 
    ```

- `patch` 请求
    ```bash
    httpx -m PATCH https://httpbin.org/patch
    ```

- `delete` 请求
    ```bash
    httpx -m DELETE https://httpbin.org/delete
    ```

- `options` 请求
    ```bash
    httpx -m OPTIONS https://httpbin.org/post
    ```

- `head` 请求
    ```bash
    httpx -m HEAD https://httpbin.org/get
    ```

### `-f` 文件上传

若要上传文件，可以用 `-f` 或 `--files` 参数指定文件名与文件路径。

```bash
httpx -f key1 /path/my_file.jpg -f /path/another_my_file.txt https://httpbin.org/post
```

### `--cookies` 传递 cookies

若要传递 `cookies`，可以使用 `--cookies` 参数指定 cookies 的名称与值。

```bash
httpx --cookies key1 value1 --cookies key2 value2 https://httpbin.org/get
```

###  `-h` 添加请求头
若要传递请求头 `headers`，可以使用 `-h` 或者 `--headers` 参数指定 请求头的名称和值
```bash
httpx -h user-agent 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.81 Safari/537.36' https://httpbin.org/get
```
