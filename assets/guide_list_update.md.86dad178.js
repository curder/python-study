import{_ as s,c as a,o as n,a as l}from"./app.3672c6c3.js";const A='{"title":"\u7F16\u8F91\u5217\u8868","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u589E\u52A0\u5217\u8868\u5143\u7D20","slug":"add-list-item"},{"level":3,"title":"append \u65B9\u6CD5","slug":"append-method"},{"level":3,"title":"extend \u65B9\u6CD5","slug":"extend-method"},{"level":3,"title":"insert \u65B9\u6CD5","slug":"insert-method"},{"level":3,"title":"slice \u5207\u7247","slug":"add-items-using-slice"}],"relativePath":"guide/list/update.md","lastUpdated":1654926853000}',p={name:"guide/list/update.md"},o=l(`<h1 id="update-list" tabindex="-1">\u7F16\u8F91\u5217\u8868 <a class="header-anchor" href="#update-list" aria-hidden="true">#</a></h1><h2 id="add-list-item" tabindex="-1">\u589E\u52A0\u5217\u8868\u5143\u7D20 <a class="header-anchor" href="#add-list-item" aria-hidden="true">#</a></h2><table><thead><tr><th>\u65B9\u6CD5</th><th>\u64CD\u4F5C\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code>append(object)</code></td><td>\u5728\u5217\u8868\u672B\u5C3E\u6DFB\u52A0\u4E00\u4E2A\u5143\u7D20</td></tr><tr><td><code>extend(object)</code></td><td>\u5728\u5217\u8868\u672B\u5C3E\u81F3\u5C11\u6DFB\u52A0\u4E00\u4E2A\u5143\u7D20</td></tr><tr><td><code>insert(index, object)</code></td><td>\u5728\u5217\u8868\u7684\u4EFB\u610F\u4F4D\u7F6E\u5904\u6DFB\u52A0\u4E00\u4E2A\u5143\u7D20</td></tr><tr><td>slice \u5207\u7247</td><td>\u5728\u5217\u8868\u4EFB\u610F\u4F4D\u7F6E\u81F3\u5C11\u6DFB\u52A0\u81F3\u5C11\u4E00\u4E2A\u5143\u7D20</td></tr></tbody></table><h3 id="append-method" tabindex="-1"><code>append</code> \u65B9\u6CD5 <a class="header-anchor" href="#append-method" aria-hidden="true">#</a></h3><div class="language-python"><span class="copy"></span><div class="highlight-lines"><br><br><div class="highlighted">\xA0</div><br><br></div><pre><code><span class="line"><span style="color:#A6ACCD;">l </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">l</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># [1, 2, &#39;hello&#39;]</span></span>
<span class="line"></span></code></pre></div><blockquote><p><strong>\u6CE8\u610F\uFF1A</strong> \u589E\u52A0\u5217\u8868\u5143\u7D20\u64CD\u4F5C\u524D\u540E\u5217\u8868\u7684\u6807\u8BC6\u6CA1\u6709\u6539\u53D8</p></blockquote><div class="language-python"><span class="copy"></span><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><br></div><pre><code><span class="line"><span style="color:#A6ACCD;">l </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">l</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># [1, 2, &#39;hello&#39;]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">l2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">world</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">l2</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">l</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># [1, 2, &#39;hello&#39;, [&#39;hello&#39;, &#39;world&#39;]]</span></span>
<span class="line"></span></code></pre></div><p>\u4EE5\u4E0A\u64CD\u4F5C <code>l2</code> \u5C06\u4F5C\u4E3A\u4E00\u4E2A\u5143\u7D20\u6DFB\u52A0\u5230 <code>l</code> \u5217\u8868\u4E2D\u3002</p><h3 id="extend-method" tabindex="-1"><code>extend</code> \u65B9\u6CD5 <a class="header-anchor" href="#extend-method" aria-hidden="true">#</a></h3><p><code>extend</code> \u65B9\u6CD5\u4F1A\u5728\u539F\u5217\u8868\u672B\u5C3E\u5904\u4E00\u6B21\u6027\u6DFB\u52A0\u591A\u4E2A\u5143\u7D20\u3002</p><div class="language-python"><span class="copy"></span><div class="highlight-lines"><br><br><br><br><div class="highlighted">\xA0</div><br></div><pre><code><span class="line"><span style="color:#A6ACCD;">l </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">l2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">world</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">extend</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">l2</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">l</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># [1, 2, &#39;hello&#39;, &#39;world&#39;]</span></span>
<span class="line"></span></code></pre></div><h3 id="insert-method" tabindex="-1"><code>insert</code> \u65B9\u6CD5 <a class="header-anchor" href="#insert-method" aria-hidden="true">#</a></h3><p><code>insert</code> \u65B9\u6CD5\u53EF\u4EE5\u5728\u5217\u8868\u6307\u5B9A\u7D22\u5F15\u5904\u6DFB\u52A0\u5143\u7D20\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u9700\u8981\u6DFB\u52A0\u7684\u5143\u7D20\u6240\u5728\u7D22\u5F15\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u5F85\u6DFB\u52A0\u7684\u5143\u7D20\u3002</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">l </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">insert</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">l</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># [1, &quot;hello&quot;, 2] </span></span>
<span class="line"></span></code></pre></div><h3 id="add-items-using-slice" tabindex="-1">slice \u5207\u7247 <a class="header-anchor" href="#add-items-using-slice" aria-hidden="true">#</a></h3><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">l </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">l2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">world</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">:]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> l2</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">l</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># [1, &#39;hello&#39;, &#39;world&#39;]</span></span>
<span class="line"></span></code></pre></div>`,16),e=[o];function t(c,r,F,D,y,d){return n(),a("div",null,e)}var C=s(p,[["render",t]]);export{A as __pageData,C as default};
