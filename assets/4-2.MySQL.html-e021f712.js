import{_ as a,P as n,Q as s,a3 as t}from"./framework-7e8eb00a.js";const e={},p=t(`<h2 id="集成druid" tabindex="-1"><a class="header-anchor" href="#集成druid" aria-hidden="true">#</a> 集成Druid</h2><p>开发中经常会使用阿里的Druid连接池技术。</p><h4 id="_1-添加依赖" tabindex="-1"><a class="header-anchor" href="#_1-添加依赖" aria-hidden="true">#</a> 1. 添加依赖</h4><p>Druid依赖的坐标需要手动在pom.xml中导入。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>druid-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.2.6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-配置连接池" tabindex="-1"><a class="header-anchor" href="#_2-配置连接池" aria-hidden="true">#</a> 2. 配置连接池</h4><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">druid</span><span class="token punctuation">:</span>
      <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
      <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/ssm_db<span class="token punctuation">?</span>serverTimezone=UTC
      <span class="token key atrule">username</span><span class="token punctuation">:</span> root
      <span class="token key atrule">password</span><span class="token punctuation">:</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[p];function l(o,i){return n(),s("div",null,c)}const d=a(e,[["render",l],["__file","4-2.MySQL.html.vue"]]);export{d as default};