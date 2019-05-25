(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{209:function(n,s,a){"use strict";a.r(s);var t=a(0),r=Object(t.a)({},function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"_4-1-9-桶排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-9-桶排序","aria-hidden":"true"}},[n._v("#")]),n._v(" 4.1.9 桶排序")]),n._v(" "),a("blockquote",[a("p",[n._v("思想：桶排序是计数排序的升级版。它利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。"),a("br"),n._v("\n为了使桶排序更加高效，我们需要做到这两点："),a("br"),n._v("\n在额外空间充足的情况下，尽量增大桶的数量"),a("br"),n._v("\n使用的映射函数能够将输入的N个数据均匀的分配到K个桶中")])]),n._v(" "),a("blockquote",[a("p",[n._v("同时，对于桶中元素的排序，选择何种比较排序算法对于性能的影响至关重要。")])]),n._v(" "),a("blockquote",[a("p",[n._v("什么时候最快（Best Cases）："),a("br"),n._v("\n当输入的数据可以均匀的分配到每一个桶中")])]),n._v(" "),a("blockquote",[a("p",[n._v("什么时候最慢（Worst Cases）："),a("br"),n._v("\n当输入的数据被分配到了同一个桶中\n|")])]),n._v(" "),a("p",[n._v("设置固定空桶数"),a("br"),n._v("\n将数据放到对应的空桶中"),a("br"),n._v("\n将每个不为空的桶进行排序"),a("br"),n._v("\n拼接不为空的桶中的数据，得到结果")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function bucketSort(arr, bucketSize) {\n    if (arr.length === 0) {\n      return arr;\n    }\n \n    var i;\n    var minValue = arr[0];\n    var maxValue = arr[0];\n    for (i = 1; i < arr.length; i++) {\n      if (arr[i] < minValue) {\n          minValue = arr[i];                //输入数据的最小值\n      } else if (arr[i] > maxValue) {\n          maxValue = arr[i];                //输入数据的最大值\n      }\n    }\n \n    //桶的初始化\n    var DEFAULT_BUCKET_SIZE = 5;            //设置桶的默认数量为5\n    bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;\n    var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;   \n    var buckets = new Array(bucketCount);\n    for (i = 0; i < buckets.length; i++) {\n        buckets[i] = [];\n    }\n \n    //利用映射函数将数据分配到各个桶中\n    for (i = 0; i < arr.length; i++) {\n        buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);\n    }\n \n    arr.length = 0;\n    for (i = 0; i < buckets.length; i++) {\n        insertionSort(buckets[i]);                      //对每个桶进行排序，这里使用了插入排序\n        for (var j = 0; j < buckets[i].length; j++) {\n            arr.push(buckets[i][j]);                      \n        }\n    }\n \n    return arr;\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br")])]),a("h2",{attrs:{id:"维基百科-javascript实现算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#维基百科-javascript实现算法","aria-hidden":"true"}},[n._v("#")]),n._v(" 维基百科: JavaScript实现算法")]),n._v(" "),a("p",[n._v("分类\t排序算法"),a("br"),n._v("\n数据结构\t数组"),a("br"),n._v("\n最坏时间复杂度\t O(n^{2})"),a("br"),n._v("\n平均时间复杂度\t O(n+k)"),a("br"),n._v("\n最坏空间复杂度\t O(n*k)")]),n._v(" "),a("blockquote",[a("p",[n._v("桶排序以下列程序进行："),a("br"),n._v("\n设置一个定量的数组当作空桶子。"),a("br"),n._v("\n寻访序列，并且把项目一个一个放到对应的桶子去。"),a("br"),n._v("\n对每个不是空的桶子进行排序。"),a("br"),n._v("\n从不是空的桶子里把项目再放回原来的序列中。")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("\nArray.prototype.bucketSort = function(num) {\n  function swap(arr, i, j) {\n    const temp = arr[i]\n    arr[i] = arr[j]\n    arr[j] = temp\n  }\n  const max = Math.max(...this)\n  const min = Math.min(...this)\n  const buckets = []\n  const bucketsSize = Math.floor((max - min) / num) + 1\n  for(let i = 0; i < this.length; i++) {\n    const index = ~~(this[i] / bucketsSize)\n    !buckets[index] && (buckets[index] = [])\n    buckets[index].push(this[i])\n    let l = buckets[index].length\n    while(l > 0) {\n      buckets[index][l] < buckets[index][l - 1] && swap(buckets[index], l, l - 1)\n      l--\n    }\n  }\n  let wrapBuckets = []\n  for(let i = 0; i < buckets.length; i++) {\n    buckets[i] && (wrapBuckets = wrapBuckets.concat(buckets[i]))\n  }\n  return wrapBuckets\n}\nconst arr = [11, 9, 6, 8, 1, 3, 5, 1, 1, 0, 100]\nconsole.log(arr.bucketSort(10))\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br")])]),a("h2",{attrs:{id:"操作步骤说明："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤说明：","aria-hidden":"true"}},[n._v("#")]),n._v(" 操作步骤说明：")]),n._v(" "),a("p",[a("img",{attrs:{src:"http://blog.fens.me/wp-content/uploads/2014/06/bucketsort.png",alt:""}})]),n._v(" "),a("ol",[a("li",[n._v("设置桶的数量为5个空桶，找到最大值110，最小值7，每个桶的范围20.8=(110-7+1)/5 。")]),n._v(" "),a("li",[n._v("遍历原始数据，以链表结构，放到对应的桶中。数字7，桶索引值为0，计算公式为floor((7 – 7) / 20.8)， 数字36，桶索引值为1，计算公式floor((36 – 7) / 20.8)。")]),n._v(" "),a("li",[n._v("当向同一个索引的桶，第二次插入数据时，判断桶中已存在的数字与新插入数字的大小，按照左到右，从小到大的顺序插入。如：索引为2的桶，在插入63时，桶中已存在4个数字56，59，60，65，则数字63，插入到65的左边。")]),n._v(" "),a("li",[n._v("合并非空的桶，按从左到右的顺序合并0，1，2，3，4桶。")]),n._v(" "),a("li",[n._v("得到桶排序的结构")])]),n._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[n._v("#")]),n._v(" 参考")]),n._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.csdn.net/liaozhongping/article/details/72764366",target:"_blank",rel:"noopener noreferrer"}},[n._v("JS的十大经典算法排序--桶排序（Bucket Sort)"),a("OutboundLink")],1)]),n._v(" "),a("li",[a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E6%A1%B6%E6%8E%92%E5%BA%8F",target:"_blank",rel:"noopener noreferrer"}},[n._v("wiki---桶排序"),a("OutboundLink")],1)]),n._v(" "),a("li",[a("a",{attrs:{href:"http://blog.fens.me/algorithm-bucketsort-nodejs/",target:"_blank",rel:"noopener noreferrer"}},[n._v("桶排序的Nodejs实现"),a("OutboundLink")],1)])])])},[],!1,null,null,null);s.default=r.exports}}]);