import{_ as s,c as n,o as a,a as p}from"./app.1832a5c2.js";const u=JSON.parse('{"title":"input \u8F93\u5165\u51FD\u6570","description":"","frontmatter":{},"headers":[],"relativePath":"guide/basic/function-input.md","lastUpdated":1657640200000}'),l={name:"guide/basic/function-input.md"},o=p(`<h1 id="input-function" tabindex="-1">input \u8F93\u5165\u51FD\u6570 <a class="header-anchor" href="#input-function" aria-hidden="true">#</a></h1><ul><li><p>input \u51FD\u6570\u63A5\u53D7\u7528\u6237\u8F93\u5165\u7684\u503C\u3002</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">present </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">input</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">What</span><span style="color:#A6ACCD;">\\&#39;</span><span style="color:#C3E88D;">s your name: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Your name is </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> present</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># Your name is Curder</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u83B7\u53D6\u7528\u6237\u8F93\u5165\u7684\u6574\u578B\uFF0C\u5E76\u6C42\u548C</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">input</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Give me a number: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">input</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Give me another number: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">int</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">a</span><span style="color:#89DDFF;">)</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">+</span><span style="color:#82AAFF;"> </span><span style="color:#FFCB6B;">int</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">b</span><span style="color:#89DDFF;">))</span></span>
<span class="line"></span></code></pre></div></li></ul>`,2),e=[o];function t(c,r,F,D,i,y){return a(),n("div",null,e)}var d=s(l,[["render",t]]);export{u as __pageData,d as default};
