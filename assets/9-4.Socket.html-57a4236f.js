import{_ as a,o as s,c as e,e as n}from"./app-889eb22c.js";const t={},i=n(`<h4 id="_1-说明" tabindex="-1"><a class="header-anchor" href="#_1-说明" aria-hidden="true">#</a> 1. 说明</h4><p>网络上具有唯一标识的IP地址和端口号组合在一起才能构成唯一能识别的标识符套接字 Socket</p><ul><li>利用套接字(Socket)开发网络应用程序早已被广泛的采用，以至于成为事实上的标准。</li><li>网络通信其实就是Socket间的通信。 <ul><li>通信的两端都要有Socket，是两台机器间通信的端点。</li></ul></li><li>Socket允许程序把网络连接当成一个流，数据在两个Socket间通过IO传输。</li><li>一般主动发起通信的应用程序属客户端，等待通信请求的为服务端。</li></ul><h4 id="_2-socket分类" tabindex="-1"><a class="header-anchor" href="#_2-socket分类" aria-hidden="true">#</a> 2. Socket分类</h4><ul><li>流套接字（stream socket）：使用TCP提供可依赖的字节流服务</li><li>数据报套接字（datagram socket）：使用UDP提供“尽力而为”的数据报服务</li></ul><h4 id="_3-socket类常用构造器" tabindex="-1"><a class="header-anchor" href="#_3-socket类常用构造器" aria-hidden="true">#</a> 3. Socket类常用构造器</h4><h5 id="_3-1-根据ip创建" tabindex="-1"><a class="header-anchor" href="#_3-1-根据ip创建" aria-hidden="true">#</a> 3.1 根据IP创建</h5><p>创建一个流套接字并将其连接到指定IP 地址的指定端口号。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">Socket</span><span class="token punctuation">(</span><span class="token class-name">InetAddress</span> address<span class="token punctuation">,</span><span class="token keyword">int</span> port<span class="token punctuation">)</span><span class="token keyword">throws</span> <span class="token class-name">IOException</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_3-2-根据host创建" tabindex="-1"><a class="header-anchor" href="#_3-2-根据host创建" aria-hidden="true">#</a> 3.2 根据host创建</h5><p>创建一个流套接字并将其连接到指定主机上的指定端口号。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">Socket</span><span class="token punctuation">(</span><span class="token class-name">String</span> host<span class="token punctuation">,</span><span class="token keyword">int</span> port<span class="token punctuation">)</span><span class="token keyword">throws</span> <span class="token class-name">UnknownHostException</span><span class="token punctuation">,</span><span class="token class-name">IOException</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4-socket类常用方法" tabindex="-1"><a class="header-anchor" href="#_4-socket类常用方法" aria-hidden="true">#</a> 4. Socket类常用方法</h4><ul><li>public InputStream getInputStream()返回此套接字的输入流。可以用于接收网络消息</li><li>public OutputStream getOutputStream()返回此套接字的输出流。可以用于发送网络消息</li><li>public InetAddress getInetAddress()此套接字连接到的远程 IP 地址；如果套接字是未连接的，则返回 null。</li><li>public InetAddress getLocalAddress()获取套接字绑定的本地地址。 即本端的IP地址</li><li>public int getPort()此套接字连接到的远程端口号；如果尚未连接套接字，则返回0。</li><li>public int getLocalPort()返回此套接字绑定到的本地端口。 如果尚未绑定套接字，则返回 -1。即本端的端口号。</li><li>public void close()关闭此套接字。套接字被关闭后，便不可在以后的网络连接中使用（即无法重新连接或重新绑定）。需要创建新的套接字对象。 关闭此套接字也将会关闭该套接字的 InputStream 和OutputStream。</li><li>public void shutdownInput()如果在套接字上调用 shutdownInput() 后从套接字输入流读取内容，则流将返回 EOF（文件结束符）。即不能在从此套接字的输入流中接收任何数据。</li><li>public void shutdownOutput()禁用此套接字的输出流。对于 TCP 套接字，任何以前写入的数据都将被发送，并且后跟 TCP 的正常连接终止序列。 如果在套接字上调用 shutdownOutput() 后写入套接字输出流，</li><li>则该流将抛出 IOException。 即不能通过此套接字的输出流发送任何数据。</li></ul>`,14),l=[i];function c(o,p){return s(),e("div",null,l)}const r=a(t,[["render",c],["__file","9-4.Socket.html.vue"]]);export{r as default};