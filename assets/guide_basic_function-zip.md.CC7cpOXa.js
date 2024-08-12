import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.Ck3lBW6i.js";const g=JSON.parse('{"title":"zip 函数","description":"","frontmatter":{},"headers":[],"relativePath":"guide/basic/function-zip.md","filePath":"guide/basic/function-zip.md","lastUpdated":1657853086000}'),t={name:"guide/basic/function-zip.md"},p=n(`<h1 id="zip-函数" tabindex="-1">zip 函数 <a class="header-anchor" href="#zip-函数" aria-label="Permalink to &quot;zip 函数&quot;">​</a></h1><p>内置函数 <code>zip</code> 用于将可叠戴的对象作为参数，将对象中对应的元素打包橙一个元组，然后返回由这些元组组成的列表。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">items </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Fruits&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Books&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Others&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prices </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">41</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">54</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">85</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">z </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> zip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(items, prices)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 生成列表</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">dict</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(z))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># [(&#39;Fruits&#39;, 41), (&#39;Books&#39;, 54), (&#39;Others&#39;, 85)]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 生成字典</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">dict</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(z))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># {&#39;Fruits&#39;: 41, &#39;Books&#39;: 54, &#39;Others&#39;: 85}</span></span></code></pre></div>`,3),h=[p];function k(l,e,r,E,d,o){return a(),i("div",null,h)}const y=s(t,[["render",k]]);export{g as __pageData,y as default};