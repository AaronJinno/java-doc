import{_ as e,o as a,c as t,b as r}from"./app-8e704c97.js";const i="/java-doc/img/java/javaweb/3-1-1.jpg",l={},c=r('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>Servlet Filter Listner是Javaweb的核心三件套</p></div><h4 id="_1-概述" tabindex="-1"><a class="header-anchor" href="#_1-概述" aria-hidden="true">#</a> 1. 概述</h4><figure><img src="'+i+'" alt="3-1-1" tabindex="0" loading="lazy"><figcaption>3-1-1</figcaption></figure><p>Servlet：server applet，运行在服务器端（Tomcat）的小程序；</p><ul><li>Servlet是JavaWeb最为核心的内容，它是Java提供的一门动态web资源开发技术。</li><li>Servlet是JavaEE规范之一，其实就是一个接口，将来我们需要定义Servlet类实现Servlet接口，并由web服务器运行Servlet</li></ul><h4 id="_2-解析" tabindex="-1"><a class="header-anchor" href="#_2-解析" aria-hidden="true">#</a> 2. 解析</h4><ul><li>浏览器访问服务器时，会访问两种资源，静态资源和动态资源。</li><li>对于动态资源来说，他是动态生成的，不同的访问条件，返回的内容是不一样的，也就是说，动态资源是具有逻辑性的，这个逻辑性就是由java代码控制的。</li><li>服务器中的java代码，是需要tomcat来解析，才能生效。</li><li>并不是所有的java代码，tomcat都能解析，而是需要遵守一些规则（接口）。这个规则（接口）就是Servlet。</li></ul><h4 id="_3-servlet的本质" tabindex="-1"><a class="header-anchor" href="#_3-servlet的本质" aria-hidden="true">#</a> 3. Servlet的本质</h4><p>Servlet就是一个接口，定义了Java类被浏览器访问到(tomcat识别)的规则。</p><p>Javaweb开发中，自定义一个类，要实现Servlet接口，复写方法，才能被Tomcat解析.</p><h4 id="_4-导入servlet包" tabindex="-1"><a class="header-anchor" href="#_4-导入servlet包" aria-hidden="true">#</a> 4. 导入servlet包</h4><p>servlet包是tomcat lib中的一个包，默认是导入的，如果没有导入可以手动导入： 打开模块设置（ctrl+alt+shift+s）-&gt;Libraries-&gt;+-&gt;选择tomcat/lib/servlet-api-&gt;导入到指定module。</p><h4 id="_5-注意事项" tabindex="-1"><a class="header-anchor" href="#_5-注意事项" aria-hidden="true">#</a> 5. 注意事项</h4><p>打包web项目时，一定不要打包Servlet包，无论是开发时是何种配置。</p><p>服务器Tomcat中已经有servlet-api.jar了，重复打包会产生冲突。</p>',15),s=[c];function n(v,d){return a(),t("div",null,s)}const o=e(l,[["render",n],["__file","3-1.Servlet介绍.html.vue"]]);export{o as default};
