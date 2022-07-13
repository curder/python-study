import{_ as s,c as n,o as a,a as p}from"./app.988cfad3.js";const C=JSON.parse('{"title":"Python \u5B89\u88C5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5728 Mac \u4E0A\u5B89\u88C5Python","slug":"\u5728-mac-\u4E0A\u5B89\u88C5python"},{"level":2,"title":"\u5728 CentOS \u4E0A\u5B89\u88C5Python","slug":"\u5728-centos-\u4E0A\u5B89\u88C5python"},{"level":3,"title":"\u5B89\u88C5\u4F9D\u8D56","slug":"\u5B89\u88C5\u4F9D\u8D56"},{"level":3,"title":"\u4E0B\u8F7D\u5E76\u89E3\u538BPython\u6E90\u7801","slug":"\u4E0B\u8F7D\u5E76\u89E3\u538Bpython\u6E90\u7801"},{"level":3,"title":"\u7F16\u8BD1\u5E76\u5B89\u88C5","slug":"\u7F16\u8BD1\u5E76\u5B89\u88C5"},{"level":3,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E"},{"level":3,"title":"\u9A8C\u8BC1\u662F\u5426\u5B89\u88C5\u6210\u529F","slug":"\u9A8C\u8BC1\u662F\u5426\u5B89\u88C5\u6210\u529F"}],"relativePath":"guide/basic/install-python.md","lastUpdated":1657683920000}'),l={name:"guide/basic/install-python.md"},e=p(`<h1 id="python-\u5B89\u88C5" tabindex="-1">Python \u5B89\u88C5 <a class="header-anchor" href="#python-\u5B89\u88C5" aria-hidden="true">#</a></h1><p>Python\u662F\u8DE8\u5E73\u53F0\u7684\uFF0C\u5B83\u53EF\u4EE5\u8FD0\u884C\u5728Windows\u3001Mac\u548C\u5404\u79CDLinux/Unix\u7CFB\u7EDF\u4E0A\u3002</p><p>\u5728Windows\u4E0A\u5199Python\u7A0B\u5E8F\uFF0C\u653E\u5230Linux\u4E0A\u4E5F\u662F\u80FD\u591F\u8FD0\u884C\u7684\u3002</p><p>\u8981\u5F00\u59CB\u5B66\u4E60Python\u7F16\u7A0B\uFF0C\u9996\u5148\u5C31\u5F97\u628APython\u5B89\u88C5\u5230\u4F60\u7684\u7535\u8111\u91CC\u3002</p><p>\u5B89\u88C5\u540E\uFF0C\u4F60\u4F1A\u5F97\u5230Python\u89E3\u91CA\u5668\uFF08\u5C31\u662F\u8D1F\u8D23\u8FD0\u884CPython\u7A0B\u5E8F\u7684\uFF09\uFF0C\u4E00\u4E2A\u547D\u4EE4\u884C\u4EA4\u4E92\u73AF\u5883\uFF0C\u8FD8\u6709\u4E00\u4E2A\u7B80\u5355\u7684\u96C6\u6210\u5F00\u53D1\u73AF\u5883\u3002</p><h2 id="\u5728-mac-\u4E0A\u5B89\u88C5python" tabindex="-1">\u5728 Mac \u4E0A\u5B89\u88C5Python <a class="header-anchor" href="#\u5728-mac-\u4E0A\u5B89\u88C5python" aria-hidden="true">#</a></h2><p>\u5982\u679C\u4F7F\u7528\u7684\u662FMac\uFF0C\u7CFB\u7EDF\u662F OSX &gt;= 10.9\uFF0C\u90A3\u4E48\u7CFB\u7EDF\u81EA\u5E26\u7684 Python \u7248\u672C\u662F2.7\u3002</p><p>\u8981\u5B89\u88C5\u6700\u65B0\u7684Python 3.9.12\uFF0C\u6709\u4E24\u4E2A\u65B9\u6CD5\uFF1A</p><ul><li><p>\u65B9\u6CD5\u4E00\uFF1A\u4ECEPython\u5B98\u7F51\u4E0B\u8F7DPython 3.9.12\u7684<a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">\u5B89\u88C5\u7A0B\u5E8F</a>\uFF0C\u627E\u5230\u5E76\u4E0B\u8F7D\u540E\u53CC\u51FB\u8FD0\u884C\u5E76\u5B89\u88C5\uFF1B</p></li><li><p>\u65B9\u6CD5\u4E8C\uFF1A\u5982\u679C\u5B89\u88C5\u4E86<a href="https://brew.sh/" target="_blank" rel="noopener noreferrer">Homebrew</a>\uFF0C\u76F4\u63A5\u901A\u8FC7\u547D\u4EE4<code>brew install python3</code>\u5B89\u88C5\u5373\u53EF\u3002</p></li></ul><h2 id="\u5728-centos-\u4E0A\u5B89\u88C5python" tabindex="-1">\u5728 CentOS \u4E0A\u5B89\u88C5Python <a class="header-anchor" href="#\u5728-centos-\u4E0A\u5B89\u88C5python" aria-hidden="true">#</a></h2><p>\u4E0B\u9762\u4EE5\u5B89\u88C5\u5F53\u524D\u5B98\u7F51\u6700\u65B0\u7684 Python 3.10.5 \u4E3A\u4F8B\u3002</p><h3 id="\u5B89\u88C5\u4F9D\u8D56" tabindex="-1">\u5B89\u88C5\u4F9D\u8D56 <a class="header-anchor" href="#\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a></h3><p>\u9996\u5148\u5B89\u88C5\u7F16\u8BD1\u5B89\u88C5\u65F6\u9700\u8981\u7684\u4F9D\u8D56\u5305\uFF0C\u7F16\u8BD1python\u6E90\u7801\u65F6\uFF0C\u9700\u8981\u4E00\u4E9B\u4F9D\u8D56\u5305\uFF0C\u4E00\u6B21\u5B89\u88C5\u5B8C\u6BD5\u3002</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yum -y groupinstall </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Development tools</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">yum install -y ncurses-devel gdbm-devel xz-devel sqlite-devel tk-devel uuid-devel readline-devel bzip2-devel libffi-devel</span></span>
<span class="line"><span style="color:#A6ACCD;">yum install -y openssl-devel openssl11 openssl11-devel</span></span>
<span class="line"></span></code></pre></div><h3 id="\u4E0B\u8F7D\u5E76\u89E3\u538Bpython\u6E90\u7801" tabindex="-1">\u4E0B\u8F7D\u5E76\u89E3\u538BPython\u6E90\u7801 <a class="header-anchor" href="#\u4E0B\u8F7D\u5E76\u89E3\u538Bpython\u6E90\u7801" aria-hidden="true">#</a></h3><p>\u4E0B\u8F7D\u9875\u9762\u9884\u89C8\u5730\u5740\uFF1A<a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">Python Download</a></p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">mkdir -p /opt/softwares </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> /opt/softwares</span></span>
<span class="line"><span style="color:#A6ACCD;">wget https://www.python.org/ftp/python/3.10.5/Python-3.10.5.tgz</span></span>
<span class="line"><span style="color:#A6ACCD;">tar xf Python-3.10.5.tgz </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> Python-3.10.5</span></span>
<span class="line"></span></code></pre></div><h3 id="\u7F16\u8BD1\u5E76\u5B89\u88C5" tabindex="-1">\u7F16\u8BD1\u5E76\u5B89\u88C5 <a class="header-anchor" href="#\u7F16\u8BD1\u5E76\u5B89\u88C5" aria-hidden="true">#</a></h3><p>\u7F16\u8BD1\u4E3B\u8981\u9700\u8981\u6CE8\u610F\u7684\u95EE\u9898\u662F\u8BBE\u7F6E\u7F16\u8BD1FLAG\uFF0C\u4EE5\u4FBF\u4F7F\u7528\u6700\u65B0\u7684openssl\u5E93\u3002</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> CFLAGS=</span><span style="color:#89DDFF;">$(</span><span style="color:#C3E88D;">pkg-config --cflags openssl11</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> LDFLAGS=</span><span style="color:#89DDFF;">$(</span><span style="color:#C3E88D;">pkg-config --libs openssl11</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">./configure --prefix=/usr/local/python3.10.5  --enable-optimizations</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">make altinstall</span></span>
<span class="line"></span></code></pre></div><h3 id="\u914D\u7F6E" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a></h3><ul><li>\u6DFB\u52A0\u8F6F\u8FDE\u63A5</li></ul><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">ln -s /usr/local/python3.10.5/bin/python3.10 /usr/bin/python3</span></span>
<span class="line"><span style="color:#A6ACCD;">ln -s /usr/local/python3.10.5/bin/pip3.10 /usr/bin/pip3</span></span>
<span class="line"></span></code></pre></div><blockquote><p><strong>\u6CE8\u610F\uFF1A</strong> \u5982\u679C\u521B\u5EFA\u8F6F\u8FDE\u63A5\u7684\u65F6\u5019\u5DF2\u7ECF\u5B58\u5728\u53EF\u4EE5\u8003\u8651\u5C06\u5176\u5220\u9664\uFF0C\u6BD4\u5982\uFF1A<code>rm -f /usr/bin/python3 /usr/bin/pip3</code></p></blockquote><h3 id="\u9A8C\u8BC1\u662F\u5426\u5B89\u88C5\u6210\u529F" tabindex="-1">\u9A8C\u8BC1\u662F\u5426\u5B89\u88C5\u6210\u529F <a class="header-anchor" href="#\u9A8C\u8BC1\u662F\u5426\u5B89\u88C5\u6210\u529F" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/usr/local/python3.10.5/bin/python3.10 -V </span><span style="color:#676E95;font-style:italic;"># \u4E0B\u8F7Dpython\u7248\u672C</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Python 3.10.5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">/usr/local/python3.10.5/bin/pip3.10 -V </span><span style="color:#676E95;font-style:italic;"># \u67E5\u770Bpip\u4E0B\u8F7D\u5668\u7248\u672C</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># pip 22.0.4 from /usr/local/python3.10.5/lib/python3.10/site-packages/pip (python 3.10)</span></span>
<span class="line"></span></code></pre></div><ul><li>\u914D\u7F6E pip \u6E90</li></ul><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">mkdir -p </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.pip </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> touch </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.pip/pip.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[global]</span></span>
<span class="line"><span style="color:#C3E88D;">index-url=https://pypi.tuna.tsinghua.edu.cn/simple/</span></span>
<span class="line"><span style="color:#C3E88D;">extra-index-url=</span></span>
<span class="line"><span style="color:#C3E88D;">        http://pypi.douban.com/simple/</span></span>
<span class="line"><span style="color:#C3E88D;">        http://mirrors.aliyun.com/pypi/simple/</span></span>
<span class="line"><span style="color:#C3E88D;">#proxy = [user:passwd@]proxy.server:port</span></span>
<span class="line"><span style="color:#C3E88D;">[install]</span></span>
<span class="line"><span style="color:#C3E88D;">trusted-host=</span></span>
<span class="line"><span style="color:#C3E88D;">        pypi.tuna.tsinghua.edu.cn</span></span>
<span class="line"><span style="color:#C3E88D;">        pypi.douban.com</span></span>
<span class="line"><span style="color:#C3E88D;">        mirrors.aliyun.com</span></span>
<span class="line"><span style="color:#C3E88D;">ssl_verify: false</span></span>
<span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.pip/pip.conf</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u4E0A\u9762\u914D\u7F6E\u4E86\u6E05\u534E\uFF0C\u8C46\u74E3\uFF0C\u963F\u91CC\u7684\u6E90\uFF0C\u5E76\u4E14\u5173\u95ED\u4E86ssl\u9A8C\u8BC1\u3002\u5982\u679C\u6709\u9700\u8981\u8FD8\u53EF\u4EE5\u8BBE\u7F6E\u4EE3\u7406,\u628A\u6CE8\u91CA\u6389\u7684 <code>proxy</code> \u884C\u653E\u5F00\u5373\u53EF\u3002</p></blockquote><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u66F4\u65B0pip</span></span>
<span class="line"><span style="color:#A6ACCD;">pip3 install --upgrade pip</span></span>
<span class="line"></span></code></pre></div><ul><li>\u975E root \u7528\u6237</li></ul><p>\u5BF9\u4E8E\u975E root \u7528\u6237\u5982\u679C\u9700\u8981\u5B89\u88C5\u7B2C\u4E09\u65B9\u6A21\u5757\u53EF\u4EE5\u4F7F\u7528 Python \u5185\u7F6E\u7684\u865A\u62DF\u73AF\u5883\u5305\uFF0C<a href="https://docs.python.org/zh-cn/3/tutorial/venv.html" target="_blank" rel="noopener noreferrer">\u8BE6\u60C5\u770B\u8FD9\u91CC</a>\u3002</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">python3 -m venv </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.venv </span><span style="color:#676E95;font-style:italic;"># \u521B\u5EFA\u865A\u62DF\u73AF\u5883</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.venv/bin/activate </span><span style="color:#676E95;font-style:italic;"># \u6FC0\u6D3B\u865A\u62DF\u73AF\u5883</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">source ~/.venv/bin/activate</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.bash_profile </span><span style="color:#676E95;font-style:italic;"># \u767B\u5F55\u7528\u6237\u540C\u65F6\u6FC0\u6D3BPython\u865A\u62DF\u73AF\u5883</span></span>
<span class="line"></span></code></pre></div>`,34),o=[e];function t(c,r,i,y,h,d){return a(),n("div",null,o)}var A=s(l,[["render",t]]);export{C as __pageData,A as default};
