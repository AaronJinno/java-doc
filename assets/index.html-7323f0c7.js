import{_ as e,P as p,Q as c,S as s,a4 as n,a5 as o,a3 as a,C as l}from"./framework-7e8eb00a.js";const i={},u=a(`<div class="hint-container tip"><p class="hint-container-title">位置</p><p>rt.jar&gt;java&gt;util&gt;Scanner.java 【class】</p></div><p>用来扫描输入文本的类。<br> Scanner类的用法很多，这里只介绍简单的命令行，方便进行一些测试。</p><p><strong>结构</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Scanner</span> <span class="token keyword">implements</span> <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span><span class="token class-name">Closeable</span><span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用</strong><br> 通过Scanner类来获取用户的输入。</p><p>通过 Scanner 类的 next() 与 nextLine() 方法获取输入的字符串，在读取前我们一般需要使用hasNext 与 hasNextLine 判断是否还有输入的数据。</p><h4 id="_1-new-scanner" tabindex="-1"><a class="header-anchor" href="#_1-new-scanner" aria-hidden="true">#</a> 1. new Scanner</h4>`,7),r=s("br",null,null,-1),k={href:"http://xn--System-vy7ir19anh0agsn.in",target:"_blank",rel:"noopener noreferrer"},d=a(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">InputStream</span> source<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//这只是构造方法之一</span>

<span class="token class-name">Scanner</span> scan <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-next" tabindex="-1"><a class="header-anchor" href="#_2-next" aria-hidden="true">#</a> 2. next</h4><p>从此扫描仪查找并返回下一个完整令牌。</p><p>用户从键盘输入内容，按回车即输入完毕，输入完毕后，Scanner.next方法就获取输入的内容。</p><ul><li>无参数：对即将获取的内容无限制。</li><li>有参数：参数可以是String类型的正则或者Pattern类，该参数将限制接下来要输入的数据格式，只有与正则匹配的内容才可以。</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token class-name">String</span> pattern<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token class-name">Pattern</span> pattern<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Scanner</span> scan <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;请输入姓名&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> next <span class="token operator">=</span> scan<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//键盘输入：hello</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//hello</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果</strong></p><ul><li>执行代码；弹出命令行窗口，显示打印的字符：请输入姓名</li><li>可以在键盘输入字符，点击Enter键完成输入</li><li>输入完毕后，scan.next方法获取输入的字符串，并继续向下执行代码</li><li>代码执行完毕，命令行交互结束</li></ul><h4 id="_3-nextxxx" tabindex="-1"><a class="header-anchor" href="#_3-nextxxx" aria-hidden="true">#</a> 3. nextXxx</h4><p>next方法，会将获取的索引内容都当做字符串处理。</p><p>也可以调用nextXxx方法（Xxx为基本数据类型），限制输入的字符类型。</p><ul><li>对于Number类型的Xxx有一个可选参数 radix，radix指的是进制。 <ul><li>radix取值为：2~36，即：最小是2进制，最大是36进制。</li></ul></li><li>输入数据时如果输入的值超过了进制或者超过了数据类型的范围，或者与数据类型不符都会报错。</li><li>对于输入的非十进制数据，获取后的值依然是十进制。</li></ul><p>注意：Scanner没有提供Char类型next方法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">byte</span> <span class="token function">nextByte</span><span class="token punctuation">(</span><span class="token keyword">int</span> radix<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">boolean</span> <span class="token function">nextBoolean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">short</span> <span class="token function">nextShrot</span><span class="token punctuation">(</span><span class="token keyword">int</span> radix<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token keyword">int</span> radix<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">long</span> <span class="token function">nextLong</span><span class="token punctuation">(</span><span class="token keyword">int</span> radix<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">float</span> <span class="token function">nextFloat</span><span class="token punctuation">(</span><span class="token keyword">int</span> radix<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">double</span> <span class="token function">nextDouble</span><span class="token punctuation">(</span><span class="token keyword">int</span> radix<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">BigInteger</span> <span class="token function">nextBigInter</span><span class="token punctuation">(</span><span class="token keyword">int</span> radix<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">BigDecimal</span> <span class="token function">nextBigDecimal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Scanner</span> scan <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;请输入&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> next <span class="token operator">=</span> scan<span class="token punctuation">.</span><span class="token function">nextByte</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//Byte类型的二进制数据</span>
<span class="token comment">//键入：11111</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//31,11111自动转为了十进制</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function m(v,x){const t=l("ExternalLinkIcon");return p(),c("div",null,[u,s("p",null,[n("构建一个Scanner对象，他生产从指定输入流扫描的值。"),r,s("a",k,[n("当参数为System.in"),o(t)]),n("：表示从键盘获取输入的内容。")]),d])}const g=e(i,[["render",m],["__file","index.html.vue"]]);export{g as default};
