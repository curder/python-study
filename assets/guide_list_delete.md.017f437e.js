import{_ as s,c as a,o as n,a as l}from"./app.095b2e16.js";const d=JSON.parse('{"title":"\u5220\u9664\u5217\u8868\u5BF9\u8C61","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5220\u9664\u5217\u8868\u4E2D\u67D0\u4E2A\u5143\u7D20","slug":"\u5220\u9664\u5217\u8868\u4E2D\u67D0\u4E2A\u5143\u7D20"}],"relativePath":"guide/list/delete.md","lastUpdated":1657781222000}'),p={name:"guide/list/delete.md"},o=l(`<h1 id="\u5220\u9664\u5217\u8868\u5BF9\u8C61" tabindex="-1">\u5220\u9664\u5217\u8868\u5BF9\u8C61 <a class="header-anchor" href="#\u5220\u9664\u5217\u8868\u5BF9\u8C61" aria-hidden="true">#</a></h1><p>\u4F7F\u7528 <code>del</code> \u5173\u952E\u5B57\u5220\u9664\u5B58\u5728\u7684\u5217\u8868\u3002</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">l </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">del</span><span style="color:#A6ACCD;"> l</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">l</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># NameError: name &#39;l&#39; is not defined</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u5982\u679C\u88AB\u5220\u9664\u7684\u5217\u8868\u6CA1\u6709\u5B9A\u4E49\u4E5F\u5C06\u629B\u51FA <code>NameError</code> \u9519\u8BEF\u3002</p></blockquote><h2 id="\u5220\u9664\u5217\u8868\u4E2D\u67D0\u4E2A\u5143\u7D20" tabindex="-1">\u5220\u9664\u5217\u8868\u4E2D\u67D0\u4E2A\u5143\u7D20 <a class="header-anchor" href="#\u5220\u9664\u5217\u8868\u4E2D\u67D0\u4E2A\u5143\u7D20" aria-hidden="true">#</a></h2><p>\u901A\u8FC7\u5217\u8868\u7684\u7D22\u5F15\u83B7\u53D6\u5230\u5BF9\u5E94\u503C\uFF0C\u518D\u901A\u8FC7 <code>del</code> \u5173\u952E\u5B57\u5C06\u5176\u5220\u9664\u3002</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">l </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">del</span><span style="color:#A6ACCD;"> l</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">l</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># [1, 2, 4]</span></span>
<span class="line"></span></code></pre></div>`,7),e=[o];function t(c,r,y,F,D,C){return n(),a("div",null,e)}var A=s(p,[["render",t]]);export{d as __pageData,A as default};
