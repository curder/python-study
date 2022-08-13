# Jupyter Lab

## 在 CentOS 上安装 JupyterLab

Jupyter 能实现随时随地在浏览器上进行 Python 处理数据等程序。

JupyterLab 是一个 Web 应用，能让用户将说明文本、数学方程、代码和可视化内容全部组合到一个易于共享的文档中。

与常规的 py 文件不同的是，JupyterLab 主要运行的是 ipython，ipython 是一个 python 的交互式 shell ，非常适合进行科学计算和交互可视化。

### 安装

```bash
pip install jupyterlab
```

### 生成访问密码

```bash
ipython # 1.输入命令进入 ipython 终端

# 2. 输入下列内容
from notebook.auth import passwd
passwd()

# 3. 输入访问密码，并记录下加密字符串，需要在后面配置
```


### 生成配置文件

```bash
jupyter-lab --generate-config
```

一般会生成配置文件在 `/home/USERNAME/.jupyter/jupyter_lab_config.py`，其中 `USERNAME` 为当前登录用户名。

### 文件末尾添加配置内容

```
c.ServerApp.ip = '*' # 所有绑定服务器的IP都能访问，若想只在特定ip访问，输入ip地址即可
c.ServerApp.port = 18889 # 将端口设置为自己喜欢的吧，默认是0
c.LabServerApp.open_browser = False # 我们并不想在服务器上直接打开Jupyter Notebook，所以设置成False
c.ServerApp.root_dir = "/var/www/codes/python-projects/jupyter-lab/"
c.ServerApp.allow_root = False
c.ServerApp.password = '' # 进入到 python或者ipython里执行：`from jupyter_server.auth import passwd; passwd()`
```

### 添加Nginx配置

```nginx
upstream jupyter {
    server 127.0.0.1:18889; # 主机端口，对应配置文件 `/home/USERNAME/.jupyter/jupyter_lab_config.py` 中的端口号
}

server {
    listen 80 ;  # 监听 80 端口，这里注意不要和 jupyter 端口一致
    gzip on;
    server_name jupyter.DOMAIN.com; # 修改为自己的域名

    access_log /var/log/nginx/jupyter.DOMAIN.com_access.log main;
    error_log  /var/log/nginx/jupyter.DOMAIN.com_error.log;

    location / {
        proxy_redirect off;
        proxy_pass http://jupyter; # 设置代理服务器，请求发送

        proxy_set_header  Host                $http_host;
        proxy_set_header  X-Real-IP           $remote_addr;
        proxy_set_header  X-Forwarded-Ssl     on;
        proxy_set_header  X-Forwarded-For     $proxy_add_x_forwarded_for;

        # 使得Nginx支持websocket
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header  X-Forwarded-Proto   $scheme;
        proxy_set_header  X-Frame-Options     SAMEORIGIN;

        client_max_body_size        100m;
        client_body_buffer_size     128k;

        proxy_buffer_size           4k;
        proxy_buffers               4 32k;
        proxy_busy_buffers_size     64k;
        proxy_temp_file_write_size  64k;
    }
}
```


### 开机自启

使用下面的脚本可以实现开机自启

```bash
echo '[Unit]
Description=Jupyter Lab
After=network.target
[Service]
Type=simple
ExecStart=/var/www/codes/python-projects/venv/bin/python /var/www/codes/python-projects/venv/bin/jupyter-lab --config=/home/USERNAME/.jupyter/jupyter_lab_config.py
User=USERNAME
Group=GROUP_USERNAME
WorkingDirectory=/var/www/codes/python-projects/jupyter-lab
# 文件路径名
Restart=always
RestartSec=10
[Install]
WantedBy=multi-user.target' > /etc/systemd/system/jupyter.service
```

> 将 `USERNAME` 修改为当前运行的用户, `GROUP_USERNAME` 修改为web服务器运行用户，比如 nginx。

```bash
systemctl enable jupyter #设置开机自启
systemctl start jupyter #启动
```

### Supervisor 守护进程

```bash
[program:jupyter-lab]
directory=/var/www/codes/python-projects/jupyter-lab
command=/bin/bash -E -c /shell-path/run-jupyter-lab.sh
autostart=true
autorestart=true
stopsignal=INT
stopasgroup=true
killasgroup=true
user=USERNAME
```
> 将 `USERNAME` 修改为当前运行的用户。

#### run-jupyter-lab.sh

```bash
#!/bin/bash

/var/www/codes/python-projects/venv/bin/python /var/www/codes/python-projects/venv/bin/jupyter-lab --config=/home/USERNAME/.jupyter/jupyter_lab_config.py
```

#### 重启 Supervisor
```bash
sudo systemctl restart supervisor.service
```

## 无法使用异步io

当我们在使用 JupyterLab 中按照正常的方式编写异步io逻辑时会抛出：`RuntimeError: asyncio.run() cannot be called from a running event loop` 错误。比如：

```python
import asyncio

async def main():
    print('hello')
    await asyncio.sleep(1)
    print('world')

if __name__ == '__main__':
    asyncio.run(main())
```

以上代码逻辑在 Jupyter Lab 中无法正常运行。

解决方法一：
```python {9}
import asyncio

async def main():
    print('hello')
    await asyncio.sleep(1)
    print('world')

if __name__ == '__main__':
    await main()
```
> 详情查看这里，[asyncio.run() cannot be called from a running event loop](https://stackoverflow.com/questions/55409641/asyncio-run-cannot-be-called-from-a-running-event-loop)

解决方法二：
```python {9-10}
import asyncio

async def main():
    print('hello')
    await asyncio.sleep(1)
    print('world')

if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.create_task(main())
```
> 详情查看这里, [Running asyncio](https://nocomplexity.com/documents/jupyterlab/tip-asyncio.html)

解决方法三，不推荐：

```python {2-3}
import asyncio
import nest_asyncio
nest_asyncio.apply()

async def main():
    print('hello')
    await asyncio.sleep(1)
    print('world')

if __name__ == '__main__':
    asyncio.run(main())
```