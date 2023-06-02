import{_ as l,P as d,Q as s,S as a,a4 as r,a5 as c,a3 as i,C as o}from"./framework-7e8eb00a.js";const e="/java-doc/img/java/javase/1-4-1.jpg",t={},h=i(`<h2 id="i-变量" tabindex="-1"><a class="header-anchor" href="#i-变量" aria-hidden="true">#</a> Ⅰ. 变量</h2><h4 id="_1-概念" tabindex="-1"><a class="header-anchor" href="#_1-概念" aria-hidden="true">#</a> 1. 概念</h4><p>变量是内存中的一个存储区域，该区域的数据可以在同一类型范围内不断变化。</p><p>变量是程序中最基本的存储单元。包含变量类型、变量名和存储的值。</p><h4 id="_2-作用" tabindex="-1"><a class="header-anchor" href="#_2-作用" aria-hidden="true">#</a> 2. 作用</h4><p>用于在内存中保存数据。</p><h4 id="_3-声明变量" tabindex="-1"><a class="header-anchor" href="#_3-声明变量" aria-hidden="true">#</a> 3. 声明变量</h4><h5 id="_3-1-只声明" tabindex="-1"><a class="header-anchor" href="#_3-1-只声明" aria-hidden="true">#</a> 3.1 只声明</h5><p>语法：数据类型 变量名称</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> <span class="token keyword">var</span><span class="token punctuation">;</span> <span class="token comment">//声明但未初始化</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_3-2-变量的赋值" tabindex="-1"><a class="header-anchor" href="#_3-2-变量的赋值" aria-hidden="true">#</a> 3.2 变量的赋值</h5><p>语法：变量名 = 值</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> <span class="token keyword">var</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">//赋值的变量必须已经声明过了(无论有没有初始化)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-3-声明的同时赋值" tabindex="-1"><a class="header-anchor" href="#_3-3-声明的同时赋值" aria-hidden="true">#</a> 3.3 声明的同时赋值</h5><p>语法：数据类型 变量名 = 初始化值</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> <span class="token keyword">var</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">//声明变量的同时进行初始化</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4-变量的作用域" tabindex="-1"><a class="header-anchor" href="#_4-变量的作用域" aria-hidden="true">#</a> 4. 变量的作用域</h4><p>变量只有在其作用域内才有效；在哪个 <code>{}</code> 内定义，就在哪个 <code>{}</code> 中使用，跨 <code>{}</code> 找不到该标识符（报错）。</p><h4 id="_5-使用变量的注意事项" tabindex="-1"><a class="header-anchor" href="#_5-使用变量的注意事项" aria-hidden="true">#</a> 5. 使用变量的注意事项</h4><ul><li>Java中每个变量必须先声明，后使用</li><li>使用变量时，该变量必须已经被初始化过了（赋值）。</li><li>同一个作用域内，不能定义重名的变量，会报错（java中不会发生变量覆盖，而是报错）。</li></ul><h4 id="_6-变量的分类" tabindex="-1"><a class="header-anchor" href="#_6-变量的分类" aria-hidden="true">#</a> 6. 变量的分类</h4><p>java对于每一种数据都定义了明确的具体数据类型（强类型语言），在内存中分配了不同大小的内存空间。</p><h5 id="_6-1-按照数据类型" tabindex="-1"><a class="header-anchor" href="#_6-1-按照数据类型" aria-hidden="true">#</a> 6.1 按照数据类型</h5><p>变量可以分为8种基本数据类型，和3种引用类型。</p><ul><li>基本数据类型：primitive type <ul><li>数值型： <ul><li>整形 <ul><li><code>byte</code></li><li><code>shot</code></li><li><code>int</code></li><li><code>long</code></li></ul></li><li>浮点型 <ul><li><code>float</code></li><li><code>double</code></li></ul></li></ul></li><li>字符型：<code>char</code></li><li>布尔型：<code>boolean</code></li></ul></li><li>引用数据类型：reference type <ul><li>类：<code>class</code></li><li>接口：<code>interface</code></li><li>数组：<code>array[ ]</code></li></ul></li></ul><h5 id="_6-2-按照变量声明的位置" tabindex="-1"><a class="header-anchor" href="#_6-2-按照变量声明的位置" aria-hidden="true">#</a> 6.2 按照变量声明的位置</h5><ul><li>成员变量：在方法体外，类体内声明的变量 <ul><li>实例变量：不易static修饰</li><li>类变量：以static修饰</li></ul></li><li>局部变量：在方法体内部声明的变量 <ul><li>形参：方法、构造器中定义的变量</li><li>方法的局部变量：在方法内定义</li><li>代码块局部变量：在代码块内定义</li></ul></li></ul><p>注意：局部变量除形参外，需显式初始化</p><h2 id="ii-关键字" tabindex="-1"><a class="header-anchor" href="#ii-关键字" aria-hidden="true">#</a> Ⅱ. 关键字</h2><h4 id="_1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-介绍" aria-hidden="true">#</a> 1. 介绍</h4><p>关键字和保留字是被Java 语言赋予了特殊含义，用做专门用途的字符串（单词）</p><p>特点：关键字中所有字母都为小写</p><h4 id="_2-关键字汇总" tabindex="-1"><a class="header-anchor" href="#_2-关键字汇总" aria-hidden="true">#</a> 2. 关键字汇总</h4>`,33),p={href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/_keywords.html",target:"_blank",rel:"noopener noreferrer"},u=i('<p><img src="'+e+'" alt="1-4-1" loading="lazy"><img src="'+e+'" alt="1-4-2" loading="lazy"></p><h4 id="_3-保留字" tabindex="-1"><a class="header-anchor" href="#_3-保留字" aria-hidden="true">#</a> 3. 保留字</h4><p>现有Java版本尚未使用，但以后版本可能会作为关键字使用。自己命名标识符时要避免使用这些保留字 ：goto 、const</p><h2 id="iii-标识符" tabindex="-1"><a class="header-anchor" href="#iii-标识符" aria-hidden="true">#</a> Ⅲ. 标识符</h2><p>Java 对各种 变量、 方法和 类等要素命名时使用的字符序列称为标识符；</p><p>也就是凡是自己可以起名字的地方都叫标识符\\</p><h4 id="_1-合法标识符规则" tabindex="-1"><a class="header-anchor" href="#_1-合法标识符规则" aria-hidden="true">#</a> 1. 合法标识符规则</h4><p>规则是必须遵守的</p><ul><li>由26 个英文字母大小写，0-9 ，_或 或 $ 组成</li><li>数字不可以开头。</li><li>不可以使用关键字和保留字，但能包含关键字和保留字。</li><li>Java 中严格区分大小写，长度无限制。</li><li>标识符不能包含空格。</li></ul><h4 id="_2-命名规范" tabindex="-1"><a class="header-anchor" href="#_2-命名规范" aria-hidden="true">#</a> 2. 命名规范</h4><p>规范是最好遵守的</p><ul><li>包名【全小写】：多单词组成时所有字母都小写：xxxyyyzzz</li><li>类名、接口名【大驼峰】：多单词组成时，所有单词的首字母大写：XxxYyyZzz</li><li>变量名、方法名【小驼峰】：多单词组成时，第一个单词首字母小写，第二个单词开始每个单词首字母大写：xxxYyyZzz</li><li>常量名【全大写下划线分隔】：所有字母都大写。多单词时每个单词用下划线连接：XXX_YYY_ZZZ</li></ul>',12);function _(v,b){const n=o("ExternalLinkIcon");return d(),s("div",null,[h,a("p",null,[a("a",p,[r("官方地址"),c(n)])]),u])}const x=l(t,[["render",_],["__file","1-4.变量.html.vue"]]);export{x as default};
