import{_ as s,c as a,o as n,a as o}from"./app.4f8fa03f.js";const A='{"title":"\u521B\u5EFA\u5B57\u5178","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B57\u5178\u7684\u521B\u5EFA","slug":"create-dict"}],"relativePath":"guide/dict/create.md","lastUpdated":1655001945000}',l={name:"guide/dict/create.md"},p=o(`<h1 id="top" tabindex="-1">\u521B\u5EFA\u5B57\u5178 <a class="header-anchor" href="#top" aria-hidden="true">#</a></h1><h2 id="create-dict" tabindex="-1">\u5B57\u5178\u7684\u521B\u5EFA <a class="header-anchor" href="#create-dict" aria-hidden="true">#</a></h2><p>\u5B57\u5178\u7684\u521B\u5EFA\u6709\u4E24\u79CD\u65B9\u5F0F\uFF1A</p><ol><li>\u4F7F\u7528\u82B1\u62EC\u53F7\uFF0C\u952E\u503C\u5BF9\u4E4B\u95F4\u4F7F\u7528 <code>:</code> \u5192\u53F7\u5206\u5272\uFF0C\u5143\u7D20\u4E4B\u95F4\u4F7F\u7528 <code>,</code> \u82F1\u6587\u9017\u53F7\u5206\u5272</li><li>\u4F7F\u7528\u5185\u7F6E\u51FD\u6570 <code>dict()</code></li></ol><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># 1. \u4F7F\u7528\u82B1\u62EC\u53F7\u521B\u5EFA\u5B57\u5178</span></span>
<span class="line"><span style="color:#A6ACCD;">d </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">curder</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hobby</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">coding</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">d</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># {&#39;name&#39;: &#39;curder&#39;, &#39;hobby&#39;: &#39;coding&#39;}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 2. \u4F7F\u7528dirt\u51FD\u6570\u521B\u5EFA\u5B57\u5178</span></span>
<span class="line"><span style="color:#A6ACCD;">d </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">dict</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">curder</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;">hobby</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">coding</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">d</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># {&#39;name&#39;: &#39;curder&#39;, &#39;hobby&#39;: &#39;coding&#39;}</span></span>
<span class="line"></span></code></pre></div>`,5),e=[p];function t(c,r,D,F,y,i){return n(),a("div",null,e)}var C=s(l,[["render",t]]);export{A as __pageData,C as default};
