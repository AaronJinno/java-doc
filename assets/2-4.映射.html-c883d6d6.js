import{_ as n,o as s,c as a,e}from"./app-2f916dc9.js";const t={},p=e(`<div class="hint-container tip"><p class="hint-container-title">什么是映射</p><p>映射类似于数据库(database)中的表结构(table)。</p><p>创建数据库表需要设置字段名称，类型，长度，约束等；索引库也一样，需要知道这个类型下有哪些字段，每个字段有哪些约束信息，这就叫做映射(mapping)</p></div><h2 id="创建映射" tabindex="-1"><a class="header-anchor" href="#创建映射" aria-hidden="true">#</a> 创建映射</h2><p>创建完索引（库）后，就可以为索引（库）添加映射信息了。</p><h4 id="_1-语法" tabindex="-1"><a class="header-anchor" href="#_1-语法" aria-hidden="true">#</a> 1. 语法</h4><ul><li>请求方式：PUT</li><li>请求地址：<code>http://ES数据库地址/索引名/_mapping</code></li></ul><p>映射信息通过JSON格式的请求体添加，请求体语法：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//表示添加映射</span>
        <span class="token comment">//可以添加多个映射，键为字段名，值为对象格式的映射信息</span>
        <span class="token property">&quot;字段名&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token comment">//为uname字段添加映射</span>
            <span class="token comment">//type 为字段类型：text=可以全文检索，keyword=要完全匹配</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span> <span class="token punctuation">,</span>
            <span class="token comment">//index 表示是否创建索引，true=创建，false=不创建   </span>
            <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> 
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>字段名：随便写，字段名的值是一个对象，用来自定很多属性</li><li>type：类型，Elasticsearch 中支持的数据类型非常丰富，常见的有以下几种 <ul><li>字符串 <ul><li>text：可分词，支持全文检索</li><li>keyword：不可分词，数据必须进行完全匹配</li></ul></li><li>其他类型：这些不是太常用 <ul><li>Numerical：数字类型，包含多种子类型</li><li>Date：日期类型</li><li>Array：数组类型</li><li>Object：对象类型</li></ul></li></ul></li><li>index：是否索引，默认为true（也就是默认所有字段都会被索引） <ul><li>true：字段会被索引，可以用来进行搜索</li><li>false：字段不会被索引，<mark>不能用来搜索</mark></li></ul></li><li>store：是否将数据进行独立存储，默认为 false <ul><li>原始的文本会存储在_source 里面，默认情况下其他提取出来的字段都不是独立存储的，是从_source 里面提取出来的。当然你也可以独立的存储某个字段，只要设置&quot;store&quot;: true 即可，获取独立存储的字段要比从_source 中解析快得多，但是也会占用更多的空间，所以要根据实际业务需求来设置。</li></ul></li><li>analyzer：分词器</li></ul><h4 id="_2-示例" tabindex="-1"><a class="header-anchor" href="#_2-示例" aria-hidden="true">#</a> 2. 示例</h4><p>有个User索引，包含三个字段：name，gender和tel，为user索引创建映射</p><p>请求体：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;uname&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
           <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
           <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> 
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;gender&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;tel&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>响应：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;acknowledged&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">//表示创建成功</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看映射" tabindex="-1"><a class="header-anchor" href="#查看映射" aria-hidden="true">#</a> 查看映射</h2><p>查看索引中创建的映射，请求地址和创建映射相同，只是请求方式变成了GET。</p><p>查询结果:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;gender&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;tel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;uname&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="映射的效果" tabindex="-1"><a class="header-anchor" href="#映射的效果" aria-hidden="true">#</a> 映射的效果</h2><p>想索引中插入数据后，插入的数据就会被映射限制。</p><ul><li>type：keyword类型的字段，无法进行分词查询（全文检索），只能进行完全匹配</li><li>index：如果为false，将无法通过该字段进行查询。</li></ul>`,21),o=[p];function l(i,c){return s(),a("div",null,o)}const r=n(t,[["render",l],["__file","2-4.映射.html.vue"]]);export{r as default};
