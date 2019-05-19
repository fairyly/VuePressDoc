(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{188:function(s,n,a){"use strict";a.r(n);var e=a(0),t=Object(e.a)({},function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_3-3-1-async-await原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-async-await原理","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.3.1 Async---Await原理")]),s._v(" "),a("blockquote",[a("p",[s._v("async、await 优缺点:\nasync 和 await 相比直接使用 Promise 来说，优势在于处理 then 的调用链，能够更清晰准确的写出代码。"),a("br"),s._v("\n缺点在于滥用 await 可能会导致性能问题，"),a("br"),s._v("\n因为 await 会阻塞代码，也许之后的异步代码并不依赖于前者，但仍然需要等待前者完成，导致代码失去了并发性。"),a("br"),s._v("\n链接：https://juejin.im/post/5ba34e54e51d450e5162789b")])]),s._v(" "),a("h1",{attrs:{id:"async详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#async详解","aria-hidden":"true"}},[s._v("#")]),s._v(" async详解")]),s._v(" "),a("blockquote",[a("p",[s._v("async 函数的实现原理，就是将 Generator 函数和自动执行器，包装在一个函数里。")])]),s._v(" "),a("p",[s._v('Thunk 函数的定义，它是"传名调用"的一种实现策略，用来替换某个表达式')]),s._v(" "),a("h2",{attrs:{id:"es6-generators-的工作原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6-generators-的工作原理","aria-hidden":"true"}},[s._v("#")]),s._v(" ES6 Generators 的工作原理")]),s._v(" "),a("blockquote",[a("p",[s._v("Generator 函数是 ES6 提供的一种异步编程解决方案,"),a("br"),s._v("\n语法上，首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态。")])]),s._v(" "),a("blockquote",[a("p",[s._v("执行 Generator 函数会返回一个遍历器对象，"),a("br"),s._v("\n也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。"),a("br"),s._v("\n返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function* test() {\n  yield 'a';\n}\n\ntest.next(); // value: \"a\", done: false}\n\n调用 Generator 函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象，也就是遍历器对象（Iterator Object）。\n每次调用遍历器对象的next方法，就会返回一个有着value和done两个属性的对象。   \nvalue属性表示当前的内部状态的值，是yield表达式后面那个表达式的值； \ndone属性是一个布尔值，表示是否遍历结束\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("ul",[a("li",[s._v('传统的编程语言，早有异步编程的解决方案（其实是多任务的解决方案）。其中有一种叫做"协程"（coroutine），意思是多个线程互相协作，完成异步任务。\n'),a("ul",[a("li",[s._v("Generator 函数是协程在 ES6 的实现，最大特点就是可以交出函数的执行权（即暂停执行）")])])])]),s._v(" "),a("h2",{attrs:{id:"async-函数的实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#async-函数的实现","aria-hidden":"true"}},[s._v("#")]),s._v(" async 函数的实现")]),s._v(" "),a("p",[s._v("async 函数的实现，就是将 Generator 函数和自动执行器，包装在一个函数里。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("async function fn(args){\n  // ...\n}\n\n// 等同于\n\nfunction fn(args){ \n  return spawn(function*() {\n    // ...\n  }); \n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("所有的 async 函数都可以写成上面的第二种形式，其中的 spawn 函数就是自动执行器。")]),s._v(" "),a("p",[s._v("下面给出 spawn 函数的实现，基本就是前文自动执行器的翻版。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function spawn(genF) {\n  return new Promise(function(resolve, reject) {\n    var gen = genF();\n    function step(nextF) {\n      try {\n        var next = nextF();\n      } catch(e) {\n        return reject(e); \n      }\n      if(next.done) {\n        return resolve(next.value);\n      } \n      Promise.resolve(next.value).then(function(v) {\n        step(function() { return gen.next(v); });      \n      }, function(e) {\n        step(function() { return gen.throw(e); });\n      });\n    }\n    step(function() { return gen.next(undefined); });\n  });\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介","aria-hidden":"true"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("async 函数是什么？一句话，它就是 Generator 函数的语法糖。")]),s._v(" "),a("p",[s._v("generator 函数需要通过调用next()方法，才能往后执行到下一个yield，但是 async 函数却不需要，它能够自动向后执行")]),s._v(" "),a("p",[s._v("await 可以理解为是 async wait 的简写。await 必须出现在 async 函数内部，不能单独使用")]),s._v(" "),a("p",[s._v("await 字面上使得 JavaScript 等待，直到 promise 处理完成，然后将结果继续下去。")]),s._v(" "),a("p",[s._v("await不能工作在顶级作用域，需要将await代码包裹在一个async函数中")])]),s._v(" "),a("li",[a("p",[s._v("demo")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("前文有一个 Generator 函数，依次读取两个文件。\n\nconst fs = require('fs');\n\nconst readFile = function (fileName) {\n  return new Promise(function (resolve, reject) {\n    fs.readFile(fileName, function(error, data) {\n      if (error) return reject(error);\n      resolve(data);\n    });\n  });\n};\n\nconst gen = function* () {\n  const f1 = yield readFile('/etc/fstab');\n  const f2 = yield readFile('/etc/shells');\n  console.log(f1.toString());\n  console.log(f2.toString());\n};\n==================================\n写成async函数，就是下面这样。\n\nconst asyncReadFile = async function () {\n  const f1 = await readFile('/etc/fstab');\n  const f2 = await readFile('/etc/shells');\n  console.log(f1.toString());\n  console.log(f2.toString());\n};\n\n一比较就会发现，async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await，仅此而已。\n\nasync函数对 Generator 函数的改进\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])]),a("ul",[a("li",[s._v("当一个 async 函数中有多个 await命令时，如果不想因为一个出错而导致其与的都无法执行，应将await放在try...catch语句中执行")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("async function testAwait () {\n    try {\n        await func1()\n        await func2()\n        await func3()\n    } catch (error) {\n        console.log(error)\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("ul",[a("li",[s._v("并发执行 await 命令: await 是顺序执行的,Promise.all() 是并行的")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 方法 1\nlet [res1, res2] = await Promise.all([func1(), func2()])\n\n// 方法 2\nlet func1Promise = func1()\nlet func2Promise = func2()\nlet res1 = await func1Promise\nlet res2 = await func2Promise\n\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("ul",[a("li",[s._v("async方法： 一个class方法同样能够使用async，只需要将async放在它之前就可以")])]),s._v(" "),a("p",[s._v("就像这样：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Waiter {\n   async wait () {\n       return await Promise.resolve(1)\n   }\n}\nnew Waiter().wait().then(alert) // 1\n\n=======================\n\n# Class methods:\nclass Storage {\n  constructor() {\n    this.cachePromise = caches.open('avatars');\n  }\n\n  async getAvatar(name) {\n    const cache = await this.cachePromise;\n    return cache.match(`/avatars/${name}.jpg`);\n  }\n}\n\nconst storage = new Storage();\nstorage.getAvatar('jaffathecake').then(…);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("ul",[a("li",[s._v("sleep(): 让线程休眠一段时间")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// wait ms milliseconds\nfunction wait(ms) {\n  return new Promise(r => setTimeout(r, ms));\n}\n\nasync function hello() {\n  await wait(500);\n  return 'world';\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"举例说明啊，你有三个请求需要发生，第三个请求是依赖于第二个请求的解构第二个请求依赖于第一个请求的结果。若用-es5实现会有3层的回调，若用promise-实现至少需要3个then。一个是代码横向发展，另一个是纵向发展。今天指给出-async-await-的实现哈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举例说明啊，你有三个请求需要发生，第三个请求是依赖于第二个请求的解构第二个请求依赖于第一个请求的结果。若用-es5实现会有3层的回调，若用promise-实现至少需要3个then。一个是代码横向发展，另一个是纵向发展。今天指给出-async-await-的实现哈","aria-hidden":"true"}},[s._v("#")]),s._v(" 举例说明啊，你有三个请求需要发生，第三个请求是依赖于第二个请求的解构第二个请求依赖于第一个请求的结果。若用 ES5实现会有3层的回调，若用Promise 实现至少需要3个then。一个是代码横向发展，另一个是纵向发展。今天指给出 async-await 的实现哈~")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("//我们仍然使用 setTimeout 来模拟异步请求\nfunction sleep(second, param) {\n    return new Promise((resolve, reject) => {\n        setTimeout(() => {\n            resolve(param);\n        }, second);\n    })\n}\n\nasync function test() {\n    let result1 = await sleep(2000, 'req01');\n    let result2 = await sleep(1000, 'req02' + result1);\n    let result3 = await sleep(500, 'req03' + result2);\n    console.log(`\n        ${result3}\n        ${result2}\n        ${result1}\n    `);\n}\n\ntest();\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("h2",{attrs:{id:"egg-中控制器写法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#egg-中控制器写法","aria-hidden":"true"}},[s._v("#")]),s._v(" egg 中控制器写法")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const Controller = require('egg').Controller;\n\nclass NewsController extends Controller {\n  async list() {\n    // const dataList = {\n    //   list: [\n    //     { id: 1, title: 'this is news 1', url: '/news/1' },\n    //     { id: 2, title: 'this is news 2', url: '/news/2' }\n    //   ]\n    // };\n    // await this.ctx.render('news/list.tpl', dataList);\n    const ctx = this.ctx;\n    const page = ctx.query.page || 1;\n    const newsList = await ctx.service.news.list(page);\n    await ctx.render('news/list.tpl', { list: newsList });\n  }\n}\n\nmodule.exports = NewsController;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("h2",{attrs:{id:"for-循环中使用-async-await"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-循环中使用-async-await","aria-hidden":"true"}},[s._v("#")]),s._v(" for 循环中使用 async/await")]),s._v(" "),a("blockquote",[a("p",[s._v("曾经 vue 中在 forEach 中使用 await 会报错，就换成 for of;\n不能在常规函数里使用 await\n如果我们试图在非 async 函数里使用 await，就会出现一个语法错误：")])]),s._v(" "),a("ul",[a("li",[s._v("foreach 是同步操作并发操作,可以支持,需要稍微改造下 forEach：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('demo:\nfunction test(a) {\n  return new Promise(function(resolve,reject){\n    if (a){\n      resolve(true);\n    } else {\n      reject(false);\n    }\n  })\n}\n\nasync function demo() {\n let data = [{id:1},{id:2}];\n let flag = true\n data.forEach(function(ele,index) {\n   if(ele.id == 2) {\n     flag = await test(false);  // 这样写相当于 await 不在 async 异步函数内\n   }\n })\n \n console.log(flag)\n if(!flag) {\n    console.log(666,"信息未填写完")\n    return false;\n }\n  // 继续下面\n}\n\ndemo()\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("ul",[a("li",[s._v("demo")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function timeout(ms) {\n  return new Promise((resolve) => {\n    setTimeout(resolve, ms);\n  });\n}\n\nasync function test(value, ms) {\n  await timeout(ms);\n  console.log(value)\n}\n\nasyncPrint('hello world', 50);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("ul",[a("li",[s._v("参考\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://www.zhihu.com/question/53466898",target:"_blank",rel:"noopener noreferrer"}},[s._v("JavaScript forEach 不支持 async/await？"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://objcer.com/2017/10/12/async-await-with-forEach/",target:"_blank",rel:"noopener noreferrer"}},[s._v("当 async/await 遇上 forEach"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://hacks.mozilla.org/2015/04/es6-in-depth-iterators-and-the-for-of-loop/",target:"_blank",rel:"noopener noreferrer"}},[s._v("ES6 In Depth: Iterators and the for-of loop"),a("OutboundLink")],1)])])])]),s._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/await",target:"_blank",rel:"noopener noreferrer"}},[s._v(" MDN-await "),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/async",target:"_blank",rel:"noopener noreferrer"}},[s._v("es6-async"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"http://es6.ruanyifeng.com/?search=%E9%80%97%E5%8F%B7&x=0&y=0#docs/generator",target:"_blank",rel:"noopener noreferrer"}},[s._v("es6-generator"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://developers.google.com/web/fundamentals/primers/async-functions",target:"_blank",rel:"noopener noreferrer"}},[s._v("Google Web Fundamentals"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("https://github.com/nswbmw/node-in-debugging/blob/master/3.2%20Async%20%2B%20Await.md")]),s._v(" "),a("li",[s._v("https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function")]),s._v(" "),a("li",[s._v("https://www.jianshu.com/p/5fb1586b9164")]),s._v(" "),a("li",[s._v("https://github.com/tc39/ecmascript-asyncawait")]),s._v(" "),a("li",[a("a",{attrs:{href:"https://javascript.info/async-await",target:"_blank",rel:"noopener noreferrer"}},[s._v("async-await"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("router-link",{attrs:{to:"/interview/www.ruanyifeng.com/blog/2015/05/async.html"}},[s._v("async 函数的含义和用法")])],1),s._v(" "),a("li",[a("a",{attrs:{href:"http://imweb.io/topic/5b3b7d624d378e703a4f4437",target:"_blank",rel:"noopener noreferrer"}},[s._v("当async/await遇上forEach"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop",target:"_blank",rel:"noopener noreferrer"}},[s._v("using-async-await-with-a-foreach-loop"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/wangshijun/course-javascript-async-await",target:"_blank",rel:"noopener noreferrer"}},[s._v("玩转异步 JS ：async/await 简明教程"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:""}})])])])},[],!1,null,null,null);n.default=t.exports}}]);