import{_ as s,c as a,o as n,a as l}from"./app.e74dce69.js";const A=JSON.parse('{"title":"\u7F16\u8F91\u5B57\u5178","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u589E\u52A0\u5B57\u5178\u5143\u7D20","slug":"\u589E\u52A0\u5B57\u5178\u5143\u7D20"},{"level":2,"title":"\u5220\u9664\u5B57\u5178\u5143\u7D20","slug":"\u5220\u9664\u5B57\u5178\u5143\u7D20"},{"level":3,"title":"\u6E05\u7A7A\u5217\u8868\u5143\u7D20","slug":"\u6E05\u7A7A\u5217\u8868\u5143\u7D20"},{"level":2,"title":"\u4FEE\u6539\u5B57\u5178\u5143\u7D20","slug":"\u4FEE\u6539\u5B57\u5178\u5143\u7D20"}],"relativePath":"guide/dict/update.md","lastUpdated":1657683920000}'),o={name:"guide/dict/update.md"},p=l(`<h1 id="\u7F16\u8F91\u5B57\u5178" tabindex="-1">\u7F16\u8F91\u5B57\u5178 <a class="header-anchor" href="#\u7F16\u8F91\u5B57\u5178" aria-hidden="true">#</a></h1><h2 id="\u589E\u52A0\u5B57\u5178\u5143\u7D20" tabindex="-1">\u589E\u52A0\u5B57\u5178\u5143\u7D20 <a class="header-anchor" href="#\u589E\u52A0\u5B57\u5178\u5143\u7D20" aria-hidden="true">#</a></h2><div class="language-python"><span class="copy"></span><div class="highlight-lines"><br><br><div class="highlighted">\xA0</div><br><br></div><pre><code><span class="line"><span style="color:#A6ACCD;">d </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">curder</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hobby</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">coding</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">d</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">married</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">False</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># \u589E\u52A0\u4E00\u4E2A\u5B57\u5178\u5143\u7D20</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">d</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># {&#39;name&#39;: &#39;curder&#39;, &#39;hobby&#39;: &#39;coding&#39;, &#39;married&#39;: False}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5220\u9664\u5B57\u5178\u5143\u7D20" tabindex="-1">\u5220\u9664\u5B57\u5178\u5143\u7D20 <a class="header-anchor" href="#\u5220\u9664\u5B57\u5178\u5143\u7D20" aria-hidden="true">#</a></h2><p>\u4F7F\u7528 <code>del</code> \u5173\u952E\u5B57\u5220\u9664\u5B57\u5178\u5143\u7D20\u3002</p><div class="language-python"><span class="copy"></span><div class="highlight-lines"><br><br><div class="highlighted">\xA0</div><br><br></div><pre><code><span class="line"><span style="color:#A6ACCD;">d </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">curder</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hobby</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">coding</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">del</span><span style="color:#A6ACCD;"> d</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hobby</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># \u5220\u9664\u5B57\u5178\u7684 hobby key</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">d</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># {&#39;name&#39;: &#39;curder&#39;}</span></span>
<span class="line"></span></code></pre></div><h3 id="\u6E05\u7A7A\u5217\u8868\u5143\u7D20" tabindex="-1">\u6E05\u7A7A\u5217\u8868\u5143\u7D20 <a class="header-anchor" href="#\u6E05\u7A7A\u5217\u8868\u5143\u7D20" aria-hidden="true">#</a></h3><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">d </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">curder</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hobby</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">coding</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">d</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clear</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">d</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># {}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4FEE\u6539\u5B57\u5178\u5143\u7D20" tabindex="-1">\u4FEE\u6539\u5B57\u5178\u5143\u7D20 <a class="header-anchor" href="#\u4FEE\u6539\u5B57\u5178\u5143\u7D20" aria-hidden="true">#</a></h2><p>\u5C06key\u8D4B\u503C\u65B0\u7684\u503C\u7528\u4E8E\u8986\u76D6\u65E7\u503C\u5219\u5B8C\u6210\u5B57\u5178\u5143\u7D20\u7684\u4FEE\u6539\u3002</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">d </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">curder</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">married</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">False}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">d</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">married</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">True</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">d</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># {&#39;name&#39;: &#39;curder&#39;, &#39;married&#39;: True}</span></span>
<span class="line"></span></code></pre></div>`,11),e=[p];function t(c,r,D,F,y,i){return n(),a("div",null,e)}var C=s(o,[["render",t]]);export{A as __pageData,C as default};