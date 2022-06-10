import{_ as s,c as n,o as a,a as l}from"./app.10d12e75.js";const A='{"title":"else \u8BED\u53E5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E0E else \u8BED\u53E5\u914D\u5408","slug":"works-with-else-statement"},{"level":3,"title":"if-else \u548C for-else","slug":"if-else-and-for-else"},{"level":3,"title":"while-else","slug":"while-else"}],"relativePath":"basic/else.md","lastUpdated":1654853235000}',e={name:"basic/else.md"},o=l(`<h1 id="else" tabindex="-1">else \u8BED\u53E5 <a class="header-anchor" href="#else" aria-hidden="true">#</a></h1><h2 id="works-with-else-statement" tabindex="-1">\u4E0E else \u8BED\u53E5\u914D\u5408 <a class="header-anchor" href="#works-with-else-statement" aria-hidden="true">#</a></h2><ul><li><code>if-else</code> \u8868\u793A\u6761\u4EF6\u4E0D\u6210\u7ACB\u65F6\u6267\u884Celse</li><li><code>while-else</code> \u6CA1\u6709\u78B0\u5230break\u65F6\uFF0C\u6267\u884Celse</li><li><code>for-else</code> \u6CA1\u6709\u78B0\u5230break\u65F6\uFF0C\u6267\u884Celse</li></ul><h3 id="if-else-and-for-else" tabindex="-1">if-else \u548C for-else <a class="header-anchor" href="#if-else-and-for-else" aria-hidden="true">#</a></h3><div class="language-python"><span class="copy"></span><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><br><br><br><br></div><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> _ </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">range</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    pwd </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">input</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Pls enter your password\uFF1A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> pwd </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">123</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">correct password</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">break</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">incorrect password</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">too many times retry.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u8FD0\u884C\u7ED3\u679C\u5982\u4E0B\uFF1A </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Pls enter your password\uFF1A111        # \u8F93\u5165\u9519\u8BEF 111</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># incorrect password</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Pls enter your password\uFF1A124        # \u8F93\u5165\u9519\u8BEF 124</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># incorrect password</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Pls enter your password\uFF1A111        # \u8F93\u5165\u9519\u8BEF 111</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># incorrect password</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># too many times retry.</span></span>
<span class="line"></span></code></pre></div><h3 id="while-else" tabindex="-1">while-else <a class="header-anchor" href="#while-else" aria-hidden="true">#</a></h3><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    pwd </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">input</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Pls enter your password\uFF1A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> pwd </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">123</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">correct password</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">break</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">incorrect password</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    i </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">too many times retry.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u8FD0\u884C\u7ED3\u679C\u5982\u4E0B\uFF1A  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Pls enter your password\uFF1A111        # \u8F93\u5165\u9519\u8BEF 111</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># incorrect password</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Pls enter your password\uFF1A222        # \u8F93\u5165\u9519\u8BEF 222</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># incorrect password</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Pls enter your password\uFF1A333        # \u8F93\u5165\u9519\u8BEF 333</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># incorrect password</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># too many times retry.</span></span>
<span class="line"></span></code></pre></div>`,7),p=[o];function t(r,c,i,y,D,F){return a(),n("div",null,p)}var C=s(e,[["render",t]]);export{A as __pageData,C as default};
