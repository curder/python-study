# Python 安装

Python是跨平台的，它可以运行在Windows、Mac和各种Linux/Unix系统上。

在Windows上写Python程序，放到Linux上也是能够运行的。

要开始学习Python编程，首先就得把Python安装到你的电脑里。

安装后，你会得到Python解释器（就是负责运行Python程序的），一个命令行交互环境，还有一个简单的集成开发环境。

## 在 Mac 上安装Python

如果使用的是Mac，系统是 OSX >= 10.9，那么系统自带的 Python 版本是2.7。

要安装最新的Python 3.9.12，有两个方法：

- 方法一：从Python官网下载Python 3.9.12的[安装程序](https://www.python.org/downloads/)，找到并下载后双击运行并安装；

- 方法二：如果安装了[Homebrew](https://brew.sh/)，直接通过命令`brew install python3`安装即可。

> 如果下载模块太慢或者无法下载模块可以参考下方的 "配置 pip 源" 修改 `pip3` 源。 

### 安装和配置多版本 Python

使用 [`pyenv`](https://github.com/pyenv/pyenv) 对 Python 多版本进行管理。

```bash
brew install pyenv # 安装 pyenv

pyenv install -l # 查看可安装的 Python 版本
pyenv versions # 查看本机安装 Python 版本

pyenv install 2.7.18 # 下载 Python 2.7.18
```

```bash
# 启动 zsh 终端支持
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
echo 'command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(pyenv init -)"' >> ~/.zshrc
```

#### Python 切换
```bash
pyenv global 2.7.18  # 设置全局的 Python 版本，通过将版本号写入 ~/.pyenv/version 文件的方式。
pyenv local 2.7.18 # 设置 Python 本地版本，通过将版本号写入当前目录下的 .python-version 文件的方式。通过这种方式设置的 Python 版本优先级较 global 高。指定的目录下生效，那可以使用 `pyenv local PYTHON_VERSION` 命令修改。
# 需同在寻找 python 的时候优先级 shell > local > global
```

```bash
pyenv shell 2.7.18 # 设置面向 shell 的 Python 版本，通过设置当前 shell 的 PYENV_VERSION 环境变量的方式。这个版本的优先级比 local 和 global 都要高。`--unset` 参数可以用于取消当前 shell 设定的版本。
pyenv shell --unset
pyenv rehash  # 创建垫片路径（为所有已安装的可执行文件创建 shims，如：~/.pyenv/versions/*/bin/*，因此，每当你增删了 Python 版本或带有可执行文件的包（如 pip）以后，都应该执行一次本命令）
```

如果想要删除已经下载过的 Python 版本，则使用 uninstall 命令。如下所示：

```
pyenv uninstall 2.7.18
```

使用 `pyenv` 以后，可以快速地切换Python的版本，切换Python版本以后，与版本相关的依赖也会一起切换，因此不会造成多版本共存互相干扰的问题。

日常开发过程中使用 `pyenv install`、`pyenv local`、`pyenv global`、`pyenv uninstall` 等进行 Python 版本的安装切换及删除，基本就能满足需要。


## 在 CentOS 上安装Python

下面以安装当前官网最新的 Python 3.10.5 为例。

### 安装依赖

首先安装编译安装时需要的依赖包，编译python源码时，需要一些依赖包，一次安装完毕。

```bash
yum -y groupinstall "Development tools"
yum install -y ncurses-devel gdbm-devel xz-devel sqlite-devel tk-devel uuid-devel readline-devel bzip2-devel libffi-devel
yum install -y openssl-devel openssl11 openssl11-devel
```

### 下载并解压Python源码

下载页面预览地址：[Python Download](https://www.python.org/downloads/)

```bash
mkdir -p /opt/softwares && cd /opt/softwares
wget https://www.python.org/ftp/python/3.10.5/Python-3.10.5.tgz
tar xf Python-3.10.5.tgz && cd Python-3.10.5
```

### 编译并安装

编译主要需要注意的问题是设置编译FLAG，以便使用最新的openssl库。

```bash
export CFLAGS=$(pkg-config --cflags openssl11)
export LDFLAGS=$(pkg-config --libs openssl11)
```

```bash
./configure --prefix=/usr/local/python3.10.5  --enable-optimizations

make altinstall
```

### 配置

- 添加软连接

```bash
ln -s /usr/local/python3.10.5/bin/python3.10 /usr/bin/python3
ln -s /usr/local/python3.10.5/bin/pip3.10 /usr/bin/pip3
```

> **注意：** 如果创建软连接的时候已经存在可以考虑将其删除，比如：`rm -f /usr/bin/python3 /usr/bin/pip3`

### 验证是否安装成功

```bash
/usr/local/python3.10.5/bin/python3.10 -V # 下载python版本
# Python 3.10.5

/usr/local/python3.10.5/bin/pip3.10 -V # 查看pip下载器版本
# pip 22.0.4 from /usr/local/python3.10.5/lib/python3.10/site-packages/pip (python 3.10)
```

- 配置 pip 源
```bash
mkdir -p ~/.pip && touch ~/.pip/pip.conf

echo '[global]
index-url=https://pypi.tuna.tsinghua.edu.cn/simple/
extra-index-url=
        http://pypi.douban.com/simple/
        http://mirrors.aliyun.com/pypi/simple/
#proxy = [user:passwd@]proxy.server:port
[install]
trusted-host=
        pypi.tuna.tsinghua.edu.cn
        pypi.douban.com
        mirrors.aliyun.com
ssl_verify: false
' > ~/.pip/pip.conf
```
> 上面配置了清华，豆瓣，阿里的源，并且关闭了ssl验证。如果有需要还可以设置代理,把注释掉的 `proxy` 行放开即可。

```bash
# 检查配置是否生效
pip3 config get global.index-url

# 更新pip
pip3 install --upgrade pip
```

- 非 root 用户

对于非 root 用户如果需要安装第三方模块可以使用 Python 内置的虚拟环境包，[详情看这里](https://docs.python.org/zh-cn/3/tutorial/venv.html)。

```bash
python3 -m venv ~/.venv # 创建虚拟环境

source ~/.venv/bin/activate # 激活虚拟环境

echo 'source ~/.venv/bin/activate' >> ~/.bash_profile # 登录用户同时激活Python虚拟环境
```

## 在 CentOS 上安装 Jupyter

Jupyter 能实现随时随地在浏览器上进行 Python 处理数据等程序。

Jupyter notebook是一个 Web 应用，能让用户将说明文本、数学方程、代码和可视化内容全部组合到一个易于共享的文档中。

与常规的py文件不同的是，Jupyter notebook主要运行的是ipython，ipython是一个python的交互式shell，非常适合进行科学计算和交互可视化。

### 安装

```bash
pip install jupyter notebook
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
jupyter-notebook --generate-config
```

一般会生成配置文件在 `/home/USERNAME/.jupyter/jupyter_notebook_config.py`，其中 `USERNAME` 为当前登录用户名。

### 文件末尾添加配置内容
```
c.NotebookApp.ip = '*' #所有绑定服务器的IP都能访问，若想只在特定ip访问，输入ip地址即可
c.NotebookApp.port = 18888 #将端口设置为自己喜欢的吧，默认是8888
c.NotebookApp.open_browser = False # 我们并不想在服务器上直接打开Jupyter Notebook，所以设置成False
c.NotebookApp.notebook_dir = "/var/www/codes/python-projects/jupyter-notebook/"
c.NotebookApp.allow_root = False
c.NotebookApp.password = '' # 这里输入上面生成的密码加密后后的字符串
```

### 添加Nginx配置

```nginx
upstream jupyter {
    server 127.0.0.1:18888; # 主机端口，对应配置文件 `/home/USERNAME/.jupyter/jupyter_notebook_config.py` 中的端口号
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
Description=Jupyter Notebook
After=network.target
[Service]
Type=simple
ExecStart=/var/www/codes/python-projects/venv/bin/python /var/www/codes/python-projects/venv/bin/jupyter-notebook --config=/home/USERNAME/.jupyter/jupyter_notebook_config.py
User=USERNAME
Group=GROUP_USRENAME
WorkingDirectory=/var/www/codes/python-projects/jupyter-notebook
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
[program:jupyter-notebook]
directory=/var/www/codes/python-projects/jupyter-notebook
command=/bin/bash -E -c /shell-path/run-jupyter-notebook.sh
autostart=true
autorestart=true
stopsignal=INT
stopasgroup=true
killasgroup=true
user=USERNAME
```
> 将 `USERNAME` 修改为当前运行的用户。

#### run-jupyter-notebook.sh

```bash
#!/bin/bash

/var/www/codes/python-projects/venv/bin/python /var/www/codes/python-projects/venv/bin/jupyter-notebook --config=/home/USERNAME/.jupyter/jupyter_notebook_config.py
```

#### 重启 Supervisor
```bash
sudo systemctl restart supervisor.service
```