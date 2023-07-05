import{_ as n,o as s,c as a,e}from"./app-dd87de81.js";const i="/java-doc/img/sql/mongodb/2-2-1.png",t="/java-doc/img/sql/mongodb/2-2-2.png",l="/java-doc/img/sql/mongodb/2-2-3.png",p={},o=e(`<div class="hint-container tip"><p class="hint-container-title">最小副本集架构</p><p>一主一副本一仲裁</p></div><h2 id="i-副本集设计" tabindex="-1"><a class="header-anchor" href="#i-副本集设计" aria-hidden="true">#</a> Ⅰ. 副本集设计</h2><h4 id="_1-架构" tabindex="-1"><a class="header-anchor" href="#_1-架构" aria-hidden="true">#</a> 1. 架构</h4><p>根据最小副本集架构搭建副本集，以下操作示例将在同一台设备上进行，以端口（配置文件）作为区分，实际开发应该在多台服务器上进行。</p><p>PS：是安装一次MongoDB，多次启动，每次端口不同。</p><h4 id="_2-端口设计" tabindex="-1"><a class="header-anchor" href="#_2-端口设计" aria-hidden="true">#</a> 2. 端口设计</h4><ul><li>27017：主节点（Primary）</li><li>27018：副节点（Secondary）</li><li>27019：选举节点（Arbiter）</li></ul><h4 id="_3-目录设计" tabindex="-1"><a class="header-anchor" href="#_3-目录设计" aria-hidden="true">#</a> 3. 目录设计</h4><ul><li>软件安装目录：/opt/mongodb/mongodb-6.0.5/</li><li>文件目录：/opt/mongodb/sets/ <ul><li>m27017/：主节点目录</li><li>m27018/：副节点目录</li><li>m27019/：选举节点目录</li></ul></li></ul><h4 id="_4-文件设计" tabindex="-1"><a class="header-anchor" href="#_4-文件设计" aria-hidden="true">#</a> 4. 文件设计</h4><p>每个节点目录下都有以下文件：</p><ul><li>log/：日志目录</li><li>data/db/：数据目录</li><li>mongod.conf：配置文件，</li></ul><h2 id="ii-创建节点" tabindex="-1"><a class="header-anchor" href="#ii-创建节点" aria-hidden="true">#</a> Ⅱ. 创建节点</h2><h4 id="_1-创建主节点" tabindex="-1"><a class="header-anchor" href="#_1-创建主节点" aria-hidden="true">#</a> 1. 创建主节点</h4><p>根据上述设计，创建主节点的目录和相关文件，其中配置文件如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#和单机MongoDB差不多，就是多了个replSetName（副本集配置）。</span>

systemLog:
    <span class="token comment">#MongoDB发送所有日志输出的目标指定为文件</span>
    destination: <span class="token function">file</span>
    <span class="token comment">#mongod或mongos应向其发送所有诊断日志记录信息的日志文件的路径</span>
    path: <span class="token string">&quot;/opt/mongodb/sets/m27017/log/mongod.log&quot;</span>
    <span class="token comment">#当mongos或mongod实例重新启动时，mongos或mongod会将新条目附加到现有日志文件的末尾。</span>
    logAppend: <span class="token boolean">true</span>
storage:
    <span class="token comment">#mongod实例存储其数据的目录。storage.dbPath设置仅适用于mongod。</span>
    dbPath:  <span class="token string">&quot;/opt/mongodb/sets/m27017/data/db&quot;</span>
    journal:
        <span class="token comment">#启用或禁用持久性日志以确保数据文件保持有效和可恢复。</span>
        enabled: <span class="token boolean">true</span>
processManagement:
    <span class="token comment">#启用在后台运行mongos或mongod进程的守护进程模式。</span>
    fork: <span class="token boolean">true</span>
    <span class="token comment">#指定用于保存mongos或mongod进程的进程ID的文件位置，其中mongos或mongod将写入其PID</span>
    pidFilePath: <span class="token string">&quot;/opt/mongodb/sets/m27017/log/mongod.pid&quot;</span>
net:
    <span class="token comment">#服务实例绑定所有IP，有副作用，副本集初始化的时候，节点名字会自动设置为本地域名，而不是ip</span>
    <span class="token comment">#bindIpAll: true</span>
    <span class="token comment">#服务实例绑定的IP</span>
    bindIp: localhost,172.16.0.9
    <span class="token comment">#bindIp绑定的端口</span>
    port: <span class="token number">27017</span>
replication:
    <span class="token comment">#副本集的名称</span>
    replSetName: myrs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>启动节点</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>bin<span class="token punctuation">]</span> ./mongod <span class="token parameter variable">-f</span> /opt/mongodb/sets/m27017/mongod.conf
<span class="token comment"># about to fork child process, waiting until server is ready for connections.</span>
<span class="token comment"># forked process: 3062446</span>
<span class="token comment"># child process started successfully, parent exiting</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-创建副本节点" tabindex="-1"><a class="header-anchor" href="#_2-创建副本节点" aria-hidden="true">#</a> 2. 创建副本节点</h4><p>同上创建对应的目录和文件，副节点的配置文件和主节点配置文件相比只有一些目录和端口的配置不同。副本节点和主节点拥有相同的副本集名称以组成副本集。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>path: <span class="token string">&quot;/opt/mongodb/sets/m27018/log/mongod.log&quot;</span>
dbPath:  <span class="token string">&quot;/opt/mongodb/sets/m27018/data/db&quot;</span>
pidFilePath: <span class="token string">&quot;/opt/mongodb/sets/m27018/log/mongod.pid&quot;</span>
port: <span class="token number">27018</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>启动副本节点</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>bin<span class="token punctuation">]</span> ./mongod <span class="token parameter variable">-f</span> /opt/mongodb/sets/m27018/mongod.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-创建仲裁节点" tabindex="-1"><a class="header-anchor" href="#_3-创建仲裁节点" aria-hidden="true">#</a> 3. 创建仲裁节点</h4><p>同上创建对应的目录和文件，仲裁节点的配置文件和主节点配置文件相比只有一些目录和端口的配置不同。仲裁节点和主节点拥有相同的副本集名称以组成副本集。</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>path: &quot;/opt/mongodb/sets/m27019/log/mongod.log&quot;
dbPath:  &quot;/opt/mongodb/sets/m27019/data/db&quot;
pidFilePath: &quot;/opt/mongodb/sets/m27019/log/mongod.pid&quot;
port: 27019
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>启动仲裁节点</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>bin<span class="token punctuation">]</span> ./mongod <span class="token parameter variable">-f</span> /opt/mongodb/sets/m27019/mongod.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4-查看启动结果" tabindex="-1"><a class="header-anchor" href="#_4-查看启动结果" aria-hidden="true">#</a> 4. 查看启动结果</h4><p>看下三个mongodb服务是否启动成功</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> mongod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+i+'" alt="2-2-1" tabindex="0" loading="lazy"><figcaption>2-2-1</figcaption></figure><h2 id="iii-初始化副本集" tabindex="-1"><a class="header-anchor" href="#iii-初始化副本集" aria-hidden="true">#</a> Ⅲ. 初始化副本集</h2><div class="hint-container warning"><p class="hint-container-title">注意</p><p>连接上任意一个节点后，很多命令无法使用，比如show dbs等，操作前必须初始化副本集才行。</p></div><h4 id="_1-连接节点" tabindex="-1"><a class="header-anchor" href="#_1-连接节点" aria-hidden="true">#</a> 1. 连接节点</h4><p>使用Compass连接主节点，注意，由于副本集未初始化，直接连接副本集将失败，<br> 需要勾选如下设置，以直接连接的方式连接副本集主节点：</p><figure><img src="'+t+'" alt="2-2-2" tabindex="0" loading="lazy"><figcaption>2-2-2</figcaption></figure><h4 id="_2-连接后查看" tabindex="-1"><a class="header-anchor" href="#_2-连接后查看" aria-hidden="true">#</a> 2. 连接后查看</h4><p>如下：视图中无法显示数据库列表，输入查看数据库的指令，也无法执行。</p><figure><img src="'+l+`" alt="2-2-3" tabindex="0" loading="lazy"><figcaption>2-2-3</figcaption></figure><h4 id="_3-初始化副本集" tabindex="-1"><a class="header-anchor" href="#_3-初始化副本集" aria-hidden="true">#</a> 3. 初始化副本集</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>rs.initiate<span class="token punctuation">(</span>configuration<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>选项一般为空即可，选项是一些与副本集设置有关的信息。</p><h4 id="_4-副本集初始化结果" tabindex="-1"><a class="header-anchor" href="#_4-副本集初始化结果" aria-hidden="true">#</a> 4. 副本集初始化结果</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>rs.<span class="token function-name function">initiate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  info2: <span class="token string">&#39;no configuration specified. Using a default configuration for the set&#39;</span>,
  me: <span class="token string">&#39;172.16.0.9:27017&#39;</span>,
  ok: <span class="token number">1</span>
<span class="token punctuation">}</span>
myrs <span class="token punctuation">[</span>direct: secondary<span class="token punctuation">]</span> test<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解析</strong></p><ul><li>ok值为1，表示副本集创建成功</li><li>命令行提示符发生变化，变成了一个从节点角色。 <ul><li>此时默认不能读写。稍等片刻，回车，变成主节点。</li></ul></li><li>此时已经可以读到数据库了。</li></ul><h2 id="iv-查看副本集" tabindex="-1"><a class="header-anchor" href="#iv-查看副本集" aria-hidden="true">#</a> Ⅳ. 查看副本集</h2><div class="hint-container danger"><p class="hint-container-title">主节点</p><p>副本集初始化后，也同时配置好了主节点，查看副本集信息时，可以查看到主节点的信息。</p></div><h4 id="_1-查看副本集的配置内容" tabindex="-1"><a class="header-anchor" href="#_1-查看副本集的配置内容" aria-hidden="true">#</a> 1. 查看副本集的配置内容</h4><div class="hint-container tip"><p class="hint-container-title">提示</p><p>副本集配置的查看命令，本质是查询的是 system.replset 的表中的数据</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>rs.conf<span class="token punctuation">(</span>configuration<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>conﬁguration：可选，如果没有配置，则使用默认主节点配置。</p><h5 id="_1-1-执行结果" tabindex="-1"><a class="header-anchor" href="#_1-1-执行结果" aria-hidden="true">#</a> 1.1 执行结果</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>rs.<span class="token function-name function">conf</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  _id: <span class="token string">&#39;myrs&#39;</span>,
  version: <span class="token number">1</span>,
  term: <span class="token number">1</span>,
  members: <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      _id: <span class="token number">0</span>,
      host: <span class="token string">&#39;172.16.0.9:27017&#39;</span>,
      arbiterOnly: false,
      buildIndexes: true,
      hidden: false,
      priority: <span class="token number">1</span>,
      tags: <span class="token punctuation">{</span><span class="token punctuation">}</span>,
      secondaryDelaySecs: Long<span class="token punctuation">(</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span>,
      votes: <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>,
  protocolVersion: Long<span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span>,
  writeConcernMajorityJournalDefault: true,
  settings: <span class="token punctuation">{</span>
    chainingAllowed: true,
    heartbeatIntervalMillis: <span class="token number">2000</span>,
    heartbeatTimeoutSecs: <span class="token number">10</span>,
    electionTimeoutMillis: <span class="token number">10000</span>,
    catchUpTimeoutMillis: -1,
    catchUpTakeoverDelayMillis: <span class="token number">30000</span>,
    getLastErrorModes: <span class="token punctuation">{</span><span class="token punctuation">}</span>,
    getLastErrorDefaults: <span class="token punctuation">{</span> w: <span class="token number">1</span>, wtimeout: <span class="token number">0</span> <span class="token punctuation">}</span>,
    replicaSetId: ObjectId<span class="token punctuation">(</span><span class="token string">&quot;6447e68241b3272f43080f4d&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_1-2-结果解析" tabindex="-1"><a class="header-anchor" href="#_1-2-结果解析" aria-hidden="true">#</a> 1.2 结果解析</h5><ul><li><code>_id: &#39;myrs&#39;</code>：副本集的配置数据存储的主键值，默认就是副本集的名字</li><li><code>members</code> ：副本集成员数组， <ul><li>此时只有一个：&quot;host&quot;:&quot;172.16.0.9:27017&quot; ， <ul><li>该成员不是仲裁节点： &quot;arbiterOnly&quot; : false</li><li>优先级（权重值）：&quot;priority&quot; : 1</li></ul></li></ul></li><li><code>settings</code>：副本集的参数配置</li></ul><h4 id="_2-查看副本集状态" tabindex="-1"><a class="header-anchor" href="#_2-查看副本集状态" aria-hidden="true">#</a> 2. 查看副本集状态</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>rs.status<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回包含状态信息的文档。</p><p>此输出使用从副本集的其他成员发送的心跳包中获得的数据反映副本集的当前状态。</p><h5 id="_2-1-执行结果" tabindex="-1"><a class="header-anchor" href="#_2-1-执行结果" aria-hidden="true">#</a> 2.1 执行结果</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">{</span>
  set: <span class="token string">&#39;myrs&#39;</span>,
  date: <span class="token number">2023</span>-04-25T14:54:27.116Z,
  myState: <span class="token number">1</span>,
  term: Long<span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span>,
  syncSourceHost: <span class="token string">&#39;&#39;</span>,
  syncSourceId: -1,
  heartbeatIntervalMillis: Long<span class="token punctuation">(</span><span class="token string">&quot;2000&quot;</span><span class="token punctuation">)</span>,
  majorityVoteCount: <span class="token number">1</span>,
  writeMajorityCount: <span class="token number">1</span>,
  votingMembersCount: <span class="token number">1</span>,
  writableVotingMembersCount: <span class="token number">1</span>,
  optimes: <span class="token punctuation">{</span>
    lastCommittedOpTime: <span class="token punctuation">{</span> ts: Timestamp<span class="token punctuation">(</span><span class="token punctuation">{</span> t: <span class="token number">1682434466</span>, i: <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>, t: Long<span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>,
    lastCommittedWallTime: <span class="token number">2023</span>-04-25T14:54:26.680Z,
    readConcernMajorityOpTime: <span class="token punctuation">{</span> ts: Timestamp<span class="token punctuation">(</span><span class="token punctuation">{</span> t: <span class="token number">1682434466</span>, i: <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>, t: Long<span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>,
    appliedOpTime: <span class="token punctuation">{</span> ts: Timestamp<span class="token punctuation">(</span><span class="token punctuation">{</span> t: <span class="token number">1682434466</span>, i: <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>, t: Long<span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>,
    durableOpTime: <span class="token punctuation">{</span> ts: Timestamp<span class="token punctuation">(</span><span class="token punctuation">{</span> t: <span class="token number">1682434466</span>, i: <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>, t: Long<span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>,
    lastAppliedWallTime: <span class="token number">2023</span>-04-25T14:54:26.680Z,
    lastDurableWallTime: <span class="token number">2023</span>-04-25T14:54:26.680Z
  <span class="token punctuation">}</span>,
  lastStableRecoveryTimestamp: Timestamp<span class="token punctuation">(</span><span class="token punctuation">{</span> t: <span class="token number">1682434446</span>, i: <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>,
  electionCandidateMetrics: <span class="token punctuation">{</span>
    lastElectionReason: <span class="token string">&#39;electionTimeout&#39;</span>,
    lastElectionDate: <span class="token number">2023</span>-04-25T14:41:06.438Z,
    electionTerm: Long<span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span>,
    lastCommittedOpTimeAtElection: <span class="token punctuation">{</span> ts: Timestamp<span class="token punctuation">(</span><span class="token punctuation">{</span> t: <span class="token number">1682433666</span>, i: <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>, t: Long<span class="token punctuation">(</span><span class="token string">&quot;-1&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>,
    lastSeenOpTimeAtElection: <span class="token punctuation">{</span> ts: Timestamp<span class="token punctuation">(</span><span class="token punctuation">{</span> t: <span class="token number">1682433666</span>, i: <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>, t: Long<span class="token punctuation">(</span><span class="token string">&quot;-1&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>,
    numVotesNeeded: <span class="token number">1</span>,
    priorityAtElection: <span class="token number">1</span>,
    electionTimeoutMillis: Long<span class="token punctuation">(</span><span class="token string">&quot;10000&quot;</span><span class="token punctuation">)</span>,
    newTermStartDate: <span class="token number">2023</span>-04-25T14:41:06.593Z,
    wMajorityWriteAvailabilityDate: <span class="token number">2023</span>-04-25T14:41:06.683Z
  <span class="token punctuation">}</span>,
  members: <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      _id: <span class="token number">0</span>,
      name: <span class="token string">&#39;172.16.0.9:27017&#39;</span>,
      health: <span class="token number">1</span>,
      state: <span class="token number">1</span>,
      stateStr: <span class="token string">&#39;PRIMARY&#39;</span>,
      uptime: <span class="token number">3784</span>,
      optime: <span class="token punctuation">[</span>Object<span class="token punctuation">]</span>,
      optimeDate: <span class="token number">2023</span>-04-25T14:54:26.000Z,
      lastAppliedWallTime: <span class="token number">2023</span>-04-25T14:54:26.680Z,
      lastDurableWallTime: <span class="token number">2023</span>-04-25T14:54:26.680Z,
      syncSourceHost: <span class="token string">&#39;&#39;</span>,
      syncSourceId: -1,
      infoMessage: <span class="token string">&#39;&#39;</span>,
      electionTime: Timestamp<span class="token punctuation">(</span><span class="token punctuation">{</span> t: <span class="token number">1682433666</span>, i: <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>,
      electionDate: <span class="token number">2023</span>-04-25T14:41:06.000Z,
      configVersion: <span class="token number">1</span>,
      configTerm: <span class="token number">1</span>,
      self: true,
      lastHeartbeatMessage: <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>,
  ok: <span class="token number">1</span>,
  <span class="token string">&#39;$clusterTime&#39;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    clusterTime: Timestamp<span class="token punctuation">(</span><span class="token punctuation">{</span> t: <span class="token number">1682434466</span>, i: <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>,
    signature: <span class="token punctuation">{</span>
      hash: Binary<span class="token punctuation">(</span>Buffer.from<span class="token punctuation">(</span><span class="token string">&quot;0000000000000000000000000000000000000000&quot;</span>, <span class="token string">&quot;hex&quot;</span><span class="token punctuation">)</span>, <span class="token number">0</span><span class="token punctuation">)</span>,
      keyId: Long<span class="token punctuation">(</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  operationTime: Timestamp<span class="token punctuation">(</span><span class="token punctuation">{</span> t: <span class="token number">1682434466</span>, i: <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-2-结果解析" tabindex="-1"><a class="header-anchor" href="#_2-2-结果解析" aria-hidden="true">#</a> 2.2 结果解析</h5><ul><li><code>set: &#39;myrs&#39;</code>：副本集的名字</li><li><code>myState: 1</code>：值为1，说明状态正常</li><li><code>members</code>： 副本集成员数组，此时只有一个，就是主节点。 <ul><li><code>stateStr: &#39;PRIMARY&#39;</code>：角色名</li><li><code>health: 1</code>：值为1，表示该节点是健康的。</li></ul></li></ul><h2 id="v-添加节点" tabindex="-1"><a class="header-anchor" href="#v-添加节点" aria-hidden="true">#</a> Ⅴ. 添加节点</h2><div class="hint-container tip"><p class="hint-container-title">完成副本集</p><p>手动将副本从节点和仲裁从节点添加到副本集，副本集就真正创建成功了。</p></div><h4 id="_1-添加副本从节点" tabindex="-1"><a class="header-anchor" href="#_1-添加副本从节点" aria-hidden="true">#</a> 1. 添加副本从节点</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>rs.add<span class="token punctuation">(</span>host, arbiterOnly<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>host：要添加到副本集的新成员。 <ul><li>字符串：指定新成员的主机名和可选的端口号</li><li>文档：指定配置文档</li></ul></li><li>arbiterOnly：可选，值为Boolean，若为true，表示要添加的主机为仲裁者 <ul><li>默认是false</li><li>一般不用给这个值，添加仲裁节点可以用别的方法</li></ul></li></ul><p><strong>将从节点添加道副本集</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>myrs <span class="token punctuation">[</span>direct: primary<span class="token punctuation">]</span>test<span class="token operator">&gt;</span> rs.add<span class="token punctuation">(</span><span class="token string">&quot;172.16.0.9:27018&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  ok: <span class="token number">1</span>,
  <span class="token string">&#39;$clusterTime&#39;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    clusterTime: Timestamp<span class="token punctuation">(</span><span class="token punctuation">{</span> t: <span class="token number">1682435169</span>, i: <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>,
    signature: <span class="token punctuation">{</span>
      hash: Binary<span class="token punctuation">(</span>Buffer.from<span class="token punctuation">(</span><span class="token string">&quot;0000000000000000000000000000000000000000&quot;</span>, <span class="token string">&quot;hex&quot;</span><span class="token punctuation">)</span>, <span class="token number">0</span><span class="token punctuation">)</span>,
      keyId: Long<span class="token punctuation">(</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  operationTime: Timestamp<span class="token punctuation">(</span><span class="token punctuation">{</span> t: <span class="token number">1682435169</span>, i: <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>结果说明</strong><br><code>ok: 1</code>：值为1，表示添加成功。</p><p>此时执行 <code>rs.status()</code> 查看副本集状态，可以发现members里存在了两个节点，刚加入的节点信息如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">{</span>
    _id: <span class="token number">1</span>, <span class="token comment"># 节点id</span>
    name: <span class="token string">&#39;172.16.0.9:27018&#39;</span>, <span class="token comment"># 节点ip:port</span>
    health: <span class="token number">1</span>, <span class="token comment"># 是否健康</span>
    state: <span class="token number">2</span>, 
    stateStr: <span class="token string">&#39;SECONDARY&#39;</span>, <span class="token comment"># 角色名，SECONDARY表示副节点</span>
    uptime: <span class="token number">195</span>,
    optime: <span class="token punctuation">[</span>Object<span class="token punctuation">]</span>,
    optimeDurable: <span class="token punctuation">[</span>Object<span class="token punctuation">]</span>,
    optimeDate: <span class="token number">2023</span>-04-25T15:09:16.000Z,
    optimeDurableDate: <span class="token number">2023</span>-04-25T15:09:16.000Z,
    lastAppliedWallTime: <span class="token number">2023</span>-04-25T15:09:16.699Z,
    lastDurableWallTime: <span class="token number">2023</span>-04-25T15:09:16.699Z,
    lastHeartbeat: <span class="token number">2023</span>-04-25T15:09:23.805Z,
    lastHeartbeatRecv: <span class="token number">2023</span>-04-25T15:09:24.306Z,
    pingMs: Long<span class="token punctuation">(</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span>,
    lastHeartbeatMessage: <span class="token string">&#39;&#39;</span>,
    syncSourceHost: <span class="token string">&#39;172.16.0.9:27017&#39;</span>,
    syncSourceId: <span class="token number">0</span>,
    infoMessage: <span class="token string">&#39;&#39;</span>,
    configVersion: <span class="token number">3</span>,
    configTerm: <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-添加仲裁从节点" tabindex="-1"><a class="header-anchor" href="#_2-添加仲裁从节点" aria-hidden="true">#</a> 2. 添加仲裁从节点</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>rs.addArb<span class="token punctuation">(</span>host<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>将仲裁节点添加到副本集</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>rs.addArb<span class="token punctuation">(</span><span class="token string">&quot;159.75.225.162:27019&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  ok: <span class="token number">1</span>,
  <span class="token string">&#39;$clusterTime&#39;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    clusterTime: Timestamp<span class="token punctuation">(</span><span class="token punctuation">{</span> t: <span class="token number">1682436386</span>, i: <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>,
    signature: <span class="token punctuation">{</span>
      hash: Binary<span class="token punctuation">(</span>Buffer.from<span class="token punctuation">(</span><span class="token string">&quot;000000000000000000000000000000&quot;</span>, <span class="token string">&quot;hex&quot;</span><span class="token punctuation">)</span>, <span class="token number">0</span><span class="token punctuation">)</span>,
      keyId: Long<span class="token punctuation">(</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  operationTime: Timestamp<span class="token punctuation">(</span><span class="token punctuation">{</span> t: <span class="token number">1682436386</span>, i: <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查看副本集状态</strong></p><p>此时，members里多了一个对象，就是刚新加入的仲裁节点，内容如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">{</span>
    _id: <span class="token number">2</span>,
    name: <span class="token string">&#39;159.75.225.162:27019&#39;</span>, <span class="token comment"># ip:port</span>
    health: <span class="token number">1</span>, <span class="token comment"># 表示健康</span>
    state: <span class="token number">7</span>,
    stateStr: <span class="token string">&#39;ARBITER&#39;</span>, <span class="token comment"># 角色名，ARBITER表示仲裁节点</span>
    uptime: <span class="token number">65</span>,
    lastHeartbeat: <span class="token number">2023</span>-04-25T15:27:30.240Z,
    lastHeartbeatRecv: <span class="token number">2023</span>-04-25T15:27:30.276Z,
    pingMs: Long<span class="token punctuation">(</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span>,
    lastHeartbeatMessage: <span class="token string">&#39;&#39;</span>,
    syncSourceHost: <span class="token string">&#39;&#39;</span>,
    syncSourceId: -1,
    infoMessage: <span class="token string">&#39;&#39;</span>,
    configVersion: <span class="token number">4</span>,
    configTerm: <span class="token number">1</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-debug" tabindex="-1"><a class="header-anchor" href="#_3-debug" aria-hidden="true">#</a> 3. debug</h4><p>添加节点时，可能会遇到报错：<br><mark>MongoServerError: Reconfig attempted to install a config that would change the implicit default write concern. Use the setDefaultRWConcern command to set a cluster-wide write concern and try the reconfig again.</mark></p><p><strong>解决</strong></p><p>先执行下面这条命令，然后再添加节点。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>db.adminCommand<span class="token punctuation">(</span> 
  <span class="token punctuation">{</span>
    <span class="token string">&quot;setDefaultRWConcern&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>, 
    <span class="token string">&quot;defaultWriteConcern&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;w&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">2</span> <span class="token punctuation">}</span> 
  <span class="token punctuation">}</span> 
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,87),c=[o];function u(d,r){return s(),a("div",null,c)}const v=n(p,[["render",u],["__file","2-2.创建副本集.html.vue"]]);export{v as default};
