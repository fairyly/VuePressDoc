(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{220:function(s,n,a){"use strict";a.r(n);var t=a(0),r=Object(t.a)({},function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_3-4-2-js-设计模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-2-js-设计模式","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.4.2 js 设计模式")]),s._v(" "),a("h2",{attrs:{id:"发布-订阅者模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布-订阅者模式","aria-hidden":"true"}},[s._v("#")]),s._v(" 发布/订阅者模式")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var pubsub = (()=>{  \n  var topics = {}; \n  function subscribe(topic,fn){    \n    if(!topics[topic]){\n      topics[topic] = [];  \n    }\n    topics[topic].push(fn);\n  }  \n\n  function publish(topic,...args){    \n    if(!topics[topic])      \n      return;    \n    for(let fn of topics[topic]){\n      fn(...args);  \n    }\n  } \n  return {\n    subscribe,\n    publish\n  }\n})()\n\n\npubsub.subscribe('test',function(a,b){  //订阅者A订阅了test事件\n  console.log(a,b);    \n});\n\npubsub.publish('test','123','HH'); \n\n// 123 HH\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("blockquote",[a("p",[s._v("在观察者模式中，观察者需要直接订阅目标事件。在目标发出内容改变的事件后，直接接收事件并作出响应。"),a("br"),s._v("\n发布订阅模式相比观察者模式多了个事件通道，订阅者和发布者不是直接关联的。"),a("br"),s._v("\n这段话可以看出上面的例子是发布订阅模式。订阅者A和发布者B是通过pubsub这个对象关联起来的，他们没有直接的交流。")])]),s._v(" "),a("ul",[a("li",[s._v("参考\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://www.imooc.com/article/40305",target:"_blank",rel:"noopener noreferrer"}},[s._v("观察者模式和发布/订阅模式真不一样"),a("OutboundLink")],1)])])])]),s._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:""}},[s._v("理解 Javascript 中常用的一些设计模式")])]),s._v(" "),a("li",[a("a",{attrs:{href:"https://fairyly.github.io/mybooks/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E4%B8%8E%E5%BC%80%E5%8F%91%E5%AE%9E%E8%B7%B5.pdf",target:"_blank",rel:"noopener noreferrer"}},[s._v("JavaScript设计模式与开发实践.pdf"),a("OutboundLink")],1)])])])},[],!1,null,null,null);n.default=r.exports}}]);