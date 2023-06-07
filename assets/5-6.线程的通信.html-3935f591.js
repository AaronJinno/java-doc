import{_ as n,o as s,c as a,b as t}from"./app-9c6c4763.js";const p={},e=t(`<p>线程的通信指的是多个线程之间的交流。</p><p>比如，使用两个线程打印 1-100。线程1, 线程2 交替打印</p><h4 id="_1-线程通信涉及到的方法" tabindex="-1"><a class="header-anchor" href="#_1-线程通信涉及到的方法" aria-hidden="true">#</a> 1. 线程通信涉及到的方法</h4><p>注意：这三个方法只有在synchronized方法或synchronized代码块中才能使用，否则会报 java.lang.IllegalMonitorStateException异常。</p><ul><li>wait：一旦执行此方法，当前线程就进入阻塞状态，并释放同步监视器。 <ul><li>令当前线程挂起并放弃CPU、同步资源并等待，使别的线程可访问并修改共享资源，而当前线程排队等候其他线程调用notify()或notifyAll()方法唤醒，唤醒后等待重新获得对监视器的所有权后才能继续执行。</li></ul></li><li>notify：一旦执行此方法，就会唤醒被wait的一个线程。如果有多个线程被wait，就唤醒优先级高的那个。</li><li>notifyAll：一旦执行此方法，就会唤醒所有等待的线程。</li></ul><h4 id="_2-wait-使用说明" tabindex="-1"><a class="header-anchor" href="#_2-wait-使用说明" aria-hidden="true">#</a> 2. wait()使用说明</h4><ul><li>在当前线程中调用方法： 对象名.wait()；</li><li>使当前线程进入等待（某对象）状态 ，直到另一线程对该对象发出 notify(或notifyAll) 为止。</li><li>调用方法的必要条件：当前线程必须具有对该对象的监控权（加锁）</li><li>调用此方法后，当前线程将释放对象监控权</li><li>在当前线程被notify后，要重新获得监控权，然后从断点处继续代码的执行。</li></ul><h4 id="_3-notify-、notifyall-使用说明" tabindex="-1"><a class="header-anchor" href="#_3-notify-、notifyall-使用说明" aria-hidden="true">#</a> 3. notify()、notifyAll()使用说明</h4><ul><li>在当前线程中调用方法： 对象名.notify()</li><li>功能：唤醒等待该对象监控权的一个/所有线程。</li><li>调用方法的必要条件：当前线程必须具有对该对象的监控权（加锁）</li></ul><h4 id="_4-补充说明" tabindex="-1"><a class="header-anchor" href="#_4-补充说明" aria-hidden="true">#</a> 4. 补充说明</h4><ul><li>wait()，notify()，notifyAll()三个方法必须使用在同步代码块或同步方法中。</li><li>wait()，notify()，notifyAll()三个方法的调用者必须是同步代码块或同步方法中的同步监视器。否则，会出现IllegalMonitorStateException异常</li><li>wait()，notify()，notifyAll()三个方法是定义在java.lang.Object类中。</li></ul><h4 id="_5-sleep-和wait-的异同" tabindex="-1"><a class="header-anchor" href="#_5-sleep-和wait-的异同" aria-hidden="true">#</a> 5. sleep()和wait()的异同</h4><ul><li>相同点：一旦执行方法，都可以使得当前的线程进入阻塞状态。</li><li>不同点 <ul><li>两个方法声明的位置不同：Thread类中声明sleep() , Object类中声明wait()</li><li>用的要求不同：sleep()可以在任何需要的场景下调用。 wait()必须使用在同步代码块或同步方法中</li><li>关于是否释放同步监视器：如果两个方法都使用在同步代码块或同步方法中，sleep()不会释放锁，wait()会释放锁。</li></ul></li></ul><h4 id="_6-线程的通信实例" tabindex="-1"><a class="header-anchor" href="#_6-线程的通信实例" aria-hidden="true">#</a> 6. 线程的通信实例</h4><p>使用两个线程打印 1-100。线程1, 线程2 交替打印</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WaitTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">NumTest</span> nt1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NumTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span> t1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>nt1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span> t2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>nt1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        t1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        t2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">NumTest</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//将被wait的线程重新激活</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;@&quot;</span> <span class="token operator">+</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    num<span class="token operator">++</span><span class="token punctuation">;</span>
                    <span class="token keyword">try</span> <span class="token punctuation">{</span>
                        <span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//当前线程被阻塞，并释放锁</span>
                    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),l=[e];function i(o,c){return s(),a("div",null,l)}const k=n(p,[["render",i],["__file","5-6.线程的通信.html.vue"]]);export{k as default};
