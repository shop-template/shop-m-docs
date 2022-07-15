import{_ as p,o,c,a as n,d as t,b as a,e,r}from"./app.76658b79.js";const i={},l=n("h1",{id:"tabbar-\u4F7F\u7528\u6F14\u793A",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#tabbar-\u4F7F\u7528\u6F14\u793A","aria-hidden":"true"},"#"),a(" tabbar \u4F7F\u7528\u6F14\u793A")],-1),u=a("\u4F7F\u7528 tabbar \u524D\u8BF7\u5148\u67E5\u770B "),d={href:"https://vant-contrib.gitee.io/vant/#/zh-CN/tabbar",target:"_blank",rel:"noopener noreferrer"},b=a("vant tabbar"),k=a(" \u4F7F\u7528\u6587\u6863\u3002"),v=e(`<p>tabbar \u7EC4\u4EF6\u5C01\u88C5\u5728\u6839\u76EE\u5F55 <code>src/components/LayoutTabbar.vue</code> \uFF0C\u63A7\u5236 tabbar \u7684\u5168\u5C40\u72B6\u6001\u653E\u5728\u6839\u76EE\u5F55 <code>src/store/layoutTabbar.js</code> \u6587\u4EF6\u4E2D\u3002</p><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><p>\u9996\u5148\u9700\u8981\u5728 <code>src/store/layoutTabbar.js</code> \u6587\u4EF6\u4E2D\u914D\u7F6E tabbar:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> useLayoutTabbar <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;layoutTabbar&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u53EF\u4EE5\u63A7\u5236 tabbar \u662F\u5426\u663E\u793A</span>
      <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// tabbar \u5F53\u524D\u9009\u4E2D\u9879</span>
      <span class="token literal-property property">tabbarProps</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// tabbar \u7684 props\uFF0Chttps://vant-contrib.gitee.io/vant/#/zh-CN/tabbar#tabbar-props</span>
        <span class="token literal-property property">fixed</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;z-index&#39;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token literal-property property">route</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;safe-area-inset-bottom&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">tabbar</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// tabbaritem \u7684 props\uFF0C https://vant-contrib.gitee.io/vant/#/zh-CN/tabbar#tabbaritem-props</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u9996\u9875&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;home-o&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">dot</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token literal-property property">badge</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">replace</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u6587\u4EF6 <code>src/components/LayoutTabbar.vue</code> \u4E2D\uFF0C\u63A7\u5236\u4E86 tabbar \u7684 <code>active</code> \u548C <code>show</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useLayoutTabbar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/store&#39;</span>

<span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> layoutTabbar <span class="token operator">=</span> <span class="token function">useLayoutTabbar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">watch</span><span class="token punctuation">(</span>
  route<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5207\u6362 tabbar \u7684 active</span>
    layoutTabbar<span class="token punctuation">.</span>active <span class="token operator">=</span> layoutTabbar<span class="token punctuation">.</span><span class="token function">pathToName</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span>path<span class="token punctuation">)</span>
    <span class="token comment">// \u9ED8\u8BA4\u53EA\u6709\u914D\u7F6E\u5728 layoutTabbar \u4E2D\u7684 tabbar \u624D\u4F1A\u5C55\u793A</span>
    layoutTabbar<span class="token punctuation">.</span>show <span class="token operator">=</span> layoutTabbar<span class="token punctuation">.</span>tabbarToList<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span>path<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5E76\u4E14\u5728 <code>src/store/layoutTabbar.js</code> \u4E2D\u8FD8\u5C01\u88C5\u4E86\u4E00\u4E9B\u516C\u7528\u65B9\u6CD5\uFF0C\u5728\u4F7F\u7528\u516C\u7528\u65B9\u6CD5\u524D\uFF0C\u9700\u8981\u628A <code>src/store/layoutNavbar.js</code> \u5F15\u5165\u6587\u4EF6\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useLayoutTabbar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/store&#39;</span>
<span class="token keyword">const</span> layoutTabbar <span class="token operator">=</span> <span class="token function">useLayoutTabbar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="settabbaritem" tabindex="-1"><a class="header-anchor" href="#settabbaritem" aria-hidden="true">#</a> setTabBarItem</h3>`,9),m=n("code",null,"setTabBarItem",-1),h=a(" \u8BBE\u7F6E tabbar \u7684\u5355\u4E2A\u9879\uFF0C\u53C2\u6570\u4E3A "),y=n("code",null,"{ index: \u8BBE\u7F6E\u9879\u7684\u7D22\u5F15\u503C, detail: \u8BBE\u7F6E\u9879\u7684\u5177\u4F53\u5185\u5BB9 }",-1),g=a(" \uFF0C detail \u53C2\u8003 "),_={href:"https://vant-contrib.gitee.io/vant/#/zh-CN/tabbar#tabbaritem-props",target:"_blank",rel:"noopener noreferrer"},f=a("https://vant-contrib.gitee.io/vant/#/zh-CN/tabbar#tabbaritem-props"),T=a("\u3002\u4F8B\u5982\uFF1A"),w=e(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u8BBE\u7F6E\u9996\u9875</span>
<span class="token keyword">function</span> <span class="token function">setTabBarItemEvent</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  layoutTabbar<span class="token punctuation">.</span><span class="token function">setTabBarItem</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">detail</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;wap-home-o&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">dot</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="addtabbar" tabindex="-1"><a class="header-anchor" href="#addtabbar" aria-hidden="true">#</a> addTabbar</h3>`,2),j=n("code",null,"addTabbar",-1),x=a(" \u6DFB\u52A0 tabbar\uFF0C\u53C2\u6570\u4E3A "),N=n("code",null,"{ index: \u8981\u6DFB\u52A0\u4F4D\u7F6E\u7684\u7D22\u5F15\u503C, detail: \u8BBE\u7F6E\u9879\u7684\u5177\u4F53\u5185\u5BB9 }",-1),L=a(" \uFF0C detail \u53C2\u8003 "),E={href:"https://vant-contrib.gitee.io/vant/#/zh-CN/tabbar#tabbaritem-props",target:"_blank",rel:"noopener noreferrer"},z=a("https://vant-contrib.gitee.io/vant/#/zh-CN/tabbar#tabbaritem-props"),C=a("\u3002\u3002\u4F8B\u5982\uFF1A"),B=e(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u65B0\u589E\u5217\u8868</span>
<span class="token keyword">function</span> <span class="token function">addTabbarEvent</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  layoutTabbar<span class="token punctuation">.</span><span class="token function">addTabbar</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">detail</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;bar-chart-o&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u5217\u8868&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token string">&#39;/list&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">badge</span><span class="token operator">:</span> <span class="token number">10</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="removetabbar" tabindex="-1"><a class="header-anchor" href="#removetabbar" aria-hidden="true">#</a> removeTabbar</h3><p><code>removeTabbar</code> \u5220\u9664 tabber \u7684\u67D0\u4E00\u9879\uFF0C\u53C2\u6570\u4E3A <code>\u5220\u9664 tabber \u7684\u67D0\u4E00\u9879\u7D22\u5F15\u503C\u6216\u8005\u8DEF\u7531path</code>\u3002\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5220\u9664(1)</span>
<span class="token keyword">function</span> <span class="token function">removeTabbarEvent</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  layoutTabbar<span class="token punctuation">.</span><span class="token function">removeTabbar</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5220\u9664\uFF08/shopping-cart\uFF09</span>
<span class="token keyword">function</span> <span class="token function">removeTabbarEvent2</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  layoutTabbar<span class="token punctuation">.</span><span class="token function">removeTabbar</span><span class="token punctuation">(</span><span class="token string">&#39;/shopping-cart&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hidetabbar" tabindex="-1"><a class="header-anchor" href="#hidetabbar" aria-hidden="true">#</a> hideTabbar</h3><p><code>hideTabbar</code> \u9690\u85CFtabbar\u3002\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u9690\u85CFtabbar</span>
<span class="token keyword">function</span> <span class="token function">hideTabbarEvent</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  layoutTabbar<span class="token punctuation">.</span><span class="token function">hideTabbar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="showtabbar" tabindex="-1"><a class="header-anchor" href="#showtabbar" aria-hidden="true">#</a> showTabbar</h3><p><code>showTabbar</code> \u663E\u793Atabbar\u3002\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u663E\u793Atabbar</span>
<span class="token keyword">function</span> <span class="token function">showTabbarEvent</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  layoutTabbar<span class="token punctuation">.</span><span class="token function">showTabbar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function I(V,R){const s=r("ExternalLinkIcon");return o(),c("div",null,[l,n("p",null,[u,n("a",d,[b,t(s)]),k]),v,n("p",null,[m,h,y,g,n("a",_,[f,t(s)]),T]),w,n("p",null,[j,x,N,L,n("a",E,[z,t(s)]),C]),B])}var P=p(i,[["render",I],["__file","tabbar.html.vue"]]);export{P as default};
