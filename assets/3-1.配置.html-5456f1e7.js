import{_ as n,o as s,c as a,e as t}from"./app-ab36e818.js";const e={},p=t(`<div class="hint-container danger"><p class="hint-container-title">警告</p><p>ElasticSearch 7.x版本和ElasticSearch 8.x 版本的JavaAPI 使用相差很大，这里都列出来。</p></div><h4 id="java-api" tabindex="-1"><a class="header-anchor" href="#java-api" aria-hidden="true">#</a> Java API</h4><p>Elasticsearch 软件是由 Java 语言开发的，所以也可以通过 Java API 的方式对 Elasticsearch 服务进行访问 。</p><h4 id="搭建项目" tabindex="-1"><a class="header-anchor" href="#搭建项目" aria-hidden="true">#</a> 搭建项目</h4><p>搭建普通的Java项目或SpringBoot项目即可。</p><p>搭建完项目后，创建ESTest类用于测试JavaAPI</p><h2 id="es-7-x" tabindex="-1"><a class="header-anchor" href="#es-7-x" aria-hidden="true">#</a> ES 7.x</h2><h4 id="_1-依赖" tabindex="-1"><a class="header-anchor" href="#_1-依赖" aria-hidden="true">#</a> 1. 依赖</h4><p>ES有关的依赖如下：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- ES 服务端 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.elasticsearch<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>elasticsearch<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>8.8.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>


<span class="token comment">&lt;!-- ES 客户端 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.elasticsearch.client<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>elasticsearch-rest-client<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>8.8.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-客户端对象" tabindex="-1"><a class="header-anchor" href="#_2-客户端对象" aria-hidden="true">#</a> 2. 客户端对象</h4><p>创建客户端对象用于访问ES服务器。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>sgugo<span class="token punctuation">.</span>es</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ESTestOne</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@SneakyThrows</span> <span class="token comment">//忽略了异常的处理</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//创建ES 客户端</span>
        <span class="token class-name">RestClientBuilder</span> builder <span class="token operator">=</span> <span class="token class-name">RestClient</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span>
            <span class="token keyword">new</span> <span class="token class-name">HttpHost</span><span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span> <span class="token number">9200</span><span class="token punctuation">,</span> <span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">RestHighLevelClient</span> esClient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RestHighLevelClient</span><span class="token punctuation">(</span>builder<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 关闭ES 客户端</span>
        esClient<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="es-8-x" tabindex="-1"><a class="header-anchor" href="#es-8-x" aria-hidden="true">#</a> ES 8.x</h2>`,14),c=[p];function l(i,o){return s(),a("div",null,c)}const d=n(e,[["render",l],["__file","3-1.配置.html.vue"]]);export{d as default};
