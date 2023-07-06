import{_ as a,a as n}from"./1-2-2-0841486f.js";import{_ as i,o as e,c as s,e as l}from"./app-a9d52fc3.js";const r="/java-doc/img/frame/springboot/x-1-1.png",t="/java-doc/img/frame/springboot/x-1-2.png",c="/java-doc/img/frame/springboot/x-1-3.png",o="/java-doc/img/frame/springboot/x-1-4.png",d="/java-doc/img/frame/springboot/x-1-5.png",p="/java-doc/img/frame/springboot/x-1-6.png",u="/java-doc/img/frame/springboot/x-1-7.png",v={},m=l('<div class="hint-container info"><p class="hint-container-title">内容说明</p><p>开发SpringBoot项目的一些通用操作。</p></div><h2 id="i-配置idea和git" tabindex="-1"><a class="header-anchor" href="#i-配置idea和git" aria-hidden="true">#</a> Ⅰ. 配置IDEA和GIT</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>以下操作和IDEA的版本相关，当前版本为：2021.3</p></div><h4 id="_1-maven配置" tabindex="-1"><a class="header-anchor" href="#_1-maven配置" aria-hidden="true">#</a> 1. Maven配置</h4><p>不采用IDEA内置的Maven，内置的Maven不方便修改配置，这里采用自己下载的Maven。</p><ul><li>Maven的版本要与SpringCloud与SpringBoot兼容，同时要与IDEA兼容。</li><li>一般采用IDEA内置Maven的版本进行下载</li></ul><p>在IDEA中，替换手动下载的Maven、setting.xml和本地库。<br> 设置位置：Build,Execution,Deployment &gt; Build Tools &gt; Maven</p><figure><img src="'+r+'" alt="x-1-1" tabindex="0" loading="lazy"><figcaption>x-1-1</figcaption></figure><p>一般也会设置跳过Maven单元测试</p><figure><img src="'+t+'" alt="x-1-2" tabindex="0" loading="lazy"><figcaption>x-1-2</figcaption></figure><h4 id="_2-字符编码" tabindex="-1"><a class="header-anchor" href="#_2-字符编码" aria-hidden="true">#</a> 2. 字符编码</h4><p>将整个IDEA全部改为UTF-8编码（三个地方）。</p><figure><img src="'+c+'" alt="x-1-3" tabindex="0" loading="lazy"><figcaption>x-1-3</figcaption></figure><h4 id="_3-隐藏非必要文件" tabindex="-1"><a class="header-anchor" href="#_3-隐藏非必要文件" aria-hidden="true">#</a> 3. 隐藏非必要文件</h4><p>如：idea、iml等。</p><figure><img src="'+o+'" alt="x-1-4" tabindex="0" loading="lazy"><figcaption>x-1-4</figcaption></figure><h4 id="_4-开启热部署" tabindex="-1"><a class="header-anchor" href="#_4-开启热部署" aria-hidden="true">#</a> 4. 开启热部署</h4><p>设置位置：Build,Execution,Deployment-&gt;Compiler 配置完后重启IDEA。</p><figure><img src="'+d+`" alt="x-1-5" tabindex="0" loading="lazy"><figcaption>x-1-5</figcaption></figure><h4 id="_5-配置-gitignore" tabindex="-1"><a class="header-anchor" href="#_5-配置-gitignore" aria-hidden="true">#</a> 5. 配置.gitignore</h4><p>在项目的根目录添加.gitignore文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># IntelliJ IDEA #</span>
.idea/
/.idea/
*/.idea/
*.iws
*.iml
*.ipr

<span class="token comment"># Eclipse Project files</span>
.classpath
.project
/.settings/
.settings/

<span class="token comment"># Java class files</span>
*.class

<span class="token comment"># Generated files</span>
*/bin/
*/gen/
*/out/

<span class="token comment">### user ###</span>
target/
/target/
/src/logs/
<span class="token comment">#*.zip</span>
sdkTest.log


<span class="token comment">#some local files</span>
*/.DS_Store
.DS_Store
gradlew
gradlew.bat
unused.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ii-创建工程" tabindex="-1"><a class="header-anchor" href="#ii-创建工程" aria-hidden="true">#</a> Ⅱ. 创建工程</h2><h4 id="_1-new-project" tabindex="-1"><a class="header-anchor" href="#_1-new-project" aria-hidden="true">#</a> 1. new project</h4><p>以Spring Initializr的方式创建工程。</p><figure><img src="`+a+'" alt="1-2-1" tabindex="0" loading="lazy"><figcaption>1-2-1</figcaption></figure><h4 id="_2-配置工程" tabindex="-1"><a class="header-anchor" href="#_2-配置工程" aria-hidden="true">#</a> 2. 配置工程</h4><p>选择合适的Spring Boot版本和需要直接安装的组件（可以只选版本，组件后面再安装）。</p><figure><img src="'+n+'" alt="1-2-2" tabindex="0" loading="lazy"><figcaption>1-2-2</figcaption></figure><h4 id="_3-添加依赖" tabindex="-1"><a class="header-anchor" href="#_3-添加依赖" aria-hidden="true">#</a> 3. 添加依赖</h4><p>根据项目需求添加依赖和插件。</p><h4 id="_4-配置yml" tabindex="-1"><a class="header-anchor" href="#_4-配置yml" aria-hidden="true">#</a> 4. 配置yml</h4><p>删除application.properties，创建application.yml，并进行基本的application配置</p><p>如果是多环境，需要创建dev、test、pro多个配置文件</p><h4 id="_5-初始化" tabindex="-1"><a class="header-anchor" href="#_5-初始化" aria-hidden="true">#</a> 5. 初始化</h4><h2 id="iii-准备工作" tabindex="-1"><a class="header-anchor" href="#iii-准备工作" aria-hidden="true">#</a> Ⅲ. 准备工作</h2><h4 id="_1-准备工作顺序" tabindex="-1"><a class="header-anchor" href="#_1-准备工作顺序" aria-hidden="true">#</a> 1. 准备工作顺序</h4><p>前提：开发环境（框架）已经搭建好了，数据库也创建好了，依赖和插件等都准备好了。</p><ul><li>连接数据库：IDEA连接数据库</li><li>完善目录</li><li>创建所有配置：resources/application.yml</li><li>利用MyBatis-plus逆向生成代码</li><li>将所需的所有工具类和插件搭建</li><li>利用启动类启动服务</li><li>写业务代码</li></ul><h4 id="_2-常用工具类" tabindex="-1"><a class="header-anchor" href="#_2-常用工具类" aria-hidden="true">#</a> 2. 常用工具类</h4><ul><li>统一响应格式</li><li>配置Swagger</li></ul><h4 id="_3-代码生成" tabindex="-1"><a class="header-anchor" href="#_3-代码生成" aria-hidden="true">#</a> 3. 代码生成</h4><p>使用MyBatis X插件，利用MyBatisPlus生成代码</p><ul><li>配置数据源：在IDEA右边选择DataBase，连接数据库</li><li>生成代码：数据源中选择目标数据表，右键：选择第一个选项MyBatis-Generator</li><li>配置代码模板：可以对将要生成的代码的模板进行配置，可配置项非常多</li></ul><figure><img src="'+p+'" alt="x-1-6" tabindex="0" loading="lazy"><figcaption>x-1-6</figcaption></figure><figure><img src="'+u+`" alt="x-1-7" tabindex="0" loading="lazy"><figcaption>x-1-7</figcaption></figure><h2 id="iv-目录规范" tabindex="-1"><a class="header-anchor" href="#iv-目录规范" aria-hidden="true">#</a> Ⅳ. 目录规范</h2><p>根据以下规范，按需创建目录</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>blog <span class="token punctuation">[</span>cc<span class="token punctuation">.</span>cybercell<span class="token punctuation">]</span><span class="token operator">&gt;</span> src <span class="token operator">&gt;</span> main <span class="token operator">&gt;</span> java <span class="token operator">&gt;</span> cc<span class="token punctuation">.</span>cybercell<span class="token punctuation">.</span>blog
  ├── common<span class="token operator">:</span> 公共类
  ├── config<span class="token operator">:</span> 配置
  ├── controller<span class="token operator">:</span> 控制器（<span class="token constant">API</span>）
  ├── entity<span class="token operator">:</span> 实体类（也可命名为domain或pojo）
  ├── filter<span class="token operator">:</span> 拦截器
  ├── mapper<span class="token operator">:</span> <span class="token class-name">MyBatis</span> <span class="token class-name">Plus</span>的mapper
  ├── service<span class="token operator">:</span> 服务层接口
    ├── impl<span class="token operator">:</span> 服务层接口实现类
  ├── utils<span class="token operator">:</span> 工具
  ├── <span class="token class-name">BlogApplication</span><span class="token punctuation">.</span>java <span class="token operator">:</span>启动类

blog <span class="token punctuation">[</span>cc<span class="token punctuation">.</span>cybercell<span class="token punctuation">]</span><span class="token operator">&gt;</span> src <span class="token operator">&gt;</span> main <span class="token operator">&gt;</span> java <span class="token operator">&gt;</span> resources
  ├── application<span class="token punctuation">.</span>yml
  ├── application<span class="token operator">-</span>dev<span class="token punctuation">.</span>yml
  ├── application<span class="token operator">-</span>prod<span class="token punctuation">.</span>yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,49),g=[m];function h(b,f){return e(),s("div",null,g)}const k=i(v,[["render",h],["__file","x-1.项目初始化.html.vue"]]);export{k as default};
