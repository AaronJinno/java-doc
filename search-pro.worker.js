const f=(e,s)=>{const n=e.toLowerCase(),o=s.toLowerCase(),a=[];let l=0,r=0;const u=(t,p=!1)=>{let c="";r===0?c=t.length>20?`… ${t.slice(-20)}`:t:p?c=t.length+r>100?`${t.slice(0,100-r)}… `:t:c=t.length>20?`${t.slice(0,20)} … ${t.slice(-20)}`:t,c&&a.push(c),r+=c.length,p||(a.push(["strong",s]),r+=s.length,r>=100&&a.push(" …"))};let i=n.indexOf(o,l);if(i===-1)return null;for(;i>=0;){const t=i+o.length;if(u(e.slice(l,i)),l=t,r>100)break;i=n.indexOf(o,l)}return r<100&&u(e.slice(l),!0),a};function $(e){return e}const h=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d="__vueuse_ssr_handlers__";h[d]=h[d]||{};var g;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(g||(g={}));var m=Object.defineProperty,y=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,I=(e,s,n)=>s in e?m(e,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[s]=n,N=(e,s)=>{for(var n in s||(s={}))C.call(s,n)&&I(e,n,s[n]);if(y)for(var n of y(s))w.call(s,n)&&I(e,n,s[n]);return e};const Q={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};N({linear:$},Q);const b=Object.entries,v=Object.keys,E=e=>e.reduce((s,{type:n})=>s+(n==="title"?50:n==="heading"?20:n==="custom"?10:1),0),_=(e,s)=>{var n;const o={};for(const[a,l]of b(s)){const r=((n=s[a.replace(/\/[^\\]*$/,"")])==null?void 0:n.title)||"",u=`${r?`${r} > `:""}${l.title}`,i=f(l.title,e);i&&(o[u]=[...o[u]||[],{type:"title",path:a,display:i}]),l.customFields&&b(l.customFields).forEach(([t,p])=>{p.forEach(c=>{const O=f(c,e);O&&(o[u]=[...o[u]||[],{type:"custom",path:a,index:t,display:O}])})});for(const t of l.contents){const p=f(t.header,e);p&&(o[u]=[...o[u]||[],{type:"heading",path:a+(t.slug?`#${t.slug}`:""),display:p}]);for(const c of t.contents){const O=f(c,e);O&&(o[u]=[...o[u]||[],{type:"content",header:t.header,path:a+(t.slug?`#${t.slug}`:""),display:O}])}}}return v(o).sort((a,l)=>E(o[a])-E(o[l])).map(a=>({title:a,contents:o[a]}))},P=JSON.parse("{\"/\":{\"/dev/\":{\"title\":\"dev\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"提示\",\"当前处于建设阶段\"]}]},\"/guide/\":{\"title\":\"指南\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"提示\",\"当前处于建设阶段\"]}]},\"/guide/%E6%8A%80%E6%9C%AF%E6%A0%88%E5%AF%BC%E8%88%AA.html\":{\"title\":\"技术栈导航- 学习路线\",\"contents\":[{\"header\":\"学习顺序\",\"slug\":\"学习顺序\",\"contents\":[\"提示\",\"仅包含Java相关的，其他知识，如MySQL，不再这里提及\",\"Java SE\",\"JVM： 可略过，回头再学，纯理论知识\",\"JavaWeb：理解为主 \",\"必学：jdbc、Tomcat、Servlet（Fileter & Listener）、环境搭建、WEB架构、JSON\",\"可选：JSP、JSTL、XML、会话技术\",\"Maven：先学基本用法，复杂配置等学完Spring系列再研究\",\"Spring全家桶 \",\"Spring： 理解为主\",\"SpringMVC\",\"MyBatis：包括MyBatisPlus \",\"需要前置知识：MySQL\",\"SpringBoot：重点实践 \",\"SpringBoot会整合很多技术，这些技术你不会就没法整合，如Redis\",\"其他Spring组件：用到了再学\",\"微服务：（学这个之前了解下项目架构） \",\"常用：Gateway、Nacos、OpenFeign、Seata、Sentinel\",\"已过时：Eureka、Ribbon、LoadBalancer、Bus、Config、Stream、Hystrix\",\"中间件 \",\"消息队列：RabbitMQ（最常用）\"]}]},\"/item/\":{\"title\":\"项目\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"提示\",\"当前处于建设阶段\"]}]},\"/java/\":{\"title\":\"Java\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"提示\",\"当前处于建设阶段\"]}]},\"/middle/\":{\"title\":\"中间件\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"提示\",\"当前处于建设阶段\"]}]},\"/other/\":{\"title\":\"others\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"提示\",\"当前处于建设阶段\"]}]},\"/service/\":{\"title\":\"服务器\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"提示\",\"当前处于建设阶段\"]}]},\"/spring/\":{\"title\":\"Spring\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"提示\",\"当前处于建设阶段\"]}]},\"/theory/\":{\"title\":\"理论\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"提示\",\"当前处于建设阶段\"]}]},\"/tool/\":{\"title\":\"工具\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"提示\",\"当前处于建设阶段\"]}]},\"/sql/mongodb/1.%E4%BB%8B%E7%BB%8D.html\":{\"title\":\"1. 介绍\",\"contents\":[{\"header\":\"Ⅰ. MongoDB 简介\",\"slug\":\"i-mongodb-简介\",\"contents\":[\"MongoDB是一个开源、高性能、无模式的 文档型数据库 ，当初的设计就是用于简化开发和方便扩展，是NoSQL数据库产品中的一种。是 最像关系型数据库（MySQL） 的非关系型数据库。\"]},{\"header\":\"1. line\",\"slug\":\"_1-line\",\"contents\":[\"官网：https://www.mongodb.com/\"]},{\"header\":\"2. 语法风格\",\"slug\":\"_2-语法风格\",\"contents\":[\"类似于: JS+MySQL的缝合\"]},{\"header\":\"3. 优点\",\"slug\":\"_3-优点\",\"contents\":[\"高性能：MongoDB提供高性能的数据持久性。\",\"高可用：MongoDB的复制工具称为副本集（replica set），它可提供自动故障转移和数据冗余。\",\"高扩展：提供了水平可扩展性作为其核心功能的一部分。\",\"丰富查询支持：支持丰富的查询语言\",\"其他：如无模式（动态模式）、灵活的文档模型\"]},{\"header\":\"4. 应用场景\",\"slug\":\"_4-应用场景\",\"contents\":[\"很多应用场景，关系型数据库难易应对。 其实MogoDB很多时候是关系型数据库的一个替代。\"]},{\"header\":\"3.1 解决的问题\",\"slug\":\"_3-1-解决的问题\",\"contents\":[\"MongoDB可应对“三高”需求：\",\"High performance - 对数据库高并发读写的需求。\",\"Huge Storage - 对海量数据的高效率存储和访问的需求。\",\"High Scalability && High Availability- 对数据库的高可扩展性和高可用性的需求。\"]},{\"header\":\"3.2 具体应用场景\",\"slug\":\"_3-2-具体应用场景\",\"contents\":[\"适合：数据流大、读写频繁以及价值比较低的数据。\",\"社交场景：使用 MongoDB 存储用户信息，以及用户发表的朋友圈信息，通过地理位置索引实现附近的人、地点等功能。\",\"游戏场景：使用 MongoDB 存储游戏用户信息，用户的装备、积分等直接以内嵌文档的形式存储，方便查询、高效率存储和访问。\",\"物流场景：使用 MongoDB 存储订单信息，订单状态在运送过程中会不断更新，以 MongoDB 内嵌数组的形式来存储，一次查询就能将订单所有的变更读取出来。\",\"物联网场景：使用 MongoDB 存储所有接入的智能设备信息，以及设备汇报的日志信息，并对这些信息进行多维度的分析。\",\"视频直播，使用 MongoDB 存储用户信息、点赞互动信息等。\"]},{\"header\":\"3.3 选择的依据\",\"slug\":\"_3-3-选择的依据\",\"contents\":[\"新应用，需求会变，数据模型无法确定，想快速迭代开发\",\"应用不需要事务及复杂 join 支持\",\"应用需要TB甚至 PB 级别数据存储\",\"应用发展迅速，需要能快速水平扩展\",\"应用需要大量的地理位置查询、文本查询\"]},{\"header\":\"4. Serverless\",\"slug\":\"_4-serverless\",\"contents\":[\"当前，云服务兴起，云服务一般采用以MongoDB为核心的数据库架构。\"]},{\"header\":\"Ⅱ. 存储结构\",\"slug\":\"ii-存储结构\",\"contents\":[]},{\"header\":\"1. 和MySQL对比\",\"slug\":\"_1-和mysql对比\",\"contents\":[\"001\",\"术语对比\",\"SQL术语\",\"MongoDB术语\",\"说明\",\"database\",\"database\",\"数据库\",\"table\",\"collection\",\"数据库表/集合\",\"row\",\"document\",\"数据记录行/文档\",\"column\",\"ﬁeld\",\"数据字段/域\",\"index\",\"index\",\"索引\",\"table joins\",\"表连接,MongoDB不支持\",\"嵌入文档\",\"MongoDB通过嵌入式文档来替代多表连接\",\"primary key\",\"primary key\",\"主键,MongoDB自动将_id字段设置为主键\"]},{\"header\":\"2. 数据结构\",\"slug\":\"_2-数据结构\",\"contents\":[\"MongoDB支持的数据结构非常松散，是一种类似于 JSON 的 格式叫BSON，所以它既可以存储比较复杂的数据类型，又相当的灵活。\",\"MongoDB中的记录是一个 文档 ，它是一个由字段和值对（ﬁeld:value）组成的数据结构。MongoDB文档类似于JSON对象，即 一个文档认为就是一个对象 。字段的数据类型是字符型，它的值除了使用基本的一些类型外，还可以包括其他文档、普通数组和文档数组。\",\"MongoDB的最小存储单位就是文档(document)对象。文档(document)对象对应于关系型数据库的 行 。 数据在MongoDB中以BSON（Binary-JSON）文档的格式存储在磁盘上。\"]},{\"header\":\"3. BSON\",\"slug\":\"_3-bson\",\"contents\":[\"BSON（Binary Serialized Document Format）是一种类json的一种二进制形式的存储格式，简称Binary JSON。BSON和JSON一样，支持内嵌的文档对象和数组对象，但是BSON有JSON没有的一些数据类型，如Date和BinData类型。\",\"BSON采用了类似于 C 语言结构体的名称、对表示方法，支持内嵌的文档对象和数组对象，具有轻量性、可遍历性、高效性的三个特点，可以有效描述非结构化数据和结构化数据。这种格式的优点是灵活性高，但它的缺点是空间利用率不是很理想。\",\"Bson中，除了基本的JSON类型：string,integer,boolean,double,null,array和object，mongo还使用了特殊的数据类型。这些类型包括date,object id,binary data,regular expression 和code。每一个驱动都以特定语言的方式实现了这些类型。\"]},{\"header\":\"4. BSON数据类型参考\",\"slug\":\"_4-bson数据类型参考\",\"contents\":[\"数据类型\",\"描述\",\"举例\",\"字符串\",\"字符串类型的数据\",\"{\\\"x\\\" : \\\"foobar\\\"} \",\"对象id\",\"文档的12字节的唯一 ID\",\"{\\\"x\\\" \\\\:ObjectId() } \",\"布尔值\",\"true或者false\",\"{\\\"x\\\"\\\\:true} \",\"数组\",\"值的集合或者列表可以表示成数组\",\"{\\\"x\\\" ： \\\\[\\\"a\\\", \\\"b\\\", \\\"c\\\"]}\",\"浮点数\",\"数字就这一种类型，不支持整数\",\"{\\\"x\\\"：3.14159，\\\"y\\\"：3}\",\"null\",\"空值或者未定义的对象\",\"{\\\"x\\\"\\\\:null}\",\"undeﬁned\",\"未定义类型\",\"{\\\"x\\\"\\\\:undeﬁned}\",\"正则表达式\",\"采用JavaScript的正则表达式语法\",\"{\\\"x\\\" ： /foobar/i} \",\"代码\",\"文档中还可以包含JavaScript代码\",\"{\\\"x\\\" ： function() { /\\\\* …… \\\\*/ }}\"]},{\"header\":\"Ⅲ. MongoDB 与 Redis\",\"slug\":\"iii-mongodb-与-redis\",\"contents\":[\"MongoDB和Redis都是NoSQL，采用结构型数据存储。 现在的分布式项目基本都会用到redis和mongodb。 二者在使用场景中，存在一定的区别。\"]},{\"header\":\"1. 定位\",\"slug\":\"_1-定位\",\"contents\":[\"定为不同：大家一般称之为Redis缓存、MongoDB数据库。\",\"Redis主要把数据存储在内存中，其“缓存”的性质远大于其“数据存储“的性质，其中数据的增删改查也只是像变量操作一样简单；\",\"MongoDB却是一个“存储数据”的系统，增删改查可以添加很多条件，就像SQL数据库一样灵活。\"]},{\"header\":\"2. 应用场景对比\",\"slug\":\"_2-应用场景对比\",\"contents\":[\"Redis︰场景较多，比如分布式架构，做session共享，高速缓存。\",\"Mongodb︰日志记录、内容管理或者博客平台，比如评论系统。\"]}]},\"/sql/mongodb/2.%E5%AE%89%E8%A3%85.html\":{\"title\":\"2. 安装\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"当前版本：6.0.5\"]},{\"header\":\"Ⅰ. Windows\",\"slug\":\"i-windows\",\"contents\":[]},{\"header\":\"1. 下载安装包\",\"slug\":\"_1-下载安装包\",\"contents\":[\"下载地址：https://www.mongodb.com/download-center#community\",\"002\",\"版本的选择\",\"MongoDB的版本命名规范如：x.y.z；\",\"y为奇数时表示当前版本为开发版\",\"y为偶数时表示当前版本为稳定版\",\"z是修正版本号，数字越大越好\"]},{\"header\":\"2. 安装\",\"slug\":\"_2-安装\",\"contents\":[\"下载的打包格式选zip，即为绿色软件，直接解压即可。 在解压的目录中，创建一个存放数据的目录，如：data/db\"]},{\"header\":\"3. 启动\",\"slug\":\"_3-启动\",\"contents\":[\"提示\",\"下载的是绿色软件，是没有配置环境变量的（可以选择手动配置），启动时需要在bin目录输入命令，且需要手动指定参数。\"]},{\"header\":\"3.1 通过参数启动服务\",\"slug\":\"_3-1-通过参数启动服务\",\"contents\":[\"在软件的bin目录，输入以下命令：\",\"--dbpath：该参数用来指定数据库存放的位置\",\"启动的方式是进程占用（非守护进程）\",\"默认的服务端口是27017，可以通过--port来手动指定端口\"]},{\"header\":\"3.2 通过配置文件启动服务\",\"slug\":\"_3-2-通过配置文件启动服务\",\"contents\":[\"将启动的参数写入配置文件，然后通过配置文件启动服务。\",\"在解压目录中新建 config 文件夹，该文件夹中新建配置文件 mongod.conf ，内容参考如下：\",\"启动方式\"]},{\"header\":\"Ⅱ. Linux\",\"slug\":\"ii-linux\",\"contents\":[]},{\"header\":\"1. 下载压缩包\",\"slug\":\"_1-下载压缩包\",\"contents\":[\"平台选Linux，打包格式选tgz。 下载安装包，并上传到服务器的 /opt/目录\"]},{\"header\":\"2. 安装\",\"slug\":\"_2-安装-1\",\"contents\":[\"该软件是绿色软件，在Linux上也不用安装，解压即可。\",\"解压后需要在mongodb目录下新建目录和配置文件\"]},{\"header\":\"3. 配置\",\"slug\":\"_3-配置\",\"contents\":[\"生产端配置的详细一些，格式为yml 配置文件的内容如下：\"]},{\"header\":\"4. 启动服务\",\"slug\":\"_4-启动服务\",\"contents\":[]},{\"header\":\"5. 关闭服务\",\"slug\":\"_5-关闭服务\",\"contents\":[]},{\"header\":\"Ⅲ. MacOS\",\"slug\":\"iii-macos\",\"contents\":[\"注意\",\"暂略，用到时再说\"]},{\"header\":\"Ⅵ. MongoDB shell\",\"slug\":\"vi-mongodb-shell\",\"contents\":[\"MongoDB Shell 是一个基于javascript的解释器。 他是安装的一个本地shell客户端，可以登录，并执行MongoDB命令。\",\"警告\",\"3.x版本以后，MongoDB不再提供MongoDB Shell了。 想用需要自己手动安装：https://www.mongodb.com/try/download/shell\",\"请选择Compass方式连接MongoDB。\"]},{\"header\":\"Ⅴ. Compass\",\"slug\":\"v-compass\",\"contents\":[\"提示\",\"Compass 是可视化的MongoDB管理工具，但是也支持shell命令，完全可替代MongoDB shell。\"]},{\"header\":\"1. 介绍\",\"slug\":\"_1-介绍\",\"contents\":[\"mongoDB Compass是mongoDB官方提供的可视化数据管理工具，通过msi包安装MongoDB时可以选择自动安装MongoDB Compass。\",\"如果是手动安装的绿色版（tar包），可以通过官网下载独立安装包。 官方下载地址：https://www.mongodb.com/try/download/compass\"]},{\"header\":\"2. Compass 连接 MongoDB\",\"slug\":\"_2-compass-连接-mongodb\",\"contents\":[\"警告\",\"MongoDB默认是没有用户认证的，通过compass只要输入IP+port就可以直接连接上。 这非常危险，上线时一定要设置安全认证，详见：安全认证章节\",\"默认是没有用户认证的，可以直接连接。\",\"如下：点击new Connection，输入url（ip+port）就可以直接连接上\",\"004\"]},{\"header\":\"3. 页面介绍\",\"slug\":\"_3-页面介绍\",\"contents\":[\"功能很直观，所见即所得。 其中底部>_MONGOSH 就是Compass内置的 shell工具，可以直接输入命令\",\"003\"]},{\"header\":\"4. 基本功能\",\"slug\":\"_4-基本功能\",\"contents\":[\"Connect： 连接与断开MongoDB连接相关\",\"Databases：数据库列表 \",\"Create database：创建数据库\",\"Refresh：刷新数据库\",\"Performance：数据库监控\",\">_MONGOSH：MongoDB Shell\"]}]},\"/sql/mongodb/\":{\"title\":\"MongoDB\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"提示\",\"当前处于建设阶段\"]}]},\"/sql/\":{\"title\":\"Sql\",\"contents\":[]}}}");self.onmessage=({data:e})=>{self.postMessage(_(e.query,P[e.routeLocale]))};
//# sourceMappingURL=original.js.map
