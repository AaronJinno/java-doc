import{_ as a,o as n,c as s,b as e}from"./app-9c6c4763.js";const t="/java-doc/img/java/javase/3-1-1.jpg",i={},r=e(`<h2 id="i-概述" tabindex="-1"><a class="header-anchor" href="#i-概述" aria-hidden="true">#</a> Ⅰ. 概述</h2><p>在Java语言中，将程序执行中发生的不正常情况称为“异常”。(开发过程中的语法错误和逻辑错误不是异常)</p><h4 id="_1-异常分类" tabindex="-1"><a class="header-anchor" href="#_1-异常分类" aria-hidden="true">#</a> 1. 异常分类</h4><p>Java程序在执行过程中所发生的异常事件可分为两类：Error和Exception</p><h4 id="_2-error-错误" tabindex="-1"><a class="header-anchor" href="#_2-error-错误" aria-hidden="true">#</a> 2. Error：错误</h4><p>Java虚拟机无法解决的严重问题。如：JVM系统内部错误、资源耗尽等严重情况。比如：StackOverflowError和OOM。一般不编写针对性的代码进行处理。</p><p>我们常说的异常处理，不包括这个，这个是我们处理不了的。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ErrorTest</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//1.栈溢出：java.lang.StackOverflowError</span>
    <span class="token function">main</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//2.堆溢出：java.lang.OutOfMemoryError </span>
    <span class="token class-name">Integer</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token operator">*</span><span class="token number">1024</span><span class="token operator">*</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span> 
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-exception-异常" tabindex="-1"><a class="header-anchor" href="#_3-exception-异常" aria-hidden="true">#</a> 3. Exception：异常</h4><p>其它因编程错误或偶然的外在因素导致的一般性问题，可以使用针对性的代码进行处理。</p><p>如：空指针访问、试图读取不存在的文件、网络连接中断、数组角标越界</p><p>我们平时说的异常一般指的就是Exception。</p><h4 id="_4-异常处理" tabindex="-1"><a class="header-anchor" href="#_4-异常处理" aria-hidden="true">#</a> 4. 异常处理</h4><p>对于这些错误，一般有两种 解决方法：一是遇到错误就终止程序的运行。另一种方法是由程序员在编写程序时，就考虑到错误的检测、错误消息的提示，以及错误的处理。</p><p>使用程序处理异常，又分为两种形式：try-catch和throws.</p><h4 id="_5-异常处理的意义" tabindex="-1"><a class="header-anchor" href="#_5-异常处理的意义" aria-hidden="true">#</a> 5. 异常处理的意义</h4><p>异常的处理只是为了保证代码的正常运行，并非真正解决了异常。</p><p>例如：点击点击首页时，因为缺少某个资源，发生了乱码，我们进行处理的效果是提示用户发生了资源缺失，而不是让用户看乱码，这就是异常的意义。但是要明确，异常并没有被解决，我们需要将异常写入日志，上报到后台，然后再去真正的解决异常。</p><p>也就是：异常处理只是为了跟用户友好的交互，真正解决异常，还是要后台根据收集的异常信息去优化代码。</p><h2 id="ii-异常处理机制" tabindex="-1"><a class="header-anchor" href="#ii-异常处理机制" aria-hidden="true">#</a> Ⅱ. 异常处理机制</h2><p>在编写程序时，经常要在可能出现错误的地方加上检测的代码，如进行x/y运算时，要检测分母为0，数据为空，输入的不是数据而是字符等。过多的if-else分支会导致程序的代码加长、臃肿，可读性差。因此采用异常处理机制。</p><h4 id="_1-java的异常处理机制" tabindex="-1"><a class="header-anchor" href="#_1-java的异常处理机制" aria-hidden="true">#</a> 1. java的异常处理机制</h4><p>Java采用的异常处理机制，是将异常处理的程序代码集中在一起，与正常的程序代码分开，使得程序简洁、优雅，并易于维护。</p><h4 id="_2-异常处理的抓抛模型" tabindex="-1"><a class="header-anchor" href="#_2-异常处理的抓抛模型" aria-hidden="true">#</a> 2. 异常处理的抓抛模型</h4><ul><li>抛（throw）：程序在正常执行的过程中，一旦出现异常，就会在异常代码处生成一个对应异常类的对象。并将此对象抛出。 一旦抛出对象以后，其后的代码就不再执行。</li><li>抓（catch）：可以理解为异常的处理方式：① try-catch-finally ② throws</li></ul><h4 id="_3-异常对象的产生" tabindex="-1"><a class="header-anchor" href="#_3-异常对象的产生" aria-hidden="true">#</a> 3. 异常对象的产生</h4><ul><li>系统自动生成的异常对象：由虚拟机 自动生成：程序运行过程中，虚拟机检测到程序发生了问题，如果在当前代码中没有找到相应的处理程序，就会在后台自动创建一个对应异常类的实例对象并抛出——自动抛出</li><li>手动的生成一个异常对象，并抛出（throw）：由开发人员手动创建：<code>Exception exception = new ClassCastException();</code>——创建好的异常对象不抛出对程序没有任何影响，和创建一个普通对象一样。</li></ul><h4 id="_4-异常处理总结" tabindex="-1"><a class="header-anchor" href="#_4-异常处理总结" aria-hidden="true">#</a> 4. 异常处理总结</h4><figure><img src="`+t+'" alt="3-1-1" tabindex="0" loading="lazy"><figcaption>3-1-1</figcaption></figure>',29),c=[r];function p(o,l){return n(),s("div",null,c)}const h=a(i,[["render",p],["__file","3-1.异常概述.html.vue"]]);export{h as default};
