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
/usr/local/python3.10.5/bin/python3 -V # 下载python版本
# Python 3.10.5

/usr/local/python3.10.5/bin/pip3 -V # 查看pip下载器版本
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


