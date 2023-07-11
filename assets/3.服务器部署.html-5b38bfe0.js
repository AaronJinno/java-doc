import{_ as i,r as t,o as p,c,a as n,b as s,d as l,e as a}from"./app-4816a6c6.js";const o="/java-doc/img/item/苍穹外卖/010.jpg",d={},r=a(`<h2 id="目录规划" tabindex="-1"><a class="header-anchor" href="#目录规划" aria-hidden="true">#</a> 目录规划</h2><h4 id="项目目录" tabindex="-1"><a class="header-anchor" href="#项目目录" aria-hidden="true">#</a> 项目目录</h4><p>根目录：<code>/item/sky-takeout/</code></p><ul><li><code>/admin/</code>：后台目录</li><li><code>/api/</code>：Java服务端目录</li><li><code>/www/</code>：客户端目录</li></ul><h4 id="软件目录" tabindex="-1"><a class="header-anchor" href="#软件目录" aria-hidden="true">#</a> 软件目录</h4><p>根目录：<code>/opt/(手动安装)</code> &amp; <code>/etc/（yum安装）</code></p><ul><li>/etc/ <ul><li>/nginx/</li></ul></li></ul><h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h2><ul><li>安装目录：/etc/nginx/</li><li>版本：1.20.1</li></ul><h4 id="主配置文件-nginx-config" tabindex="-1"><a class="header-anchor" href="#主配置文件-nginx-config" aria-hidden="true">#</a> 主配置文件：nginx.config</h4><p>因为服务器项目太多，因此进行了拆分，主配置文件其实是不变的，在主配置中导入子配置。</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment"># file: /etc/nginx/nginx.conf</span>
<span class="token directive"><span class="token keyword">user</span> nginx</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">worker_processes</span> auto</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">error_log</span> /var/log/nginx/error.log</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">pid</span> /run/nginx.pid</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">include</span> /usr/share/nginx/modules/*.conf</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">worker_connections</span> <span class="token number">1024</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">log_format</span>  main  <span class="token string">&#39;<span class="token variable">$remote_addr</span> - <span class="token variable">$remote_user</span> [<span class="token variable">$time_local]</span> &quot;<span class="token variable">$request</span>&quot; &#39;</span>
                      <span class="token string">&#39;<span class="token variable">$status</span> <span class="token variable">$body_bytes_sent</span> &quot;<span class="token variable">$http_referer</span>&quot; &#39;</span>
                      <span class="token string">&#39;&quot;<span class="token variable">$http_user_agent</span>&quot; &quot;<span class="token variable">$http_x_forwarded_for</span>&quot;&#39;</span></span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">access_log</span>  /var/log/nginx/access.log  main</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">sendfile</span>            <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">tcp_nopush</span>          <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">tcp_nodelay</span>         <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">keepalive_timeout</span>   <span class="token number">65</span></span><span class="token punctuation">;</span> 
    <span class="token directive"><span class="token keyword">types_hash_max_size</span> <span class="token number">4096</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">include</span>             /etc/nginx/mime.types</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">default_type</span>        application/octet-stream</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">include</span> /etc/nginx/conf.d/*.conf</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="子配置文件-sky-takeout-config" tabindex="-1"><a class="header-anchor" href="#子配置文件-sky-takeout-config" aria-hidden="true">#</a> 子配置文件：sky-takeout.config</h4>`,13),u={href:"http://159.75.225.162:6001/",target:"_blank",rel:"noopener noreferrer"},k=a(`<div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment"># /etc/nginx/conf.d/sky-takeout.config</span>
<span class="token comment"># 配置项目admin（前端）的server</span>
<span class="token directive"><span class="token keyword">server</span></span><span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">6001</span> default_server</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">listen</span> [::]:6001 default_server</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">root</span>  /item/sky-takeout/admin/sky</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> _</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">index</span> index.html index.htm</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>  

    <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># 配置反向代理，处理管理端发送的请求</span>
    <span class="token directive"><span class="token keyword">location</span> /api/</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span>   http://localhost:8001/admin/</span><span class="token punctuation">;</span>
        <span class="token comment">#proxy_pass   http://webservers/admin/;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># 反向代理,处理用户端发送的请求</span>
    <span class="token directive"><span class="token keyword">location</span> /user/</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span>   http://webservers/user/</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># WebSocket</span>
    <span class="token directive"><span class="token keyword">location</span> /ws/</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span>   http://webservers/ws/</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_http_version</span> 1.1</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_read_timeout</span> <span class="token number">3600s</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Upgrade <span class="token variable">$http_upgrade</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Connection <span class="token string">&quot;<span class="token variable">$connection_upgrade</span>&quot;</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">upstream</span> webservers</span><span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server</span> 127.0.0.1:8080 weight=90</span> <span class="token punctuation">;</span>
    <span class="token comment">#server 127.0.0.1:8088 weight=10 ;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">map</span> <span class="token variable">$http_upgrade</span> <span class="token variable">$connection_upgrade</span></span><span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">default</span> upgrade</span><span class="token punctuation">;</span>
    &#39;&#39; <span class="token directive"><span class="token keyword">close</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h2><p>使用Navicat连接开发服务器的MySQL服务。</p><p>执行sky.sql文件，创建数据库、数据表。</p><figure><img src="`+o+'" alt="010" tabindex="0" loading="lazy"><figcaption>010</figcaption></figure>',5);function v(m,b){const e=t("ExternalLinkIcon");return p(),c("div",null,[r,n("p",null,[s("设置admin的访问url："),n("a",u,[s("http://159.75.225.162:6001/"),l(e)])]),k])}const _=i(d,[["render",v],["__file","3.服务器部署.html.vue"]]);export{_ as default};
