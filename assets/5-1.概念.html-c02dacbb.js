import{_ as a,o as i,c as e,b as h}from"./app-9c6c4763.js";const r="/java-doc/img/java/javase/5-1-1.jpg",d={},l=h('<h2 id="i-基本概念" tabindex="-1"><a class="header-anchor" href="#i-基本概念" aria-hidden="true">#</a> Ⅰ. 基本概念</h2><h4 id="_1-program-程序的概念" tabindex="-1"><a class="header-anchor" href="#_1-program-程序的概念" aria-hidden="true">#</a> 1. Program：程序的概念</h4><p>程序(program)是为完成特定任务、用某种语言编写的一组指令的集合。即指一段静态的代码，静态对象。</p><p><strong>程序和软件的区别</strong></p><p>软件是为了完成特定的功能，解决特定的问题而用计算机语言编写的命令序列集合，可以理解为应用程序的集合。而应用程序是软件的一个组成部分，它是软件的必要元素。简单来说，“软件=程序+文档=数据结构+算法+文档”。</p><p>程序和软件的区别是，软件是为了完成特定的功能，解决特定的问题而用计算机语言编写的命令序列集合，可以理解为应用程序的集合。而应用程序是软件的一个组成部分，它是软件的必要元素。</p><h4 id="_2-process-进程的概念" tabindex="-1"><a class="header-anchor" href="#_2-process-进程的概念" aria-hidden="true">#</a> 2. Process：进程的概念</h4><p>进程(process)是程序的一次执行过程，或是正在运行的一个程序。是一个动态的过程：有它自身的产生、存在和消亡的过程。——生命周期。</p><ul><li>程序是静态的，进程是动态的；</li><li>进程作为资源分配的单位，系统在运行时会为每个进程分配不同的内存区域</li><li>每个进程之间是独立的，每个进程均运行在其专用的且受保护的内存（即进程之间不方便通信）</li></ul><h5 id="_2-1-程序与进程的区别" tabindex="-1"><a class="header-anchor" href="#_2-1-程序与进程的区别" aria-hidden="true">#</a> 2.1 程序与进程的区别</h5><p>程序是静态的，进程是动态的：程序是存储在某种介质上的二进制代码，进程对应了程序的执行过程，系统不需要为一个不执行的程序创建进程，一旦进程被创建，就处于不断变化的动态过程中，对应了一个不断变化的上下文环境。</p><h5 id="_2-2-程序与进程的联系" tabindex="-1"><a class="header-anchor" href="#_2-2-程序与进程的联系" aria-hidden="true">#</a> 2.2 程序与进程的联系</h5><p>一个程序可以对应多个进程</p><h4 id="_3-thread-线程的概念" tabindex="-1"><a class="header-anchor" href="#_3-thread-线程的概念" aria-hidden="true">#</a> 3. Thread：线程的概念</h4><p>进程可进一步细化为线程，是一个程序内部的一条执行路径。若一个进程同一时间 并行执行多个线程，就是支持多线程的;</p><ul><li>线程作为调度和执行的单位，每个线程拥有独立的运行栈和程序计数器(pc)，线程切换的开销小;</li><li>一个进程中的多个线程共享相同的内存单元/内存地址空间-&gt;它们从同一堆中分配对象，可以访问相同的变量和对象。这就使得线程间通信更简便、高效。但多个线程操作共享的系统资源可能就会带来安全的隐患。</li><li>程序启动会默认开启一条线程，这条线程被称为主线程或 UI 线程</li></ul><h4 id="_4-进程与线程" tabindex="-1"><a class="header-anchor" href="#_4-进程与线程" aria-hidden="true">#</a> 4. 进程与线程</h4><p>一款软件具有某些功能，任一一个功能的执行就是一个进程（同一功能多次开启也算加了一个进程）。每个进程需要多个任务协同完成，可以创建多个线程来执行这些不同的任务。</p><figure><img src="'+r+'" alt="5-1-1" tabindex="0" loading="lazy"><figcaption>5-1-1</figcaption></figure><ul><li>资源拥有：同一进程内的线程共享本进程的资源如内存、I/O、cpu等，但是进程之间的资源是独立的。</li><li>一个进程崩溃后，在保护模式下不会对其他进程产生影响，但是一个线程崩溃整个进程都死掉。所以多进程要比多线程健壮。</li><li>一个进程至少有一个线程(主)。是进程内的一个独立执行单元</li><li>程序是在某个进程中的某个线程执行的。</li></ul><h4 id="_5-单核cpu和多核cpu" tabindex="-1"><a class="header-anchor" href="#_5-单核cpu和多核cpu" aria-hidden="true">#</a> 5. 单核CPU和多核CPU</h4><p>单核CPU，其实是一种假的多线程，因为在一个时间单元内，也只能执行一个线程的任务。但是因为CPU时间单元特别短（快速在各个线程间切换），因此感觉不出来。</p><p>如果是多核的话，才能更好的发挥多线程的效率。（现在的服务器都是多核的）。</p><p>一个Java应用程序java.exe，其实至少有三个线程：main()主线程，gc()垃圾回收线程，异常处理线程。当然如果发生异常，会影响主线程。</p><h4 id="_6-并行与并发" tabindex="-1"><a class="header-anchor" href="#_6-并行与并发" aria-hidden="true">#</a> 6. 并行与并发</h4><ul><li>并行：多个CPU同时执行多个任务。比如：多个人同时做不同的事。</li><li>并发：一个CPU(采用时间片)同时执行多个任务。比如：秒杀、多个人做同一件事。</li></ul><h2 id="ii-多线程的意义" tabindex="-1"><a class="header-anchor" href="#ii-多线程的意义" aria-hidden="true">#</a> Ⅱ. 多线程的意义</h2><h4 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h4><p>以单核CPU为例，只使用单个线程先后完成多个任务（调用多个方法），肯定比用多个线程来完成用的时间更短（省去了切换线程），为何仍需多线程呢？</p><p>例如：我们复制文件（程序：文件复制开启），复制完一个，再复制下一个是要比同时复制两个文件要快的（单核CPU省去了切换）。假如是4核CPU，只能同时复制4个文件，第5个文件就需要排队了。拿还要多线程干什么。</p><h4 id="_1-多线程程序的优点" tabindex="-1"><a class="header-anchor" href="#_1-多线程程序的优点" aria-hidden="true">#</a> 1. 多线程程序的优点</h4><ul><li>提高应用程序的响应。对图形化界面更有意义，可增强用户体验。 <ul><li>用户同时在电脑手机上干多件事</li></ul></li><li>提高计算机系统CPU的利用率：CPU的切换效率很高，很多时候无法利用完CPU的性能</li><li>改善程序结构：将既长又复杂的进程分为多个线程，独立运行，利于理解和修改</li></ul><h4 id="_2-何时需要多线程" tabindex="-1"><a class="header-anchor" href="#_2-何时需要多线程" aria-hidden="true">#</a> 2. 何时需要多线程</h4><ul><li>程序需要同时执行两个或多个任务。</li><li>程序需要实现一些需要等待的任务时 <ul><li>比如：下滑显示新的评论，需要三个功能：加载评论内容、加载头像、页面上滑，如果用单线程做，就会按顺序加载这些内容，如果图片没加载出来就无法继续向上滑动，软件就会显得很卡。多线程，就可以解决该问题。滑动和加载图片分开。</li></ul></li><li>需要一些后台运行的程序时：比如Java需要后台一直运行GC垃圾回收。</li></ul><h2 id="iii-扩展-内存" tabindex="-1"><a class="header-anchor" href="#iii-扩展-内存" aria-hidden="true">#</a> Ⅲ. 扩展：内存</h2><h4 id="_1-数据" tabindex="-1"><a class="header-anchor" href="#_1-数据" aria-hidden="true">#</a> 1. 数据</h4><p>存在于内存中可读，可操纵的东西，一切皆数据，函数也是数据。</p><p>内存存在的意义，就是对数据进行操作，（硬盘才是储存数据的）。</p><h4 id="_2-内存" tabindex="-1"><a class="header-anchor" href="#_2-内存" aria-hidden="true">#</a> 2. 内存</h4><h5 id="_2-1-内存条的空间" tabindex="-1"><a class="header-anchor" href="#_2-1-内存条的空间" aria-hidden="true">#</a> 2.1 内存条的空间</h5><p>内存条通电后产生的存储空间(临时的)就是内存，内存是临时性的储存，是有生命周期的。</p><h5 id="_2-2-内存的生命周期" tabindex="-1"><a class="header-anchor" href="#_2-2-内存的生命周期" aria-hidden="true">#</a> 2.2 内存的生命周期</h5><p>内存条==》通电==》产生内存空间==》储存数据==》断电==》内存空间和数据都消失</p><h5 id="_2-3-内存储存的数据类型" tabindex="-1"><a class="header-anchor" href="#_2-3-内存储存的数据类型" aria-hidden="true">#</a> 2.3 内存储存的数据类型</h5><ul><li>数据：直接储存数据【普通类型】</li><li>内存地址：储存其他内存块的地址【引用类型】。</li></ul><h5 id="_2-4-内存空间的基本分类" tabindex="-1"><a class="header-anchor" href="#_2-4-内存空间的基本分类" aria-hidden="true">#</a> 2.4 内存空间的基本分类</h5><ul><li>栈：全局变量和局部变量的值和对象的地址储存在这里。</li><li>堆：对象储存在这里。</li></ul><h4 id="_3-变量" tabindex="-1"><a class="header-anchor" href="#_3-变量" aria-hidden="true">#</a> 3. 变量</h4><p>值的标识符，该标识符是可变的，就称为变量，一个变量对应一小块内存，他的值保存在内存中，即内存中的数据==变量的值</p><h4 id="_4-变量名-标识符" tabindex="-1"><a class="header-anchor" href="#_4-变量名-标识符" aria-hidden="true">#</a> 4. 变量名（标识符）</h4><p>内存中储存的是变量的值，变量的名是不会储存的，变量的名可以理解为内存的地址标识。</p><p>变量名是给我们程序员操作内存来使用的。比如我们定义了一个全局的int a;那么编译器都为我们做了什么呢？它会为程序预留4个字节的空间（假设在32位平台），并把我们的变量名“a”保存进符号表，并用这个符号表的索引对应实际的空间。这是写编译器需要做的，我们需要建立符号表。变量名编译后，变成一个内存地址，这个内存地址一般是直接存在于代码段中</p><h4 id="_5-内存、数据、变量间的关系" tabindex="-1"><a class="header-anchor" href="#_5-内存、数据、变量间的关系" aria-hidden="true">#</a> 5. 内存、数据、变量间的关系</h4><p>内存是容器, 用来存储不同数据；</p><p>变量是内存的标识, 通过变量我们可以操作(读/写)内存中的数据；</p><h4 id="_6-垃圾回收" tabindex="-1"><a class="header-anchor" href="#_6-垃圾回收" aria-hidden="true">#</a> 6. 垃圾回收</h4><p>当一个对象，没有任何的变量或属性对它进行引用，此时我们将永远无法操作该对象，此时这种对象就是一个垃圾。这种对象过多，会占用大量的内存空间，导致程序运行过慢，所以需要进行清理。</p><h4 id="_7-内存溢出和泄露" tabindex="-1"><a class="header-anchor" href="#_7-内存溢出和泄露" aria-hidden="true">#</a> 7. 内存溢出和泄露</h4><ul><li>溢出：一种程序运行出现的错误，当程序运行需要的内存超过了剩余的内存时, 就出抛出内存溢出的错误。</li><li>泄露：占用的内存没有及时释放，内存泄露积累多了就容易导致内存溢出。</li></ul>',59),n=[l];function c(t,s){return i(),e("div",null,n)}const _=a(d,[["render",c],["__file","5-1.概念.html.vue"]]);export{_ as default};
