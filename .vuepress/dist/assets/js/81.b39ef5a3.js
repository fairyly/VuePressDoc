(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{189:function(e,a,s){"use strict";s.r(a);var t=s(0),r=Object(t.a)({},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"_5-1-2-node-常见面试题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-2-node-常见面试题","aria-hidden":"true"}},[e._v("#")]),e._v(" 5.1.2 node 常见面试题")]),e._v(" "),s("h2",{attrs:{id:"_1-node-异步单线程原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-node-异步单线程原理","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.Node 异步单线程原理")]),e._v(" "),s("h3",{attrs:{id:"node-js-的结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-js-的结构","aria-hidden":"true"}},[e._v("#")]),e._v(" Node.js 的结构")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/tvEoHIulOU6O97KhZyY16AXcrlX8qrCibXv3bk317tXKlSYUBNQicD9obpP1DjT627ed6QebGsW5ia3ICX4MzWkaw/640?wx_fmt=jpeg",alt:""}})]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Node.js 标准库，这部分是由 Javascript编写的，即我们使用过程中直接能调用的 API。在源码中的 lib 目录下可以看到。\n\nNode bindings，这一层是 Javascript与底层 C/C++ 能够沟通的关键，前者通过 bindings 调用后者，相互交换数据。\n实现在 node.cc 这一层是支撑 Node.js 运行的关键，由 C/C++ 实现。\n\nV8：Google 推出的 Javascript VM，也是 Node.js 为什么使用的是 Javascript的关键，  \n它为 Javascript提供了在非浏览器端运行的环境，它的高效是 Node.js 之所以高效的原因之一。\n\nLibuv：它为 Node.js 提供了跨平台，线程池，事件池，异步 I/O 等能力，是 Node.js 如此强大的关键。\n\nC-ares：提供了异步处理 DNS 相关的能力。\n\nhttp_parser、OpenSSL、zlib 等：提供包括 http 解析、SSL、数据压缩等其他的能力。\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br")])]),s("h3",{attrs:{id:"与操作系统交互"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#与操作系统交互","aria-hidden":"true"}},[e._v("#")]),e._v(" 与操作系统交互")]),e._v(" "),s("p",[e._v("举个简单的例子，我们想要打开一个文件，并进行一些操作，可以写下面这样一段代码：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("var fs = require('fs');\nfs.open('./test.txt', \"w\", function(err, fd) {    //..do something});\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("这段代码的调用过程大致可描述为："),s("code",[e._v("lib/fs.js → src/node_file.cc → uv_fs")])]),e._v(" "),s("h3",{attrs:{id:"单线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单线程","aria-hidden":"true"}},[e._v("#")]),e._v(" 单线程")]),e._v(" "),s("blockquote",[s("p",[e._v("Node.js的单线程指的是主线程是“单线程”，由主要线程去按照编码顺序一步步执行程序代码，"),s("br"),e._v("\n假如遇到同步代码阻塞，主线程被占用，后续的程序代码执行就会被卡住。")])]),e._v(" "),s("h3",{attrs:{id:"为什么一个单线程的效率可以这么高，同时处理数万级的并发而不会造成阻塞呢？就是我们下面所说的-事件驱动。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么一个单线程的效率可以这么高，同时处理数万级的并发而不会造成阻塞呢？就是我们下面所说的-事件驱动。","aria-hidden":"true"}},[e._v("#")]),e._v(" 为什么一个单线程的效率可以这么高，同时处理数万级的并发而不会造成阻塞呢？就是我们下面所说的--------事件驱动。")]),e._v(" "),s("h3",{attrs:{id:"事件驱动-事件循环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件驱动-事件循环","aria-hidden":"true"}},[e._v("#")]),e._v(" 事件驱动/事件循环")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('1、每个Node.js进程只有一个主线程在执行程序代码，形成一个执行栈（execution context stack)。\n2、主线程之外，还维护了一个"事件队列"（Event queue）。当用户的网络请求或者其它的异步操作到来时，node都会把它放到Event Queue之中，  \n  此时并不会立即执行它，代码也不会被阻塞，继续往下走，直到主线程代码执行完毕。\n3、主线程代码执行完毕完成后，然后通过Event Loop，也就是事件循环机制，开始到Event Queue的开头取出第一个事件，  \n  从线程池中分配一个线程去执行这个事件，接下来继续取出第二个事件，再从线程池中分配一个线程去执行，然后第三个，第四个。  \n  主线程不断的检查事件队列中是否有未执行的事件，直到事件队列中所有事件都执行完了，  \n  此后每当有新的事件加入到事件队列中，都会通知主线程按顺序取出交EventLoop处理。  \n  当有事件执行完毕后，会通知主线程，主线程执行回调，线程归还给线程池。\n4、主线程不断重复上面的第三步。\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("blockquote",[s("p",[e._v("我们所看到的node.js单线程只是一个js主线程，本质上的异步操作还是由线程池完成的，"),s("br"),e._v("\nnode将所有的阻塞操作都交给了内部的线程池去实现，"),s("br"),e._v("\n本身只负责不断的往返调度，并没有进行真正的I/O操作，\n从而实现异步非阻塞I/O，"),s("br"),e._v("\n这便是node单线程和事件驱动的精髓之处了。")])]),e._v(" "),s("h3",{attrs:{id:"libuv"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#libuv","aria-hidden":"true"}},[e._v("#")]),e._v(" libuv")]),e._v(" "),s("blockquote",[s("p",[e._v("Node.js采用V8作为js的解析引擎，而I/O处理方面使用了自己设计的libuv，"),s("br"),e._v("\nlibuv是一个基于事件驱动的跨平台抽象层，封装了不同操作系统一些底层特性，对外提供统一的API，"),s("br"),e._v("\n事件循环机制也是它里面的实现")])]),e._v(" "),s("h3",{attrs:{id:"event-loop的执行顺序："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-loop的执行顺序：","aria-hidden":"true"}},[e._v("#")]),e._v(" Event Loop的执行顺序：")]),e._v(" "),s("p",[s("strong",[e._v("HTML5标准规定了setTimeout()的第二个参数的最小值（最短间隔），不得低于4毫秒，如果低于这个值，就会自动增加")])]),e._v(" "),s("p",[e._v("每次事件循环都包含了6个阶段，对应到 libuv 源码中的实现")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("timers 阶段：这个阶段执行timer（setTimeout、setInterval）的回调\n\nI/O callbacks 阶段：执行一些系统调用错误，比如网络通信的错误回调\n\nidle, prepare 阶段：仅node内部使用\n\npoll 阶段：获取新的I/O事件, 适当的条件下node将阻塞在这里\n\ncheck 阶段：执行setImmediate()的回调\n\nclose callbacks 阶段：执行socket的close事件回调。\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br")])]),s("h2",{attrs:{id:"_2-node-如何多进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-node-如何多进程","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.Node 如何多进程")]),e._v(" "),s("h2",{attrs:{id:"_3-co-模块原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-co-模块原理","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.co 模块原理")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://blog.csdn.net/qiqingjin/article/details/51873329",target:"_blank",rel:"noopener noreferrer"}},[e._v("Co-实现原理分析"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://www.jianshu.com/p/e9640b41c4cd",target:"_blank",rel:"noopener noreferrer"}},[e._v("Thunkify源码，Co源码以及与Koa的理解"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/panyifei/Front-end-learning/blob/master/Nodejs/Nodejs%E6%A1%86%E6%9E%B6%E6%A8%A1%E5%9D%97/Co%E6%BA%90%E7%A0%81%E4%BB%A5%E5%8F%8A%E4%B8%8EKoa%E7%9A%84%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Co源码以及与Koa的深入理解"),s("OutboundLink")],1)])]),e._v(" "),s("blockquote",[s("p",[e._v("那么co就有两种实现方式，promise或者thunk。co4.0之前是用thunk实现的，之后是用promise实现的。"),s("br"),e._v("\n一种机制，在一个异步操作执行完毕以后通知下一个异步操作开始执行")])]),e._v(" "),s("h2",{attrs:{id:"_4-node-的特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-node-的特点","aria-hidden":"true"}},[e._v("#")]),e._v(" 4.node 的特点")]),e._v(" "),s("ul",[s("li",[e._v("异步 I/O")]),e._v(" "),s("li",[e._v("事件循环")]),e._v(" "),s("li",[e._v("单线程")]),e._v(" "),s("li",[e._v("跨平台")])]),e._v(" "),s("h3",{attrs:{id:"node-引入模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-引入模块","aria-hidden":"true"}},[e._v("#")]),e._v(" node 引入模块")]),e._v(" "),s("blockquote",[s("p",[e._v("优先从缓存加载")])]),e._v(" "),s("ul",[s("li",[e._v("文件定位")]),e._v(" "),s("li",[e._v("路径分析")]),e._v(" "),s("li",[e._v("编译执行")])]),e._v(" "),s("blockquote",[s("p",[e._v("epoll 是Linux内核为处理大批量文件描述符而作了改进的 poll"),s("br"),e._v("\npoll: 在一定时间内轮流看一遍里面有没有数据要读写")])]),e._v(" "),s("h3",{attrs:{id:"node-异步-i-o-模型基本要素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-异步-i-o-模型基本要素","aria-hidden":"true"}},[e._v("#")]),e._v(" node 异步 I/O 模型基本要素")]),e._v(" "),s("ul",[s("li",[e._v("事件循环")]),e._v(" "),s("li",[e._v("观察者")]),e._v(" "),s("li",[e._v("请求对象")]),e._v(" "),s("li",[e._v("I/O 线程池")])]),e._v(" "),s("h3",{attrs:{id:"node-非异步-i-o-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-非异步-i-o-api","aria-hidden":"true"}},[e._v("#")]),e._v(" node 非异步 I/O API")]),e._v(" "),s("ul",[s("li",[e._v("setTimeout")]),e._v(" "),s("li",[e._v("setInterval")]),e._v(" "),s("li",[e._v("setImmediate")]),e._v(" "),s("li",[e._v("process.nextTick()")])]),e._v(" "),s("h2",{attrs:{id:"node-异步编程解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-异步编程解决方案","aria-hidden":"true"}},[e._v("#")]),e._v(" node 异步编程解决方案")]),e._v(" "),s("ul",[s("li",[e._v("事件发布/订阅者模式")]),e._v(" "),s("li",[e._v("Promise/Deferred 模式")]),e._v(" "),s("li",[e._v("流程控制库")])]),e._v(" "),s("p",[e._v("++++++++++++++++++++++++++++++++++++++++++++++++++"),s("br"),e._v("\n++++++++++++++++++++++++++++++++++++++++++++++++++")]),e._v(" "),s("h2",{attrs:{id:"_1-什么是错误优先的回调函数？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是错误优先的回调函数？","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.什么是错误优先的回调函数？")]),e._v(" "),s("p",[e._v("错误优先的回调函数用于传递错误和数据。第一个参数始终应该是一个错误对象， 用于检查程序是否发生了错误。其余的参数用于传递数据。例如：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("fs.readFile(filePath, function(err, data) {  \n    if (err) {\n        //handle the error\n    }\n    // use the data object\n});\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("h2",{attrs:{id:"_2-如何避免回调地狱"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何避免回调地狱","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.如何避免回调地狱")]),e._v(" "),s("p",[e._v("你可以有如下几个方法：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("模块化：将回调函数分割为独立的函数\n使用Promises\n使用yield\n来计算生成器或Promise\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("h2",{attrs:{id:"_3-如何用node监听80端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-如何用node监听80端口","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.如何用Node监听80端口")]),e._v(" "),s("p",[e._v("这题有陷阱！在类Unix系统中你不应该尝试去监听80端口，因为这需要超级用户权限。 因此不推荐让你的应用直接监听这个端口。")]),e._v(" "),s("p",[e._v("目前，如果你一定要让你的应用监听80端口的话，你可以有通过在Node应用的前方再增加一层反向代理 （例如nginx）来实现")]),e._v(" "),s("h2",{attrs:{id:"_4-什么是事件循环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-什么是事件循环","aria-hidden":"true"}},[e._v("#")]),e._v(" 4.什么是事件循环")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2014/10/event-loop.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScript 运行机制详解：再谈Event Loop"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://cnodejs.org/topic/5ab3166be7b166bb7b9eccf7",target:"_blank",rel:"noopener noreferrer"}},[e._v("狼叔：如何正确的学习Node.js"),s("OutboundLink")],1)])]),e._v(" "),s("blockquote",[s("p",[e._v("Node采用的是单线程的处理机制（所有的I/O请求都采用非阻塞的工作方式），"),s("br"),e._v("\n至少从Node.js开发者的角度是这样的。"),s("br"),e._v("\n而在底层，Node.js借助libuv来作为抽象封装层， 从而屏蔽不同操作系统的差异，"),s("br"),e._v("\nNode可以借助livuv来来实现多线程。")])]),e._v(" "),s("blockquote",[s("p",[e._v("Libuv库负责Node API的执行。它将不同的任务分配给不同的线程，形成一个事件循环， 以异步的方式将任务的执行结果返回给V8引擎。")])]),e._v(" "),s("p",[s("img",{attrs:{src:"https://static.cnodejs.org/FkTMjCoX4xyL0rJtmm7oBc6V0i8W",alt:""}})]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Node.js的运行机制如下。\n\n（1）V8引擎解析JavaScript脚本。\n\n（2）解析后的代码，调用Node API。\n\n（3）libuv库负责Node API的执行。它将不同的任务分配给不同的线程，形成一个Event Loop（事件循环），以异步的方式将任务的执行结果返回给V8引擎。\n\n（4）V8引擎再将结果返回给用户。\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("h4",{attrs:{id:"核心概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#核心概念","aria-hidden":"true"}},[e._v("#")]),e._v(" 核心概念")]),e._v(" "),s("ul",[s("li",[e._v("Chrome V8 是 Google 发布的开源 JavaScript 引擎，采用 C/C++ 编写，在 Google 的 Chrome 浏览器中被使用。"),s("br"),e._v("\nChrome V8 引擎可以独立运行，也可以用来嵌入到 C/C++ 应用程序中执行。")]),e._v(" "),s("li",[e._v("Event Loop 事件循环（由 libuv 提供）")]),e._v(" "),s("li",[e._v("Thread Pool 线程池（由 libuv 提供）")])]),e._v(" "),s("h2",{attrs:{id:"_5-什么是stub？举个使用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-什么是stub？举个使用场景","aria-hidden":"true"}},[e._v("#")]),e._v(" 5.什么是Stub？举个使用场景")]),e._v(" "),s("p",[e._v("Stub是用于模拟一个组件或模块的函数或程序。在测试用例中， 简单的说，"),s("br"),e._v("\n你可以用Stub去模拟一个方法，从而避免调用真实的方法， 使用Stub你还可以返回虚构的结果。你可以配合断言使用Stub。\n举个例子，在一个读取文件的场景中，当你不想读取一个真正的文件时：")]),e._v(" "),s("h3",{attrs:{id:"单元测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单元测试","aria-hidden":"true"}},[e._v("#")]),e._v(" 单元测试")]),e._v(" "),s("ul",[s("li",[e._v("参考："),s("a",{attrs:{href:"https://segmentfault.com/a/1190000002921481",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nodejs单元测试小结"),s("OutboundLink")],1)])]),e._v(" "),s("blockquote",[s("p",[e._v("单元测试根据主流的分类可以分成两类，分别是BDD和TDD")])]),e._v(" "),s("h2",{attrs:{id:"_6-什么是测试金字塔？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-什么是测试金字塔？","aria-hidden":"true"}},[e._v("#")]),e._v(" 6.什么是测试金字塔？")]),e._v(" "),s("p",[e._v("测试金字塔指的是： 当我们在编写测试用例时，底层的单元测试应该远比上层的端到端测试要多。")]),e._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.jianshu.com/p/3416a0bf309c",target:"_blank",rel:"noopener noreferrer"}},[e._v("常见的Node.js面试题"),s("OutboundLink")],1),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://blog.risingstack.com/node-js-interview-questions/",target:"_blank",rel:"noopener noreferrer"}},[e._v("node-js-interview-questions"),s("OutboundLink")],1)])])])])])},[],!1,null,null,null);a.default=r.exports}}]);