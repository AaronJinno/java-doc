import{_ as t,o as e,c as n,b as s}from"./app-b1eed5ae.js";const a="/java-doc/img/java/javaweb/4-2-1.jpg",l={},i=s('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>Listener 表示监听器，是 JavaWeb 三大组件(Servlet、Filter、Listener)之一，不过内容不多。作用类似于框架中的钩子函数</p></div><h2 id="i-监听器介绍" tabindex="-1"><a class="header-anchor" href="#i-监听器介绍" aria-hidden="true">#</a> Ⅰ. 监听器介绍</h2><h4 id="_1-观察者模式" tabindex="-1"><a class="header-anchor" href="#_1-观察者模式" aria-hidden="true">#</a> 1. 观察者模式</h4><p>监听器采用的就是观察者模式。#</p><ul><li>观察者：监控『被观察者』的行为，一旦发现『被观察者』触发了事件，就会调用事先准备好的方法执行操作。</li><li>被观察者：『被观察者』一旦触发了被监控的事件，就会被『观察者』发现。</li></ul><h4 id="_2-监听器概念" tabindex="-1"><a class="header-anchor" href="#_2-监听器概念" aria-hidden="true">#</a> 2. 监听器概念</h4><p>专门用于对其他对象身上发生的事件或状态改变进行监听和相应处理的对象，当被监视的对象发生情况时，立即采取相应的行动。</p><h4 id="_3-servlet监听器-listener" tabindex="-1"><a class="header-anchor" href="#_3-servlet监听器-listener" aria-hidden="true">#</a> 3. Servlet监听器-&gt;Listener</h4><p>Servlet规范中定义的一种特殊类，它用于监听Web应用程序中的ServletContext，HttpSession 和HttpServletRequest等域对象的创建与销毁事件，以及监听这些域对象中的属性发生修改的事件。</p><h4 id="_4-监听器分类" tabindex="-1"><a class="header-anchor" href="#_4-监听器分类" aria-hidden="true">#</a> 4. 监听器分类</h4><figure><img src="'+a+`" alt="4-2-1" tabindex="0" loading="lazy"><figcaption>4-2-1</figcaption></figure><ul><li>域对象监听器</li><li>域对象的属性域监听器</li><li>Session域中数据的监听器</li></ul><h2 id="ii-监听器列表" tabindex="-1"><a class="header-anchor" href="#ii-监听器列表" aria-hidden="true">#</a> Ⅱ. 监听器列表</h2><p>JavaWeb 提供了8个监听器：</p><h4 id="_1-servletcontextlistener" tabindex="-1"><a class="header-anchor" href="#_1-servletcontextlistener" aria-hidden="true">#</a> 1. ServletContextListener</h4><p>作用：监听ServletContext对象的创建与销毁</p><table><thead><tr><th style="text-align:left;">方法名</th><th style="text-align:left;">作用</th></tr></thead><tbody><tr><td style="text-align:left;">contextInitialized(ServletContextEvent sce)</td><td style="text-align:left;">ServletContext创建时调用</td></tr><tr><td style="text-align:left;">contextDestroyed(ServletContextEvent sce)</td><td style="text-align:left;">ServletContext销毁时调用</td></tr></tbody></table><p>ServletContextEvent对象代表从ServletContext对象身上捕获到的事件，通过这个事件对象我们可以获取到ServletContext对象。</p><h4 id="_2-httpsessionlistener" tabindex="-1"><a class="header-anchor" href="#_2-httpsessionlistener" aria-hidden="true">#</a> 2. HttpSessionListener</h4><p>作用：监听HttpSession对象的创建与销毁</p><table><thead><tr><th style="text-align:left;">方法名</th><th style="text-align:left;">作用</th></tr></thead><tbody><tr><td style="text-align:left;">sessionCreated(HttpSessionEvent hse)</td><td style="text-align:left;">HttpSession对象创建时调用</td></tr><tr><td style="text-align:left;">sessionDestroyed(HttpSessionEvent hse)</td><td style="text-align:left;">HttpSession对象销毁时调用</td></tr></tbody></table><p>HttpSessionEvent对象代表从HttpSession对象身上捕获到的事件，通过这个事件对象我们可以获取到触发事件的HttpSession对象。</p><h4 id="_3-servletrequestlistener" tabindex="-1"><a class="header-anchor" href="#_3-servletrequestlistener" aria-hidden="true">#</a> 3. ServletRequestListener</h4><p>作用：监听ServletRequest对象的创建与销毁</p><table><thead><tr><th style="text-align:left;">方法名</th><th style="text-align:left;">作用</th></tr></thead><tbody><tr><td style="text-align:left;">requestInitialized(ServletRequestEvent sre)</td><td style="text-align:left;">ServletRequest对象创建时调用</td></tr><tr><td style="text-align:left;">requestDestroyed(ServletRequestEvent sre)</td><td style="text-align:left;">ServletRequest对象销毁时调用</td></tr></tbody></table><p>ServletRequestEvent对象代表从HttpServletRequest对象身上捕获到的事件，通过这个事件对象我们可以获取到触发事件的HttpServletRequest对象。另外还有一个方法可以获取到当前Web应用的ServletContext对象。</p><h4 id="_4-servletcontextattributelistener" tabindex="-1"><a class="header-anchor" href="#_4-servletcontextattributelistener" aria-hidden="true">#</a> 4. ServletContextAttributeListener</h4><p>作用：监听ServletContext中属性的创建、修改和销毁</p><table><thead><tr><th style="text-align:left;">方法名</th><th style="text-align:left;">作用</th></tr></thead><tbody><tr><td style="text-align:left;">attributeAdded(ServletContextAttributeEvent scab)</td><td style="text-align:left;">向ServletContext中添加属性时调用</td></tr><tr><td style="text-align:left;">attributeRemoved(ServletContextAttributeEvent scab)</td><td style="text-align:left;">从ServletContext中移除属性时调用</td></tr><tr><td style="text-align:left;">attributeReplaced(ServletContextAttributeEvent scab)</td><td style="text-align:left;">当ServletContext中的属性被修改时调用</td></tr></tbody></table><p>ServletContextAttributeEvent对象代表属性变化事件，它包含的方法如下：</p><table><thead><tr><th style="text-align:left;">方法名</th><th style="text-align:left;">作用</th></tr></thead><tbody><tr><td style="text-align:left;">getName()</td><td style="text-align:left;">获取修改或添加的属性名</td></tr><tr><td style="text-align:left;">getValue()</td><td style="text-align:left;">获取被修改或添加的属性值</td></tr><tr><td style="text-align:left;">getServletContext()</td><td style="text-align:left;">获取ServletContext对象</td></tr></tbody></table><h4 id="_5-httpsessionattributelistener" tabindex="-1"><a class="header-anchor" href="#_5-httpsessionattributelistener" aria-hidden="true">#</a> 5. HttpSessionAttributeListener</h4><p>作用：监听HttpSession中属性的创建、修改和销毁</p><table><thead><tr><th style="text-align:left;">方法名</th><th style="text-align:left;">作用</th></tr></thead><tbody><tr><td style="text-align:left;">attributeAdded(HttpSessionBindingEvent se)</td><td style="text-align:left;">向HttpSession中添加属性时调用</td></tr><tr><td style="text-align:left;">attributeRemoved(HttpSessionBindingEvent se)</td><td style="text-align:left;">从HttpSession中移除属性时调用</td></tr><tr><td style="text-align:left;">attributeReplaced(HttpSessionBindingEvent se)</td><td style="text-align:left;">当HttpSession中的属性被修改时调用</td></tr></tbody></table><p>HttpSessionBindingEvent对象代表属性变化事件，它包含的方法如下：</p><table><thead><tr><th style="text-align:left;">方法名</th><th style="text-align:left;">作用</th></tr></thead><tbody><tr><td style="text-align:left;">getName()</td><td style="text-align:left;">获取修改或添加的属性名</td></tr><tr><td style="text-align:left;">getValue()</td><td style="text-align:left;">获取被修改或添加的属性值</td></tr><tr><td style="text-align:left;">getSession()</td><td style="text-align:left;">获取触发事件的HttpSession对象</td></tr></tbody></table><h4 id="_6-servletrequestattributelistener" tabindex="-1"><a class="header-anchor" href="#_6-servletrequestattributelistener" aria-hidden="true">#</a> 6. ServletRequestAttributeListener</h4><p>作用：监听ServletRequest中属性的创建、修改和销毁</p><table><thead><tr><th style="text-align:left;">方法名</th><th style="text-align:left;">作用</th></tr></thead><tbody><tr><td style="text-align:left;">attributeAdded(ServletRequestAttributeEvent srae)</td><td style="text-align:left;">向ServletRequest中添加属性时调用</td></tr><tr><td style="text-align:left;">attributeRemoved(ServletRequestAttributeEvent srae)</td><td style="text-align:left;">从ServletRequest中移除属性时调用</td></tr><tr><td style="text-align:left;">attributeReplaced(ServletRequestAttributeEvent srae)</td><td style="text-align:left;">当ServletRequest中的属性被修改时调用</td></tr></tbody></table><p>ServletRequestAttributeEvent对象代表属性变化事件，它包含的方法如下：</p><table><thead><tr><th style="text-align:left;">方法名</th><th style="text-align:left;">作用</th></tr></thead><tbody><tr><td style="text-align:left;">getName()</td><td style="text-align:left;">获取修改或添加的属性名</td></tr><tr><td style="text-align:left;">getValue()</td><td style="text-align:left;">获取被修改或添加的属性值</td></tr><tr><td style="text-align:left;">getServletRequest ()</td><td style="text-align:left;">获取触发事件的ServletRequest对象</td></tr></tbody></table><h4 id="_7-httpsessionbindinglistener" tabindex="-1"><a class="header-anchor" href="#_7-httpsessionbindinglistener" aria-hidden="true">#</a> 7. HttpSessionBindingListener</h4><p>作用：监听某个对象在Session域中的创建与移除</p><table><thead><tr><th style="text-align:left;">方法名</th><th style="text-align:left;">作用</th></tr></thead><tbody><tr><td style="text-align:left;">valueBound(HttpSessionBindingEvent event)</td><td style="text-align:left;">该类的实例被放到Session域中时调用</td></tr><tr><td style="text-align:left;">valueUnbound(HttpSessionBindingEvent event)</td><td style="text-align:left;">该类的实例从Session中移除时调用</td></tr></tbody></table><p>HttpSessionBindingEvent对象代表属性变化事件，它包含的方法如下：</p><table><thead><tr><th style="text-align:left;">方法名</th><th style="text-align:left;">作用</th></tr></thead><tbody><tr><td style="text-align:left;">getName()</td><td style="text-align:left;">获取当前事件涉及的属性名</td></tr><tr><td style="text-align:left;">getValue()</td><td style="text-align:left;">获取当前事件涉及的属性值</td></tr><tr><td style="text-align:left;">getSession()</td><td style="text-align:left;">获取触发事件的HttpSession对象</td></tr></tbody></table><h4 id="_8-httpsessionactivationlistener" tabindex="-1"><a class="header-anchor" href="#_8-httpsessionactivationlistener" aria-hidden="true">#</a> 8. HttpSessionActivationListener</h4><p>作用：监听某个对象在Session中的序列化与反序列化。</p><table><thead><tr><th style="text-align:left;">方法名</th><th style="text-align:left;">作用</th></tr></thead><tbody><tr><td style="text-align:left;">sessionWillPassivate(HttpSessionEvent se)</td><td style="text-align:left;">该类实例和Session一起钝化到硬盘时调用</td></tr><tr><td style="text-align:left;">sessionDidActivate(HttpSessionEvent se)</td><td style="text-align:left;">该类实例和Session一起活化到内存时调用</td></tr><tr><td style="text-align:left;">HttpSessionEvent对象代表事件对象，通过getSession()方法获取事件涉及的HttpSession对象。</td><td style="text-align:left;"></td></tr></tbody></table><h2 id="iii-servletcontextlistener" tabindex="-1"><a class="header-anchor" href="#iii-servletcontextlistener" aria-hidden="true">#</a> Ⅲ. ServletContextListener</h2><p>将来使用SpringMVC的时候，会用到一个ContextLoaderListener，这个监听器就实现了ServletContextListener接口，表示对ServletContext对象本身的生命周期进行监控。</p><h4 id="_1-监听器的使用步骤" tabindex="-1"><a class="header-anchor" href="#_1-监听器的使用步骤" aria-hidden="true">#</a> 1. 监听器的使用步骤</h4><ul><li>定义一个类，实现某个监听器接口</li><li>复写接口中的方法</li><li>进行监听器配置：添加@WebLister注解</li></ul><h4 id="_2-servletcontextlistener接口的方法" tabindex="-1"><a class="header-anchor" href="#_2-servletcontextlistener接口的方法" aria-hidden="true">#</a> 2. ServletContextListener接口的方法</h4><p>该监听器接口一共有两个方法：</p><ul><li>void contextDestroyed(ServletContextEvent sce) ：ServletContext对象被销毁之前会调用该方法，一般用来加载资源文件</li><li>void contextInitialized(ServletContextEvent sce) ：ServletContext对象创建后会调用该方法</li></ul><h5 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//file：web/listener/ContextLoaderListener</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ContextLoaderListener</span> implement <span class="token class-name">ServletContextListener</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">contextInitialized</span><span class="token punctuation">(</span><span class="token class-name">ServletContextEvent</span> sce<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;ServletContext对象被创建了...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">contextInitialized</span><span class="token punctuation">(</span><span class="token class-name">ServletContextEvent</span> sce<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;ServletContext对象被销毁了...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-注册监听器" tabindex="-1"><a class="header-anchor" href="#_3-注册监听器" aria-hidden="true">#</a> 3. 注册监听器</h4><p>在实现了监听器接口的类上添加@WebLister注解</p><p>该注解不需要任何参数</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@WebListener</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ContextLoaderListener</span> implement <span class="token class-name">ServletContextListener</span><span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-监听器触发机制" tabindex="-1"><a class="header-anchor" href="#_4-监听器触发机制" aria-hidden="true">#</a> 4. 监听器触发机制</h4><p>监听器是通过事件自动触发的。</p>`,64),r=[i];function d(o,p){return e(),n("div",null,r)}const h=t(l,[["render",d],["__file","4-2.Listener.html.vue"]]);export{h as default};
