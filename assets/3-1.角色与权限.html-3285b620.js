import{_ as n,o as s,c as a,b as t}from"./app-9c6c4763.js";const e={},i=t(`<div class="hint-container danger"><p class="hint-container-title">默认情况</p><p>默认情况下，MongoDB实例启动运行时是没有启用用户访问权限控制的。<br> 也就是说，可以随意连接到实例进行各种操作，MongoDB不会对连接客户端进行用户验证，这是非常危险的。</p></div><h4 id="_1-安全保障手段" tabindex="-1"><a class="header-anchor" href="#_1-安全保障手段" aria-hidden="true">#</a> 1. 安全保障手段</h4><ul><li>使用新的端口，默认的27017端口如果一旦知道了ip就能连接上，不太安全</li><li>设置mongodb的网络环境，最好将mongodb部署到公司服务器内网，这样外网是访问不到的。公 司内部访问使用vpn等。</li><li>开启安全认证。认证要同时设置服务器之间的内部认证方式，同时要设置客户端连接到集群的账号 密码认证方式。</li></ul><h4 id="_2-启动访问控制" tabindex="-1"><a class="header-anchor" href="#_2-启动访问控制" aria-hidden="true">#</a> 2. 启动访问控制</h4><p>为了强制开启用户访问控制(用户验证)，则需要在MongoDB实例启动时使用选项 --auth 或在指定启动 配置文件中添加选项 auth=true。</p><p>请选择在配置文件中添加选项，因为启动时加选项毫无意义，别人可以选择不加。</p><h4 id="_3-概念" tabindex="-1"><a class="header-anchor" href="#_3-概念" aria-hidden="true">#</a> 3. 概念</h4><h5 id="_3-1-启动访问控制" tabindex="-1"><a class="header-anchor" href="#_3-1-启动访问控制" aria-hidden="true">#</a> 3.1 启动访问控制</h5><p>MongoDB使用的是基于角色的访问控制(Role-Based Access Control,RBAC)来管理用户对实例的访问。</p><p>通过对用户授予一个或多个角色来控制用户访问数据库资源的权限和数据库操作的权限，在对用户分配 角色之前，用户无法访问实例</p><h5 id="_3-2-角色" tabindex="-1"><a class="header-anchor" href="#_3-2-角色" aria-hidden="true">#</a> 3.2 角色</h5><p>在MongoDB中通过角色对用户授予相应数据库资源的操作权限，每个角色当中的权限可以显式指定， 也可以通过继承其他角色的权限，或者两都都存在的权限。</p><h5 id="_3-3-权限" tabindex="-1"><a class="header-anchor" href="#_3-3-权限" aria-hidden="true">#</a> 3.3 权限：</h5><p>权限由指定的数据库资源(resource)以及允许在指定资源上进行的操作(action)组成。</p><ul><li>资源(resource)包括：数据库、集合、部分集合和集群；</li><li>操作(action)包括：对资源进行的增、删、改、查(CRUD)操作。</li></ul><p>在角色定义时可以包含一个或多个已存在的角色，新创建的角色会继承包含的角色所有的权限。在同一 个数据库中，新创建角色可以继承其他角色的权限，在 admin 数据库中创建的角色可以继承在其它任意数据库中角色的权限。</p><h4 id="_4-查看角色权限" tabindex="-1"><a class="header-anchor" href="#_4-查看角色权限" aria-hidden="true">#</a> 4. 查看角色权限</h4><h5 id="_4-1-查询所有角色权限-仅用户自定义角色" tabindex="-1"><a class="header-anchor" href="#_4-1-查询所有角色权限-仅用户自定义角色" aria-hidden="true">#</a> 4.1 查询所有角色权限（仅用户自定义角色）</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> db.runCommand<span class="token punctuation">(</span><span class="token punctuation">{</span> rolesInfo: <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  roles: <span class="token punctuation">[</span><span class="token punctuation">]</span>,
  ok: <span class="token number">1</span>,
  <span class="token string">&#39;$clusterTime&#39;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    clusterTime: Timestamp<span class="token punctuation">(</span><span class="token punctuation">{</span> t: <span class="token number">1682481367</span>, i: <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>,
    signature: <span class="token punctuation">{</span>
      hash: Binary<span class="token punctuation">(</span>Buffer.from<span class="token punctuation">(</span><span class="token string">&quot;0000000000000000000000000000&quot;</span>, <span class="token string">&quot;hex&quot;</span><span class="token punctuation">)</span>, <span class="token number">0</span><span class="token punctuation">)</span>,
      keyId: Long<span class="token punctuation">(</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  operationTime: Timestamp<span class="token punctuation">(</span><span class="token punctuation">{</span> t: <span class="token number">1682481367</span>, i: <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认是没有自定义角色的。</p><h5 id="_4-2-查询所有角色权限-包含内置角色" tabindex="-1"><a class="header-anchor" href="#_4-2-查询所有角色权限-包含内置角色" aria-hidden="true">#</a> 4.2 查询所有角色权限(包含内置角色)</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>db.runCommand<span class="token punctuation">(</span><span class="token punctuation">{</span> rolesInfo: <span class="token number">1</span>, showBuiltinRoles: <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  roles: <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      role: <span class="token string">&#39;dbOwner&#39;</span>,
      db: <span class="token string">&#39;test&#39;</span>,
      isBuiltin: true,
      roles: <span class="token punctuation">[</span><span class="token punctuation">]</span>,
      inheritedRoles: <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>,
    <span class="token punctuation">{</span>
      role: <span class="token string">&#39;readWrite&#39;</span>,
      db: <span class="token string">&#39;test&#39;</span>,
      isBuiltin: true,
      roles: <span class="token punctuation">[</span><span class="token punctuation">]</span>,
      inheritedRoles: <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>,
    <span class="token punctuation">{</span>
      role: <span class="token string">&#39;userAdmin&#39;</span>,
      db: <span class="token string">&#39;test&#39;</span>,
      isBuiltin: true,
      roles: <span class="token punctuation">[</span><span class="token punctuation">]</span>,
      inheritedRoles: <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>,
    <span class="token punctuation">{</span>
      role: <span class="token string">&#39;dbAdmin&#39;</span>,
      db: <span class="token string">&#39;test&#39;</span>,
      isBuiltin: true,
      roles: <span class="token punctuation">[</span><span class="token punctuation">]</span>,
      inheritedRoles: <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>,
    <span class="token punctuation">{</span>
      role: <span class="token string">&#39;read&#39;</span>,
      db: <span class="token string">&#39;test&#39;</span>,
      isBuiltin: true,
      roles: <span class="token punctuation">[</span><span class="token punctuation">]</span>,
      inheritedRoles: <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>,
    <span class="token punctuation">{</span>
      role: <span class="token string">&#39;enableSharding&#39;</span>,
      db: <span class="token string">&#39;test&#39;</span>,
      isBuiltin: true,
      roles: <span class="token punctuation">[</span><span class="token punctuation">]</span>,
      inheritedRoles: <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>,
  ok: <span class="token number">1</span>,
  <span class="token string">&#39;$clusterTime&#39;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    clusterTime: Timestamp<span class="token punctuation">(</span><span class="token punctuation">{</span> t: <span class="token number">1682481447</span>, i: <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>,
    signature: <span class="token punctuation">{</span>
      hash: Binary<span class="token punctuation">(</span>Buffer.from<span class="token punctuation">(</span><span class="token string">&quot;00000000000000000000000000&quot;</span>, <span class="token string">&quot;hex&quot;</span><span class="token punctuation">)</span>, <span class="token number">0</span><span class="token punctuation">)</span>,
      keyId: Long<span class="token punctuation">(</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  operationTime: Timestamp<span class="token punctuation">(</span><span class="token punctuation">{</span> t: <span class="token number">1682481447</span>, i: <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上，有6个内置的角色。</p><h5 id="_4-3-查询指定权限" tabindex="-1"><a class="header-anchor" href="#_4-3-查询指定权限" aria-hidden="true">#</a> 4.3 查询指定权限</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查询当前数据库中的某角色的权限</span>
<span class="token operator">&gt;</span> db.runCommand<span class="token punctuation">(</span><span class="token punctuation">{</span> rolesInfo: <span class="token string">&quot;&lt;rolename&gt;&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment"># 查询其它数据库中指定的角色权限</span>
<span class="token operator">&gt;</span> db.runCommand<span class="token punctuation">(</span><span class="token punctuation">{</span> rolesInfo: <span class="token punctuation">{</span> role: <span class="token string">&quot;&lt;rolename&gt;&quot;</span>, db: <span class="token string">&quot;&lt;database&gt;&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>

<span class="token comment"># 查询多个角色权限</span>
<span class="token operator">&gt;</span> db.runCommand<span class="token punctuation">(</span>
    <span class="token punctuation">{</span>
        rolesInfo: <span class="token punctuation">[</span>
            <span class="token string">&quot;&lt;rolename&gt;&quot;</span>,
            <span class="token punctuation">{</span> role: <span class="token string">&quot;&lt;rolename&gt;&quot;</span>, db: <span class="token string">&quot;&lt;database&gt;&quot;</span> <span class="token punctuation">}</span>,
            <span class="token punctuation">..</span>.
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-常用的内置角色" tabindex="-1"><a class="header-anchor" href="#_5-常用的内置角色" aria-hidden="true">#</a> 5. 常用的内置角色：</h4><ul><li>数据库用户角色：read、readWrite;</li><li>所有数据库用户角色：readAnyDatabase、readWriteAnyDatabase、 userAdminAnyDatabase、dbAdminAnyDatabase</li><li>数据库管理角色：dbAdmin、dbOwner、userAdmin；</li><li>集群管理角色：clusterAdmin、clusterManager、clusterMonitor、hostManager；</li><li>备份恢复角色：backup、restore；</li><li>超级用户角色：root</li><li>内部角色：system</li></ul><h4 id="_6-角色说明" tabindex="-1"><a class="header-anchor" href="#_6-角色说明" aria-hidden="true">#</a> 6. 角色说明</h4><table><thead><tr><th style="text-align:left;">角色</th><th style="text-align:left;">权限描述</th></tr></thead><tbody><tr><td style="text-align:left;">read</td><td style="text-align:left;">可以读取指定数据库中任何数据。</td></tr><tr><td style="text-align:left;">readWrite</td><td style="text-align:left;">可以读写指定数据库中任何数据，包括创建、重命名、删除集合。</td></tr><tr><td style="text-align:left;">readAnyDatabase</td><td style="text-align:left;">可以读取所有数据库中任何数据(除了数据库config和local之外)。</td></tr><tr><td style="text-align:left;">readWriteAnyDatabase</td><td style="text-align:left;">可以读写所有数据库中任何数据(除了数据库config和local之外)。</td></tr><tr><td style="text-align:left;">userAdminAnyDatabase</td><td style="text-align:left;">可以在指定数据库创建和修改用户(除了数据库config和local之外)。</td></tr><tr><td style="text-align:left;">dbAdminAnyDatabase</td><td style="text-align:left;">可以读取任何数据库以及对数据库进行清理、修改、压缩、获取统计信息、执行检查等操作(除了数据库config和local之外)。</td></tr><tr><td style="text-align:left;">dbAdmin</td><td style="text-align:left;">可以读取指定数据库以及对数据库进行清理、修改、压缩、获取统计信息、执行检查等操作。</td></tr><tr><td style="text-align:left;">userAdmin</td><td style="text-align:left;">可以在指定数据库创建和修改用户。</td></tr><tr><td style="text-align:left;">clusterAdmin</td><td style="text-align:left;">可以对整个集群或数据库系统进行管理操作。</td></tr><tr><td style="text-align:left;">backup</td><td style="text-align:left;">备份MongoDB数据最小的权限。</td></tr><tr><td style="text-align:left;">restore</td><td style="text-align:left;">从备份文件中还原恢复MongoDB数据(除了system.profile集合)的权限。</td></tr><tr><td style="text-align:left;">root</td><td style="text-align:left;">超级账号，超级权限</td></tr></tbody></table>`,29),l=[i];function p(c,o){return s(),a("div",null,l)}const d=n(e,[["render",p],["__file","3-1.角色与权限.html.vue"]]);export{d as default};
