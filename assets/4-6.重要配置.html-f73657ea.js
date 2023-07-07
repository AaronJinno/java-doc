import{_ as n,o as s,c as a,e}from"./app-b355f476.js";const t={},i=e(`<h2 id="elasticsearch-yaml" tabindex="-1"><a class="header-anchor" href="#elasticsearch-yaml" aria-hidden="true">#</a> elasticsearch.yaml</h2><p>elasticsearch.yaml主要配置项如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># ==================== Elasticsearch Configuration =================</span>
<span class="token comment">#  配置文件目录：/config/elasticsearch.yaml</span>
<span class="token comment">#  PS：改配置是以集群为前提配置的</span>
<span class="token comment"># --------------------------- Cluster：集群信息 ----------------------</span>
<span class="token comment"># # 集群名：同一集群的节点 要有相同的集群名</span>
<span class="token key atrule">cluster.name</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>application
<span class="token comment">#</span>
<span class="token comment"># ---------------------------- Node：节点信息 -------------------------</span>
<span class="token comment">#</span>
<span class="token comment"># # 节点名：同一集群总不得重复，一旦设置不能更改，建议包含主机信息</span>
<span class="token key atrule">node.name</span><span class="token punctuation">:</span> HOSTNAME
<span class="token comment">#</span>
<span class="token comment"># Add custom attributes to the node:</span>
<span class="token comment">#</span>
<span class="token comment">#node.attr.rack: r1</span>
<span class="token comment">#</span>
<span class="token comment"># --------------------------- Paths：文件路径信息 ----------------------</span>
<span class="token comment">#</span>
<span class="token comment"># # 索引数据储存的目录</span>
<span class="token key atrule">path.data</span><span class="token punctuation">:</span> /data
<span class="token comment">#</span>
<span class="token comment"># # 日志文件储存的目录</span>
<span class="token comment">#</span>
<span class="token key atrule">path.logs</span><span class="token punctuation">:</span> /path/to/logs
<span class="token comment">#</span>
<span class="token comment"># ----------------------------------- Memory -------------------------</span>
<span class="token comment">#</span>
<span class="token comment"># Lock the memory on startup:</span>
<span class="token comment">#</span>
<span class="token comment">#bootstrap.memory_lock: true</span>
<span class="token comment">#</span>
<span class="token comment"># Make sure that the heap size is set to about half the memory available</span>
<span class="token comment"># on the system and that the owner of the process is allowed to use this</span>
<span class="token comment"># limit.</span>
<span class="token comment">#</span>
<span class="token comment"># Elasticsearch performs poorly when the system is swapping the memory.</span>
<span class="token comment">#</span>
<span class="token comment"># ---------------------------------- Network --------------------------</span>
<span class="token comment">#</span>
<span class="token comment"># By default Elasticsearch is only accessible on localhost. Set a different</span>
<span class="token comment"># address here to expose this node on the network:</span>
<span class="token comment">#</span>
<span class="token comment">#network.host: 192.168.0.1</span>
<span class="token comment">#</span>
<span class="token comment"># # ES服务端口</span>
<span class="token key atrule">http.port</span><span class="token punctuation">:</span> <span class="token number">9200</span>
<span class="token comment">#</span>
<span class="token comment"># For more information, consult the network module documentation.</span>
<span class="token comment">#</span>
<span class="token comment"># --------------------------------- Discovery --------------------</span>
<span class="token comment">#</span>
<span class="token comment"># Pass an initial list of hosts to perform discovery when this node </span>
<span class="token comment"># is started:The default list of hosts is [&quot;127.0.0.1&quot;, &quot;[::1]&quot;]</span>
<span class="token comment">#</span>
<span class="token comment"># # 查找集群中其他节点的：值为其他节点的通信地址</span>
<span class="token key atrule">discovery.seed_hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;host1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;host2&quot;</span><span class="token punctuation">]</span>
<span class="token comment">#</span>
<span class="token comment"># Bootstrap the cluster using an initial set of master-eligible nodes:</span>
<span class="token comment">#</span>
<span class="token comment">#cluster.initial_master_nodes: [&quot;node-1&quot;, &quot;node-2&quot;]</span>
<span class="token comment">#</span>
<span class="token comment"># For more information, consult the discovery and cluster formation </span>
<span class="token comment"># module documentation.</span>
<span class="token comment">#</span>
<span class="token comment"># ---------------------------------- Various -----------------------</span>
<span class="token comment">#</span>
<span class="token comment"># Allow wildcard deletion of indices:</span>
<span class="token comment">#</span>
<span class="token comment">#action.destructive_requires_name: false</span>

<span class="token comment">#-------- BEGIN SECURITY AUTO CONFIGURATION：SSL安全配置 ------------</span>
<span class="token comment">#</span>
<span class="token comment"># The following settings, TLS certificates, and keys have been automatically      </span>
<span class="token comment"># generated to configure Elasticsearch security features on 30-06-2023 02:47:03</span>
<span class="token comment">#</span>
<span class="token comment"># Enable security features</span>
<span class="token key atrule">xpack.security.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">xpack.security.enrollment.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token comment"># Enable encryption for HTTP API client connections, such as Kibana, Logstash, and Agents</span>
<span class="token key atrule">xpack.security.http.ssl</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">keystore.path</span><span class="token punctuation">:</span> certs/http.p12

<span class="token comment"># Enable encryption and mutual authentication between cluster nodes</span>
<span class="token key atrule">xpack.security.transport.ssl</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">verification_mode</span><span class="token punctuation">:</span> certificate
  <span class="token key atrule">keystore.path</span><span class="token punctuation">:</span> certs/transport.p12
  <span class="token key atrule">truststore.path</span><span class="token punctuation">:</span> certs/transport.p12
<span class="token comment"># Create a new cluster with the current node only</span>
<span class="token comment"># Additional nodes can still join the cluster later</span>
<span class="token key atrule">cluster.initial_master_nodes</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;PC-20210318BCMF&quot;</span><span class="token punctuation">]</span>

<span class="token comment"># Allow HTTP API connections from anywhere</span>
<span class="token comment"># Connections are encrypted and require user authentication</span>
<span class="token key atrule">http.host</span><span class="token punctuation">:</span> 0.0.0.0

<span class="token comment"># Allow other nodes to join the cluster from anywhere</span>
<span class="token comment"># Connections are encrypted and mutually authenticated</span>
<span class="token comment">#transport.host: 0.0.0.0</span>

<span class="token comment">#----------------------- END SECURITY AUTO CONFIGURATION -------------------------</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jvm-options" tabindex="-1"><a class="header-anchor" href="#jvm-options" aria-hidden="true">#</a> jvm.options</h2><p>暂略</p><h2 id="log4j2-properties" tabindex="-1"><a class="header-anchor" href="#log4j2-properties" aria-hidden="true">#</a> log4j2.properties</h2><p>暂略</p><h2 id="索引setting" tabindex="-1"><a class="header-anchor" href="#索引setting" aria-hidden="true">#</a> 索引setting</h2><p>暂略</p>`,9),l=[i];function c(o,p){return s(),a("div",null,l)}const d=n(t,[["render",c],["__file","4-6.重要配置.html.vue"]]);export{d as default};
