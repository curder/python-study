import{_ as s,c as n,o as a,a as l}from"./app.1a44adc9.js";const C=JSON.parse('{"title":"with\u8BED\u53E5","description":"","frontmatter":{},"headers":[],"relativePath":"guide/os/with.md","lastUpdated":1656406601000}'),p={name:"guide/os/with.md"},o=l(`<h1 id="with\u8BED\u53E5" tabindex="-1">with\u8BED\u53E5 <a class="header-anchor" href="#with\u8BED\u53E5" aria-hidden="true">#</a></h1><p><code>with</code> \u8BED\u53E5\u53EF\u4EE5\u81EA\u52A8\u7BA1\u7406\u4E0A\u4E0B\u6587\u8D44\u6E90\uFF0C\u4E0D\u8BBA\u4EC0\u4E48\u539F\u56E0\u8DF3\u51FA <code>with</code> \u5757\uFF0C\u90FD\u80FD\u786E\u4FDD\u6587\u4EF6\u6B63\u786E\u7684\u5173\u95ED\uFF0C\u4EE5\u6B64\u6765\u8FBE\u5230\u91CA\u653E\u8D44\u6E90\u7684\u76EE\u7684\u3002</p><p>\u53EF\u4EE5\u4F7F\u7528 <code>with</code> \u6765\u6253\u5F00\u6587\u4EF6\u3002</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u4F7F\u7528 with \u65B9\u5F0F\u8D4B\u503C\u4E8C\u8FDB\u5236\u6587\u4EF6</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">with</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./logo.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">br</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> origin_file</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">with</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./new-logo.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bw</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> new_file</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        new_file</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">write</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">origin_file</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">read</span><span style="color:#89DDFF;">())</span></span>
<span class="line"></span></code></pre></div><p><code>with</code> \u8BED\u53E5\u4F53\u4F1A\u81EA\u52A8\u8C03\u7528\u4E0A\u4E0B\u6587\u7BA1\u7406\u5668 <code>__enter__</code> \u548C <code>__exit__</code> \u65B9\u6CD5\u3002</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Cls</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__enter__</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">__enter__ method handle...</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> self</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__exit__</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> exc_type</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> exc_val</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> exc_tb</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">__exit__ method handle...</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#FFCB6B;">staticmethod</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">show</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">show method handle...</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">with</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Cls</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> cls</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># \u76F8\u5F53\u4E8E cls=new Cls() </span></span>
<span class="line"><span style="color:#A6ACCD;">    cls</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">show</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre></div>`,6),e=[o];function t(c,r,D,F,y,A){return a(),n("div",null,e)}var _=s(p,[["render",t]]);export{C as __pageData,_ as default};
