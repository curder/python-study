# Python 安装 {#python-install}

Python是跨平台的，它可以运行在Windows、Mac和各种Linux/Unix系统上。

在Windows上写Python程序，放到Linux上也是能够运行的。

要开始学习Python编程，首先就得把Python安装到你的电脑里。

安装后，你会得到Python解释器（就是负责运行Python程序的），一个命令行交互环境，还有一个简单的集成开发环境。

## 在Mac上安装Python {#python-install-on-mac-os}

如果使用的是Mac，系统是 OSX >= 10.9，那么系统自带的 Python 版本是2.7。

要安装最新的Python 3.9.12，有两个方法：

- 方法一：从Python官网下载Python 3.9.12的[安装程序](https://www.python.org/downloads/)，找到并下载后双击运行并安装；
  
- 方法二：如果安装了[Homebrew](https://brew.sh/)，直接通过命令`brew install python3`安装即可。

## 在CentOS上安装Python {#python-install-on-centos}

下面以安装当前官网最新的 Python 3.10.5 为例。

### 安装依赖 {#python-install-on-centos-install-dependencies}

首先安装编译安装时需要的依赖包，编译python源码时，需要一些依赖包，一次安装完毕。

```bash
yum install -y zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gcc make libffi-devel
```

### 下载并解压Python源码 {#python-install-on-centos-download-and-unzip-source-code}

```bash
mkdir -p /opt/softwares && cd /opt/softwares
wget https://www.python.org/ftp/python/3.10.5/Python-3.10.5.tgz
tar xf Python-3.10.5.tgz
cd Python-3.10.5
```

### 编译并安装 {#python-install-on-centos-compile-and-install}

```bash
./configure --prefix=/usr/local/python3

make && make install
```

### 配置 {#python-install-on-centos-and-configuration}

- 添加软连接
```bash
ln -s /usr/local/python3/bin/python3 /usr/bin/python3
ln -s /usr/local/python3/bin/pip3 /usr/bin/pip3
```
> **注意：** 如果创建软连接的时候已经存在可以考虑将其删除，比如：`rm -f /usr/bin/python3 /usr/bin/pip3`

### 验证是否安装成功 {#pyathon-install-on-centos-and-check-version}

```bash
/usr/local/python3/bin/python3 -V # 下载python版本
# Python 3.10.5

/usr/local/python3/bin/pip3 -V # 查看pip下载器版本
# pip 22.0.4 from /usr/local/python3/lib/python3.10/site-packages/pip (python 3.10)
```