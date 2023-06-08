import{_ as l,r as n,o as s,c as o,a,d as e,e as r,b as t}from"./app-2ea4aaaf.js";const d="/java-doc/img/java/javaweb/2-1-1.jpg",h="/java-doc/img/java/javaweb/2-1-2.jpg",c="/java-doc/img/java/javaweb/2-1-3.jpg",p="/java-doc/img/java/javaweb/2-1-4.jpg",u={},_=t('<h2 id="i-tomcat介绍" tabindex="-1"><a class="header-anchor" href="#i-tomcat介绍" aria-hidden="true">#</a> Ⅰ. Tomcat介绍</h2><h4 id="_1-web服务器" tabindex="-1"><a class="header-anchor" href="#_1-web服务器" aria-hidden="true">#</a> 1. web服务器</h4><p>本质是安装了服务器软件的计算机。</p><ul><li>服务器软件：接收用户的请求，处理请求，调用服务器资源，做出响应，在web服务器软件中，可以部署web项目，让用户通过浏览器来访问这些项目。</li><li>Web服务器是安装在服务器端的一款软件，本质上Web服务器是一个应用程序，对HTTP协议的操作进行封装，使得程序员不必直接对协议进行操作，让Web开发更加便捷。</li></ul><p>相关软件：Tomcat（最常用）</p><h4 id="_2-资源分类" tabindex="-1"><a class="header-anchor" href="#_2-资源分类" aria-hidden="true">#</a> 2. 资源分类</h4><ul><li>静态资源：所有用户访问后，得到的结果都是一样的，称为静态资源.静态资源可以直接被浏览器解析 <ul><li>如： html,css,JavaScript</li></ul></li><li>动态资源:每个用户访问相同资源后，得到的结果可能不一样。称为动态资源。动态资源被访问后，需要先转换为静态资源，在返回给浏览器 <ul><li>如：servlet/jsp,php,asp....</li></ul></li></ul><h4 id="_3-web服务器软件使用步骤" tabindex="-1"><a class="header-anchor" href="#_3-web服务器软件使用步骤" aria-hidden="true">#</a> 3. Web服务器软件使用步骤</h4><ul><li>准备静态资源</li><li>下载安装Web服务器软件</li><li>将静态资源部署到Web服务器上</li><li>启动Web服务器使用浏览器访问对应的资源</li></ul><h4 id="_4-网络通信三要素" tabindex="-1"><a class="header-anchor" href="#_4-网络通信三要素" aria-hidden="true">#</a> 4. 网络通信三要素</h4><ul><li>IP：电子设备(计算机)在网络中的唯一标识。</li><li>端口：应用程序在计算机中的唯一标识。 0~65536</li><li>传输协议：规定了数据传输的规则</li><li>tcp：安全协议，三次握手。 速度稍慢</li><li>udp：不安全协议。 速度快</li></ul><h4 id="_5-tomcat" tabindex="-1"><a class="header-anchor" href="#_5-tomcat" aria-hidden="true">#</a> 5. Tomcat</h4><p>Tomcat是一个开源免费的轻量级Web服务器，支持Servlet/JSP少量JavaEE规范。Tomcat也被称为Web容器、Servlet容器，Servlet需要依赖Tomcat才能运行。</p>',13),b={href:"https://tomcat.apache.org/",target:"_blank",rel:"noopener noreferrer"},m=t('<figure><img src="'+d+'" alt="2-1-1" tabindex="0" loading="lazy"><figcaption>2-1-1</figcaption></figure><h2 id="ii-基本开发使用" tabindex="-1"><a class="header-anchor" href="#ii-基本开发使用" aria-hidden="true">#</a> Ⅱ. 基本开发使用</h2><p>环境：Windows系统上的开发环境</p><h4 id="_1-下载" tabindex="-1"><a class="header-anchor" href="#_1-下载" aria-hidden="true">#</a> 1. 下载</h4>',4),g={href:"https://tomcat.apache.org/download-80.cgi",target:"_blank",rel:"noopener noreferrer"},v=a("li",null,"版本选择：8.5以上",-1),f={href:"https://tomcat.apache.org/download-80.cgi#8.5.81",target:"_blank",rel:"noopener noreferrer"},x=a("li",null,"文件选择：Core下的zip包即可（Linux选tar.gz）",-1),w=a("li",null,"源码：Source Code Distributions下的即为java源码。",-1),j=t('<h4 id="_2-安装与卸载" tabindex="-1"><a class="header-anchor" href="#_2-安装与卸载" aria-hidden="true">#</a> 2. 安装与卸载</h4><ul><li>安装：该软件是绿色软件，不用安装，解压即可使用。</li><li>卸载：删除即为卸载。</li></ul><h4 id="_3-目录结构" tabindex="-1"><a class="header-anchor" href="#_3-目录结构" aria-hidden="true">#</a> 3. 目录结构</h4><figure><img src="'+h+'" alt="2-1-2" tabindex="0" loading="lazy"><figcaption>2-1-2</figcaption></figure><h4 id="_4-启动" tabindex="-1"><a class="header-anchor" href="#_4-启动" aria-hidden="true">#</a> 4. 启动</h4><p>前提：主机上运行着jdk，且配置好了JAVA_HOME，不然命令窗口会一闪而过，启动失败。</p><p>双击bin/startup.bat即可启动，启动后会弹出dos窗口，常驻</p><p>注意：因为有端口占用，只能启动一个Tomcat，除非重新进行端口配置。</p><h4 id="_5-关闭" tabindex="-1"><a class="header-anchor" href="#_5-关闭" aria-hidden="true">#</a> 5. 关闭</h4><ul><li>正常关闭：在程序的dos端口按ctrl c【推荐】</li><li>正常关闭：双击bin/shutdown.bat</li><li>强制关闭：关闭dos窗口，不推荐，某些destory方法无法生效。</li></ul><h4 id="_6-端口配置" tabindex="-1"><a class="header-anchor" href="#_6-端口配置" aria-hidden="true">#</a> 6. 端口配置</h4><p>Tomcat默认的端口是8080，要想修改Tomcat启动的端口号，需要修改 conf/server.xml</p><p>HTTP协议默认端口号为80，如果将Tomcat端口号改为80，则将来访问Tomcat时，将不用输入端口号。 同样，https协议的默认端口号是443.</p><figure><img src="'+c+'" alt="2-1-3" tabindex="0" loading="lazy"><figcaption>2-1-3</figcaption></figure><h4 id="_7-debug" tabindex="-1"><a class="header-anchor" href="#_7-debug" aria-hidden="true">#</a> 7. debug</h4><h5 id="_7-1-控制台乱码" tabindex="-1"><a class="header-anchor" href="#_7-1-控制台乱码" aria-hidden="true">#</a> 7.1 控制台乱码</h5><ul><li>原因：命令行默认是GBK编码，Tomcat模式是UTF8；</li><li>IDEA中：将控制台改为UTF8。</li><li>或配置修改： <img src="'+p+`" alt="2-1-4" loading="lazy"></li></ul><h5 id="_7-2-端口冲突" tabindex="-1"><a class="header-anchor" href="#_7-2-端口冲突" aria-hidden="true">#</a> 7.2 端口冲突</h5><ul><li>报错：Address already in use:bind，端口以备占用</li><li>解决：关闭占用端口的软件，或修改Tomcat的端口。</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>netstat <span class="token operator">-</span>ano <span class="token comment">//查看进程，会显示端口号和pid，根据pid找到对应的进程</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_7-3-启动时-窗口一闪而过" tabindex="-1"><a class="header-anchor" href="#_7-3-启动时-窗口一闪而过" aria-hidden="true">#</a> 7.3 启动时，窗口一闪而过</h4><ul><li>原因：找不到JDK环境。</li><li>解决：检查JAVA_HOME环境变量是否正确配置</li></ul><h2 id="iii-手动部署" tabindex="-1"><a class="header-anchor" href="#iii-手动部署" aria-hidden="true">#</a> Ⅲ. 手动部署</h2><h4 id="_1-访问tomcat服务器" tabindex="-1"><a class="header-anchor" href="#_1-访问tomcat服务器" aria-hidden="true">#</a> 1. 访问Tomcat服务器</h4>`,24),k={href:"http://ipxx:8080",target:"_blank",rel:"noopener noreferrer"},T=a("br",null,null,-1),E={href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"},B=t('<h4 id="_2-在webapps下部署" tabindex="-1"><a class="header-anchor" href="#_2-在webapps下部署" aria-hidden="true">#</a> 2. 在webapps下部署</h4><p>Tomcat的\\webapps目录是用来部署项目的。</p><h5 id="_2-1-在webapps下创建项目" tabindex="-1"><a class="header-anchor" href="#_2-1-在webapps下创建项目" aria-hidden="true">#</a> 2.1 在webapps下创建项目</h5><p>在Tomcat目录下的webapps目录下创建一个目录，该目录就是一个独立的项目。</p><p>项目目录下，需要再创建一个必备的目录：WEB-INF（名称固定）。</p><h5 id="_2-2-在其他目录下创建项目-并通过war包部署" tabindex="-1"><a class="header-anchor" href="#_2-2-在其他目录下创建项目-并通过war包部署" aria-hidden="true">#</a> 2.2 在其他目录下创建项目，并通过war包部署</h5><p>将项目打成一个war包，再将war包放置到webapps目录下。</p><p>war包会自动解压缩（war包和zip包差不多）。</p><h5 id="_2-3-访问项目" tabindex="-1"><a class="header-anchor" href="#_2-3-访问项目" aria-hidden="true">#</a> 2.3 访问项目</h5>',9),W={href:"http://localhost:8080/%E9%A1%B9%E7%9B%AE%E7%9B%AE%E5%BD%95/%E7%9B%AE%E6%A0%87%E6%96%87%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"},A=t(`<p>如：项目目录是test1，要访问的文件是index.html</p><p>Tomcat默认访问index.* 的</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">8080</span><span class="token operator">/</span>test1<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-修改配置文件-创建一个路由" tabindex="-1"><a class="header-anchor" href="#_3-修改配置文件-创建一个路由" aria-hidden="true">#</a> 3. 修改配置文件，创建一个路由</h4><p>修改tomcat配置文件，创建一个路由，指向项目的目录</p><p>文件：<code>conf/server.xml</code>，在<code>&lt;Host&gt;</code>标签体中配置</p><ul><li>docBase:项目存放的路径</li><li>path：虚拟目录，可以随意定义</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">&lt;</span><span class="token class-name">Context</span> docBase<span class="token operator">=</span><span class="token string">&quot;D:\\hello&quot;</span> path<span class="token operator">=</span><span class="token string">&quot;/hehe&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),J={href:"http://localhost:8080/path",target:"_blank",rel:"noopener noreferrer"},N=a("li",null,"缺点：Tomcat可能会运行多个项目，直接修改server配置文件，会影响到其他项目",-1),z=t(`<h5 id="通过子配置文件" tabindex="-1"><a class="header-anchor" href="#通过子配置文件" aria-hidden="true">#</a> 通过子配置文件</h5><p>在 conf/Catalina/localhost中创建任意xml文件，在文件中编写配置项。</p><p>注意：path不用定义，就是文件的名称。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">&lt;</span><span class="token class-name">Context</span> docBase<span class="token operator">=</span><span class="token string">&quot;D:\\hello&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4-配合nginx代理" tabindex="-1"><a class="header-anchor" href="#_4-配合nginx代理" aria-hidden="true">#</a> 4. 配合Nginx代理</h4><p>常用，见Nginx</p><h2 id="iv-javaweb项目结构" tabindex="-1"><a class="header-anchor" href="#iv-javaweb项目结构" aria-hidden="true">#</a> Ⅳ. JavaWeb项目结构</h2><p>JavaWeb就是用Java技术来解决相关web互联网领域的技术栈。</p><h4 id="_1-开发时的项目结构【工作目录】" tabindex="-1"><a class="header-anchor" href="#_1-开发时的项目结构【工作目录】" aria-hidden="true">#</a> 1. 开发时的项目结构【工作目录】</h4><p>详见：idea &amp; tomcat</p><ul><li>src：java源码目录</li><li>web：静态资源目录</li></ul><h4 id="_2-部署时的项目目录结构【运行目录】" tabindex="-1"><a class="header-anchor" href="#_2-部署时的项目目录结构【运行目录】" aria-hidden="true">#</a> 2. 部署时的项目目录结构【运行目录】</h4><p>真正部署项目时，是把该目录部署到服务器，而非开始时的项目。</p><p>同时这个目录也是Tomcat真正访问的目录。</p><h5 id="_2-1-通用目录" tabindex="-1"><a class="header-anchor" href="#_2-1-通用目录" aria-hidden="true">#</a> 2.1 通用目录</h5><ul><li>项目的根目录 <ul><li>WEB-INF：不能被浏览器直接访问的目录 <ul><li>web.xml：web项目的核心配置文件【非必须】</li><li>classes：编译后的java字节码文件目录</li><li>lib：放置依赖的jar包</li></ul></li><li>其他各种可以被浏览器访问的静态资源。</li></ul></li></ul><h5 id="_2-2-在idea中的输出目录" tabindex="-1"><a class="header-anchor" href="#_2-2-在idea中的输出目录" aria-hidden="true">#</a> 2.2 在idea中的输出目录</h5><p>假如：项目名称叫sgugo，（详见idea &amp; Tomcat）</p><ul><li>out <ul><li>artifacts <ul><li>sgugo_war_exploded：sgugo项目名的输出目录 <ul><li>WEB-INF：不能被浏览器直接访问的目录 <ul><li>classes：编译后java类</li></ul></li><li>其他静态资源</li></ul></li></ul></li></ul></li></ul>`,19);function I(S,q){const i=n("ExternalLinkIcon");return s(),o("div",null,[_,a("p",null,[a("a",b,[e("官网"),r(i)])]),m,a("ul",null,[a("li",null,[a("a",g,[e("下载地址"),r(i)])]),v,a("li",null,[a("a",f,[e("8.5下载地址直达"),r(i)])]),x,w]),j,a("p",null,[e("访问地址是ip地址、域名或localhost，端口号是8080（默认） 地址："),a("a",k,[e("http://ipxx:8080"),r(i)]),T,e(" 如："),a("a",E,[e("http://localhost:8080"),r(i)])]),B,a("p",null,[a("a",W,[e("http://localhost:8080/项目目录/目标文件"),r(i)])]),A,a("ul",null,[a("li",null,[e("访问项目："),a("a",J,[e("http://localhost:8080/path"),r(i)])]),N]),z])}const C=l(u,[["render",I],["__file","2-1.基本使用.html.vue"]]);export{C as default};
