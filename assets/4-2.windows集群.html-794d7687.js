import{_ as p,r as o,o as l,c as i,a as n,b as s,d as t,e as a}from"./app-77176646.js";const c="/java-doc/img/sql/es/4-2-1.jpg",r="/java-doc/img/sql/es/4-2-2.jpg",u={},d=a('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>仅做了解，开发中和生产中都不会使用Windows环境。</p><p>环境以ElasticSearch 8.8.1 为例</p></div><p>集群要配置在多台电脑才有意义，这里仅做测试，在一台电脑上模拟集群，通过端口号区分。</p><h2 id="准备" tabindex="-1"><a class="header-anchor" href="#准备" aria-hidden="true">#</a> 准备</h2><h4 id="_1-创建节点" tabindex="-1"><a class="header-anchor" href="#_1-创建节点" aria-hidden="true">#</a> 1. 创建节点</h4><p>创建 es-cluster 文件夹，在内部复制三个ES软件包，如果是复制之前的单节点es目录，记得删除data目录，清空logs目录</p><figure><img src="'+c+'" alt="4-2-1" tabindex="0" loading="lazy"><figcaption>4-2-1</figcaption></figure><p>如上创建了三个节点：设计的端口号为9300，9400，9500</p><h4 id="_2-配置内存" tabindex="-1"><a class="header-anchor" href="#_2-配置内存" aria-hidden="true">#</a> 2. 配置内存</h4><div class="hint-container danger"><p class="hint-container-title">警告</p><p>这一步非常重要，很多教程都没有提及，不配置可能要遭遇严重bug。</p><p>尤其是练习集群配置，将多个节点部署到一台电脑上。</p></div><p>ES是基于Java的，启动ES时会同时启动自身内置的JVM。</p><p>ES的配置中，默认为JVM分配了4G的内存，当电脑内存不足时，就会报错。且每启动一个节点，就会占用4G内存。假如电脑只有8G内存，启动第二个节点时就必然会闪退。</p><h5 id="报错信息如下" tabindex="-1"><a class="header-anchor" href="#报错信息如下" aria-hidden="true">#</a> 报错信息如下</h5><p>通过powershell手动执行才能不闪退，从而看到报错信息</p><figure><img src="'+r+`" alt="4-2-2" tabindex="0" loading="lazy"><figcaption>4-2-2</figcaption></figure><h5 id="手动指定jvm的内存" tabindex="-1"><a class="header-anchor" href="#手动指定jvm的内存" aria-hidden="true">#</a> 手动指定JVM的内存</h5><p>为了避免内存不足，根据电脑内存大小，手动指定JVM的内存占用，比如设置为512m</p><p>JVM配置文件：<code>config/jvm.options</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>################################################################
## <span class="token constant">IMPORTANT</span><span class="token operator">:</span> <span class="token constant">JVM</span> heap size
################################################################
##
## The heap size is automatically configured by Elasticsearch
## based on the available memory <span class="token keyword">in</span> your system and the roles
## each node is configured to fulfill<span class="token punctuation">.</span> If specifying heap is
## required<span class="token punctuation">,</span> it should be done through a file <span class="token keyword">in</span> jvm<span class="token punctuation">.</span>options<span class="token punctuation">.</span>d<span class="token punctuation">,</span>
## which should be named <span class="token keyword">with</span> <span class="token punctuation">.</span>options suffix<span class="token punctuation">,</span> and the min and
## max should be <span class="token keyword">set</span> to the same value<span class="token punctuation">.</span> For example<span class="token punctuation">,</span> to <span class="token keyword">set</span> the
## heap to <span class="token number">4</span> <span class="token constant">GB</span><span class="token punctuation">,</span> create a <span class="token keyword">new</span> <span class="token class-name">file</span> <span class="token keyword">in</span> the jvm<span class="token punctuation">.</span>options<span class="token punctuation">.</span>d
## directory containing these lines<span class="token operator">:</span>
##
## <span class="token operator">-</span>Xms4g
## <span class="token operator">-</span>Xmx4g

<span class="token operator">-</span>Xms512m  # 初始启动大小
<span class="token operator">-</span>Xmx512m  # 可分配的最大内置值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上，手动指定JVM内存占用为512m，防止发生闪退故障。</p><h2 id="配置节点" tabindex="-1"><a class="header-anchor" href="#配置节点" aria-hidden="true">#</a> 配置节点</h2><p>修改集群文件目录中每个节点的 config/elasticsearch.yml 配置文件</p><p>需要配置的内容：</p><ul><li>名称 <ul><li><code>cluster.name</code>：集群名称，节点之间要保持一致</li><li><code>node.name</code>：节点名称，集群内要唯一</li></ul></li><li>节点类型 <ul><li>node.roles: [ master,data ]，节点所属的角色 <ul><li>master：表示可以被选举为主节点</li><li>data：表示该结点是数据结点，用于保存数据，执行数据相关的操作</li></ul></li><li>cluster.initial_master_nodes：初始主节点 <ul><li>当开启一个全新的集群时，会有一个集群的引导步骤，这步骤用来确定哪些节点参与第一次的主节点选举</li><li><mark>必须且只能在第一个启动的节点处配置</mark>，配置是当前节点的<code>node.name</code></li><li>注意：仅在第一次启动集群时生效</li></ul></li></ul></li><li>通信信息 <ul><li>network.host：ip地址，localhost表示本机地址</li><li>http.port: 端口</li><li>transport.port：tcp 监听端口，用于节点内部通信</li></ul></li><li>发现模块，用于发现其他节点 <ul><li>discovery.seed_hosts: 被查询发现的其他节点的[ ip:transport.port ]</li></ul></li><li>跨域配置 <ul><li>http.cors.enabled: 是否允许跨域</li><li>http.cors.allow-origin: 允许跨域的目录，<code>*</code> 表示所有目录</li></ul></li></ul><h4 id="_1-节点1-es-9300" tabindex="-1"><a class="header-anchor" href="#_1-节点1-es-9300" aria-hidden="true">#</a> 1. 节点1：es-9300</h4><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#节点 1 的配置信息：</span>

<span class="token comment">#集群名称，节点之间要保持一致</span>
<span class="token key atrule">cluster.name</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>es
<span class="token comment">#节点名称，集群内要唯一</span>
<span class="token key atrule">node.name</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span><span class="token number">9300</span>


<span class="token comment">#ip 地址</span>
<span class="token key atrule">network.host</span><span class="token punctuation">:</span> localhost <span class="token comment"># 本机地址</span>
<span class="token comment">#http 端口</span>
<span class="token key atrule">http.port</span><span class="token punctuation">:</span> <span class="token number">9300</span>
<span class="token comment">#tcp 监听端口</span>
<span class="token key atrule">transport.port</span><span class="token punctuation">:</span> <span class="token number">9301</span>

<span class="token comment"># 发现模块，用于发现其他节点，这里的端口是transport.port</span>
<span class="token comment"># 第一个节点，可以不配置discovery.seed_hosts，因为启动时，只有他自己</span>
<span class="token key atrule">discovery.seed_hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;localhost:9401&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;localhost:9501&quot;</span><span class="token punctuation">]</span>

<span class="token comment"># 初始主节点：必须包含当前节点</span>
<span class="token key atrule">cluster.initial_master_nodes</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;node-9300&quot;</span><span class="token punctuation">]</span>

<span class="token comment"># 跨域配置</span>
<span class="token key atrule">http.cors.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">http.cors.allow-origin</span><span class="token punctuation">:</span> <span class="token string">&quot;*&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-节点2-es-9400" tabindex="-1"><a class="header-anchor" href="#_2-节点2-es-9400" aria-hidden="true">#</a> 2. 节点2：es-9400</h4><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#节点 2 的配置信息：</span>

<span class="token comment">#集群名称，节点之间要保持一致</span>
<span class="token key atrule">cluster.name</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>es
<span class="token comment">#节点名称，集群内要唯一</span>
<span class="token key atrule">node.name</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span><span class="token number">9400</span>


<span class="token comment">#ip 地址</span>
<span class="token key atrule">network.host</span><span class="token punctuation">:</span> localhost <span class="token comment"># 本机地址</span>
<span class="token comment">#http 端口</span>
<span class="token key atrule">http.port</span><span class="token punctuation">:</span> <span class="token number">9400</span>
<span class="token comment">#tcp 监听端口</span>
<span class="token key atrule">transport.port</span><span class="token punctuation">:</span> <span class="token number">9401</span>

<span class="token comment"># 发现模块，用于发现其他节点，这里的端口是transport.port</span>
<span class="token key atrule">discovery.seed_hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;localhost:9301&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;localhost:9501&quot;</span><span class="token punctuation">]</span>

<span class="token comment"># 初始主节点 除了第一个节点，其他节点，一定不能配置该值，否则闪退</span>
<span class="token comment"># cluster.initial_master_nodes:</span>

<span class="token comment"># 跨域配置</span>
<span class="token key atrule">http.cors.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">http.cors.allow-origin</span><span class="token punctuation">:</span> <span class="token string">&quot;*&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-节点3-es-9500" tabindex="-1"><a class="header-anchor" href="#_3-节点3-es-9500" aria-hidden="true">#</a> 3. 节点3：es-9500</h4><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#节点 2 的配置信息：</span>

<span class="token comment">#集群名称，节点之间要保持一致</span>
<span class="token key atrule">cluster.name</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>es
<span class="token comment">#节点名称，集群内要唯一</span>
<span class="token key atrule">node.name</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span><span class="token number">9500</span>


<span class="token comment">#ip 地址</span>
<span class="token key atrule">network.host</span><span class="token punctuation">:</span> localhost <span class="token comment"># 本机地址</span>
<span class="token comment">#http 端口</span>
<span class="token key atrule">http.port</span><span class="token punctuation">:</span> <span class="token number">9500</span>
<span class="token comment">#tcp 监听端口</span>
<span class="token key atrule">transport.port</span><span class="token punctuation">:</span> <span class="token number">9501</span>

<span class="token comment"># 发现模块，用于发现其他节点，这里的端口是transport.port</span>
<span class="token key atrule">discovery.seed_hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;localhost:9301&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;localhost:9401&quot;</span><span class="token punctuation">]</span>

<span class="token comment"># 初始主节点 除了第一个节点，其他节点，一定不能配置该值，否则闪退</span>
<span class="token comment"># cluster.initial_master_nodes:</span>

<span class="token comment"># 跨域配置</span>
<span class="token key atrule">http.cors.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">http.cors.allow-origin</span><span class="token punctuation">:</span> <span class="token string">&quot;*&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-选举机制简介" tabindex="-1"><a class="header-anchor" href="#_4-选举机制简介" aria-hidden="true">#</a> 4. 选举机制简介</h4><h5 id="_4-1-首次启动" tabindex="-1"><a class="header-anchor" href="#_4-1-首次启动" aria-hidden="true">#</a> 4.1 首次启动</h5><p>集群第一次启动时，需要 cluster.initial_master_nodes 配置指定一个master类型的节点列表，来选举一个主节点。</p><h5 id="_4-2-再次启动" tabindex="-1"><a class="header-anchor" href="#_4-2-再次启动" aria-hidden="true">#</a> 4.2 再次启动</h5><p>此后，所有加入集群的节点信息将会报错到data目录，供下次启动时访问，也就是说再次启动集群，cluster.initial_master_nodes就不在起作用了。</p><h5 id="_4-3-过半原则" tabindex="-1"><a class="header-anchor" href="#_4-3-过半原则" aria-hidden="true">#</a> 4.3 过半原则</h5><p>非第一次启动的化，就会根据data中的节点信息进行选取，当选举配置集合中超过一半的节点存活时，集群才提供服务（也就是过半原则，通常集群解决脑裂问题都是采用这种方式）</p><p>如果是第一次启动集群，往往是因为没有配置 cluster.initial_master_nodes 参数导致的。如果不是第一次启动，也就是说集群启动的节点不满足过半原则，不能选举出主节点，这样只需要将过半的节点启动就可以了。</p><h5 id="_4-4-集群降级" tabindex="-1"><a class="header-anchor" href="#_4-4-集群降级" aria-hidden="true">#</a> 4.4 集群降级，</h5><p>如果不愿意启动多个节点，也就是要将多节点集群降级，如何减少集群中的节点数，最简单的做法是删除data目录，不过这样会丢失数据。</p><p>推荐做法：</p><ul><li>一次性删除节点不要太多，可以逐渐删除，留给集群足够的时间，让它自动调整Voting Configurations中的配置</li><li>如果只剩下最后两个节点了，那么都不能删除，如果要删除，就要配置Voting configuration exclusions来实现</li></ul><h2 id="启动集群" tabindex="-1"><a class="header-anchor" href="#启动集群" aria-hidden="true">#</a> 启动集群</h2><div class="hint-container tip"><p class="hint-container-title">注意事项</p><ul><li>在修改配置文件之前，先依次启动一次所有节点，这样配置文件中跟安全有关的配置就会显示出来。这样方便配置忽略安全检测，启动完后，记得删除data目录，清空logs目录</li><li>启动节点是有顺序的，第一个启动的节点必须包含cluster.initial_master_nodes配置</li></ul></div><p>配置好一个节点，就启动一个，观察集群信息。</p><h4 id="_1-启动第一个节点-es-9300" tabindex="-1"><a class="header-anchor" href="#_1-启动第一个节点-es-9300" aria-hidden="true">#</a> 1. 启动第一个节点：es-9300</h4><p>这是启动的第一个节点，该节点必须包含cluster.initial_master_nodes配置</p><p>启动后，查看集群信息：</p>`,47),k=n("li",null,"请求方式：GET",-1),m={href:"http://localhost:9300/_cluster/health",target:"_blank",rel:"noopener noreferrer"},v=a(`<p>返回的信息如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;cluster_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-es&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// 集群名称</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;green&quot;</span><span class="token punctuation">,</span>  <span class="token comment">//集群状态，green表示健康</span>
    <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//是否超时</span>
    <span class="token property">&quot;number_of_nodes&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">//节点数量，只启动了一个，所以是1</span>
    <span class="token property">&quot;number_of_data_nodes&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">//数据节点数量，只启动了一个，所以是1</span>
    <span class="token property">&quot;active_primary_shards&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;active_shards&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;relocating_shards&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;initializing_shards&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;unassigned_shards&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;delayed_unassigned_shards&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;number_of_pending_tasks&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;number_of_in_flight_fetch&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;task_max_waiting_in_queue_millis&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;active_shards_percent_as_number&quot;</span><span class="token operator">:</span> <span class="token number">100.0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>&quot;status&quot;：集群状态：</p><ul><li>green：健康，所有主分片和副本分片都正常运行</li><li>yellow：所有主分片都正常运行，但不是所有的副本分片都正常运行</li><li>red：有主分片没能正常运行</li></ul><h4 id="_2-启动第二个节点-es-9400" tabindex="-1"><a class="header-anchor" href="#_2-启动第二个节点-es-9400" aria-hidden="true">#</a> 2. 启动第二个节点：es-9400</h4><p>启动后，再次查看集群信息：</p><p>访问方式和地址不变</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;cluster_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-es&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;green&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;number_of_nodes&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">//节点数量变成了2</span>
    <span class="token property">&quot;number_of_data_nodes&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;active_primary_shards&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;active_shards&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;relocating_shards&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;initializing_shards&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;unassigned_shards&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;delayed_unassigned_shards&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;number_of_pending_tasks&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;number_of_in_flight_fetch&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;task_max_waiting_in_queue_millis&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;active_shards_percent_as_number&quot;</span><span class="token operator">:</span> <span class="token number">100.0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-启动第三个节点" tabindex="-1"><a class="header-anchor" href="#_3-启动第三个节点" aria-hidden="true">#</a> 3. 启动第三个节点</h4><p>启动后，再次查看集群信息：</p><p>访问方式和地址不变</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;cluster_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-es&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;green&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;number_of_nodes&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token comment">//节点数量变成了3</span>
    <span class="token property">&quot;number_of_data_nodes&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token property">&quot;active_primary_shards&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;active_shards&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;relocating_shards&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;initializing_shards&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;unassigned_shards&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;delayed_unassigned_shards&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;number_of_pending_tasks&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;number_of_in_flight_fetch&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;task_max_waiting_in_queue_millis&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;active_shards_percent_as_number&quot;</span><span class="token operator">:</span> <span class="token number">100.0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用测试" tabindex="-1"><a class="header-anchor" href="#使用测试" aria-hidden="true">#</a> 使用测试</h2><h4 id="_1-向节点-es-9300-添加索引" tabindex="-1"><a class="header-anchor" href="#_1-向节点-es-9300-添加索引" aria-hidden="true">#</a> 1. 向节点 es-9300 添加索引</h4>`,14),b=n("li",null,"请求方式：PUT",-1),h={href:"http://localhost:9300/user",target:"_blank",rel:"noopener noreferrer"},_=a(`<p>向es-9300服务添加了一个索引：user</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;acknowledged&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;shards_acknowledged&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;user&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-通过节点-es-9400-查看索引" tabindex="-1"><a class="header-anchor" href="#_2-通过节点-es-9400-查看索引" aria-hidden="true">#</a> 2. 通过节点 es-9400 查看索引</h4>`,3),q=n("li",null,"请求方式：GET",-1),y={href:"http://localhost:9400/user",target:"_blank",rel:"noopener noreferrer"},g=a(`<p>返回结果如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;aliases&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;allocation&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token property">&quot;_tier_preference&quot;</span><span class="token operator">:</span> <span class="token string">&quot;data_content&quot;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;number_of_shards&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;provided_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;creation_date&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1687940386790&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;number_of_replicas&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;y_ZFVzSOQnyF55VFHGEjiw&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;created&quot;</span><span class="token operator">:</span> <span class="token string">&quot;8080199&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>能够正常查看到该索引，集群能正常工作。</p>`,3);function f(x,w){const e=o("ExternalLinkIcon");return l(),i("div",null,[d,n("ul",null,[k,n("li",null,[s("url地址："),n("a",m,[s("http://localhost:9300/_cluster/health"),t(e)])])]),v,n("ul",null,[b,n("li",null,[s("请求地址："),n("a",h,[s("http://localhost:9300/user"),t(e)])])]),_,n("ul",null,[q,n("li",null,[s("请求地址："),n("a",y,[s("http://localhost:9400/user"),t(e)])])]),g])}const V=p(u,[["render",f],["__file","4-2.windows集群.html.vue"]]);export{V as default};
