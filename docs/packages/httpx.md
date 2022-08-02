# httpx

HTTPX 依赖 Python 版本 3.6+，使用异步请求需要 Python 版本 3.8+

## 安装

使用 pip 安装:

```bash
pip install httpx

pip install httpx[http2] # 如果需要 HTTP/2 支持
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