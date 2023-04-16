import{_ as n,P as a,Q as s,a3 as e}from"./framework-7e8eb00a.js";const p="/java-doc/img/sql/mongodb/6-1.png",t="/java-doc/img/sql/mongodb/6-2.png",o="/java-doc/img/sql/mongodb/6-3.png",i="/java-doc/img/sql/mongodb/6-4.png",c="/java-doc/img/sql/mongodb/6-5.png",l={},r=e(`<p>索引支持在MongoDB中高效地执行查询。</p><ul><li>如果没有索引，MongoDB必须执行全集合扫描，以选择与查询语句匹配的文档。这种扫描全集合的查询效率是非常低的。</li><li>索引项的排序支持有效的相等匹配和基于范围的查询操作。此外，MongoDB还可以使用索引中的排序返回排序结果。</li><li>MongoDB索引使用B树数据结构（确切的说是B-Tree，MySQL是B+Tree）</li></ul><h2 id="索引的类型" tabindex="-1"><a class="header-anchor" href="#索引的类型" aria-hidden="true">#</a> 索引的类型</h2><h4 id="_1-单字段索引" tabindex="-1"><a class="header-anchor" href="#_1-单字段索引" aria-hidden="true">#</a> 1. 单字段索引</h4><p>在文档的单个字段上创建用户定义的升序/降序索引，称为单字段索引（Single Field Index）。</p><p>对于单个字段索引和排序操作，索引键的排序顺序（即升序或降序）并不重要，因为MongoDB可以在任何方向上遍历索引。</p><h4 id="_2-复合索引" tabindex="-1"><a class="header-anchor" href="#_2-复合索引" aria-hidden="true">#</a> 2. 复合索引</h4><p>MongoDB还支持多个字段的用户定义索引，即复合索引（Compound Index）。</p><p>复合索引中列出的字段顺序很重要。例如，如果复合索引由 { userid: 1, score: -1 } 组成，则索引首先按userid正序排序，然后在每个userid的值内，再在按score倒序排序。</p><h4 id="_3-其他索引" tabindex="-1"><a class="header-anchor" href="#_3-其他索引" aria-hidden="true">#</a> 3. 其他索引</h4><ul><li>地理空间索引（Geospatial Index）：为了支持对地理空间坐标数据的有效查询，MongoDB提供了两种特殊的索引：返回结果时使用平面几何的二维索引和返回结果时使用球面几何的二维球面索引。</li><li>文本索引（Text Indexes）：支持在集合中搜索字符串内容。这些文本索引不存储特定于语言的停止词（例如“the”、“a”、“or”），而将集合中的词作为词干，只存储根词。</li><li>哈希索引（Hashed Indexes）：MongoDB提供了散列索引类型，它对字段值的散列进行索引。这些索引在其范围内的值分布更加随机，但只支持相等匹配，不支持基于范围的查询。</li></ul><h2 id="管理索引" tabindex="-1"><a class="header-anchor" href="#管理索引" aria-hidden="true">#</a> 管理索引</h2><h4 id="_1-查看索引" tabindex="-1"><a class="header-anchor" href="#_1-查看索引" aria-hidden="true">#</a> 1. 查看索引</h4><p>getIndexes()方法返回一个集合中的所有索引的数组。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>db<span class="token punctuation">.</span>集合<span class="token punctuation">.</span><span class="token function">getIndexes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>示例</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//查看comment集合中所有的索引情况</span>
db<span class="token punctuation">.</span>comment<span class="token punctuation">.</span><span class="token function">getIndexes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//结果</span>
<span class="token punctuation">[</span> 
    <span class="token punctuation">{</span> 
        <span class="token literal-property property">v</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>   <span class="token comment">//索引引擎版本，不用管，内置的</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
            <span class="token literal-property property">_id</span><span class="token operator">:</span> <span class="token number">1</span>  <span class="token comment">//索引的字段，和排序方式</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> 
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;_id_&#39;</span>  <span class="token comment">//索引名，默认是索引字段+ _</span>
    <span class="token punctuation">}</span> 
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>_id索引</strong></p><p>MongoDB在创建集合的过程中，在_id 字段上创建一个唯一的索引，默认名字为_id_。</p><p>注意：该索引是唯一索引，因此值不能重复，即 _id 值不能重复的。在分片集群中，通常使用 _id 作为片键。</p><h4 id="_2-创建索引" tabindex="-1"><a class="header-anchor" href="#_2-创建索引" aria-hidden="true">#</a> 2. 创建索引</h4><p>在集合上通过createIndex方法创建索引。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>db<span class="token punctuation">.</span>集合<span class="token punctuation">.</span><span class="token function">createIndex</span><span class="token punctuation">(</span>keys<span class="token punctuation">,</span>options<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_2-1-参数" tabindex="-1"><a class="header-anchor" href="#_2-1-参数" aria-hidden="true">#</a> 2.1 参数</h5><ul><li>keys：该参数是一个对象，用来设置索引的字段和索引的排序方式。 <ul><li>{字段: 排序方式}。</li><li>排序方式取值1或-1,1表示正序创建索引，-1表示降序创建索引。</li></ul></li><li>options：可选，包含一组控制索引创建的选项的文档，一般不用设置。 <ul><li>unique：建立的索引是否唯一，指定为true创建唯一索引。默认值为false.</li><li>name：索引的名称，不指定的话就会根据字段名自动生成一个。</li></ul></li></ul><h5 id="_2-2-创建单字段索引" tabindex="-1"><a class="header-anchor" href="#_2-2-创建单字段索引" aria-hidden="true">#</a> 2.2 创建单字段索引</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>db<span class="token punctuation">.</span>comment<span class="token punctuation">.</span><span class="token function">createIndex</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">userid</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//查询刚创建的索引</span>
db<span class="token punctuation">.</span>comment<span class="token punctuation">.</span><span class="token function">getIndexes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">v</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">_id</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;_id_&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">v</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">userid</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;userid_1&#39;</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>compass中查看</strong></p><figure><img src="`+p+`" alt="6-1" tabindex="0" loading="lazy"><figcaption>6-1</figcaption></figure><h5 id="_2-3-创建复合索引" tabindex="-1"><a class="header-anchor" href="#_2-3-创建复合索引" aria-hidden="true">#</a> 2.3 创建复合索引</h5><p>对多个字段联合创建一个索引。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>db<span class="token punctuation">.</span>comment<span class="token punctuation">.</span><span class="token function">createIndex</span><span class="token punctuation">(</span>
    <span class="token punctuation">{</span><span class="token literal-property property">userid</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">nickname</span><span class="token operator">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token comment">//查看创建的索引</span>
db<span class="token punctuation">.</span>comment<span class="token punctuation">.</span><span class="token function">getIndexes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">v</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">_id</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;_id_&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">v</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">userid</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;userid_1&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">v</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">userid</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">nickname</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//复合索引</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;userid_1_nickname_-1&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>compass中查看</strong></p><figure><img src="`+t+`" alt="6-2" tabindex="0" loading="lazy"><figcaption>6-2</figcaption></figure><h5 id="_2-4-索引默认命名规范" tabindex="-1"><a class="header-anchor" href="#_2-4-索引默认命名规范" aria-hidden="true">#</a> 2.4 索引默认命名规范</h5><p><code>字段名</code> + <code>_</code> + <code>1或-1</code></p><ul><li>联合索引可以是上述规则重复N次，用_相连</li><li>1表示正序，-1表示倒叙。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//示例</span>
userid_1 <span class="token comment">//userid字段的单字段正序索引</span>
userid_1_nickname_<span class="token operator">-</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-移除索引" tabindex="-1"><a class="header-anchor" href="#_3-移除索引" aria-hidden="true">#</a> 3. 移除索引</h4><p>可以移除指定的索引，或移除所有索引。</p><h5 id="_3-1-移除指定索引" tabindex="-1"><a class="header-anchor" href="#_3-1-移除指定索引" aria-hidden="true">#</a> 3.1 移除指定索引</h5><p>参数index指定要删除的索引，可以是索引名，也可以是索引规范文档。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>db<span class="token punctuation">.</span>集合名<span class="token punctuation">.</span><span class="token function">dropIndex</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>

<span class="token comment">//示例：</span>
db<span class="token punctuation">.</span>comment<span class="token punctuation">.</span><span class="token function">dropIndex</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">userid</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">//or</span>
db<span class="token punctuation">.</span>comment<span class="token punctuation">.</span><span class="token function">dropIndex</span><span class="token punctuation">(</span>userid_1<span class="token punctuation">)</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-2-移除所有索引" tabindex="-1"><a class="header-anchor" href="#_3-2-移除所有索引" aria-hidden="true">#</a> 3.2 移除所有索引</h5><p>移除指定集合内的所有索引。<br> 注意：_id 的字段的索引是无法删除的，只能删除非 _id 字段的索引。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.集合名.dropIndexes()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4-执行计划" tabindex="-1"><a class="header-anchor" href="#_4-执行计划" aria-hidden="true">#</a> 4. 执行计划</h4><p>分析查询性能（Analyze Query Performance）通常使用执行计划来查看查询的情况，如查询耗费的时间、是否基于索引查询（建立的索引是否有效）等。<br> 语法：如下在查询语句后面跟explain()方法即可。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>db<span class="token punctuation">.</span>collection<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>query<span class="token punctuation">,</span>options<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">explain</span><span class="token punctuation">(</span>opeitons<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_4-1-compass可视化查看" tabindex="-1"><a class="header-anchor" href="#_4-1-compass可视化查看" aria-hidden="true">#</a> 4.1 compass可视化查看</h5><p>可以通过compass直接可视化的查看执行计划，更直观。<br><img src="`+o+`" alt="6-3" loading="lazy"></p><h5 id="_4-2-示例" tabindex="-1"><a class="header-anchor" href="#_4-2-示例" aria-hidden="true">#</a> 4.2 示例</h5><p>根据uerid查询数据，查看执行计划</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>db<span class="token punctuation">.</span>comment<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">userid</span><span class="token operator">:</span><span class="token string">&quot;1002&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">explain</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">//也可以直接在compass上查看</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-3-查询结果解析" tabindex="-1"><a class="header-anchor" href="#_4-3-查询结果解析" aria-hidden="true">#</a> 4.3 查询结果解析</h5><p>返回的结果很多，重点看stage：</p><ul><li>IXCAN：基于索引查询</li><li>COLLSCAN：全盘扫描查询</li><li>FETCH：基于缓存查询</li><li>PROJECTION：覆盖查询</li></ul><figure><img src="`+i+`" alt="6-4" tabindex="0" loading="lazy"><figcaption>6-4</figcaption></figure><h4 id="_5-涵盖查询" tabindex="-1"><a class="header-anchor" href="#_5-涵盖查询" aria-hidden="true">#</a> 5. 涵盖查询</h4><p>当查询条件和查询的投影仅包含索引字段时，MongoDB直接从索引返回结果，而不扫描任何文档或将文档带入内存。<br> 简单来说，查询的字段只包含索引时，就直接从索引返回结果。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>db<span class="token punctuation">.</span>comment<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">userid</span><span class="token operator">:</span><span class="token string">&quot;1002&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">userid</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">_id</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>通过compass查看</strong></p><figure><img src="`+c+'" alt="6-5" tabindex="0" loading="lazy"><figcaption>6-5</figcaption></figure>',63),u=[r];function d(k,m){return a(),s("div",null,u)}const b=n(l,[["render",d],["__file","6.索引.html.vue"]]);export{b as default};
