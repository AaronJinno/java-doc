import{_ as a,o as e,c as i,b as t}from"./app-9c6c4763.js";const r="/java-doc/img/java/javase/5-3-1.jpg",_={},c=t('<p>线程是有生命周期（状态）的</p><h4 id="_1-线程的5种状态" tabindex="-1"><a class="header-anchor" href="#_1-线程的5种状态" aria-hidden="true">#</a> 1. 线程的5种状态</h4><p>要想实现多线程，必须在主线程中创建新的线程对象。Java语言使用Thread类及其子类的对象来表示线程，在它的一个完整的生命周期中通常要经历如下的五种状态</p><ul><li>新建：当一个Thread类或其子类的对象被声明并创建时，新生的线程对象处于新建状态</li><li>就绪：处于新建状态的线程被start()后，将进入线程队列等待CPU时间片，此时它已具备了运行的条件，只是没分配到CPU资源</li><li>运行：当就绪的线程被调度并获得CPU资源时,便进入运行状态， run()方法定义了线程的操作和功能</li><li>阻塞：在某种特殊情况下，被人为挂起或执行输入输出操作时，让出 CPU 并临时中止自己的执行，进入阻塞状态</li><li>死亡：线程完成了它的全部工作或线程被提前强制性地中止或出现异常导致结束</li></ul><h4 id="_2-线程的生命周期图解" tabindex="-1"><a class="header-anchor" href="#_2-线程的生命周期图解" aria-hidden="true">#</a> 2. 线程的生命周期图解</h4><figure><img src="'+r+'" alt="5-3-1" tabindex="0" loading="lazy"><figcaption>5-3-1</figcaption></figure>',6),l=[c];function n(o,s){return e(),i("div",null,l)}const h=a(_,[["render",n],["__file","5-3.生命周期.html.vue"]]);export{h as default};
