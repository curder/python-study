import{_ as s,c as n,o as a,a as o}from"./app.4ea4b561.js";const d=JSON.parse('{"title":"\u67E5\u8BE2\u96C6\u5408","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u96C6\u5408\u5143\u7D20\u67E5\u8BE2\u64CD\u4F5C","slug":"\u96C6\u5408\u5143\u7D20\u67E5\u8BE2\u64CD\u4F5C","link":"#\u96C6\u5408\u5143\u7D20\u67E5\u8BE2\u64CD\u4F5C","children":[]}],"relativePath":"guide/set/find.md","lastUpdated":1657683920000}'),l={name:"guide/set/find.md"},p=o(`<h1 id="\u67E5\u8BE2\u96C6\u5408" tabindex="-1">\u67E5\u8BE2\u96C6\u5408 <a class="header-anchor" href="#\u67E5\u8BE2\u96C6\u5408" aria-hidden="true">#</a></h1><h2 id="\u96C6\u5408\u5143\u7D20\u67E5\u8BE2\u64CD\u4F5C" tabindex="-1">\u96C6\u5408\u5143\u7D20\u67E5\u8BE2\u64CD\u4F5C <a class="header-anchor" href="#\u96C6\u5408\u5143\u7D20\u67E5\u8BE2\u64CD\u4F5C" aria-hidden="true">#</a></h2><p>\u96C6\u5408\u5143\u7D20\u7684\u67E5\u8BE2\u64CD\u4F5C\u662F\u5224\u65AD\u6307\u5B9A\u5143\u7D20\u5728\u96C6\u5408\u4E2D\u662F\u5426\u5B58\u5728\uFF0C\u4F7F\u7528 <code>in</code> \u6216 <code>not in</code>\u3002</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">s </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">in</span><span style="color:#82AAFF;"> s</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;"># True</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">not</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">in</span><span style="color:#82AAFF;"> s</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;"># False</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">99</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">in</span><span style="color:#82AAFF;"> s</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;"># False</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">100</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">not</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">in</span><span style="color:#82AAFF;"> s</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;"># True</span></span>
<span class="line"></span></code></pre></div><blockquote><p><code>in</code> \u6216 <code>not in</code> \u5224\u65AD\u5143\u7D20\u662F\u5426\u5B58\u5728\u4E8E\u96C6\u5408\u4E2D\uFF0C\u8FD4\u56DE\u5BF9\u5E94\u7684\u5E03\u5C14\u503C\u3002</p></blockquote>`,5),e=[p];function t(c,r,F,y,D,i){return a(),n("div",null,e)}const C=s(l,[["render",t]]);export{d as __pageData,C as default};
