import{_ as s,c as n,o as a,a as l}from"./app.4ea4b561.js";const A=JSON.parse('{"title":"\u6587\u4EF6\u8BFB\u5199\u64CD\u4F5C","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6253\u5F00\u6587\u4EF6","slug":"\u6253\u5F00\u6587\u4EF6","link":"#\u6253\u5F00\u6587\u4EF6","children":[{"level":3,"title":"\u53EA\u5199\u6A21\u5F0F","slug":"\u53EA\u5199\u6A21\u5F0F","link":"#\u53EA\u5199\u6A21\u5F0F","children":[]},{"level":3,"title":"\u8FFD\u52A0\u6A21\u5F0F","slug":"\u8FFD\u52A0\u6A21\u5F0F","link":"#\u8FFD\u52A0\u6A21\u5F0F","children":[]},{"level":3,"title":"\u4E8C\u8FDB\u5236\u65B9\u5F0F","slug":"\u4E8C\u8FDB\u5236\u65B9\u5F0F","link":"#\u4E8C\u8FDB\u5236\u65B9\u5F0F","children":[]}]}],"relativePath":"guide/os/index.md","lastUpdated":1656404518000}'),o={name:"guide/os/index.md"},p=l(`<h1 id="\u6587\u4EF6\u8BFB\u5199\u64CD\u4F5C" tabindex="-1">\u6587\u4EF6\u8BFB\u5199\u64CD\u4F5C <a class="header-anchor" href="#\u6587\u4EF6\u8BFB\u5199\u64CD\u4F5C" aria-hidden="true">#</a></h1><p>\u4F7F\u7528\u5185\u7F6E\u51FD\u6570 <code>open()</code> \u521B\u5EFA\u6587\u4EF6\u5BF9\u8C61\u3002\u6BD4\u5982\uFF1A<code>file = open(filename, [mode, encoding])</code>\u3002</p><h2 id="\u6253\u5F00\u6587\u4EF6" tabindex="-1">\u6253\u5F00\u6587\u4EF6 <a class="header-anchor" href="#\u6253\u5F00\u6587\u4EF6" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u4F7F\u7528\u5185\u7F6E\u51FD\u6570 <code>open()</code> \u521B\u5EFA\u6587\u4EF6\u5BF9\u8C61\u3002</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki has-highlighted-lines"><code><span class="line highlighted"><span style="color:#A6ACCD;">f </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./index.md</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">r</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">f</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">readlines</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#A6ACCD;">f</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">close</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre></div><p>\u4E0A\u9762\u6587\u4EF6\u6253\u5F00\u6A21\u5F0F\u4E3A\u53EA\u8BFB\u6A21\u5F0F\uFF0C\u9664\u4E86\u53EA\u8BFB\u6A21\u5F0F\uFF0C\u8FD8\u6709\u5F88\u591A\u5176\u4ED6\u6A21\u5F0F\uFF1A</p><ul><li><code>r</code> \u4EE5\u53EA\u8BFB\u6A21\u5F0F\u6253\u5F00\u6587\u4EF6\uFF0C\u6587\u4EF6\u7684\u6307\u9488\u5C06\u4F1A\u653E\u5728\u6587\u4EF6\u7684\u5F00\u5934</li><li><code>w</code> \u4EE5\u53EA\u5199\u6A21\u5F0F\u6253\u5F00\u6587\u4EF6\uFF0C\u5982\u679C\u6587\u4EF6\u4E0D\u5B58\u5728\u5219\u521B\u5EFA\uFF0C\u5982\u679C\u6587\u4EF6\u5B58\u5728\u5219\u8986\u76D6\u539F\u6709\u5185\u5BB9\uFF0C\u6587\u4EF6\u6307\u9488\u5728\u6587\u4EF6\u7684\u5F00\u5934</li><li><code>a</code> \u4EE5\u8FFD\u52A0\u6A21\u5F0F\u6253\u5F00\u6587\u4EF6\uFF0C\u5982\u679C\u6587\u4EF6\u4E0D\u5B58\u5728\u5219\u521B\u5EFA\uFF0C\u6587\u4EF6\u6307\u9488\u5728\u6587\u4EF6\u5F00\u5934\uFF1B\u5982\u679C\u6587\u4EF6\u5B58\u5728\u5219\u5728\u6587\u4EF6\u672B\u5C3E\u8FFD\u52A0\u5185\u5BB9\uFF0C\u6587\u4EF6\u6307\u9488\u5728\u6587\u4EF6\u672B\u5C3E</li><li><code>b</code> \u4EE5\u4E8C\u8FDB\u5236\u65B9\u5F0F\u6253\u5F00\u6587\u4EF6\uFF0C\u4E0D\u80FD\u5355\u72EC\u4F7F\u7528\uFF0C\u9700\u8981\u4E0E\u5176\u4ED6\u6A21\u5F0F\u914D\u5408\u4E00\u540C\u4F7F\u7528, <code>rb</code> \u6216 <code>wb</code></li><li><code>+</code> \u4EE5\u8BFB\u5199\u6A21\u5F0F\u6253\u5F00\u6587\u4EF6\uFF0C\u4E0D\u80FD\u5355\u72EC\u4F7F\u7528\uFF0C\u9700\u8981\u4E0E\u63D0\u8D77\u4ED6\u6A21\u5F0F\u4E00\u8D77\u4F7F\u7528\uFF0C<code>a+</code></li></ul><h3 id="\u53EA\u5199\u6A21\u5F0F" tabindex="-1">\u53EA\u5199\u6A21\u5F0F <a class="header-anchor" href="#\u53EA\u5199\u6A21\u5F0F" aria-hidden="true">#</a></h3><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki has-highlighted-lines"><code><span class="line highlighted"><span style="color:#A6ACCD;">f </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./index.md</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">w</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">f</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">write</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">f</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">close</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre></div><h3 id="\u8FFD\u52A0\u6A21\u5F0F" tabindex="-1">\u8FFD\u52A0\u6A21\u5F0F <a class="header-anchor" href="#\u8FFD\u52A0\u6A21\u5F0F" aria-hidden="true">#</a></h3><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">f </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./index.md</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">f</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">write</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">f</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">close</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre></div><h3 id="\u4E8C\u8FDB\u5236\u65B9\u5F0F" tabindex="-1">\u4E8C\u8FDB\u5236\u65B9\u5F0F <a class="header-anchor" href="#\u4E8C\u8FDB\u5236\u65B9\u5F0F" aria-hidden="true">#</a></h3><p>\u4F7F\u7528\u4E8C\u8FDB\u5236\u6A21\u5F0F\u62F7\u8D1D\u4E8C\u8FDB\u5236\u3002</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki has-highlighted-lines"><code><span class="line"><span style="color:#676E95;"># \u5047\u5982\u5F53\u524D\u76EE\u5F55\u6709\u4E00\u4E2Alogo.png\uFF0C\u8BFB\u53D6\u5E76\u62F7\u8D1D\u4E3A\u65B0\u6587\u4EF6 new-logo.png</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">f </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">logo.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">rb</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">target_file </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">new-logo.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">wb</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">target_file</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">write</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">f</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">read</span><span style="color:#89DDFF;">())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">f</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">close</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">target_file</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">close</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre></div>`,14),e=[p];function c(t,r,F,D,y,i){return a(),n("div",null,e)}const h=s(o,[["render",c]]);export{A as __pageData,h as default};
