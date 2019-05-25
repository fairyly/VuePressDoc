(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{214:function(n,s,t){"use strict";t.r(s);var r=t(0),a=Object(r.a)({},function(){var n=this,s=n.$createElement,t=n._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"_4-1-8-归并排序-稳定排序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-8-归并排序-稳定排序","aria-hidden":"true"}},[n._v("#")]),n._v(" 4.1.8 归并排序 (稳定排序)")]),n._v(" "),t("ul",[t("li",[n._v("时间复杂度：O(n log n)")]),n._v(" "),t("li",[n._v("空间复杂度： O(n)")])]),n._v(" "),t("blockquote",[t("p",[n._v("思路：分治策略，先进行划分，然后再进行合并。"),t("br"),n._v("\n假设要对数组C进行归并排序，步骤是："),t("br"),n._v("\n1.先将C划分为两个数组A和B（即把数组C从中间分开）"),t("br"),n._v("\n2.再分别对数组A、B重复步骤1的操作，逐步划分，直到不能再划分为止(每个子数组只剩下一个元素)，这样，划分的过程就结束了。")])]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("如：              [12 20 30 21 15 33 26 19 40 25]\n划分为:  [12 20 30 21 15]                [33 26 19 40 25]\n           [12 20]      [30 21 15]       [33 26]       [19 40 25]\n         [12]  [20]   [30]  [21 15]     [33]  [26]    [19]    [40 25]\n         [12]  [20]   [30] [21] [15]    [33]  [26]    [19]   [40] [25]\n\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br")])]),t("p",[n._v("3.然后从下层往上层不断合并数组，每一层合并相邻的两个子数组，"),t("br"),n._v("\n合并的过程是每次从待合并的两个子数组中选取一个最小的元素，"),t("br"),n._v("\n然后把这个元素放到合并后的数组中，不断重复直到把两个子数组的元素都放到合并后的数组为止。")]),n._v(" "),t("p",[n._v("4.依次类推，直到合并到最上层结束，这时数据的排序已经完成了")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function merge(left, right) {\n    let result = [];\n   \twhile(left.length > 0 && right.length > 0) {\n       if(left[0] < right[0]) {\n           result.push(left.shift());\n       }\n       else {\n           result.push(right.shift());\n       }\n   }\n   /* 当左右数组长度不等.将比较完后剩下的数组项链接起来即可 */\n   return result.concat(left).concat(right);\n}\n\nfunction mergeSort(arr){\n\t\tif(arr.length===1) {return arr};\n\t\tlet mid=Math.floor(arr.length/2);\n\t\tlet left_arr = arr.slice(0,mid);\n    let right_arr = arr.slice(mid);\n    \n\t\treturn merge(mergeSort(left_arr),mergeSort(right_arr));\n\t}\n \nlet arr = [12,20,30,21,15,33,26,19,40,25];\nmergeSort(arr);\n// [12, 15, 19, 20, 21, 25, 26, 30, 33, 40]\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br"),t("span",{staticClass:"line-number"},[n._v("16")]),t("br"),t("span",{staticClass:"line-number"},[n._v("17")]),t("br"),t("span",{staticClass:"line-number"},[n._v("18")]),t("br"),t("span",{staticClass:"line-number"},[n._v("19")]),t("br"),t("span",{staticClass:"line-number"},[n._v("20")]),t("br"),t("span",{staticClass:"line-number"},[n._v("21")]),t("br"),t("span",{staticClass:"line-number"},[n._v("22")]),t("br"),t("span",{staticClass:"line-number"},[n._v("23")]),t("br"),t("span",{staticClass:"line-number"},[n._v("24")]),t("br"),t("span",{staticClass:"line-number"},[n._v("25")]),t("br"),t("span",{staticClass:"line-number"},[n._v("26")]),t("br")])]),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[n._v("#")]),n._v(" 参考")]),n._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://blog.csdn.net/fendou_dexiaoniao/article/details/46594125",target:"_blank",rel:"noopener noreferrer"}},[n._v("JS实现归并排序"),t("OutboundLink")],1)])])])},[],!1,null,null,null);s.default=a.exports}}]);