import{_ as s,c as n,o as a,a as l}from"./app.797a2ab4.js";const _=JSON.parse('{"title":"\u7CFB\u7EDF\u4FDD\u7559\u5B57","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6253\u5370\u51FA\u5F53\u524D\u4FDD\u7559\u5B57","slug":"\u6253\u5370\u51FA\u5F53\u524D\u4FDD\u7559\u5B57","link":"#\u6253\u5370\u51FA\u5F53\u524D\u4FDD\u7559\u5B57","children":[]},{"level":2,"title":"\u6807\u8BC6\u7B26","slug":"\u6807\u8BC6\u7B26","link":"#\u6807\u8BC6\u7B26","children":[]},{"level":2,"title":"\u6807\u8BC6\u7B26\u89C4\u5219","slug":"\u6807\u8BC6\u7B26\u89C4\u5219","link":"#\u6807\u8BC6\u7B26\u89C4\u5219","children":[]}],"relativePath":"guide/basic/reserved-word.md","lastUpdated":1657689231000}'),e={name:"guide/basic/reserved-word.md"},p=l(`<h1 id="\u7CFB\u7EDF\u4FDD\u7559\u5B57" tabindex="-1">\u7CFB\u7EDF\u4FDD\u7559\u5B57 <a class="header-anchor" href="#\u7CFB\u7EDF\u4FDD\u7559\u5B57" aria-hidden="true">#</a></h1><h2 id="\u6253\u5370\u51FA\u5F53\u524D\u4FDD\u7559\u5B57" tabindex="-1">\u6253\u5370\u51FA\u5F53\u524D\u4FDD\u7559\u5B57 <a class="header-anchor" href="#\u6253\u5370\u51FA\u5F53\u524D\u4FDD\u7559\u5B57" aria-hidden="true">#</a></h2><p>\u4F7F\u7528 <a href="https://docs.python.org/zh-cn/3.10/library/keyword.html#module-keyword" target="_blank" rel="noreferrer">keyword \u5305</a>\u7684 <code>kwlist</code> \u5C5E\u6027\u53EF\u4EE5\u770B\u5230\u5F53\u524D\u7CFB\u7EDF\u7684\u6240\u6709\u4FDD\u7559\u5B57\u3002</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> keyword</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">keyword</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">kwlist</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># False</span></span>
<span class="line"><span style="color:#676E95;"># None</span></span>
<span class="line"><span style="color:#676E95;"># True</span></span>
<span class="line"><span style="color:#676E95;"># and</span></span>
<span class="line"><span style="color:#676E95;"># as</span></span>
<span class="line"><span style="color:#676E95;"># assert</span></span>
<span class="line"><span style="color:#676E95;"># async</span></span>
<span class="line"><span style="color:#676E95;"># await</span></span>
<span class="line"><span style="color:#676E95;"># break</span></span>
<span class="line"><span style="color:#676E95;"># class</span></span>
<span class="line"><span style="color:#676E95;"># continue</span></span>
<span class="line"><span style="color:#676E95;"># def</span></span>
<span class="line"><span style="color:#676E95;"># del</span></span>
<span class="line"><span style="color:#676E95;"># elif</span></span>
<span class="line"><span style="color:#676E95;"># else</span></span>
<span class="line"><span style="color:#676E95;"># except</span></span>
<span class="line"><span style="color:#676E95;"># finally</span></span>
<span class="line"><span style="color:#676E95;"># for</span></span>
<span class="line"><span style="color:#676E95;"># from</span></span>
<span class="line"><span style="color:#676E95;"># global</span></span>
<span class="line"><span style="color:#676E95;"># if</span></span>
<span class="line"><span style="color:#676E95;"># import</span></span>
<span class="line"><span style="color:#676E95;"># in</span></span>
<span class="line"><span style="color:#676E95;"># is</span></span>
<span class="line"><span style="color:#676E95;"># lambda</span></span>
<span class="line"><span style="color:#676E95;"># nonlocal</span></span>
<span class="line"><span style="color:#676E95;"># not</span></span>
<span class="line"><span style="color:#676E95;"># or</span></span>
<span class="line"><span style="color:#676E95;"># pass</span></span>
<span class="line"><span style="color:#676E95;"># raise</span></span>
<span class="line"><span style="color:#676E95;"># return</span></span>
<span class="line"><span style="color:#676E95;"># try</span></span>
<span class="line"><span style="color:#676E95;"># while</span></span>
<span class="line"><span style="color:#676E95;"># with</span></span>
<span class="line"><span style="color:#676E95;"># yield</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6807\u8BC6\u7B26" tabindex="-1">\u6807\u8BC6\u7B26 <a class="header-anchor" href="#\u6807\u8BC6\u7B26" aria-hidden="true">#</a></h2><p>\u53D8\u91CF\u3001\u51FD\u6570\u3001\u7C7B\u3001\u6A21\u5757\u548C\u5176\u4ED6\u5BF9\u8C61\u7684\u540D\u79F0\u3002</p><h2 id="\u6807\u8BC6\u7B26\u89C4\u5219" tabindex="-1">\u6807\u8BC6\u7B26\u89C4\u5219 <a class="header-anchor" href="#\u6807\u8BC6\u7B26\u89C4\u5219" aria-hidden="true">#</a></h2><ul><li>\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF</li><li>\u4E0D\u80FD\u4EE5\u6570\u5B57\u5F00\u5934</li><li>\u4E0D\u5141\u8BB8\u4F7F\u7528\u4FDD\u7559\u5B57</li><li>\u4E25\u683C\u533A\u5206\u5927\u5C0F\u5199</li></ul>`,8),o=[p];function c(r,t,i,d,y,h){return a(),n("div",null,o)}const u=s(e,[["render",c]]);export{_ as __pageData,u as default};
