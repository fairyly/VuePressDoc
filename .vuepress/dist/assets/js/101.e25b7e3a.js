(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{218:function(n,r,s){"use strict";s.r(r);var a=s(0),t=Object(a.a)({},function(){var n=this,r=n.$createElement,s=n._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"_4-1-5-快速排序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-5-快速排序","aria-hidden":"true"}},[n._v("#")]),n._v(" 4.1.5 快速排序")]),n._v(" "),s("ul",[s("li",[n._v("时间复杂度：O(nlog n)")]),n._v(" "),s("li",[n._v("空间复杂度：O(log n)")])]),n._v(" "),s("blockquote",[s("p",[n._v("思想："),s("br"),n._v("\n1、找基准（一般是以中间项为基准）"),s("br"),n._v("\n2、遍历数组，小于基准的放在left，大于基准的放在right"),s("br"),n._v("\n3、递归")])]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("var quickSort = function(arr) {\n　　if (arr.length <= 1) {//如果数组长度小于等于1无需判断直接返回即可 \n        return arr;\n    }\n　　var pivotIndex = Math.floor(arr.length / 2);//取基准点 \n　　var pivot = arr.splice(pivotIndex, 1)[0];//取基准点的值,splice(index,1)函数可以返回数组中被删除的那个数\n　　var left = [];//存放比基准点小的数组\n　　var right = [];//存放比基准点大的数组 \n　　for (var i = 0; i < arr.length; i++){ //遍历数组，进行判断分配 \n　　　　if (arr[i] < pivot) {\n　　　　　　left.push(arr[i]);//比基准点小的放在左边数组 \n　　　　} else {\n　　　　　　right.push(arr[i]);//比基准点大的放在右边数组 \n　　　　}\n　　}\n         //递归执行以上操作,对左右两个数组进行操作，直到数组长度为<=1； \n　　return quickSort(left).concat([pivot], quickSort(right));\n};\n\n使用的时候，直接调用quickSort()就行了。\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br")])]),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[n._v("#")]),n._v(" 参考")]),n._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Quicksort",target:"_blank",rel:"noopener noreferrer"}},[n._v("wiki- Quicksort"),s("OutboundLink")],1)])])])},[],!1,null,null,null);r.default=t.exports}}]);