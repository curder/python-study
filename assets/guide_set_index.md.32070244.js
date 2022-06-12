import{_ as s,c as a,o as l,a as e}from"./app.f8c9572f.js";const C='{"title":"\u96C6\u5408","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4EC0\u4E48\u662F\u96C6\u5408","slug":"what-is-set"},{"level":2,"title":"\u96C6\u5408\u7684\u7279\u70B9","slug":"set-futures"},{"level":2,"title":"\u96C6\u5408\u7684\u5173\u7CFB\u5224\u65AD","slug":"\u96C6\u5408\u7684\u5173\u7CFB\u5224\u65AD"}],"relativePath":"guide/set/index.md","lastUpdated":1655049672000}',n={name:"guide/set/index.md"},o=e(`<h1 id="set" tabindex="-1">\u96C6\u5408 <a class="header-anchor" href="#set" aria-hidden="true">#</a></h1><h2 id="what-is-set" tabindex="-1">\u4EC0\u4E48\u662F\u96C6\u5408 <a class="header-anchor" href="#what-is-set" aria-hidden="true">#</a></h2><ul><li>\u96C6\u5408\u662FPython\u8BED\u8A00\u63D0\u4F9B\u7684\u5185\u7F6E\u6570\u636E\u7ED3\u6784</li><li>\u4E0E\u5217\u8868\u3001\u5B57\u5178\u76F8\u540C\u7684\u662F\uFF0C\u90FD\u5C5E\u4E8E\u53EF\u53D8\u7C7B\u578B\u7684\u5E8F\u5217</li><li>\u96C6\u5408\u662F\u6CA1\u6709value\u7684\u5B57\u5178</li></ul><h2 id="set-futures" tabindex="-1">\u96C6\u5408\u7684\u7279\u70B9 <a class="header-anchor" href="#set-futures" aria-hidden="true">#</a></h2><ul><li>\u96C6\u5408\u4E2D\u7684\u5143\u7D20\u4E0D\u5141\u8BB8\u91CD\u590D</li><li>\u96C6\u5408\u4E2D\u7684\u5143\u7D20\u662F\u65E0\u5E8F\u7684</li></ul><h2 id="\u96C6\u5408\u7684\u5173\u7CFB\u5224\u65AD" tabindex="-1">\u96C6\u5408\u7684\u5173\u7CFB\u5224\u65AD <a class="header-anchor" href="#\u96C6\u5408\u7684\u5173\u7CFB\u5224\u65AD" aria-hidden="true">#</a></h2><ul><li>\u4F7F\u7528\u8FD0\u7B97\u7B26 <code>==</code> \u6216 <code>!=</code> \u5224\u65AD\u4E24\u4E2A\u96C6\u5408\u662F\u5426\u76F8\u7B49\uFF08\u5224\u65AD\u96C6\u5408\u5143\u7D20\u662F\u5426\u76F8\u7B49\uFF09<div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">s1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">s2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">s1 </span><span style="color:#89DDFF;">==</span><span style="color:#82AAFF;"> s2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># True</span></span>
<span class="line"></span></code></pre></div></li><li>\u8C03\u7528\u65B9\u6CD5 <code>issubset</code> \u5224\u65AD\u4E00\u4E2A\u96C6\u5408\u662F\u5426\u662F\u53E6\u4E00\u4E2A\u96C6\u5408\u7684\u5B50\u96C6</li><li>\u8C03\u7528\u65B9\u6CD5 <code>issuperset</code> \u5224\u65AD\u4E00\u4E2A\u96C6\u5408\u662F\u5426\u662F\u53E6\u4E00\u4E2A\u96C6\u5408\u7684\u8D85\u96C6</li><li>\u8C03\u7528\u65B9\u6CD5 <code>isdisjoint</code> \u5224\u65AD\u4E24\u4E2A\u96C6\u5408\u4E4B\u95F4\u662F\u5426\u6CA1\u6709\u4EA4\u96C6</li></ul>`,7),p=[o];function t(c,r,i,d,F,D){return l(),a("div",null,p)}var A=s(n,[["render",t]]);export{C as __pageData,A as default};
