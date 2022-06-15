import{_ as s,c as n,o as a,a as l}from"./app.006e62b0.js";const i='{"title":"\u51FD\u6570\u8FD4\u56DE\u503C","description":"","frontmatter":{},"headers":[],"relativePath":"guide/function/return-value.md","lastUpdated":1655284524000}',p={name:"guide/function/return-value.md"},o=l(`<h1 id="\u51FD\u6570\u8FD4\u56DE\u503C" tabindex="-1">\u51FD\u6570\u8FD4\u56DE\u503C <a class="header-anchor" href="#\u51FD\u6570\u8FD4\u56DE\u503C" aria-hidden="true">#</a></h1><ol><li><p>\u51FD\u6570\u6CA1\u6709\u8FD4\u56DE\u503C\uFF1A\u51FD\u6570\u6267\u884C\u5B8C\u6BD5\u540E\u4E0D\u9700\u8981\u7ED9\u5916\u90E8\u63D0\u4F9B\u5904\u7406\u7ED3\u679C\uFF0C\u5219\u65E0\u9700 <code>return</code> \u8BED\u53E5\u3002</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">func</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello world</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u51FD\u6570\u8FD4\u56DE\u503C\u4E3A1\u4E2A\u7684\u60C5\u51B5\uFF0C\u76F4\u63A5\u4F7F\u7528 <code>return Result</code></p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">func</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello world</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u51FD\u6570\u8FD4\u56DE\u503C\u6709\u591A\u4E2A\u7684\u60C5\u51B5\uFF0C\u8FD4\u56DE\u7684\u7ED3\u679C\u4E3A\u5143\u7956</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">calc</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    odd </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span></span>
<span class="line"><span style="color:#A6ACCD;">    even </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> args</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            odd</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">i</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            even</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">i</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> odd</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> even</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">calc</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">]))</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># ([1, 3, 5, 7, 9], [2, 4, 6, 8, 10])</span></span>
<span class="line"></span></code></pre></div></li></ol>`,2),e=[o];function c(t,r,F,y,D,A){return a(),n("div",null,e)}var d=s(p,[["render",c]]);export{i as __pageData,d as default};
