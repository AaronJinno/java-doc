import{_ as t,r as a,o as l,c as p,a as c,d as n,e as s,w as o,b as r}from"./app-9c6c4763.js";const u="/java-doc/img/java/javase/8-1-1.jpg",d={},h=r('<h2 id="i-file-类" tabindex="-1"><a class="header-anchor" href="#i-file-类" aria-hidden="true">#</a> Ⅰ. File 类</h2><h4 id="_1-类介绍" tabindex="-1"><a class="header-anchor" href="#_1-类介绍" aria-hidden="true">#</a> 1. 类介绍</h4><p>java.io.File类：文件和文件目录路径的抽象表示形式，与平台无关。File类即能表示文件，也能表示目录（目录本质也是文件）。</p><p>约定：</p><ul><li>广义文件：文件和目录</li><li>狭义文件或文件：仅指文件</li><li>目录：仅值目录</li></ul><h4 id="_2-file的作用" tabindex="-1"><a class="header-anchor" href="#_2-file的作用" aria-hidden="true">#</a> 2. File的作用</h4><p>File 能新建、删除、重命名文件和目录，但 File 不能访问文件内容本身。</p><p>如果需要访问文件内容本身，则需要使用输入/输出流（File对象可以作为参数传递给流的构造器）。</p><h4 id="_3-file类与文件" tabindex="-1"><a class="header-anchor" href="#_3-file类与文件" aria-hidden="true">#</a> 3. File类与文件</h4><p>想要在Java程序中表示一个真实存在的文件或目录，那么必须有一个File对象。但是Java程序中的一个File对象，可能没有一个真实存在的文件或目录。</p><p>即：我们操作File类是在内存层面上进行操作的，硬盘上没有这个文件也可以。</p><figure><img src="'+u+`" alt="8-1-1" tabindex="0" loading="lazy"><figcaption>8-1-1</figcaption></figure><h4 id="_4-路径分隔符" tabindex="-1"><a class="header-anchor" href="#_4-路径分隔符" aria-hidden="true">#</a> 4. 路径分隔符</h4><p>路径中的每级目录之间用一个路径分隔符隔开。</p><h5 id="_4-1-路径分隔符和系统有关" tabindex="-1"><a class="header-anchor" href="#_4-1-路径分隔符和系统有关" aria-hidden="true">#</a> 4.1 路径分隔符和系统有关</h5><ul><li>windows和DOS系统默认使用“\\”来表示</li><li>UNIX和URL使用“/”来表示 但在windows下使用 &quot;/&quot;，也能识别，因此统一使用&quot;/&quot;</li></ul><h5 id="_4-2-分隔符常量" tabindex="-1"><a class="header-anchor" href="#_4-2-分隔符常量" aria-hidden="true">#</a> 4.2 分隔符常量</h5><p>File类提供了一个常量：public static final String separator。</p><p>根据操作系统，动态的提供分隔符</p><h4 id="_5-file-常用构造器" tabindex="-1"><a class="header-anchor" href="#_5-file-常用构造器" aria-hidden="true">#</a> 5. File：常用构造器</h4><h5 id="_5-1-public-file-string-pathname" tabindex="-1"><a class="header-anchor" href="#_5-1-public-file-string-pathname" aria-hidden="true">#</a> 5.1 public File(String pathname)</h5><p>以pathname为路径创建File对象，可以是 绝对路径或者相对路径，</p><ul><li>如果pathname是相对路径，则默认的当前路径在系统属性user.dir中存储 <ul><li>在JDK1.8中user.dir默认为项目路径。</li></ul></li><li>如果是在单元测试里运行代码，那么user.dir默认是在当前module中的。</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">File</span> f1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;hello.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">File</span> f2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;D:/Java/workplace/Demo/study/hi.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>f1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//hello.txt</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>f2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//D:\\Java\\workplace\\Demo\\study\\hi.txt</span>

<span class="token comment">//默认为项目路径:\\Java\\workplace\\Demo  (Demo是我创建的项目名)</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;user.dir&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-2-public-file-string-parent-string-child" tabindex="-1"><a class="header-anchor" href="#_5-2-public-file-string-parent-string-child" aria-hidden="true">#</a> 5.2 public File(String parent,String child)</h5><ul><li>parent：父路径</li><li>child：子路径</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">File</span> f3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;D:/Java/workplace/Demo/study&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;img&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//路径也是一种文件，万物皆文件</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>f3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// D:\\Java\\workplace\\Demo\\study\\img</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-3-public-file-file-parent-string-child" tabindex="-1"><a class="header-anchor" href="#_5-3-public-file-file-parent-string-child" aria-hidden="true">#</a> 5.3 public File(File parent,String child)</h5><ul><li>parent：父File对象</li><li>child：子文件路径</li></ul><h4 id="_6-创建硬盘文件" tabindex="-1"><a class="header-anchor" href="#_6-创建硬盘文件" aria-hidden="true">#</a> 6. 创建硬盘文件</h4><ul><li>先创建File对象，然后再调用创建文件或目录的方法进行创建。</li><li>文件和目录创建的路径和名字就是File对象的路径和名字。</li><li>如果文件或目录已经存在了，就无法进行创建，返回false</li><li>目录本身也是文件，文件是可以没有后缀的，同一目录下的目录和文件不能同名</li><li>一个无实体的File对象即可以是目录也可以是文件，就看用什么方法创建</li></ul><h2 id="ii-file-常用方法" tabindex="-1"><a class="header-anchor" href="#ii-file-常用方法" aria-hidden="true">#</a> Ⅱ. File 常用方法</h2>`,32);function k(m,f){const e=a("ExternalLinkIcon"),i=a("RouterLink");return l(),p("div",null,[h,c("p",null,[n("详见："),s(i,{to:"/java/func/1.JDK%E5%B8%B8%E7%94%A8%E7%B1%BB/1-7.IO%E7%B1%BB.html",target:"_blank"},{default:o(()=>[n("内置函数>IO类"),s(e)]),_:1})])])}const _=t(d,[["render",k],["__file","8-1.File.html.vue"]]);export{_ as default};
