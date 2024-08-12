import{_ as s,c as i,o as a,a2 as t}from"./chunks/framework.Ck3lBW6i.js";const c=JSON.parse('{"title":"元组操作","description":"","frontmatter":{},"headers":[],"relativePath":"guide/tuple/operation.md","filePath":"guide/tuple/operation.md","lastUpdated":1657853086000}'),h={name:"guide/tuple/operation.md"},n=t(`<h1 id="元组操作" tabindex="-1">元组操作 <a class="header-anchor" href="#元组操作" aria-label="Permalink to &quot;元组操作&quot;">​</a></h1><h2 id="计算元组长度" tabindex="-1">计算元组长度 <a class="header-anchor" href="#计算元组长度" aria-label="Permalink to &quot;计算元组长度&quot;">​</a></h2><p>使用 <code>len()</code> 函数可以计算元组长度。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">len</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 4</span></span></code></pre></div><h2 id="获取最大元素" tabindex="-1">获取最大元素 <a class="header-anchor" href="#获取最大元素" aria-label="Permalink to &quot;获取最大元素&quot;">​</a></h2><p>使用 <code>max()</code> 函数获取元组中的最大元素。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">max</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 4</span></span></code></pre></div><h2 id="获取最小元素" tabindex="-1">获取最小元素 <a class="header-anchor" href="#获取最小元素" aria-label="Permalink to &quot;获取最小元素&quot;">​</a></h2><p>使用 <code>min()</code> 函数获取元组中的最小元素</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">min</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1</span></span></code></pre></div><h2 id="重复元组元素" tabindex="-1">重复元组元素 <a class="header-anchor" href="#重复元组元素" aria-label="Permalink to &quot;重复元组元素&quot;">​</a></h2><p>可以使用 <code>*</code> 操作元组，使其重复指定个数的元组元素。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># (10, 10, 10, 10, 10, 10, 10, 10, 10, 10)</span></span></code></pre></div>`,13),e=[n];function p(l,k,d,r,o,E){return a(),i("div",null,e)}const y=s(h,[["render",p]]);export{c as __pageData,y as default};