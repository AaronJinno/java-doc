import{_ as n,o as a,c as s,e as t}from"./app-dd87de81.js";const e={},p=t(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>使用Spring全家桶开发时，很多配置文件都是xml格式，因此需要对xml了解一下。</p><p>仅了解，实际使用时，都有固定的模板。</p></div><h2 id="i-xml-介绍" tabindex="-1"><a class="header-anchor" href="#i-xml-介绍" aria-hidden="true">#</a> Ⅰ. xml 介绍</h2><p>xml：Extensible Markup Language，W3C推出的可扩展标记语言。</p><p>标签都是自定义的，什么标签名都可以。</p><h4 id="_1-xml与html的区别" tabindex="-1"><a class="header-anchor" href="#_1-xml与html的区别" aria-hidden="true">#</a> 1. xml与html的区别</h4><ul><li>xml标签都是自定义的，html标签是预定义。</li><li>xml的语法严格，html语法松散</li><li>xml是存储数据的，html是展示数据</li></ul><h4 id="_2-xml的用途" tabindex="-1"><a class="header-anchor" href="#_2-xml的用途" aria-hidden="true">#</a> 2. xml的用途</h4><ul><li>作为配置文件，这是主要用途，很多框架的配置文件都是用xml写的</li><li>在网络中传输数据，这个已经基本被JSON取代了</li></ul><h4 id="_3-基本语法" tabindex="-1"><a class="header-anchor" href="#_3-基本语法" aria-hidden="true">#</a> 3. 基本语法</h4><ul><li>xml文档的后缀名 .xml</li><li>xml第一行必须定义为文档声明</li><li>xml文档中必须有且仅有一个根标签</li><li>属性值必须使用引号(单双都可)引起来</li><li>标签必须正确关闭</li><li>xml标签名称区分大小写</li></ul><h4 id="_4-简单示例" tabindex="-1"><a class="header-anchor" href="#_4-简单示例" aria-hidden="true">#</a> 4. 简单示例</h4><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot; ?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>server</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uname</span><span class="token punctuation">&gt;</span></span>shit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>uname</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pwd</span><span class="token punctuation">&gt;</span></span>123456<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pwd</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>fuck.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>server</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-xml的组成部分" tabindex="-1"><a class="header-anchor" href="#_5-xml的组成部分" aria-hidden="true">#</a> 5. xml的组成部分</h4><ul><li>①文档声明 <ul><li>version：版本，必备，现在是1.0。</li><li>encoding：编码，建议：utf-8</li></ul></li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>②指令：略，这个指令是用来结合CSS控制标签的样式的，因为早起XML是用来取代HTML的，现在XML不用来作为前端显示页面了，指令已经没用了。</li><li>③标签：自定义的标签名 <ul><li>规则：遵循常用的命名规则即可，注意不能包含空格，不能以xml开头</li></ul></li><li>④属性：id属性值是唯一的，用引号括起来。</li><li>⑤文本：CDATA区，在该区域中的数据会被原样展示 <ul><li><code>&lt;![CDATA[ 数据 ]]&gt;</code></li></ul></li><li>⑥注释：和HTML一样。</li></ul><h2 id="ii-约束" tabindex="-1"><a class="header-anchor" href="#ii-约束" aria-hidden="true">#</a> Ⅱ. 约束</h2><h4 id="_1-什么是约束" tabindex="-1"><a class="header-anchor" href="#_1-什么是约束" aria-hidden="true">#</a> 1. 什么是约束</h4><p>xml现在的主要作用是作为配置文件，由于xml中标签是自由设置的，所以框架的使用者可以随便配置xml。但是对于框架来说，只有某些标签才是有意义的，因此框架要对xml配置文件中的内容进行一些约束。</p><p>本质：规定xml文档（配置文件）的书写规则</p><h4 id="_2-约束文档的技术实现" tabindex="-1"><a class="header-anchor" href="#_2-约束文档的技术实现" aria-hidden="true">#</a> 2. 约束文档的技术实现</h4><ul><li>DTD:一种简单的约束技术（有缺陷，只能约束格式，无法约束内容）</li><li>Schema:一种复杂的约束技术</li></ul><p>能够在xml中引入约束文档，能简单看懂约束文档即可。</p><h4 id="_3-dtd" tabindex="-1"><a class="header-anchor" href="#_3-dtd" aria-hidden="true">#</a> 3. DTD</h4><h5 id="_3-1-dtd文档示例" tabindex="-1"><a class="header-anchor" href="#_3-1-dtd文档示例" aria-hidden="true">#</a> 3.1 dtd文档示例</h5><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 声明一个students标签，+和正则一样，必须出现1次或多次 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!ELEMENT</span> <span class="token attr-name">students</span> <span class="token attr-name">(student+)</span> <span class="token punctuation">&gt;</span></span> 

<span class="token comment">&lt;!-- 里面可以声明三个有参的子标签 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!ELEMENT</span> <span class="token attr-name">student</span> <span class="token attr-name">(name,age,sex)</span><span class="token punctuation">&gt;</span></span> 

<span class="token comment">&lt;!-- 声明name标签，值是字符串 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!ELEMENT</span> <span class="token attr-name">name</span> <span class="token attr-name">(#PCDATA)</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 声明age标签，值是字符串 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!ELEMENT</span> <span class="token attr-name">age</span> <span class="token attr-name">(#PCDATA)</span><span class="token punctuation">&gt;</span></span> 
<span class="token comment">&lt;!-- 声明sex标签，值是字符串 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!ELEMENT</span> <span class="token attr-name">sex</span> <span class="token attr-name">(#PCDATA)</span><span class="token punctuation">&gt;</span></span> 

<span class="token comment">&lt;!-- 声明student标签的属性，属性名是number，类型是ID，必须设置 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!ATTLIST</span> <span class="token attr-name">student</span> <span class="token attr-name">number</span> <span class="token attr-name">ID</span> <span class="token attr-name">#REQUIRED</span><span class="token punctuation">&gt;</span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-2-引入dtd文档" tabindex="-1"><a class="header-anchor" href="#_3-2-引入dtd文档" aria-hidden="true">#</a> 3.2 引入dtd文档</h5><p>根据约束文档写xml文档之前，要先将dtd文档引入xml文档中。<br> 内部dtd：将约束规则定义在xml文档中【不常用】<br> 外部dtd：将约束的规则定义在外部的dtd文件中<br> 本地：<code>&lt;!DOCTYPE 根标签名 SYSTEM &quot;dtd文件的位置&quot;&gt;</code><br> 网络：<code>&lt;!DOCTYPE 根标签名 PUBLIC &quot;dtd文件名字&quot; &quot;dtd文件的位置URL&quot;&gt;</code></p><h5 id="_3-3-引入dtd-编写xml" tabindex="-1"><a class="header-anchor" href="#_3-3-引入dtd-编写xml" aria-hidden="true">#</a> 3.3 引入dtd，编写xml</h5><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">students</span> <span class="token name">SYSTEM</span> <span class="token string">&quot;student.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>students</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>student</span> <span class="token attr-name">number</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>s001<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>zhangsan<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>age</span><span class="token punctuation">&gt;</span></span>abc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>age</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sex</span><span class="token punctuation">&gt;</span></span>hehe<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sex</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>student</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>students</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-schema" tabindex="-1"><a class="header-anchor" href="#_4-schema" aria-hidden="true">#</a> 4. schema</h4><p>比dtd更复杂，能约束更复杂的内容，包括标签、格式、内容，包含了很多正则。</p><h5 id="_4-1-schema示例" tabindex="-1"><a class="header-anchor" href="#_4-1-schema示例" aria-hidden="true">#</a> 4.1 Schema示例</h5><p>本身也是个xml文档</p><ul><li>xsd:element：定义元素，包含元素名和类型</li><li>xsd:complexType：自定义类型的说明，name=自定义的类型名</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>schema</span> 
    <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.itcast.cn/xml<span class="token punctuation">&quot;</span></span> 
    <span class="token attr-name"><span class="token namespace">xmlns:</span>xsd</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">targetNamespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.itcast.cn/xml<span class="token punctuation">&quot;</span></span> <span class="token attr-name">elementFormDefault</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>qualified<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 声明一个自定义类型的元素 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>element</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>students<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>studentsType<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span> 

    <span class="token comment">&lt;!-- 约束自定义的studentsType类型，complexTye:组合类型  --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>complexType</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>studentsType<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 
        <span class="token comment">&lt;!-- sequence：按顺序出现 student元素 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>sequence</span><span class="token punctuation">&gt;</span></span> 
            <span class="token comment">&lt;!-- 定义student元素，类型自定义，最少出现0次，最多无限制 --&gt;</span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>element</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>student<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>studentType<span class="token punctuation">&quot;</span></span> <span class="token attr-name">minOccurs</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">maxOccurs</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>unbounded<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">xsd:</span>sequence</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">xsd:</span>complexType</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- 约束自定义的studentTyep类型 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>complexType</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>studentType<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 
        <span class="token comment">&lt;!-- sequence：按顺序出现以下元素 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>sequence</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- type是String类型 --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>element</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xsd:string<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span> 
            <span class="token comment">&lt;!-- 自定义类型：ageType --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>element</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>age<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ageType<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span> 
            <span class="token comment">&lt;!-- 自定义类型：sexType --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>element</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sex<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sexType<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span> 
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">xsd:</span>sequence</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- studentType里的属性，属性名：number，类型是numberType，required：必须出现 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>attribute</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>number<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>numberType<span class="token punctuation">&quot;</span></span> <span class="token attr-name">use</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>required<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">xsd:</span>complexType</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- 对sexType类型的约束，simple：简单类型 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>simpleType</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sexType<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 
        <span class="token comment">&lt;!-- 基本数据格式：string  --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>restriction</span> <span class="token attr-name">base</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xsd:string<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 
            <span class="token comment">&lt;!-- enumeration:枚举，二选一 --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>enumeration</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>male<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>enumeration</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>female<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">xsd:</span>restriction</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">xsd:</span>simpleType</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- 对ageType类型的约束 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>simpleType</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ageType<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>  
        <span class="token comment">&lt;!-- 基本数据格式是integer --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>restriction</span> <span class="token attr-name">base</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xsd:integer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- 最小值 --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>minInclusive</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span> 
            <span class="token comment">&lt;!-- 最大值 --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>maxInclusive</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>256<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span> 
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">xsd:</span>restriction</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">xsd:</span>simpleType</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- 对numberType类型的约束 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>simpleType</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>numberType<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 
        <span class="token comment">&lt;!-- 基本数据格式：string --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>restriction</span> <span class="token attr-name">base</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xsd:string<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 
            <span class="token comment">&lt;!-- 正则约束，必须heima开头后跟_加4个数字 --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xsd:</span>pattern</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>heima_\\d{4}<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span> 
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">xsd:</span>restriction</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">xsd:</span>simpleType</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">xsd:</span>schema</span><span class="token punctuation">&gt;</span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-2-引入约束写xml" tabindex="-1"><a class="header-anchor" href="#_4-2-引入约束写xml" aria-hidden="true">#</a> 4.2 引入约束写xml</h5><p>可以同时引入多个约束文档，使用命名空间区分。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- students：根标签 --&gt;</span>
&lt;students 
    //引入xsi前缀：这行是固定格式
    xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; 

    //为命名空间起个前缀，默认前缀是空
    xmlns=&quot;http://www.itcast.cn/xml&quot;  

    //为命名空间起前缀，a就前缀
    xmlns:a=&quot;http://www.dsaft.cn/xml&quot; 

    //使用xsi引入文件，schemaLocation：命名空间，student.xsd是文件名
    xsi:schemaLocation=&quot;http://www.itcast.cn/xml  student.xsd&quot;
&gt; 
    <span class="token comment">&lt;!-- 标签省略了前缀，即为默认命名空间 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>student</span> <span class="token attr-name">number</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>heima_0001<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>tom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>age</span><span class="token punctuation">&gt;</span></span>18<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>age</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sex</span><span class="token punctuation">&gt;</span></span>male<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sex</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>student</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 指定命名空间的标签 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">a:</span>name</span><span class="token punctuation">&gt;</span></span>helo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>students</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,39),l=[p];function c(o,u){return a(),s("div",null,l)}const k=n(e,[["render",c],["__file","6-3.XML.html.vue"]]);export{k as default};