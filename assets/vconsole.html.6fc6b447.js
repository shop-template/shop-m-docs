import{_ as n,o as s,c as a,e}from"./app.76658b79.js";const o={},t=e(`<h1 id="vconsole-\u79FB\u52A8\u7AEF\u63A7\u5236\u53F0" tabindex="-1"><a class="header-anchor" href="#vconsole-\u79FB\u52A8\u7AEF\u63A7\u5236\u53F0" aria-hidden="true">#</a> vconsole \u79FB\u52A8\u7AEF\u63A7\u5236\u53F0</h1><p>\u8FDB\u5165\u9879\u76EE\u9ED8\u8BA4\u662F\u4E0D\u4F1A\u6253\u5F00 vconsole \u7684\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5728\u94FE\u63A5\u4E0A\u6DFB\u52A0 <code>?vconsole=true</code> \u6765\u81EA\u52A8\u6DFB\u52A0 vconsole \uFF0C\u5728 <code>src/app.vue</code> \u4E2D\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> VConsole <span class="token keyword">from</span> <span class="token string">&#39;vconsole&#39;</span>

<span class="token keyword">const</span> Route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u5F53 Route.query.vconsole \u5B58\u5728\u65F6\uFF0C\u521D\u59CB\u5316 vconsole</span>
<span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Route<span class="token punctuation">.</span>query<span class="token punctuation">.</span>vconsole<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">new</span> <span class="token class-name">VConsole</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6216\u8005\u662F\u81EA\u884C\u8C03\u7528 vconsole \u7684\u521D\u59CB\u5316\u548C\u9500\u6BC1\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> VConsole <span class="token keyword">from</span> <span class="token string">&#39;vconsole&#39;</span>

<span class="token keyword">let</span> vConsole

<span class="token keyword">function</span> <span class="token function">addVconsoleEvent</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  vConsole <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VConsole</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">destroyVconsoleEvent</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>vConsole<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vConsole <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VConsole</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  vConsole<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[t];function p(l,i){return s(),a("div",null,c)}var d=n(o,[["render",p],["__file","vconsole.html.vue"]]);export{d as default};
