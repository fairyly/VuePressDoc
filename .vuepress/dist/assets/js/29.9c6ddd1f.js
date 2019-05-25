(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{247:function(a,s,t){"use strict";t.r(s);var n=t(0),e=Object(n.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"_2-1-5-react-图表库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-5-react-图表库","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.1.5 react 图表库")]),a._v(" "),t("blockquote",[t("p",[a._v("常用的图表库有：echarts、Antv(G2)、chartjs 不过打包的文件都很大有 几兆，"),t("br"),a._v("\n还有 D3.js, 一些封装的图表库")])]),a._v(" "),t("h2",{attrs:{id:"_1-echarts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-echarts","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.echarts")]),a._v(" "),t("blockquote",[t("p",[a._v("百度团队的开源的图表库，"),t("br"),a._v("\n但是打包出来的文件大")])]),a._v(" "),t("h4",{attrs:{id:"_1-1-echarts-使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-echarts-使用","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.1 echarts 使用")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# install\nnpm install --save echarts\n\n\n# usage\n\n/**\n * 首页\n */\n\nimport React, { Component } from 'react';\n\n// 引入 ECharts 主模块\nimport echarts from 'echarts/lib/echarts';\n// 引入柱状图\nimport  'echarts/lib/chart/bar';\n// 引入提示框和标题组件\nimport 'echarts/lib/component/tooltip';\nimport 'echarts/lib/component/title';\n\nclass HomeIndex extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      size: 'default',\n      loading: false,\n      iconLoading: false\n    };\n  }\n\n  componentDidMount() {\n    // 基于准备好的dom，初始化echarts实例\n    let myChart = echarts.init(document.getElementById('main'));\n    // 指定图表的配置项和数据\n    let option = {\n      title: { text: 'ECharts 柱状图示例' },\n      tooltip: {},\n      xAxis: {\n        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']\n      },\n      yAxis: {},\n      series: [{\n        name: '销量',\n        type: 'bar',\n        data: [5, 20, 36, 10, 10, 20]\n      }]\n    };\n    // 绘制图表\n    myChart.setOption(option);\n  }\n\n  render() {\n    return (\n      <div>\n        <div className=\"content\">\n          <div className=\"content-header\">首页</div>\n          <div className=\"content-body \">\n            <div id=\"main\" style={{ width: 400, height: 400 }}></div>\n          </div>\n        </div>\n      </div>\n    );\n  }\n}\n\nexport default HomeIndex;\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br"),t("span",{staticClass:"line-number"},[a._v("24")]),t("br"),t("span",{staticClass:"line-number"},[a._v("25")]),t("br"),t("span",{staticClass:"line-number"},[a._v("26")]),t("br"),t("span",{staticClass:"line-number"},[a._v("27")]),t("br"),t("span",{staticClass:"line-number"},[a._v("28")]),t("br"),t("span",{staticClass:"line-number"},[a._v("29")]),t("br"),t("span",{staticClass:"line-number"},[a._v("30")]),t("br"),t("span",{staticClass:"line-number"},[a._v("31")]),t("br"),t("span",{staticClass:"line-number"},[a._v("32")]),t("br"),t("span",{staticClass:"line-number"},[a._v("33")]),t("br"),t("span",{staticClass:"line-number"},[a._v("34")]),t("br"),t("span",{staticClass:"line-number"},[a._v("35")]),t("br"),t("span",{staticClass:"line-number"},[a._v("36")]),t("br"),t("span",{staticClass:"line-number"},[a._v("37")]),t("br"),t("span",{staticClass:"line-number"},[a._v("38")]),t("br"),t("span",{staticClass:"line-number"},[a._v("39")]),t("br"),t("span",{staticClass:"line-number"},[a._v("40")]),t("br"),t("span",{staticClass:"line-number"},[a._v("41")]),t("br"),t("span",{staticClass:"line-number"},[a._v("42")]),t("br"),t("span",{staticClass:"line-number"},[a._v("43")]),t("br"),t("span",{staticClass:"line-number"},[a._v("44")]),t("br"),t("span",{staticClass:"line-number"},[a._v("45")]),t("br"),t("span",{staticClass:"line-number"},[a._v("46")]),t("br"),t("span",{staticClass:"line-number"},[a._v("47")]),t("br"),t("span",{staticClass:"line-number"},[a._v("48")]),t("br"),t("span",{staticClass:"line-number"},[a._v("49")]),t("br"),t("span",{staticClass:"line-number"},[a._v("50")]),t("br"),t("span",{staticClass:"line-number"},[a._v("51")]),t("br"),t("span",{staticClass:"line-number"},[a._v("52")]),t("br"),t("span",{staticClass:"line-number"},[a._v("53")]),t("br"),t("span",{staticClass:"line-number"},[a._v("54")]),t("br"),t("span",{staticClass:"line-number"},[a._v("55")]),t("br"),t("span",{staticClass:"line-number"},[a._v("56")]),t("br"),t("span",{staticClass:"line-number"},[a._v("57")]),t("br"),t("span",{staticClass:"line-number"},[a._v("58")]),t("br"),t("span",{staticClass:"line-number"},[a._v("59")]),t("br"),t("span",{staticClass:"line-number"},[a._v("60")]),t("br"),t("span",{staticClass:"line-number"},[a._v("61")]),t("br"),t("span",{staticClass:"line-number"},[a._v("62")]),t("br"),t("span",{staticClass:"line-number"},[a._v("63")]),t("br"),t("span",{staticClass:"line-number"},[a._v("64")]),t("br"),t("span",{staticClass:"line-number"},[a._v("65")]),t("br"),t("span",{staticClass:"line-number"},[a._v("66")]),t("br"),t("span",{staticClass:"line-number"},[a._v("67")]),t("br")])]),t("blockquote",[t("p",[a._v("如果需要引入其他的图，需要先 import, 如引入折线图： "),t("code",[a._v("import 'echarts/lib/chart/line';")]),t("br"),a._v("\n具体其他使用参考： "),t("a",{attrs:{href:"https://echarts.baidu.com/tutorial.html#5%20%E5%88%86%E9%92%9F%E4%B8%8A%E6%89%8B%20ECharts",target:"_blank",rel:"noopener noreferrer"}},[a._v("echarts 文档"),t("OutboundLink")],1)])]),a._v(" "),t("ul",[t("li",[a._v("更多配置项和数据参考： "),t("a",{attrs:{href:"https://echarts.baidu.com/examples/",target:"_blank",rel:"noopener noreferrer"}},[a._v("示例"),t("OutboundLink")],1)])]),a._v(" "),t("blockquote",[t("p",[a._v("下面是 github 上封装好的一个 组件：")])]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/hustcc/echarts-for-react",target:"_blank",rel:"noopener noreferrer"}},[a._v("hustcc/echarts-for-react"),t("OutboundLink")],1),a._v(":echarts-for-react 是一个非常简单的针对于 React 的 Echarts 封装插件。\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://git.hust.cc/echarts-for-react/#/?_k=d82r19",target:"_blank",rel:"noopener noreferrer"}},[a._v("demo"),t("OutboundLink")],1)])])])]),a._v(" "),t("h2",{attrs:{id:"_2-antv-g2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-antv-g2","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.Antv(G2)")]),a._v(" "),t("blockquote",[t("p",[a._v("蚂蚁金服团队开源图表库，在 react 中使用有个封装好的库 BizCharts，")])]),a._v(" "),t("h4",{attrs:{id:"_2-1-bizcharts-使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-bizcharts-使用","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.1 BizCharts 使用")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# install\n\nnpm install bizcharts --save\n\n使用参考网站的示例即可\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/antvis/g2",target:"_blank",rel:"noopener noreferrer"}},[a._v("antvis/g2"),t("OutboundLink")],1),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("demo"),t("OutboundLink")],1)])])]),a._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/alibaba/BizCharts",target:"_blank",rel:"noopener noreferrer"}},[a._v("react-BizCharts"),t("OutboundLink")],1),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://bizcharts.net/products/bizCharts/demo/detail?id=line-basic&selectedKey=%E6%8A%98%E7%BA%BF%E5%9B%BE",target:"_blank",rel:"noopener noreferrer"}},[a._v("示例"),t("OutboundLink")],1)])])])]),a._v(" "),t("h2",{attrs:{id:"_3-chartjs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-chartjs","aria-hidden":"true"}},[a._v("#")]),a._v(" 3.chartjs")]),a._v(" "),t("blockquote",[t("p",[a._v("适用于小项目，它使用HTML5 canvas元素渲染图表，并且使用polyfills方式兼容在IE7/8上运行。所有图表都是可响应的。"),t("br"),a._v("\n实际上打包出来文件的也大")])]),a._v(" "),t("h4",{attrs:{id:"install"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[a._v("#")]),a._v(" install")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm install --save chart.js@^1.1.1\nnpm install --save react-chartjs\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/reactjs/react-chartjs",target:"_blank",rel:"noopener noreferrer"}},[a._v("reactjs/react-chartjs"),t("OutboundLink")],1),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.jianshu.com/p/a1e2397ca508",target:"_blank",rel:"noopener noreferrer"}},[a._v("使用参考 demo"),t("OutboundLink")],1)])])])]),a._v(" "),t("h2",{attrs:{id:"_4-recharts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-recharts","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.recharts")]),a._v(" "),t("blockquote",[t("p",[a._v("是一个用 React 和 D3 构建的图表库,能帮助你在 React 应用中轻松绘制图表")])]),a._v(" "),t("h2",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# install\n\nnpm install recharts\n\n\n具体使用参考示例即可 \n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/recharts/recharts",target:"_blank",rel:"noopener noreferrer"}},[a._v("recharts/recharts"),t("OutboundLink")],1),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://recharts.org/en-US/examples",target:"_blank",rel:"noopener noreferrer"}},[a._v("demo"),t("OutboundLink")],1)])])])]),a._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/esbullington/react-d3",target:"_blank",rel:"noopener noreferrer"}},[a._v("esbullington/react-d3"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/codesuki/react-d3-components",target:"_blank",rel:"noopener noreferrer"}},[a._v("codesuki/react-d3-components"),t("OutboundLink")],1)])])])},[],!1,null,null,null);s.default=e.exports}}]);