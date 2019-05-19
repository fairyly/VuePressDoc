(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{246:function(t,e,r){"use strict";r.r(e);var s=r(0),a=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"_3-1-0-js-严格模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-0-js-严格模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.1.0 JS 严格模式")]),t._v(" "),r("h2",{attrs:{id:"为脚本开启严格模式节"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为脚本开启严格模式节","aria-hidden":"true"}},[t._v("#")]),t._v(" 为脚本开启严格模式节")]),t._v(" "),r("p",[t._v("为整个脚本文件开启严格模式，需要在所有语句之前放一个特定语句 "),r("code",[t._v('"use strict";')]),t._v(" （或 "),r("code",[t._v("'use strict';")]),t._v("）")]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('// 整个脚本都开启严格模式的语法\n"use strict";\nvar v = "Hi!  I\'m a strict mode script!";\n')])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br")])]),r("h2",{attrs:{id:"为函数开启严格模式节"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为函数开启严格模式节","aria-hidden":"true"}},[t._v("#")]),t._v(" 为函数开启严格模式节")]),t._v(" "),r("p",[t._v("同样的，要给某个函数开启严格模式，得把 "),r("code",[t._v('"use strict";')]),t._v(" (或"),r("code",[t._v("'use strict';")]),t._v(" )声明一字不漏地放在函数体所有语句之前。")]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('function strict(){\n  // 函数级别严格模式语法\n  \'use strict\';\n  function nested() { return "And so am I!"; }\n  return "Hi!  I\'m a strict mode function!  " + nested();\n}\nfunction notStrict() { return "I\'m not strict."; }\n')])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br"),r("span",{staticClass:"line-number"},[t._v("6")]),r("br"),r("span",{staticClass:"line-number"},[t._v("7")]),r("br")])]),r("h2",{attrs:{id:"js-严格模式-use-strict"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#js-严格模式-use-strict","aria-hidden":"true"}},[t._v("#")]),t._v(" js 严格模式 'use strict'")]),t._v(" "),r("ul",[r("li",[t._v('设立"严格模式"的目的，主要有以下几个：\n'),r("ul",[r("li",[t._v("消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;")]),t._v(" "),r("li",[t._v("消除代码运行的一些不安全之处，保证代码运行的安全；")]),t._v(" "),r("li",[t._v("提高编译器效率，增加运行速度；")]),t._v(" "),r("li",[t._v("为未来新版本的Javascript做好铺垫。")])])])]),t._v(" "),r("h2",{attrs:{id:"严格模式中的变化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#严格模式中的变化","aria-hidden":"true"}},[t._v("#")]),t._v(" 严格模式中的变化")]),t._v(" "),r("ul",[r("li",[t._v("严格模式下无法再意外创建全局变量: 严格模式中意外创建全局变量被抛出错误替代")]),t._v(" "),r("li",[t._v("严格模式会使引起静默失败(silently fail,注:不报错也没有任何效果)的赋值操抛出异常")]),t._v(" "),r("li",[t._v("在严格模式下, 试图删除不可删除的属性时会抛出异常")]),t._v(" "),r("li",[t._v("在Gecko版本34之前，严格模式要求一个对象内的所有属性名在对象内必须唯一")]),t._v(" "),r("li",[t._v("严格模式要求函数的参数名唯一")]),t._v(" "),r("li",[t._v("严格模式禁止八进制数字语法")]),t._v(" "),r("li",[t._v("ECMAScript 6中的严格模式禁止设置primitive值的属性")]),t._v(" "),r("li")]),t._v(" "),r("h2",{attrs:{id:"简化变量的使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简化变量的使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 简化变量的使用")]),t._v(" "),r("ul",[r("li",[t._v("严格模式禁用 with.")]),t._v(" "),r("li",[t._v("严格模式下的 eval 不再为上层范围(surrounding scope,注:包围eval代码块的范围)引入新变量.")]),t._v(" "),r("li",[t._v("严格模式禁止删除声明变量")]),t._v(" "),r("li",[t._v("严格模式让arguments和eval少了一些奇怪的行为")]),t._v(" "),r("li",[t._v("严格模式下，参数的值不会随 arguments 对象的值的改变而变化")]),t._v(" "),r("li",[t._v("不再支持 arguments.callee。正常模式下，arguments.callee 指向当前正在执行的函数。（这意味着，你无法在匿名函数内部调用自身了。）")])]),t._v(" "),r("h2",{attrs:{id:"参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN-严格模式"),r("OutboundLink")],1)])]),t._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2013/01/javascript_strict_mode.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Javascript 严格模式详解"),r("OutboundLink")],1)])]),t._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://github.com/fairyly/front-end-summary/blob/gh-pages/4.0.2%20js%20%E4%B8%A5%E6%A0%BC%E6%A8%A1%E5%BC%8F%20'use%20strict'.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("4.0.2 js 严格模式 'use strict'.md"),r("OutboundLink")],1)])])])])},[],!1,null,null,null);e.default=a.exports}}]);