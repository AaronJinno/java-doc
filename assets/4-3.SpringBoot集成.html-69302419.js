import{_ as a,P as n,Q as s,a3 as e}from"./framework-7e8eb00a.js";const t={},p=e(`<h2 id="引入" tabindex="-1"><a class="header-anchor" href="#引入" aria-hidden="true">#</a> 引入</h2><h4 id="_1-spring-data" tabindex="-1"><a class="header-anchor" href="#_1-spring-data" aria-hidden="true">#</a> 1. Spring Data</h4><p>Spring的一个子项目，用于简化数据库访问，支持NoSQL和关系数据存储。其主要目标是使用数据库的访问变得方便快捷。</p><p>Spring Data 致力于减少数据访问层 (DAO) 的开发量. 开发者唯一要做的，就只是声明持久层的接口，其他都交给 Spring Data JPA 来帮你完成！</p><h4 id="_2-spring-data-mongodb" tabindex="-1"><a class="header-anchor" href="#_2-spring-data-mongodb" aria-hidden="true">#</a> 2. Spring Data MongoDB</h4><p>Spring Data MongDB 是Spring Data的下的一个模块，在SpringBoot中整合MongoDB就需要添加Spring Data MongDB的依赖。</p><h4 id="_3-maven" tabindex="-1"><a class="header-anchor" href="#_3-maven" aria-hidden="true">#</a> 3. Maven</h4><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-data-mongodb<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="yml配置" tabindex="-1"><a class="header-anchor" href="#yml配置" aria-hidden="true">#</a> yml配置</h2><h4 id="_1-通过host和port连接" tabindex="-1"><a class="header-anchor" href="#_1-通过host和port连接" aria-hidden="true">#</a> 1. 通过host和port连接</h4><p>在application.yml文件中添加MongoDB的连接参数。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">data</span><span class="token punctuation">:</span>
    <span class="token key atrule">mongodb</span><span class="token punctuation">:</span> 
      <span class="token key atrule">host</span><span class="token punctuation">:</span> 159.75.225.162
      <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">27017</span>
      <span class="token key atrule">authentication-database</span><span class="token punctuation">:</span> admin
      <span class="token key atrule">username</span><span class="token punctuation">:</span> blog
      <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">1234</span>
      <span class="token key atrule">database</span><span class="token punctuation">:</span> article
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-通过uri连接" tabindex="-1"><a class="header-anchor" href="#_2-通过uri连接" aria-hidden="true">#</a> 2. 通过uri连接</h4><p>可以直接通过URI进行连接，对于副本集只能通过URI进行连接。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">data</span><span class="token punctuation">:</span>
    <span class="token key atrule">mongodb</span><span class="token punctuation">:</span> 
      <span class="token key atrule">uri</span><span class="token punctuation">:</span> mongodb<span class="token punctuation">:</span>//root<span class="token punctuation">:</span>23cx%40fdw@159.75.225.162<span class="token punctuation">:</span><span class="token number">27017</span><span class="token punctuation">,</span>159.75.225.162<span class="token punctuation">:</span><span class="token number">27018</span><span class="token punctuation">,</span>159.75.225.162<span class="token punctuation">:</span>27019/
      <span class="token key atrule">authentication-database</span><span class="token punctuation">:</span> admin
      <span class="token key atrule">username</span><span class="token punctuation">:</span> blog
      <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">1234</span>
      <span class="token key atrule">database</span><span class="token punctuation">:</span> article
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="操作方式" tabindex="-1"><a class="header-anchor" href="#操作方式" aria-hidden="true">#</a> 操作方式</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>TBD</p></div><h2 id="curd" tabindex="-1"><a class="header-anchor" href="#curd" aria-hidden="true">#</a> CURD</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>TBD</p></div>`,19),i=[p];function l(c,o){return n(),s("div",null,i)}const d=a(t,[["render",l],["__file","4-3.SpringBoot集成.html.vue"]]);export{d as default};
