(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{238:function(t,e,a){"use strict";a.r(e);var n=a(0),r=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_3-2-1-js-事件流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-js-事件流","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.2.1 JS 事件流")]),t._v(" "),a("blockquote",[a("p",[t._v("事件是文档或者浏览器窗口中发生的，特定的交互瞬间。"),a("br"),t._v("\n事件是用户或浏览器自身执行的某种动作，如click,load和mouseover都是事件的名字。"),a("br"),t._v("\n事件是javaScript和DOM之间交互的桥梁。")])]),t._v(" "),a("h2",{attrs:{id:"事件流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件流","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件流")]),t._v(" "),a("blockquote",[a("p",[t._v("事件流描述的是从页面中接收事件的顺序。")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("1.冒泡型事件流：事件的传播是从最特定的事件目标到最不特定的事件目标。即从DOM树的叶子到根。【推荐】")])]),t._v(" "),a("li",[a("p",[t._v("2.捕获型事件流：事件的传播是从最不特定的事件目标到最特定的事件目标。即从DOM树的根到叶子。")])])]),t._v(" "),a("blockquote",[a("p",[t._v("IE的事件流叫做事件冒泡。即事件开始时由最具体的元素（文档中嵌套层次最深的那个节点）接收，然后逐级向上传播到较为不具体的节点（文档）。"),a("br"),t._v("\n所有现代浏览器都支持事件冒泡，并且会将事件一直冒泡到window对象。")])]),t._v(" "),a("blockquote",[a("p",[t._v("事件捕获的思想是不太具体的节点应该更早的接收到事件，而在最具体的节点应该最后接收到事件。事件捕获的用以在于事件到达预定目标之前捕获它。")])]),t._v(" "),a("h2",{attrs:{id:"_3-dom事件流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-dom事件流","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.DOM事件流")]),t._v(" "),a("blockquote",[a("p",[t._v("“DOM2级事件”规定事件流包括三个阶段，事件捕获阶段、处于目标阶段和事件冒泡阶段。"),a("br"),t._v("\n首先发生的事件捕获，为截获事件提供了机会。然后是实际的目标接收了事件。"),a("br"),t._v("\n最后一个阶段是冒泡阶段，可以在这个阶段对事件做出响应。")])]),t._v(" "),a("h2",{attrs:{id:"dom0级事件处理程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dom0级事件处理程序","aria-hidden":"true"}},[t._v("#")]),t._v(" DOM0级事件处理程序")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('var myBtn=document.getElementById("myBtn");\nmyBtn.onclick=function(){\n  alert("clicked!");\n}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h2",{attrs:{id:"dom2级事件处理程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dom2级事件处理程序","aria-hidden":"true"}},[t._v("#")]),t._v(" DOM2级事件处理程序")]),t._v(" "),a("p",[t._v("定义了两个方法用于添加和删除事件处理程序：addEventListener()和removeEventListener()。")]),t._v(" "),a("p",[t._v("所有的DOM节点都包含这2个方法。")]),t._v(" "),a("p",[t._v("这两个方法都需要3个参数：事件名，事件处理函数，布尔值。")]),t._v(" "),a("p",[t._v("这个布尔值为true,在捕获阶段处理事件，为false，在冒泡阶段处理事件，默认为false。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('var myBtn=document.getElementById("myBtn");\n\nmyBtn.addEventListener("click",function(){\n    alert("hello");\n},false);\n\nmyBtn.addEventListener("click",function(){\n    alert("world");\n},false);\n\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("h2",{attrs:{id:"dom-事件中-target-currenttarget"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dom-事件中-target-currenttarget","aria-hidden":"true"}},[t._v("#")]),t._v(" dom 事件中 target,currentTarget")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('1. target:触发事件的某个具体对象，只会出现在事件流的目标阶段（谁触发谁命中，所以肯定是目标阶段）\n2. currentTarget:绑定事件的对象，恒等于this，可能出现在事件流的任意一个阶段中\n3. 通常情况下terget和currentTarget是一致的，我们只要使用terget即可，  \n但有一种情况必须区分这三者的关系，那就是在父子嵌套的关系中，父元素绑定了事件，单击了子元素  \n（根据事件流，在不阻止事件流的前提下他会传递至父元素，导致父元素的事件处理函数执行），  \n这时候currentTarget指向的是父元素，因为他是绑定事件的对象，而target指向了子元素，因为他是触发事件的那个具体对象，如下代码和截图所示：\n\n<div id="one">\n   <div id="three"></div>\n</div>\n\none.addEventListener(\'click\',function(e){\n    console.log(e.target);  //three\n    console.log(e.currentTarget);  //one\n},false);\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("ul",[a("li",[t._v("参考： "),a("a",{attrs:{href:"https://www.cnblogs.com/54td/p/5936816.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("js事件、事件流以及target、currentTarget、this那些事"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/starof/p/4066381.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("javaScript事件（一）事件流"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://fairyly.github.io/mybooks/JavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1%EF%BC%88%E7%AC%AC3%E7%89%88%EF%BC%89%E4%B8%AD%E6%96%87%20%E9%AB%98%E6%B8%85%20%E5%AE%8C%E6%95%B4.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("事件流"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000012729080",target:"_blank",rel:"noopener noreferrer"}},[t._v("你真的理解事件冒泡和事件捕获吗？"),a("OutboundLink")],1)])])])])},[],!1,null,null,null);e.default=r.exports}}]);