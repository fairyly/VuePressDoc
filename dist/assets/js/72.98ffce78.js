(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{203:function(s,n,a){"use strict";a.r(n);var r=a(0),e=Object(r.a)({},function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_4-1-9-二分查找"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-9-二分查找","aria-hidden":"true"}},[s._v("#")]),s._v(" 4.1.9 二分查找")]),s._v(" "),a("blockquote",[a("p",[s._v("二分法查找，也称折半查找，是一种在有序数组中查找特定元素的搜索算法。查找过程可以分为以下步骤："),a("br"),s._v("\n（1）首先，从有序数组的中间的元素开始搜索，如果该元素正好是目标元素（即要查找的元素），则搜索过程结束，否则进行下一步。"),a("br"),s._v("\n（2）如果目标元素大于或者小于中间元素，则在数组大于或小于中间元素的那一半区域查找，然后重复第一步的操作。"),a("br"),s._v("\n（3）如果某一步数组为空，则表示找不到目标元素。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" // 非递归算法\n        function binary_search(arr, key) {\n            var low = 0,\n                high = arr.length - 1;\n            while(low <= high){\n                var mid = parseInt((high + low) / 2);\n                if(key == arr[mid]){\n                    return  mid;\n                }else if(key > arr[mid]){\n                    low = mid + 1;\n                }else if(key < arr[mid]){\n                    high = mid -1;\n                }else{\n                    return -1;\n                }\n            }\n        };\n        var arr = [1,2,3,4,5,6,7,8,9,10,11,23,44,86];\n        var result = binary_search(arr,10);\n        alert(result); // 9 返回目标元素的索引值       \n\n\n\n\n==================================================\n\n    // 递归算法\n        function binary_search(arr,low, high, key) {\n            if (low > high){\n                return -1;\n            }\n            var mid = parseInt((high + low) / 2);\n            if(arr[mid] == key){\n                return mid;\n            }else if (arr[mid] > key){\n                high = mid - 1;\n                return binary_search(arr, low, high, key);\n            }else if (arr[mid] < key){\n                low = mid + 1;\n                return binary_search(arr, low, high, key);\n            }\n        };\n        var arr = [1,2,3,4,5,6,7,8,9,10,11,23,44,86];\n        var result = binary_search(arr, 0, 13, 10);\n        alert(result); // 9 返回目标元素的索引值  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br")])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("ul",[a("li")])])},[],!1,null,null,null);n.default=e.exports}}]);