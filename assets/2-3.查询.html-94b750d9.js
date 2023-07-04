import{_ as n,a as s}from"./2-2-4-af1fa04e.js";import{_ as a,o as t,c as p,e}from"./app-cd3300e3.js";const o="/java-doc/img/sql/es/2-4-1.jpg",i="/java-doc/img/sql/es/2-4-2.jpg",c="/java-doc/img/sql/es/2-4-5.jpg",l="/java-doc/img/sql/es/2-4-6.jpg",u="/java-doc/img/sql/es/2-4-7.jpg",r="/java-doc/img/sql/es/2-4-8.jpg",d="/java-doc/img/sql/es/2-4-3.jpg",k="/java-doc/img/sql/es/2-4-4.jpg",v="/java-doc/img/sql/es/2-4-9.jpg",m={},q=e('<h2 id="基本查询" tabindex="-1"><a class="header-anchor" href="#基本查询" aria-hidden="true">#</a> 基本查询</h2><p>通过文档的唯一标识<code>_id</code>进行查看，也可以查看所有的文档。</p><h4 id="_1-通过主键-id-查看" tabindex="-1"><a class="header-anchor" href="#_1-通过主键-id-查看" aria-hidden="true">#</a> 1. 通过主键 <code>_id</code> 查看</h4><ul><li>请求方式：GET</li><li>请求地址：<code>http://ES数据库地址/索引名/_doc/要查看的文档_id</code></li></ul><h5 id="_1-2-示例" tabindex="-1"><a class="header-anchor" href="#_1-2-示例" aria-hidden="true">#</a> 1.2 示例</h5><p>在 Postman 中，向 ES 服务器发 GET 请求 ：<code>http://127.0.0.1:9200/shopping/_doc/1000</code></p><figure><img src="'+n+`" alt="2-2-3" tabindex="0" loading="lazy"><figcaption>2-2-3</figcaption></figure><h5 id="_1-3-响应结果分析" tabindex="-1"><a class="header-anchor" href="#_1-3-响应结果分析" aria-hidden="true">#</a> 1.3. 响应结果分析</h5><p>正常查询到结果的响应信息如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 索引</span>
    <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1000&quot;</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;_version&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;_seq_no&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;_primary_term&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;found&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 查询结果： true 表示查找到，false 表示未查找到</span>
    <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 文档原信息</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米手机&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">3999.00</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果查询不到结果，响应信息如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10000&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;found&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-查看索引下的全部文档" tabindex="-1"><a class="header-anchor" href="#_2-查看索引下的全部文档" aria-hidden="true">#</a> 2. 查看索引下的全部文档</h5><ul><li>请求方式：GET</li><li>请求地址：<code>http://ES数据库地址/索引名/_search</code></li></ul><figure><img src="`+s+`" alt="2-2-4" tabindex="0" loading="lazy"><figcaption>2-2-4</figcaption></figure><p>查询结果如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">155</span><span class="token punctuation">,</span> <span class="token comment">//耗时，单位ms</span>
    <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//是否超时</span>
    <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;skipped&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//查询命中</span>
        <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//统计信息</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">//结果条数</span>
            <span class="token property">&quot;relation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_score&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;o7K19YgBBr3LfT2KiQat&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米手机&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">3999.00</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1000&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米手机&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">3999.00</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之前创建文档时，对相同的请求体和请求链接发送了两次请求，一次返回系统自定义的_id，一次手动指定的_id，因此查询到了两条数据（仅_id不同）。</p><h2 id="条件查询" tabindex="-1"><a class="header-anchor" href="#条件查询" aria-hidden="true">#</a> 条件查询</h2><p>通过请求体的查询条件，匹配查询满足条件的文档数据。</p><h4 id="_1-语法" tabindex="-1"><a class="header-anchor" href="#_1-语法" aria-hidden="true">#</a> 1. 语法</h4><ul><li>请求方式：GET</li><li>请求地址：<code>http://ES数据库地址/索引名/_search</code></li></ul><p>请求条件一般通过JSON格式写在请求体中，语法如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token comment">//设置查询的条件</span>
            <span class="token property">&quot;字段&quot;</span><span class="token operator">:</span><span class="token string">&quot;字段的值&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-查询示例" tabindex="-1"><a class="header-anchor" href="#_2-查询示例" aria-hidden="true">#</a> 2. 查询示例</h4><p>查询price为5000的数据：</p><figure><img src="`+o+`" alt="2-4-1" tabindex="0" loading="lazy"><figcaption>2-4-1</figcaption></figure><h5 id="_2-1-服务器响应结果解析" tabindex="-1"><a class="header-anchor" href="#_2-1-服务器响应结果解析" aria-hidden="true">#</a> 2.1 服务器响应结果解析</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">546</span><span class="token punctuation">,</span>
    <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">//成功</span>
        <span class="token property">&quot;skipped&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">//忽略</span>
        <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token comment">//失败</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//查询到的结果</span>
        <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">//结果总数</span>
            <span class="token property">&quot;relation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span> <span class="token comment">//计数规则：eq表示计数准确，gte 表示计数不准确</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_score&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token comment">//匹配度分值</span>
        <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">//结果集合</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1000&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米手机&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">5000</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;6000&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;苹果手机&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;iPhone&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">5000</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-查询所有数据-全查询" tabindex="-1"><a class="header-anchor" href="#_3-查询所有数据-全查询" aria-hidden="true">#</a> 3. 查询所有数据（全查询）</h4><p>不设置请求体，或设置如下请求体，将查询当前索引下的所有文档</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">//查询所有文档</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-1-示例" tabindex="-1"><a class="header-anchor" href="#_3-1-示例" aria-hidden="true">#</a> 3.1 示例</h4><figure><img src="`+i+`" alt="2-4-2" tabindex="0" loading="lazy"><figcaption>2-4-2</figcaption></figure><h4 id="_4-语法总结" tabindex="-1"><a class="header-anchor" href="#_4-语法总结" aria-hidden="true">#</a> 4. 语法总结</h4><ul><li>query：代表一个查询对象，里面可以有不同的查询属性</li><li>match：查询类型</li><li>查询条件：根据不同的查询类型，有不同的查询条件写法</li></ul><h2 id="多条件查询" tabindex="-1"><a class="header-anchor" href="#多条件查询" aria-hidden="true">#</a> 多条件查询</h2><p>又称组合查询，根据多个查询条件进行查询，和MySQL的组合查询类似。</p><h4 id="_1-语法-1" tabindex="-1"><a class="header-anchor" href="#_1-语法-1" aria-hidden="true">#</a> 1. 语法</h4><p>通过bool关键字进行组合查询，有多种组合方式：</p><ul><li>must：必须，多个条件必须全部符合</li><li>must_not：必须不，多个添加必须都不符合</li><li>should：或，多个条只要符合一个即可</li></ul><p>语法格式如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token comment">//组合查询的关键字</span>
            <span class="token property">&quot;组合方式&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span> <span class="token comment">//第一个查询条件</span>
                    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token comment">//查询条件</span>
                        <span class="token property">&quot;字段&quot;</span><span class="token operator">:</span>字段的值
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> <span class="token comment">//第二个查询条件</span>

                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    ...<span class="token comment">//可以是1个或多个查询条件</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            ...<span class="token comment">//多种组合方式可以同时采用</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-示例" tabindex="-1"><a class="header-anchor" href="#_2-示例" aria-hidden="true">#</a> 2. 示例</h4><p>查询price为5000，同时category为iPhone的文档。</p><figure><img src="`+c+`" alt="2-4-5" tabindex="0" loading="lazy"><figcaption>2-4-5</figcaption></figure><h2 id="范围查询" tabindex="-1"><a class="header-anchor" href="#范围查询" aria-hidden="true">#</a> 范围查询</h2><p>根据值的范围进行查询，比如价格和年龄的范围。</p><h4 id="_1-语法-2" tabindex="-1"><a class="header-anchor" href="#_1-语法-2" aria-hidden="true">#</a> 1. 语法</h4><p>通过range关键字进行范围查询，range查询运行以下字符：</p><ul><li>gt：&gt;，大于</li><li>gte：&gt;=，大于等于</li><li>lt：&lt;，小于</li><li>lte：&lt;=，小于等于</li></ul><p>查询条件的写法:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;range&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;待查询的字段&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;范围查询的字符&quot;</span><span class="token operator">:</span> 用于范围比较的值
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-示例-1" tabindex="-1"><a class="header-anchor" href="#_2-示例-1" aria-hidden="true">#</a> 2. 示例</h4><p>查询price&gt;6500的文档。</p><figure><img src="`+l+'" alt="2-4-6" tabindex="0" loading="lazy"><figcaption>2-4-6</figcaption></figure><h2 id="完全匹配" tabindex="-1"><a class="header-anchor" href="#完全匹配" aria-hidden="true">#</a> 完全匹配</h2><p>默认查询的方式是“全文检索”，可以手动设置为“完全匹配”。</p><h4 id="_1-全文检索" tabindex="-1"><a class="header-anchor" href="#_1-全文检索" aria-hidden="true">#</a> 1. 全文检索</h4><p>当保存文档数据时，ES会将数据文字进行分词拆解操作，并将拆解后的数据报错到倒排索引当中，因此只需要使用文字的一部分，也能查询出数据，这种检索方式就是“全文检索”</p><p>PS: 中文是按照汉字进行拆分的，英文是按照单词进行拆分的。一定注意<mark>英文是按照单词进行拆分的而不是字母</mark></p><h4 id="_1-1-效果" tabindex="-1"><a class="header-anchor" href="#_1-1-效果" aria-hidden="true">#</a> 1.1 效果</h4><ul><li>查询条件是字段值的一部分，也可以匹配到 <ul><li>如：查询<code>&quot;category&quot;:&quot;红米&quot;</code>，会返回<code>&quot;category&quot;:&quot;小米&quot;</code>的结果</li></ul></li><li>查询条件被拆解开分别进行各自的匹配 <ul><li>如：查询<code>&quot;category&quot;:&quot;小 iphone&quot;</code>，会返回<code>&quot;category&quot;:&quot;iphone&quot;和&quot;category&quot;:&quot;小米&quot;</code>的结果</li></ul></li></ul><h4 id="_1-2-示例-1" tabindex="-1"><a class="header-anchor" href="#_1-2-示例-1" aria-hidden="true">#</a> 1.2 示例</h4><p>查询<code>&quot;category&quot;:&quot;红米&quot;</code>，返回了<code>&quot;category&quot;:&quot;小米&quot;</code>的结果</p><figure><img src="'+u+'" alt="2-4-7" tabindex="0" loading="lazy"><figcaption>2-4-7</figcaption></figure><h4 id="_2-完全匹配查询" tabindex="-1"><a class="header-anchor" href="#_2-完全匹配查询" aria-hidden="true">#</a> 2. 完全匹配查询</h4><p>完全匹配就是禁止全文检索，查询条件和查询结果要完全对应。</p><p>可以通过match_phrase关键字取代match关键字，强制查询结果为完全匹配。</p><h5 id="_2-1-示例" tabindex="-1"><a class="header-anchor" href="#_2-1-示例" aria-hidden="true">#</a> 2.1 示例</h5><p>使用match_phrase时，便不再能进行全文检索</p><figure><img src="'+r+`" alt="2-4-8" tabindex="0" loading="lazy"><figcaption>2-4-8</figcaption></figure><h5 id="_2-2-值的一部分" tabindex="-1"><a class="header-anchor" href="#_2-2-值的一部分" aria-hidden="true">#</a> 2.2 值的一部分</h5><p>即使开启了完全匹配查询，查询条件是值的一部分，也可以返回查询结果。</p><p>比如：查询<code>&quot;category&quot;:&quot;米&quot;</code>，会返回<code>&quot;category&quot;:&quot;小米&quot;</code>的结果</p><h2 id="分页" tabindex="-1"><a class="header-anchor" href="#分页" aria-hidden="true">#</a> 分页</h2><p>对查询结果进行分页，和MySQL里的分页差不多。</p><h4 id="_1-语法-3" tabindex="-1"><a class="header-anchor" href="#_1-语法-3" aria-hidden="true">#</a> 1. 语法</h4><p>在请求条件中，通过from和size字段进行分页查询。</p><ul><li>from：当前页的起始索引，默认从 0 开始 <ul><li>分页公式：<code>from = (pageNum - 1) * size</code></li></ul></li><li>size：每页显示多少条</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//查询条件</span>
    <span class="token property">&quot;from&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">//起始索引</span>
    <span class="token property">&quot;size&quot;</span><span class="token operator">:</span><span class="token number">3</span> <span class="token comment">//每页显示的条数</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-示例-2" tabindex="-1"><a class="header-anchor" href="#_2-示例-2" aria-hidden="true">#</a> 2. 示例</h4><p>在 Postman 中，向 ES 服务器发 GET 请求 ：<code>http://127.0.0.1:9200/shopping/_search</code></p><p>每页显示3条数据，查询第二页的数据（from = 3）</p><figure><img src="`+d+`" alt="2-4-3" tabindex="0" loading="lazy"><figcaption>2-4-3</figcaption></figure><h2 id="排序" tabindex="-1"><a class="header-anchor" href="#排序" aria-hidden="true">#</a> 排序</h2><p>对查询的结果进行排序，和MySQL里的排序差不多。</p><h4 id="_1-语法-4" tabindex="-1"><a class="header-anchor" href="#_1-语法-4" aria-hidden="true">#</a> 1. 语法</h4><p>在请求条件中，通过sort定义排序，可以有多个排序字段，并通过order指定排序方式</p><ul><li>desc：降序</li><li>asc：升序</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//查询条件</span>
    <span class="token comment">// sort: 定义排序</span>
    <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span> <span class="token comment">//因为可以多个字段排序，所以是数组</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;排序的字段&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;order&quot;</span><span class="token operator">:</span><span class="token string">&quot;desc|asc&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ...<span class="token comment">//其他排序的字段</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当有多个排序字段时，会按定义的顺序进行排序，当上一个字段相同时，再按照下一个定义的排序字段进行排序</p><h4 id="_2-示例-3" tabindex="-1"><a class="header-anchor" href="#_2-示例-3" aria-hidden="true">#</a> 2. 示例</h4><p>在 Postman 中，向 ES 服务器发 GET 请求 ：<code>http://127.0.0.1:9200/shopping/_search</code></p><p>查询结果根据price字段进行倒叙排序。</p><figure><img src="`+k+`" alt="2-4-4" tabindex="0" loading="lazy"><figcaption>2-4-4</figcaption></figure><h2 id="聚合操作" tabindex="-1"><a class="header-anchor" href="#聚合操作" aria-hidden="true">#</a> 聚合操作</h2><p>聚合允许使用者对 es 文档进行统计分析，类似与关系型数据库中的 group by和一系列聚合函数。</p><p>包括以下具体的操作：</p><ul><li>max：对某个字段取最大值</li><li>min：对某个字段取最小值</li><li>sum：对某个字段求和</li><li>avg：对某个字段取平均值</li><li>cardinality：对某个字段的值进行去重之后再取总数</li><li>state：聚合，对某个字段一次性返回 count，max，min，avg 和 sum 五个指标</li><li>group：进行分组</li></ul><h4 id="_1-语法-5" tabindex="-1"><a class="header-anchor" href="#_1-语法-5" aria-hidden="true">#</a> 1.语法</h4><ul><li>请求方式：GET</li><li>请求地址：<code>http://ES数据库地址/索引名/_search</code></li></ul><p>聚合操作要使用aggs关键字定义，各个聚合操作的语法如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token comment">//max：取最大值</span>
        <span class="token property">&quot;聚合查询结果名字&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;max&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;字段名&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token comment">//min：取最小值</span>
       <span class="token property">&quot;聚合查询结果名字&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;min&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;字段名&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token comment">//sum：对某个字段求和</span>
        <span class="token property">&quot;聚合查询结果名字&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;sum&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;字段名&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token comment">//avg：对某个字段取平均值 </span>
        <span class="token property">&quot;聚合查询结果名字&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;avg&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;字段名&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token comment">//cardinality：对某个字段的值进行去重之后再取总数</span>
        <span class="token property">&quot;聚合查询结果名字&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;cardinality&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;字段名&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//stats：对某个字段一次性返回 count，max，min，avg 和 sum 五个指标</span>
        <span class="token property">&quot;聚合查询结果名字&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;stats&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;字段名&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token comment">//group：对查询结果分组</span>
        <span class="token property">&quot;聚合查询结果名字&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;group&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;字段名&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">//聚合查询的同时也会返回所有的数据信息，设置size为0，可以只返回聚合结果</span>
    <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-示例-4" tabindex="-1"><a class="header-anchor" href="#_2-示例-4" aria-hidden="true">#</a> 2. 示例</h4><p>在 Postman 中，向 ES 服务器发 GET 请求 ：<code>http://127.0.0.1:9200/student/_search</code></p><p>查询price字段的所有聚合数据，并针对price进行分组。</p><h5 id="_2-1-请求体" tabindex="-1"><a class="header-anchor" href="#_2-1-请求体" aria-hidden="true">#</a> 2.1 请求体</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;stats_price&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;stats&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;price&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;group_category&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;price&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;size&quot;</span><span class="token operator">:</span><span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-2-响应体" tabindex="-1"><a class="header-anchor" href="#_2-2-响应体" aria-hidden="true">#</a> 2.2 响应体</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;skipped&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
            <span class="token property">&quot;relation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_score&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;aggregations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;group_category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;doc_count_error_upper_bound&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;sum_other_doc_count&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;buckets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;doc_count&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token number">6000</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;doc_count&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token number">7000</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;doc_count&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token number">8000</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;doc_count&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;stats_price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
            <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">5000.0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">8000.0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;avg&quot;</span><span class="token operator">:</span> <span class="token number">6500.0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;sum&quot;</span><span class="token operator">:</span> <span class="token number">52000.0</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="高亮显示" tabindex="-1"><a class="header-anchor" href="#高亮显示" aria-hidden="true">#</a> 高亮显示</h2><p>类似于百度，进行关键字搜索时，搜索出的内容中的关键字会进行高亮显示。</p><h4 id="_1-语法-6" tabindex="-1"><a class="header-anchor" href="#_1-语法-6" aria-hidden="true">#</a> 1. 语法</h4><p>通过hightlight关键字，进行开启高亮显示。同时可以在hightlight中设置高亮显示的标签和高亮显示的字段。</p><p>查询条件的写法:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token comment">//查询条件</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;highlight&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token comment">//开启高亮查询</span>
        <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;需要高亮显示的字段&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">//实测该字段必须出现在查询条件中</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//可以进行样式配置，不配置就采用默认的</span>
        <span class="token property">&quot;pre_tags&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;font color=&#39;red&#39;&gt;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;post_tags&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;/font&gt;&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认的高亮标签是<code>&lt;em&gt;结果中的关键字&lt;/em&gt;</code></p><h4 id="_2-示例-5" tabindex="-1"><a class="header-anchor" href="#_2-示例-5" aria-hidden="true">#</a> 2. 示例</h4><p>查询<code>category:&quot;米&quot;</code>，并对category字段里的<code>米</code>字进行高亮显示</p><figure><img src="`+v+'" alt="2-4-9" tabindex="0" loading="lazy"><figcaption>2-4-9</figcaption></figure>',121),b=[q];function h(g,y){return t(),p("div",null,b)}const x=a(m,[["render",h],["__file","2-3.查询.html.vue"]]);export{x as default};
