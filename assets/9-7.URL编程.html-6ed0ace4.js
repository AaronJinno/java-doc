import{_ as o,r as p,o as l,c,a as n,d as a,e,b as t}from"./app-9c6c4763.js";const i="/java-doc/img/java/javase/9-7-1.jpg",r={},u=t(`<h4 id="_1-url介绍" tabindex="-1"><a class="header-anchor" href="#_1-url介绍" aria-hidden="true">#</a> 1. URL介绍</h4><p>URL(Uniform Resource Locator)：统一资源定位符，它表示 Internet 上某一 资源的地址。</p><p>它是一种具体的URI，即URL可以用来标识一个资源，而且还指明了如何locate这个资源。通过 URL 我们可以访问 Internet 上的各种网络资源，比如最常见的 www，ftp站点。</p><p>浏览器通过解析给定的 URL 可以在网络上查找相应的文件或其他资源。</p><h4 id="_2-url的基本结构" tabindex="-1"><a class="header-anchor" href="#_2-url的基本结构" aria-hidden="true">#</a> 2. URL的基本结构</h4><p>由5部分组成： <code>&lt; 传输协议&gt;://&lt; 主机名&gt;:&lt; 端口号&gt;/&lt; 文件名&gt;# 片段名?</code></p><ul><li>#片段名：即锚点</li><li>参数列表格式：参数名=参数值&amp;参数名=参数值....</li></ul><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>http://192.168.1.100:8080/helloworld/user#a?uname=shk&amp;password=123
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-url类" tabindex="-1"><a class="header-anchor" href="#_3-url类" aria-hidden="true">#</a> 3. URL类</h4>`,9),d={href:"http://java.net",target:"_blank",rel:"noopener noreferrer"},k=t(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">URL</span> <span class="token keyword">implements</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以通过下面的几个构造器来初始化一个 URL 对象。</p><ul><li>spec：URL地址的字符串</li><li>context：基 URL</li><li>protocol：传输协议</li><li>host：主机名</li><li>file：文件名</li><li>port：端口号</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token function">URL</span><span class="token punctuation">(</span><span class="token class-name">String</span> spec<span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token function">URL</span><span class="token punctuation">(</span><span class="token class-name">URL</span> context<span class="token punctuation">,</span> <span class="token class-name">String</span> spec<span class="token punctuation">)</span>
<span class="token class-name">Public</span> <span class="token function">URL</span><span class="token punctuation">(</span><span class="token class-name">String</span> protocol<span class="token punctuation">,</span> <span class="token class-name">String</span> host<span class="token punctuation">,</span> <span class="token class-name">String</span> file<span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token function">URL</span><span class="token punctuation">(</span><span class="token class-name">String</span> protocol<span class="token punctuation">,</span> <span class="token class-name">String</span> host<span class="token punctuation">,</span> <span class="token keyword">int</span> port<span class="token punctuation">,</span> <span class="token class-name">String</span> file<span class="token punctuation">)</span>
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
<span class="token class-name">URL</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span> <span class="token punctuation">(</span><span class="token string">&quot;http://www. atguigu.com/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">URL</span> downloadUrl <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token string">&quot;download.html&quot;</span><span class="token punctuation">)</span>
<span class="token class-name">URL</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;www.atguigu.com&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;download. html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">URL</span> gamelan <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;www.atguigu.com&quot;</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token string">&quot;download.html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>异常处理：以上构造器会抛出MalformedURLException异常，URL类的构造器都声明抛出非运行时异常，必须要对这一异常进行处理，通常是用 try-catch 语句进行捕获。</p><h4 id="_4-url类常用方法" tabindex="-1"><a class="header-anchor" href="#_4-url类常用方法" aria-hidden="true">#</a> 4. URL类常用方法</h4><p>一个URL对象生成后，其属性是不能被改变的，但可以通过它给定的方法来获取这些属性：</p><ul><li>public String getProtocol( ) 获取该URL的协议名</li><li>public String getHost( ) 获取该URL的主机名</li><li>public String getPort( ) 获取该URL的端口号</li><li>public String getPath( ) 获取该URL的文件路径</li><li>public String getFile( ) 获取该URL的文件名</li><li>public String getQuery( ) 获取该URL的查询名</li></ul><h4 id="_5-urlconnection" tabindex="-1"><a class="header-anchor" href="#_5-urlconnection" aria-hidden="true">#</a> 5. URLConnection</h4><p>URLConnection类是专门针对HTTP协议的。</p><p>URL的方法 openStream()：能从网络上读取数据</p><p>若希望输出数据，例如向服务器端的 CGI （公共网关接口-Common Gateway Interface-的简称，是用户浏览器和服务器端的应用程序进行连接的接口）程序发送一些数据，则必须先与URL建立连接，然后才能对其进行读写，此时需要使用URLConnection 。</p><h5 id="_5-1-urlconnection的创建" tabindex="-1"><a class="header-anchor" href="#_5-1-urlconnection的创建" aria-hidden="true">#</a> 5.1 URLConnection的创建</h5><p>表示到URL所引用的远程对象的连接。当与一个URL建立连接时，首先要在一个 URL 对象上通过方法 openConnection() 生成对应的 URLConnection对象。如果连接过程失败，将产生IOException.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">URL</span> netchinaren <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span> <span class="token punctuation">(</span><span class="token string">&quot;http://www.atguigu.com/index.shtml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">URLConnectonn</span> u <span class="token operator">=</span> netchinaren<span class="token punctuation">.</span><span class="token function">openConnection</span><span class="token punctuation">(</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-2-交互方法" tabindex="-1"><a class="header-anchor" href="#_5-2-交互方法" aria-hidden="true">#</a> 5.2 交互方法</h5><ul><li>public Object getContent( ) throws IOException</li><li>public int getContentLength( )</li><li>public String getContentType( )</li><li>public long getDate( )</li><li>public long getLastModified( )</li><li>public InputStream getInputStream( )throws IOException</li><li>public OutputSteram getOutputStream( )throws IOException</li></ul><h4 id="_6-uri、url和urn的区别" tabindex="-1"><a class="header-anchor" href="#_6-uri、url和urn的区别" aria-hidden="true">#</a> 6. URI、URL和URN的区别</h4><p>URI，是uniform resource identifier，统一资源标识符，用来唯一的标识一个资源。</p><p>而URL是uniform resource locator，统一资源定位符，它是一种具体的URI。即URL可以用来标识一个资源，而且还指明了如何locate这个资源。</p><p>而URN，uniform resource name，统一资源命名，是通过名字来标识资源，比如mailto:java-net@java.sun.com。也就是说，URI是以一种抽象的，高层次概念定义统一资源标识，而URL和URN则是具体的资源标识的方式。</p><figure><img src="`+i+'" alt="9-7-1" tabindex="0" loading="lazy"><figcaption>9-7-1</figcaption></figure><p>URL和URN都是一种URI。在Java的URI中，一个URI实例可以代表绝对的，也可以是相对的，只要它符合URI的语法规则。而URL类则不仅符合语义，还包含了定位该资源的信息，因此它不能是相对的。</p><h4 id="_7-小结" tabindex="-1"><a class="header-anchor" href="#_7-小结" aria-hidden="true">#</a> 7. 小结</h4>',24),h=n("li",null,"位于网络中的计算机具有唯一的IP地址，这样不同的主机可以互相区分。",-1),m=n("li",null,"客户端－服务器是一种最常见的网络应用程序模型。服务器是一个为其客户端提供某种特定服务的硬件或软件。客户机是一个用户应用程序，用于访问某台服务器提供的服务。端口号是对一个服务的访问场所，它用于区分同一物理计算机上的多个服务。套接字用于连接客户端和服务器，客户端和服务器之间的每个通信会话使用一个不同的套接字。TCP协议用于实现面向连接的会话。",-1),g={href:"http://java.net",target:"_blank",rel:"noopener noreferrer"},U=n("li",null,"类 Socket 和 ServerSocket 实现了基于TCP协议的客户端－服务器程序。Socket是客户端和服务器之间的一个连接，连接创建的细节被隐藏了。这个连接提供了一个安全的数据传输通道，这是因为 TCP 协议可以解决数据在传送过程中的丢失、损坏、重复、乱序以及网络拥挤等问题，它保证数据可靠的传送。",-1),R=n("li",null,"类 URL 和 URLConnection 提供了最高级网络应用。URL 的网络资源的位置来同一表示Internet 上各种网络资源。通过URL对象可以创建当前应用程序和 URL 表示的网络资源之间的连接，这样当前程序就可以读取网络资源数据，或者把自己的数据传送到网络上去",-1);function v(L,_){const s=p("ExternalLinkIcon");return l(),c("div",null,[u,n("p",null,[a("为了表示URL，"),n("a",d,[a("java.net"),e(s)]),a(" 中实现了类 URL。")]),k,n("ul",null,[h,m,n("li",null,[a("Java 中有关网络方面的功能都定义在 "),n("a",g,[a("java.net"),e(s)]),a(" 程序包中。Java 用 InetAddress 对象表示 IP 地址，该对象里有两个字段：主机名(String) 和 IP 地址(int)。")]),U,R])])}const w=o(r,[["render",v],["__file","9-7.URL编程.html.vue"]]);export{w as default};
