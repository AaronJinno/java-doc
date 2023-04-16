import{_ as n,P as a,Q as e,a3 as s}from"./framework-7e8eb00a.js";const i="/java-doc/img/sql/mongodb/7-1.png",d="/java-doc/img/sql/mongodb/7-2.png",o="/java-doc/img/sql/mongodb/7-3.png",l={},r=s('<h2 id="副本集介绍" tabindex="-1"><a class="header-anchor" href="#副本集介绍" aria-hidden="true">#</a> 副本集介绍</h2><h4 id="_1-概述" tabindex="-1"><a class="header-anchor" href="#_1-概述" aria-hidden="true">#</a> 1. 概述</h4><p>MongoDB中的副本集（Replica Set）是一组维护相同数据集的mongod服务。 副本集可提供冗余和高 可用性，是所有生产部署的基础。</p><p>可以说，副本集类似于有自动故障恢复功能的主从集群。通俗的讲就是用多台机器进行同一数据的异 步同步，从而使多台机器拥有同一数据的多个副本，并且当主库当掉时在不需要用户干预的情况下自动 切换其他备份服务器做主库。而且还可以利用副本服务器做只读服务器，实现读写分离，提高负载。</p><h4 id="_2-冗余和数据可用性" tabindex="-1"><a class="header-anchor" href="#_2-冗余和数据可用性" aria-hidden="true">#</a> 2. 冗余和数据可用性</h4><p>复制提供<strong>冗余</strong>并提高数据可用性。 通过在不同数据库服务器上提供多个数据副本，复制可提供一定级别的容错功能，以防止丢失单个数据库服务器。</p><p>在某些情况下，复制可以提供增加的读取性能，因为客户端可以将读取操作发送到不同的服务上， 在不 同数据中心维护数据副本可以增加分布式应用程序的数据位置和可用性。 还可以为专用目的维护其他 副本，例如灾难恢复，报告或备份。</p><h4 id="_3-mongodb中的复制" tabindex="-1"><a class="header-anchor" href="#_3-mongodb中的复制" aria-hidden="true">#</a> 3. MongoDB中的复制</h4><p>副本集是一组维护相同数据集的mongod实例。<br> 副本集包含多个数据承载节点和可选的一个仲裁节点。 在承载数据的节点中，一个且仅一个成员被视为主节点，而其他节点被视为次要（从）节点。</p><p>主节点接收所有写操作。 副本集只能有一个主要能够确认具有{w：“most”}写入关注的写入; 虽然在某 些情况下，另一个mongod实例可能暂时认为自己也是主要的。主要记录其操作日志中的数据集的所有 更改，即oplog。</p><figure><img src="'+i+'" alt="7-1" tabindex="0" loading="lazy"><figcaption>7-1</figcaption></figure><h4 id="_4-主从复制和副本集区别" tabindex="-1"><a class="header-anchor" href="#_4-主从复制和副本集区别" aria-hidden="true">#</a> 4. 主从复制和副本集区别</h4><p>主从集群和副本集最大的区别就是副本集没有固定的“主节点”；整个集群会选出一个“主节点”，当其挂 掉后，又在剩下的从节点中选中其他节点为“主节点”，副本集总有一个活跃点(主、primary)和一个或多个备份节点(从、secondary)。</p><h4 id="_5-副本集的类型和角色" tabindex="-1"><a class="header-anchor" href="#_5-副本集的类型和角色" aria-hidden="true">#</a> 5. 副本集的类型和角色</h4><p>副本集有两种类型三种角色</p><h5 id="_5-1-两种类型" tabindex="-1"><a class="header-anchor" href="#_5-1-两种类型" aria-hidden="true">#</a> 5.1 两种类型</h5><ul><li>主节点（Primary）类型：数据操作的主要连接点，可读写。</li><li>次要（辅助、从）节点（Secondaries）类型：数据冗余备份节点，可以读或选举。</li></ul><h5 id="_5-2-三种角色" tabindex="-1"><a class="header-anchor" href="#_5-2-三种角色" aria-hidden="true">#</a> 5.2 三种角色</h5><ul><li>主要成员（Primary）：主要接收所有写操作。就是主节点。</li><li>副本成员（Replicate）：从主节点通过复制操作以维护相同的数据集，即备份数据，不可写操作，但可以读操作（但需要配置）。是默认的一种从节点类型。</li><li>仲裁者（Arbiter）：不保留任何数据的副本，只具有投票选举作用。当然也可以将仲裁服务器维护为副本集的一部分，即副本成员同时也可以是仲裁者。也是一种从节点类型。</li></ul><figure><img src="'+d+'" alt="7-2" tabindex="0" loading="lazy"><figcaption>7-2</figcaption></figure><h5 id="_5-3-仲裁者额外说明" tabindex="-1"><a class="header-anchor" href="#_5-3-仲裁者额外说明" aria-hidden="true">#</a> 5.3 仲裁者额外说明</h5><p>可以将额外的mongod实例添加到副本集作为仲裁者。 仲裁者不维护数据集，仲裁者的目的是通过 响应其他副本集成员的心跳和选举请求来维护副本集中的仲裁。 因为它们不存储数据集，所以仲裁器可 以是提供副本集仲裁功能的好方法，其资源成本比具有数据集的全功能副本集成员更便宜。</p><ul><li>如果副本集具有偶数个成员，添加仲裁者以获得主要选举中的“大多数”投票。 <ul><li>如果你的副本+主节点的个数是奇数，可以不加仲裁者。</li></ul></li><li>仲裁者不需要专用硬件。</li><li>仲裁者将永远是仲裁者，而主要人员可能会退出并成为次要人员，而次要人员可能成为选举期间的主要人员。</li></ul><h4 id="_6-副本集架构示例" tabindex="-1"><a class="header-anchor" href="#_6-副本集架构示例" aria-hidden="true">#</a> 6. 副本集架构示例</h4><p>最小的副本集架构：一主一副本一仲裁</p><figure><img src="'+o+`" alt="7-3" tabindex="0" loading="lazy"><figcaption>7-3</figcaption></figure><h2 id="搭建副本集" tabindex="-1"><a class="header-anchor" href="#搭建副本集" aria-hidden="true">#</a> 搭建副本集</h2><p>根据最小副本集架构搭建副本集，以下操作示例将在同一台设备上进行，以端口（配置文件）作为区分，实际开发应该在多台服务器上进行。<br> PS:是安装一次MongoDB，多次启动，每次端口不同。</p><p><strong>端口设计</strong></p><ul><li>27017：主节点（Primary）</li><li>27018：副节点（Secondary）</li><li>27019：选举节点（Arbiter）</li></ul><p><strong>目录设计</strong></p><ul><li>安装目录：/opt/mongodb/mongodb-6.0.5/</li><li>文件目录：/opt/mongodb/mongodb-6.0.5/sets/ <ul><li>m27017/：主节点目录</li><li>m27018/：副节点目录</li><li>m27019/：选举节点目录</li></ul></li></ul><p><strong>文件设计</strong><br> 每个节点目录下都有以下文件：</p><ul><li>log/：日志目录</li><li>data/db/：数据目录</li><li>mongod.conf：配置文件，</li></ul><h4 id="_1-创建主节点" tabindex="-1"><a class="header-anchor" href="#_1-创建主节点" aria-hidden="true">#</a> 1. 创建主节点</h4><p>根据上述设计，创建主节点的目录和相关文件，其中配置文件如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#和单机MongoDB差不多，就是多了个replSetName（副本集配置）。</span>

systemLog:
    <span class="token comment">#MongoDB发送所有日志输出的目标指定为文件</span>
    destination: <span class="token function">file</span>
    <span class="token comment">#mongod或mongos应向其发送所有诊断日志记录信息的日志文件的路径</span>
    path: <span class="token string">&quot;/opt/mongodb/mongodb-6.0.5/sets/m27017/log/mongod.log&quot;</span>
    <span class="token comment">#当mongos或mongod实例重新启动时，mongos或mongod会将新条目附加到现有日志文件的末尾。</span>
    logAppend: <span class="token boolean">true</span>
storage:
    <span class="token comment">#mongod实例存储其数据的目录。storage.dbPath设置仅适用于mongod。</span>
    dbPath:  <span class="token string">&quot;/opt/mongodb/mongodb-6.0.5/sets/m27017/data/db&quot;</span>
    journal:
        <span class="token comment">#启用或禁用持久性日志以确保数据文件保持有效和可恢复。</span>
        enabled: <span class="token boolean">true</span>
processManagement:
    <span class="token comment">#启用在后台运行mongos或mongod进程的守护进程模式。</span>
    fork: <span class="token boolean">true</span>
    <span class="token comment">#指定用于保存mongos或mongod进程的进程ID的文件位置，其中mongos或mongod将写入其PID</span>
    pidFilePath: <span class="token string">&quot;/opt/mongodb/mongodb-6.0.5/sets/m27017/log/mongod.pid&quot;</span>
net:
    <span class="token comment">#服务实例绑定所有IP，有副作用，副本集初始化的时候，节点名字会自动设置为本地域名，而不是ip</span>
    <span class="token comment">#bindIpAll: true</span>
    <span class="token comment">#服务实例绑定的IP</span>
    bindIp: localhost,192.168.0.2
    <span class="token comment">#bindIp绑定的端口</span>
    port: <span class="token number">27017</span>
replication:
    <span class="token comment">#副本集的名称</span>
    replSetName: myrs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>启动节点</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>bin<span class="token punctuation">]</span><span class="token comment"># mongod -f /opt/mongodb/sets/m27017/mongod.conf</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-创建副本节点" tabindex="-1"><a class="header-anchor" href="#_2-创建副本节点" aria-hidden="true">#</a> 2. 创建副本节点</h4><p>同上创建对应的目录和文件，副节点的配置文件和主节点配置文件相比只有一些目录和端口的配置不同。副本节点和主节点拥有相同的副本集名称以组成副本集。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>path: <span class="token string">&quot;/opt/mongodb/mongodb-6.0.5/sets/m27018/log/mongod.log&quot;</span>
dbPath:  <span class="token string">&quot;/opt/mongodb/mongodb-6.0.5/sets/m27018/data/db&quot;</span>
pidFilePath: <span class="token string">&quot;/opt/mongodb/mongodb-6.0.5/sets/m27018/log/mongod.pid&quot;</span>
port: <span class="token number">27018</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>启动副本节点</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>bin<span class="token punctuation">]</span><span class="token comment"># mongod -f /opt/mongodb/sets/m27018/mongod.conf</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-创建仲裁节点" tabindex="-1"><a class="header-anchor" href="#_3-创建仲裁节点" aria-hidden="true">#</a> 3. 创建仲裁节点</h4><p>同上创建对应的目录和文件，仲裁节点的配置文件和主节点配置文件相比只有一些目录和端口的配置不同。仲裁节点和主节点拥有相同的副本集名称以组成副本集。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>path: <span class="token string">&quot;/opt/mongodb/mongodb-6.0.5/sets/m27019/log/mongod.log&quot;</span>
dbPath:  <span class="token string">&quot;/opt/mongodb/mongodb-6.0.5/sets/m27019/data/db&quot;</span>
pidFilePath: <span class="token string">&quot;/opt/mongodb/mongodb-6.0.5/sets/m27019/log/mongod.pid&quot;</span>
port: <span class="token number">27019</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>启动仲裁节点</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>bin<span class="token punctuation">]</span><span class="token comment"># mongod -f /opt/mongodb/sets/m27019/mongod.conf</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4-初始化配置副本集和主节点" tabindex="-1"><a class="header-anchor" href="#_4-初始化配置副本集和主节点" aria-hidden="true">#</a> 4. 初始化配置副本集和主节点</h4><h4 id="_5-查看副本集的配置内容" tabindex="-1"><a class="header-anchor" href="#_5-查看副本集的配置内容" aria-hidden="true">#</a> 5. 查看副本集的配置内容</h4><h4 id="_6-查看副本集状态" tabindex="-1"><a class="header-anchor" href="#_6-查看副本集状态" aria-hidden="true">#</a> 6. 查看副本集状态</h4><h4 id="_7-添加副本从节点" tabindex="-1"><a class="header-anchor" href="#_7-添加副本从节点" aria-hidden="true">#</a> 7. 添加副本从节点</h4><h4 id="_8-添加仲裁从节点" tabindex="-1"><a class="header-anchor" href="#_8-添加仲裁从节点" aria-hidden="true">#</a> 8. 添加仲裁从节点</h4><h2 id="操作副本集" tabindex="-1"><a class="header-anchor" href="#操作副本集" aria-hidden="true">#</a> 操作副本集</h2><h4 id="_1-数据读写" tabindex="-1"><a class="header-anchor" href="#_1-数据读写" aria-hidden="true">#</a> 1. 数据读写</h4><h4 id="_2-主节点的选举" tabindex="-1"><a class="header-anchor" href="#_2-主节点的选举" aria-hidden="true">#</a> 2. 主节点的选举</h4><h4 id="_3-故障测试" tabindex="-1"><a class="header-anchor" href="#_3-故障测试" aria-hidden="true">#</a> 3. 故障测试</h4><p>++-</p><h4 id="_4-compass连接副本集" tabindex="-1"><a class="header-anchor" href="#_4-compass连接副本集" aria-hidden="true">#</a> 4. Compass连接副本集</h4><h4 id="_5-java连接副本集" tabindex="-1"><a class="header-anchor" href="#_5-java连接副本集" aria-hidden="true">#</a> 5. Java连接副本集</h4>`,61),t=[r];function c(m,p){return a(),e("div",null,t)}const u=n(l,[["render",c],["__file","7.副本集.html.vue"]]);export{u as default};
