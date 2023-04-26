import{_ as t,P as i,Q as l,S as o,a4 as n,a5 as a,a3 as s,C as r}from"./framework-7e8eb00a.js";const c="/java-doc/img/sql/mongodb/1-3-1.png",d="/java-doc/img/sql/mongodb/1-3-2.png",h={},p=o("div",{class:"hint-container tip"},[o("p",{class:"hint-container-title"},"提示"),o("p",null,"MongoDB shell和Compass都可以连接MongoDB，不过MongoDB Shell已经过时了，现在只需要使用Compass即可。")],-1),g=o("h2",{id:"i-mongodb-shell",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#i-mongodb-shell","aria-hidden":"true"},"#"),n(" Ⅰ. MongoDB shell")],-1),_=o("p",null,"MongoDB Shell 是一个基于javascript的解释器。 他是安装的一个本地shell客户端，可以登录，并执行MongoDB命令。",-1),m={class:"hint-container danger"},f=o("p",{class:"hint-container-title"},"警告",-1),u={href:"https://www.mongodb.com/try/download/shell",target:"_blank",rel:"noopener noreferrer"},B=o("p",null,"请选择Compass方式连接MongoDB。",-1),D=s('<h2 id="ii-compass" tabindex="-1"><a class="header-anchor" href="#ii-compass" aria-hidden="true">#</a> Ⅱ. Compass</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>Compass 是可视化的MongoDB管理工具，但是也支持shell命令，完全可替代MongoDB shell。</p></div><h4 id="_1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-介绍" aria-hidden="true">#</a> 1. 介绍</h4><p>mongoDB Compass是mongoDB官方提供的可视化数据管理工具，通过msi包安装MongoDB时可以选择自动安装MongoDB Compass。</p>',4),b={href:"https://www.mongodb.com/try/download/compass",target:"_blank",rel:"noopener noreferrer"},M=s('<h4 id="_2-compass-连接-mongodb" tabindex="-1"><a class="header-anchor" href="#_2-compass-连接-mongodb" aria-hidden="true">#</a> 2. Compass 连接 MongoDB</h4><div class="hint-container danger"><p class="hint-container-title">警告</p><p>MongoDB默认是没有用户认证的，通过compass只要输入IP+port就可以直接连接上。 这非常危险，上线时一定要设置安全认证，详见：安全认证章节</p></div><p>默认是没有用户认证的，可以直接连接。</p><p>如下：点击new Connection，输入url（ip+port）就可以直接连接上</p><figure><img src="'+c+'" alt="1-3-1" tabindex="0" loading="lazy"><figcaption>1-3-1</figcaption></figure><h4 id="_3-页面介绍" tabindex="-1"><a class="header-anchor" href="#_3-页面介绍" aria-hidden="true">#</a> 3. 页面介绍</h4><p>功能很直观，所见即所得。 其中底部&gt;_MONGOSH 就是Compass内置的 shell工具，可以直接输入命令</p><figure><img src="'+d+'" alt="1-3-2" tabindex="0" loading="lazy"><figcaption>1-3-2</figcaption></figure><ul><li>Connect： 连接与断开MongoDB连接相关</li><li>Databases：数据库列表 <ul><li>Create database：创建数据库</li><li>Refresh：刷新数据库</li></ul></li><li>Performance：数据库监控</li><li>&gt;_MONGOSH：MongoDB Shell</li></ul>',9);function w(x,C){const e=r("ExternalLinkIcon");return i(),l("div",null,[p,g,_,o("div",m,[f,o("p",null,[n("4.x版本以后，MongoDB不再提供MongoDB Shell了。 想用需要自己手动安装："),o("a",u,[n("https://www.mongodb.com/try/download/shell"),a(e)])]),B]),D,o("p",null,[n("如果是手动安装的绿色版（tar包），可以通过官网下载独立安装包。 官方下载地址："),o("a",b,[n("https://www.mongodb.com/try/download/compass"),a(e)])]),M])}const S=t(h,[["render",w],["__file","1-3.连接MongoDB.html.vue"]]);export{S as default};
