import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.Ck3lBW6i.js";const c=JSON.parse('{"title":"对象方法","description":"","frontmatter":{},"headers":[],"relativePath":"guide/oop/object-methods.md","filePath":"guide/oop/object-methods.md","lastUpdated":1656059958000}'),h={name:"guide/oop/object-methods.md"},t=n(`<h1 id="对象方法" tabindex="-1">对象方法 <a class="header-anchor" href="#对象方法" aria-label="Permalink to &quot;对象方法&quot;">​</a></h1><h2 id="动态绑定方法" tabindex="-1">动态绑定方法 <a class="header-anchor" href="#动态绑定方法" aria-label="Permalink to &quot;动态绑定方法&quot;">​</a></h2><p>直接通过给类赋值的方式可以给对象动态绑定方法。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Student</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    pass</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">stu1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Student()  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 对象实例化</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 定义函数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> eating</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">():</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;I am Eating...&#39;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">stu1.eating </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> eating  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 给对象动态添加方法</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(stu1.eating())</span></span></code></pre></div><h2 id="特殊方法" tabindex="-1">特殊方法 <a class="header-anchor" href="#特殊方法" aria-label="Permalink to &quot;特殊方法&quot;">​</a></h2><h3 id="len" tabindex="-1"><strong>len</strong>() <a class="header-anchor" href="#len" aria-label="Permalink to &quot;__len__()&quot;">​</a></h3><p>通过重写 <strong>len</strong>() 方法，让内置函数 <code>len()</code> 的参数可以自定义类型。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Obj</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __init__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, name):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __len__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> len</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.name)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">obj1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Obj(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;curder&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">len</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj1))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 由于重写了 __len__ 方法，可以直接调用函数 len() 获取长度</span></span></code></pre></div><h3 id="add" tabindex="-1"><strong>add</strong>() <a class="header-anchor" href="#add" aria-label="Permalink to &quot;__add__()&quot;">​</a></h3><p>通过重写 <strong>add</strong>() 方法，可使用自定义对象具有 &quot;+&quot; 功能。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Obj</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __init__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, name):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __add__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, other):</span></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39; &#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> other.name</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">obj1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Obj(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ZhanSan&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">obj2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Obj(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;LiSi&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj2)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ZhanSan LiSi</span></span></code></pre></div><h3 id="new" tabindex="-1"><strong>new</strong>() <a class="header-anchor" href="#new" aria-label="Permalink to &quot;__new__()&quot;">​</a></h3><p>用于创建对象</p><h3 id="init" tabindex="-1"><strong>init</strong>() <a class="header-anchor" href="#init" aria-label="Permalink to &quot;__init__()&quot;">​</a></h3><p>对创建的对象进行初始化</p>`,15),l=[t];function e(p,k,d,r,E,g){return a(),i("div",null,l)}const y=s(h,[["render",e]]);export{c as __pageData,y as default};