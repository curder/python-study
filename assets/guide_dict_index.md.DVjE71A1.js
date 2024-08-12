import{_ as i,c as a,o as s,a2 as e}from"./chunks/framework.Ck3lBW6i.js";const E=JSON.parse('{"title":"字典","description":"","frontmatter":{},"headers":[],"relativePath":"guide/dict/index.md","filePath":"guide/dict/index.md","lastUpdated":1657683920000}'),t={name:"guide/dict/index.md"},l=e(`<h1 id="字典" tabindex="-1">字典 <a class="header-anchor" href="#字典" aria-label="Permalink to &quot;字典&quot;">​</a></h1><p>字典是可变的，同时字典的键 <code>key</code> 不可重复，但值 <code>value</code> 可重复，是无序的，使用 <code>{key: value}</code> 形式定义。</p><h2 id="什么是字典" tabindex="-1">什么是字典 <a class="header-anchor" href="#什么是字典" aria-label="Permalink to &quot;什么是字典&quot;">​</a></h2><ul><li>字典是 Python 内置的数据结构之一，与列表一样是一个可变序列(允许对元素执行增、删、改操作)</li><li>以键值对的方式存储数据，字典是一个无序的序列</li></ul><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">d </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;curder&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hobby&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;coding&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(d)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># {&#39;name&#39;: &#39;curder&#39;, &#39;hobby&#39;: &#39;coding&#39;}</span></span></code></pre></div><h2 id="字典的特点" tabindex="-1">字典的特点 <a class="header-anchor" href="#字典的特点" aria-label="Permalink to &quot;字典的特点&quot;">​</a></h2><ul><li>字典中的所有元素都是 <code>key</code> - <code>value</code> 键值对，<code>key</code> 不允许重复，<code>value</code> 可以重复。</li><li>字典中的元素是无序的</li><li>字典中的 <code>key</code> 必须是不可变的对象，比如字符串、数字</li><li>字典可以更具需要动态伸缩</li><li>字典会浪费比较打的内存使用，是一种用空间换取时间的数据结构</li></ul>`,7),n=[l];function d(h,o,p,c,r,k){return s(),a("div",null,n)}const _=i(t,[["render",d]]);export{E as __pageData,_ as default};
