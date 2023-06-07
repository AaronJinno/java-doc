import{_ as n,o as a,c as s,b as e}from"./app-9c6c4763.js";const p={},t=e(`<p>constructor 构造器，也叫构造方法，是java语言中类的一个成员。</p><h4 id="_1-构造器的作用" tabindex="-1"><a class="header-anchor" href="#_1-构造器的作用" aria-hidden="true">#</a> 1. 构造器的作用</h4><h5 id="_1-1-创建对象" tabindex="-1"><a class="header-anchor" href="#_1-1-创建对象" aria-hidden="true">#</a> 1.1 创建对象</h5><p>我们创建对象时进行的语法其实是调用的构造器（构造方法）：new+构造器。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Person</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_1-2-给对象进行初始化" tabindex="-1"><a class="header-anchor" href="#_1-2-给对象进行初始化" aria-hidden="true">#</a> 1.2 给对象进行初始化</h5><p>构造器可以带参数，创建对象时利用传参进行属性的初始化。</p><p>初始化：过滤，为属性赋值等。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Person</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;jinno&quot;</span><span class="token punctuation">,</span><span class="token number">14</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span><span class="token keyword">int</span> age<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//带参数的构造方法，用于对属性初始化</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-构造器的语法" tabindex="-1"><a class="header-anchor" href="#_2-构造器的语法" aria-hidden="true">#</a> 2. 构造器的语法</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>修饰符 类名 <span class="token punctuation">(</span>参数列表<span class="token punctuation">)</span><span class="token punctuation">{</span>
    初始化语句<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>它具有与类相同的名称（必须一样）</li><li>它不声明返回值类型。（与声明为void不同）</li><li>不能被static、final、synchronized、abstract、native修饰</li><li>不能有return语句返回值</li></ul><h4 id="_3-构造器分类" tabindex="-1"><a class="header-anchor" href="#_3-构造器分类" aria-hidden="true">#</a> 3. 构造器分类</h4><ul><li>隐式无参构造器（系统默认提供）</li><li>显式定义一个或多个构造器（无参、有参）</li></ul><h4 id="_4-构造器重载" tabindex="-1"><a class="header-anchor" href="#_4-构造器重载" aria-hidden="true">#</a> 4. 构造器重载</h4><p>构造器虽然不是方法，但是也能像方法那样重载。</p><p>即可以定义多个互相重载的构造器。和方法重载一样，重载时，参数列表必须不同</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token class-name">String</span> uname<span class="token punctuation">;</span>
    <span class="token class-name">Double</span> <span class="token class-name">Money</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">String</span> uname<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">String</span> uname<span class="token punctuation">,</span><span class="token keyword">int</span> age<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">String</span> uname<span class="token punctuation">,</span><span class="token class-name">Double</span> money<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们创建对象时，会根据参数，选择符合参数列表的构造器，使初始化时更加灵活。</p><h4 id="_5-默认构造器" tabindex="-1"><a class="header-anchor" href="#_5-默认构造器" aria-hidden="true">#</a> 5. 默认构造器</h4><p>如果没有显式的定义类的构造器的话，则系统默认提供一个空参的构造器（权限跟类一样）。一旦我们显式的定义了类的构造器之后，系统就不再提供默认的空参构造器</p><p>也可以显式的创建一个空参构造器（一般开发中都会提供一个）。</p><h4 id="_6-注意事项" tabindex="-1"><a class="header-anchor" href="#_6-注意事项" aria-hidden="true">#</a> 6. 注意事项</h4><ul><li>Java 语言中，每个类都至少有一个构造器</li><li>默认构造器的修饰符与所属类的修饰符一致</li><li>一旦显式定义了构造器，则系统不再提供默认构造器</li><li>一个类可以创建多个重载的构造器</li><li>父类的构造器不可被子类继承</li></ul><h4 id="_7-构造器的调用" tabindex="-1"><a class="header-anchor" href="#_7-构造器的调用" aria-hidden="true">#</a> 7. 构造器的调用</h4><p>创建对象时，根据参数列表调用对应的构造器来创建对象。</p><h4 id="_8-总结-属性赋值的先后顺序" tabindex="-1"><a class="header-anchor" href="#_8-总结-属性赋值的先后顺序" aria-hidden="true">#</a> 8. 总结：属性赋值的先后顺序</h4><ul><li>① 默认初始化</li><li>② 显式初始化</li><li>③ 构造器中初始化</li><li>④ 通过&quot;对象.方法&quot; 或 &quot;对象.属性&quot;的方式，赋值</li></ul>`,28),c=[t];function l(i,o){return a(),s("div",null,c)}const d=n(p,[["render",l],["__file","2-4.构造器.html.vue"]]);export{d as default};
