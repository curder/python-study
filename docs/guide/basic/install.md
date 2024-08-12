# Python 安装

[Python](https://www.python.org/) 是跨平台的，它可以运行在 Windows、Mac 和各种 Linux / Unix 系统上。

要开始学习 Python 编程，首先需要将 Python 解释器安装在电脑上，安装后，会得到Python解释器（负责运行Python程序），一个命令行交互环境。

## Mac

### 指定 Python 版本

如果使用的 Mac 系统 >= 10.9，那么系统自带的 Python 版本是 2.7。

要安装最新的 Python 3.12.4，选择下面的方法之一即可：

- 方法一：从 Python 官网下载 Python 3.12.4 的[安装程序](https://www.python.org/downloads/)，找到并下载后双击运行并安装；

- 方法二：如果安装了[Homebrew](https://brew.sh/)，直接通过命令`brew install python3.12`安装即可。

> 如果下载模块太慢或者无法下载模块可以参考下方的 "配置 pip 源" 修改 `pip3` 源。

### 安装多版本 Python

使用 [`pyenv`](https://github.com/pyenv/pyenv) 对 Python 多版本进行管理。

#### 安装 pyenv

使用 brew 命令安装 `pyenv`。

```bash
brew install pyenv
```

#### 设置 shell 环境

```bash
# 启动 zsh 终端支持
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
echo 'command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(pyenv init -)"' >> ~/.zshrc
```

#### 常用命令

- 查看本机安装版本

    ```bash
    pyenv versions
    ```

- 查看当前激活的版本

    ```bash
    pyenv version
    ```

- 查看可安装的版本

    ```bash
    pyenv install -l
    ```

- 安装指定版本

    ```bash
    pyenv install 3.12.4
    pyenv rehash
    ```

    - 切换版本

        - 系统全局，不建议直接对其操作

            ```bash
            pyenv global 3.12.4  # 设置全局的 Python 版本，通过将版本号写入 ~/.pyenv/version 文件的方式。
            ```

        - 本地环境，一般用于开发环境

            ```bash
            pyenv local 3.12.4
            ```

        - 当前用户的临时设定Python版本，退出后失效

            ```bash
            pyenv shell 3.12.4
            ```

      ::: tip 优先级关系
      1. shell
      2. local
      3. global
      :::

- 取消某版本切换

    ```bash
    pyenv local 3.12.4 --unset
    ```

- 删除下载过的 Python

    ```bash
    pyenv uninstall 3.12.4
    ```

## CentOS

下面以安装当前官网最新的 Python 3.12.4 为例。

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
wget https://www.python.org/ftp/python/3.12.4/Python-3.12.4.tgz
tar xf Python-3.12.4.tgz && cd Python-3.12.4
```

### 编译并安装

编译主要需要注意的问题是设置编译FLAG，以便使用最新的openssl库。

```bash
export CFLAGS=$(pkg-config --cflags openssl11)
export LDFLAGS=$(pkg-config --libs openssl11)
```

```bash
./configure --prefix=/usr/local/python3.12.4  --enable-optimizations

make altinstall
```

### 配置

- 添加软连接

```bash
ln -s /usr/local/python3.12.4/bin/python3.12 /usr/bin/python3
ln -s /usr/local/python3.12.4/bin/pip3.12 /usr/bin/pip3
```

> **注意：** 如果创建软连接的时候已经存在可以考虑将其删除，比如：`rm -f /usr/bin/python3 /usr/bin/pip3`

### 验证是否安装成功

```bash
/usr/local/python3.12.4/bin/python3.12 -V # 下载python版本
# Python 3.12.4

/usr/local/python3.12.4/bin/pip3.12 -V # 查看pip下载器版本
# pip 22.0.4 from /usr/local/python3.12.4/lib/python3.12/site-packages/pip (python 3.12)
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

## 虚拟环境

对于非 root 用户如果需要安装第三方模块可以使用 Python
内置的虚拟环境包，[详情看这里](https://docs.python.org/zh-cn/3/tutorial/venv.html)。

```bash
python3 -m venv ~/.venv # 创建虚拟环境

source ~/.venv/bin/activate # 激活虚拟环境

echo 'source ~/.venv/bin/activate' >> ~/.bash_profile # 登录用户同时激活Python虚拟环境
```