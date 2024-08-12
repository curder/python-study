import{_ as s,c as a,o as i,a2 as n}from"./chunks/framework.Ck3lBW6i.js";const _=JSON.parse('{"title":"代码注释","description":"","frontmatter":{},"headers":[],"relativePath":"guide/basic/comments.md","filePath":"guide/basic/comments.md","lastUpdated":1657683920000}'),t={name:"guide/basic/comments.md"},e=n(`<h1 id="代码注释" tabindex="-1">代码注释 <a class="header-anchor" href="#代码注释" aria-label="Permalink to &quot;代码注释&quot;">​</a></h1><p>在代码中对代码的功能进行解释说明的标注性文字，可以提高代码的可读性。</p><p>注释的内容会被 Python 解释器忽略。</p><p>通常包括三种类型的注释：</p><ol><li><strong>单行注释</strong>，以 <code>#</code> 开头，知道换行结束</li><li><strong>多行注释</strong>，使用三个引号，可以是单引号也可以是双引号，并且没有赋值给任何变量</li><li><strong>编码声明注释</strong>，常常在文件开始处声明注释，用以指定源码文件编码格式 <code># coding:utf-8</code></li></ol><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># coding:uft-8  # 这里声明编码格式，默认为utf-8</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 单行注释</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;hello world&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 多行注释</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;&#39;mutil</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">lines comments</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;mutil</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">lines comments</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span></code></pre></div>`,6),l=[e];function p(o,h,c,d,r,k){return i(),a("div",null,l)}const m=s(t,[["render",p]]);export{_ as __pageData,m as default};
