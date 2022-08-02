import{_ as s,c as a,o as n,a as l}from"./app.fc6a96cf.js";const d=JSON.parse('{"title":"\u5B57\u5178\u67E5\u8BE2\u64CD\u4F5C","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u83B7\u53D6\u5B57\u5178\u5143\u7D20","slug":"\u83B7\u53D6\u5B57\u5178\u5143\u7D20"},{"level":2,"title":"\u5224\u65AD\u952E\u662F\u5426\u5B58\u5728","slug":"\u5224\u65AD\u952E\u662F\u5426\u5B58\u5728"},{"level":2,"title":"\u83B7\u53D6\u5B57\u5178\u6240\u6709\u952E","slug":"\u83B7\u53D6\u5B57\u5178\u6240\u6709\u952E"},{"level":2,"title":"\u83B7\u53D6\u5B57\u5178\u6240\u6709\u503C","slug":"\u83B7\u53D6\u5B57\u5178\u6240\u6709\u503C"},{"level":2,"title":"\u83B7\u53D6\u5B57\u5178\u7684\u952E\u503C","slug":"\u83B7\u53D6\u5B57\u5178\u7684\u952E\u503C"},{"level":2,"title":"for-in\u904D\u5386\u5B57\u5178","slug":"for-in\u904D\u5386\u5B57\u5178"}],"relativePath":"guide/dict/find.md","lastUpdated":1657683920000}'),o={name:"guide/dict/find.md"},p=l(`<h1 id="\u5B57\u5178\u67E5\u8BE2\u64CD\u4F5C" tabindex="-1">\u5B57\u5178\u67E5\u8BE2\u64CD\u4F5C <a class="header-anchor" href="#\u5B57\u5178\u67E5\u8BE2\u64CD\u4F5C" aria-hidden="true">#</a></h1><h2 id="\u83B7\u53D6\u5B57\u5178\u5143\u7D20" tabindex="-1">\u83B7\u53D6\u5B57\u5178\u5143\u7D20 <a class="header-anchor" href="#\u83B7\u53D6\u5B57\u5178\u5143\u7D20" aria-hidden="true">#</a></h2><ol><li><p>\u4F7F\u7528 <code>[]</code> \u4E2D\u6269\u53F7 + \u952E\u7684\u65B9\u5F0F\u83B7\u53D6\uFF0C\u6BD4\u5982\uFF1A<code>l[&#39;name&#39;]</code></p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">d </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">curder</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hobby</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">coding</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">d</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">])</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># curder</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u83B7\u53D6\u4E0D\u5B58\u5728\u7684\u952E\u7684\u503C\uFF0C\u629B\u51FA KeyError \u5F02\u5E38</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">d</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">age</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">])</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># KeyError: &#39;age&#39;</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u4F7F\u7528 <code>get()</code> \u65B9\u6CD5 + \u952E\u7684\u65B9\u5F0F\u83B7\u53D6\uFF0C\u6BD4\u5982\uFF1A<code>l.get(&#39;name&#39;)</code></p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">d </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">curder</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hobby</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">coding</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">d</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># curder</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u83B7\u53D6\u4E0D\u5B58\u5728\u7684\u952E\u7684\u503C\uFF0C\u8FD4\u56DE None</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">d</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">age</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># None</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u83B7\u53D6\u4E0D\u5B58\u5728\u7684\u952E\u7684\u503C\uFF0C\u5E76\u4F20\u9012\u9ED8\u8BA4\u503C\uFF0C\u6700\u540E\u8FD4\u56DE\u9ED8\u8BA4\u503C</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">d</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">age</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 18</span></span>
<span class="line"></span></code></pre></div></li></ol><p>\u4E0A\u9762\u4F7F\u7528\u4E2D\u6269\u53F7\u6216\u4F7F\u7528 <code>get</code> \u65B9\u6CD5\u83B7\u53D6\u5B57\u5178\u4E2D\u7684\u5143\u7D20\u7684\u65B9\u5F0F\u4E0D\u540C\u4E4B\u5904\u5728\u4E8E\uFF1A</p><ol><li><code>[]</code> \u5982\u679C\u5B57\u5178\u4E2D\u4E0D\u5B58\u5728\u6307\u5B9A\u7684key\uFF0C\u5219\u629B\u51FA <code>KeyError</code> \u5F02\u5E38</li><li><code>get</code> \u65B9\u6CD5\u53D6\u503C\uFF0C\u5982\u679C\u5B57\u5178\u4E2D\u4E0D\u5B58\u5728\u6307\u5B9A\u7684key\uFF0C\u653E\u56DE <code>None</code>\uFF0C\u53EF\u4EE5\u901A\u8FC7\u53C2\u6570\u8BBE\u7F6E\u9ED8\u8BA4\u503C\uFF0C\u4EE5\u4FBF\u6307\u5B9A\u7684 Key \u4E0D\u5B58\u5728\u65F6\u8FD4\u56DE</li></ol><h2 id="\u5224\u65AD\u952E\u662F\u5426\u5B58\u5728" tabindex="-1">\u5224\u65AD\u952E\u662F\u5426\u5B58\u5728 <a class="header-anchor" href="#\u5224\u65AD\u952E\u662F\u5426\u5B58\u5728" aria-hidden="true">#</a></h2><p>\u4F7F\u7528 <code>in</code> \u6216 <code>not in</code> \u5224\u65AD\u952E\u662F\u5426\u5B58\u5728\u4E8E\u5B57\u5178\u4E2D\uFF0C\u6700\u540E\u8FD4\u56DE\u5E03\u5C14\u503C\u3002</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">d </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">curder</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hobby</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">coding</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hobby</span><span style="color:#89DDFF;">&#39;</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#82AAFF;"> d</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># True</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;font-style:italic;">not</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#82AAFF;"> d</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># False</span></span>
<span class="line"></span></code></pre></div><h2 id="\u83B7\u53D6\u5B57\u5178\u6240\u6709\u952E" tabindex="-1">\u83B7\u53D6\u5B57\u5178\u6240\u6709\u952E <a class="header-anchor" href="#\u83B7\u53D6\u5B57\u5178\u6240\u6709\u952E" aria-hidden="true">#</a></h2><p>\u901A\u8FC7\u5B57\u5178\u7684 <code>keys()</code> \u65B9\u6CD5\u53EF\u4EE5\u83B7\u53D6\u5230\u5B57\u5178\u7684\u6240\u6709\u952E\uFF0C\u518D\u901A\u8FC7 <code>list</code> \u51FD\u6570\u5C06\u5176\u8F6C\u6362\u4E3A\u5217\u8868\u3002</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">d </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">curder</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">married</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">False}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">d</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">keys</span><span style="color:#89DDFF;">())</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># dict_keys([&#39;name&#39;, &#39;married&#39;])</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">list</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">d</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">keys</span><span style="color:#89DDFF;">()))</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># [&#39;name&#39;, &#39;married&#39;]</span></span>
<span class="line"></span></code></pre></div><h2 id="\u83B7\u53D6\u5B57\u5178\u6240\u6709\u503C" tabindex="-1">\u83B7\u53D6\u5B57\u5178\u6240\u6709\u503C <a class="header-anchor" href="#\u83B7\u53D6\u5B57\u5178\u6240\u6709\u503C" aria-hidden="true">#</a></h2><p>\u901A\u8FC7\u5B57\u5178\u7684 <code>values()</code> \u65B9\u6CD5\u53EF\u4EE5\u83B7\u53D6\u5230\u5B57\u5178\u7684\u6240\u6709\u503C\uFF0C\u518D\u901A\u8FC7 <code>list</code> \u51FD\u6570\u5C06\u5176\u8F6C\u6362\u4E3A\u5217\u8868\u3002</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">d </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">curder</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">married</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">False}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">d</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">values</span><span style="color:#89DDFF;">())</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># dict_values([&#39;curder&#39;, False])</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">list</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">d</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">values</span><span style="color:#89DDFF;">()))</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># [&#39;curder&#39;, False]</span></span>
<span class="line"></span></code></pre></div><h2 id="\u83B7\u53D6\u5B57\u5178\u7684\u952E\u503C" tabindex="-1">\u83B7\u53D6\u5B57\u5178\u7684\u952E\u503C <a class="header-anchor" href="#\u83B7\u53D6\u5B57\u5178\u7684\u952E\u503C" aria-hidden="true">#</a></h2><p>\u901A\u8FC7\u5B57\u5178\u7684 <code>items()</code> \u65B9\u6CD5\u53EF\u4EE5\u83B7\u53D6\u5230\u5B57\u5178\u7684\u6240\u6709\u952E\u548C\u503C\uFF0C\u518D\u901A\u8FC7 <code>list</code> \u51FD\u6570\u5C06\u5176\u8F6C\u6362\u4E3A\u5217\u8868\u3002</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">d </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">curder</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">married</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">False}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">d</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">items</span><span style="color:#89DDFF;">())</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># dict_items([(&#39;name&#39;, &#39;curder&#39;), (&#39;married&#39;, False)])</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">list</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">d</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">items</span><span style="color:#89DDFF;">()))</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># [(&#39;name&#39;, &#39;curder&#39;), (&#39;married&#39;, False)]</span></span>
<span class="line"></span></code></pre></div><h2 id="for-in\u904D\u5386\u5B57\u5178" tabindex="-1">for-in\u904D\u5386\u5B57\u5178 <a class="header-anchor" href="#for-in\u904D\u5386\u5B57\u5178" aria-hidden="true">#</a></h2><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">d </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">curder</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">married</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">False}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> k </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> d</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">k</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> d</span><span style="color:#89DDFF;">[</span><span style="color:#82AAFF;">k</span><span style="color:#89DDFF;">],</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;">end</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># name curder, married False,</span></span>
<span class="line"></span></code></pre></div>`,19),e=[p];function t(c,r,F,D,y,i){return n(),a("div",null,e)}var C=s(o,[["render",t]]);export{d as __pageData,C as default};