(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{239:function(n,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"_3-1-9-js-函数柯里化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-9-js-函数柯里化","aria-hidden":"true"}},[n._v("#")]),n._v(" 3.1.9 JS 函数柯里化")]),n._v(" "),a("h2",{attrs:{id:"js中的柯里化-currying"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js中的柯里化-currying","aria-hidden":"true"}},[n._v("#")]),n._v(" JS中的柯里化(currying)")]),n._v(" "),a("blockquote",[a("p",[n._v("柯里化（Currying），又称部分求值（Partial Evaluation），函数闭包的一种特殊形式"),a("br"),n._v("\n是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，"),a("br"),n._v("\n并且返回接受余下的参数而且返回结果的新函数的技术")])]),n._v(" "),a("p",[n._v("柯里化有3个常见作用：1. 参数复用；2. 提前返回；3. 延迟计算/运行")]),n._v(" "),a("ul",[a("li",[n._v("把函数参数转换到一个数组中\n"),a("ul",[a("li",[n._v("var args = Array.prototype.slice.call(arguments)或者")]),n._v(" "),a("li",[n._v("var args = [].slice.call(arguments)")])])])]),n._v(" "),a("p",[n._v("1.参数复用实例")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('var currying = function(fn) {\n    // fn 指官员消化老婆的手段\n    var args = [].slice.call(arguments, 1);\n    // args 指的是那个合法老婆\n    return function() {\n        // 已经有的老婆和新搞定的老婆们合成一体，方便控制\n        var newArgs = args.concat([].slice.call(arguments));\n        // 这些老婆们用 fn 这个手段消化利用，完成韦小宝前辈的壮举并返回\n        return fn.apply(null, newArgs);\n    };\n};\n\n// 下为官员如何搞定7个老婆的测试\n// 获得合法老婆\nvar getWife = currying(function() {\n    var allWife = [].slice.call(arguments);\n    // allwife 就是所有的老婆的，包括暗渡陈仓进来的老婆\n    console.log(allWife.join(";"));\n}, "合法老婆");\n\n// 获得其他6个老婆\ngetWife("大老婆","小老婆","俏老婆","刁蛮老婆","乖老婆","送上门老婆");\n\n// 换一批老婆\ngetWife("超越韦小宝的老婆");\n\n===========================================\n\nvar curryWeight = function(fn) {\n    var _fishWeight = [];\n    return function() {\n        if (arguments.length === 0) {\n            return fn.apply(null, _fishWeight);\n        } else {\n            _fishWeight = _fishWeight.concat([].slice.call(arguments));\n        }\n    }\n};\nvar fishWeight = 0;\nvar addWeight = curryWeight(function() {\n    var i=0; len = arguments.length;\n    for (i; i<len; i+=1) {\n        fishWeight += arguments[i];\n    }\n});\n\naddWeight(2.3);\naddWeight(6.5);\naddWeight(1.2);\naddWeight(2.5);\naddWeight();    //  这里才计算\n\nconsole.log(fishWeight);    // 12.5\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br"),a("span",{staticClass:"line-number"},[n._v("53")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[n._v("“提前返回”")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('var addEvent = (function(){\n    if (window.addEventListener) {\n        return function(el, sType, fn, capture) {\n            el.addEventListener(sType, function(e) {\n                fn.call(el, e);\n            }, (capture));\n        };\n    } else if (window.attachEvent) {\n        return function(el, sType, fn, capture) {\n            el.attachEvent("on" + sType, function(e) {\n                fn.call(el, e);\n            });\n        };\n    }\n})();\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[n._v("“延迟计算”")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("var averageWeight = 0;\nvar addWeight = curryWeight(function() {\n    var i=0; len = arguments.length;\n    for (i; i<len; i+=1) {\n        averageWeight += arguments[i]/len;\n    }\n});\n\naddWeight(2.3);\naddWeight(6.5);\naddWeight(1.2);\naddWeight(2.5);\naddWeight();    //  这里才计算\n\nconsole.log(averageWeight);    // 3.125\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br")])]),a("h2",{attrs:{id:"uncurry-反柯里化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uncurry-反柯里化","aria-hidden":"true"}},[n._v("#")]),n._v(" uncurry(反柯里化)")]),n._v(" "),a("ul",[a("li",[n._v("uncurrying 函数")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('var obj = {\n    "length":1,\n    "0":1\n}\nFunction.prototype.uncurrying = function() {\n    var self = this;\n    return function() {\n        return Function.prototype.call.apply(self, arguments);\n}\n}\n\nvar push = Array.prototype.push.uncurrying()\n\npush(obj, 2) //{0: 1, 1: 2, length: 2}\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br")])]),a("ul",[a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/chaky/articles/9059207.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("关于Function.prototype.call.apply理解"),a("OutboundLink")],1)]),n._v(" "),a("li",[a("a",{attrs:{href:"http://www.cnblogs.com/hustskyking/archive/2013/04/09/uncurrying.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("javascript中有趣的反柯里化"),a("OutboundLink")],1)])]),n._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[n._v("#")]),n._v(" 参考")]),n._v(" "),a("ul",[a("li",[a("a",{attrs:{href:""}})]),n._v(" "),a("li",[a("a",{attrs:{href:"http://www.zhangxinxu.com/wordpress/2013/02/js-currying/",target:"_blank",rel:"noopener noreferrer"}},[n._v("张鑫旭:js-currying"),a("OutboundLink")],1)])])])},[],!1,null,null,null);s.default=r.exports}}]);