import{_ as s,c as i,o as a,a2 as t}from"./chunks/framework.Ck3lBW6i.js";const g=JSON.parse('{"title":"删除列表对象","description":"","frontmatter":{},"headers":[],"relativePath":"guide/list/delete.md","filePath":"guide/list/delete.md","lastUpdated":1657781222000}'),e={name:"guide/list/delete.md"},n=t(`<h1 id="删除列表对象" tabindex="-1">删除列表对象 <a class="header-anchor" href="#删除列表对象" aria-label="Permalink to &quot;删除列表对象&quot;">​</a></h1><p>使用 <code>del</code> 关键字删除存在的列表。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">l </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">del</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> l</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(l)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># NameError: name &#39;l&#39; is not defined</span></span></code></pre></div><blockquote><p>如果被删除的列表没有定义也将抛出 <code>NameError</code> 错误。</p></blockquote><h2 id="删除列表中某个元素" tabindex="-1">删除列表中某个元素 <a class="header-anchor" href="#删除列表中某个元素" aria-label="Permalink to &quot;删除列表中某个元素&quot;">​</a></h2><p>通过列表的索引获取到对应值，再通过 <code>del</code> 关键字将其删除。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">l </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">del</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> l[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(l)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># [1, 2, 4]</span></span></code></pre></div>`,7),h=[n];function l(p,k,d,r,E,o){return a(),i("div",null,h)}const y=s(e,[["render",l]]);export{g as __pageData,y as default};
