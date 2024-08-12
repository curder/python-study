import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.Ck3lBW6i.js";const E=JSON.parse('{"title":"变量作用域","description":"","frontmatter":{},"headers":[],"relativePath":"guide/basic/variable-scope.md","filePath":"guide/basic/variable-scope.md","lastUpdated":1657701417000}'),p={name:"guide/basic/variable-scope.md"},e=n(`<h1 id="变量作用域" tabindex="-1">变量作用域 <a class="header-anchor" href="#变量作用域" aria-label="Permalink to &quot;变量作用域&quot;">​</a></h1><p>变量作用域指的是程序代码能访问对应变量的区域，根据变量的有效范围可以分为：局部变量和全局变量</p><ul><li><p>局部变量</p><p>在函数内定义并使用的变量，只在函数内部有效。<strong>局部变量通过 <code>global</code> 声明可以转换成全局变量</strong></p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fun</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a, b):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    c </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(c)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 变量c为局部变量，因为c是在函数内部进行定义的变量，a、b为函数的形参，作用范围也是函数内部，相当于局部变量。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在函数体外无法访问 变量\`a\`、\`b\`、\`c\`</span></span></code></pre></div></li><li><p>全局变量</p><p>函数体外定义的变量，可作用于函数内外</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;curder&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 全局变量</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fun2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">():</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(name)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fun2()  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># curder</span></span></code></pre></div></li></ul><h2 id="局部变量转换为全局变量" tabindex="-1">局部变量转换为全局变量 <a class="header-anchor" href="#局部变量转换为全局变量" aria-label="Permalink to &quot;局部变量转换为全局变量&quot;">​</a></h2><p>将函数内的局部变量使用 <code>global</code> 关键字声明为全局变量。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fun2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">():</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    global</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;curder&#39;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(name)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fun2()  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># curder</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(name)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># curder</span></span></code></pre></div>`,6),l=[e];function t(h,k,d,r,c,o){return a(),i("div",null,l)}const y=s(p,[["render",t]]);export{E as __pageData,y as default};
