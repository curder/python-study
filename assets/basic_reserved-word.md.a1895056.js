import{_ as s,c as n,o as a,a as l}from"./app.10d12e75.js";const h='{"title":"\u7CFB\u7EDF\u4FDD\u7559\u5B57","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6253\u5370\u51FA\u5F53\u524D\u4FDD\u7559\u5B57","slug":"print-keyword"},{"level":2,"title":"\u6807\u8BC6\u7B26","slug":"identifier"},{"level":2,"title":"\u6807\u8BC6\u7B26\u89C4\u5219","slug":"identifier-rule"}],"relativePath":"basic/reserved-word.md","lastUpdated":1654848347000}',e={name:"basic/reserved-word.md"},t=l(`<h1 id="top" tabindex="-1">\u7CFB\u7EDF\u4FDD\u7559\u5B57 <a class="header-anchor" href="#top" aria-hidden="true">#</a></h1><h2 id="print-keyword" tabindex="-1">\u6253\u5370\u51FA\u5F53\u524D\u4FDD\u7559\u5B57 <a class="header-anchor" href="#print-keyword" aria-hidden="true">#</a></h2><p>\u4F7F\u7528<a href="https://docs.python.org/3.10/library/keyword.html#module-keyword" target="_blank" rel="noopener noreferrer">keyword\u5305</a>\u7684 <code>kwlist</code> \u5C5E\u6027\u53EF\u4EE5\u770B\u5230\u5F53\u524D\u7CFB\u7EDF\u7684\u6240\u6709\u4FDD\u7559\u5B57\u3002</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> keyword</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">keyword</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">kwlist</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># False</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># None</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># True</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># and</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># as</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># assert</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># async</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># await</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># break</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># class</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># continue</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># def</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># del</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># elif</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># else</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># except</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># finally</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># for</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># from</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># global</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># if</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># import</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># in</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># is</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># lambda</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># nonlocal</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># not</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># or</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># pass</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># raise</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># return</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># try</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># while</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># with</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># yield</span></span>
<span class="line"></span></code></pre></div><h2 id="identifier" tabindex="-1">\u6807\u8BC6\u7B26 <a class="header-anchor" href="#identifier" aria-hidden="true">#</a></h2><p>\u53D8\u91CF\u3001\u51FD\u6570\u3001\u7C7B\u3001\u6A21\u5757\u548C\u5176\u4ED6\u5BF9\u8C61\u7684\u540D\u79F0\u3002</p><h2 id="identifier-rule" tabindex="-1">\u6807\u8BC6\u7B26\u89C4\u5219 <a class="header-anchor" href="#identifier-rule" aria-hidden="true">#</a></h2><ul><li>\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF</li><li>\u4E0D\u80FD\u4EE5\u6570\u5B57\u5F00\u5934</li><li>\u4E0D\u5141\u8BB8\u4F7F\u7528\u4FDD\u7559\u5B57</li><li>\u4E25\u683C\u533A\u5206\u5927\u5C0F\u5199</li></ul>`,8),p=[t];function i(o,c,r,y,d,f){return a(),n("div",null,p)}var _=s(e,[["render",i]]);export{h as __pageData,_ as default};
