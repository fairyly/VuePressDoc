# 深入 React 

## 1.函数式编程才是 React 的精髓


## 2.JSX

>React 官方在早期为 JSX 语法解析开发了一套编译器 JSTransform，目前已经不再维护，  
现在已全部采用 Babel 的 JSX 编译器实现。因为两者在功能上完全重复，  
而 Babel 作为专门的JavaScript语法编译工具，提供了更为强大的功能，达到了“一处配置，统一运行”的目的。

>除了使用 JSX 语法，我们还可以使用 React.createElement() 和 React.cloneElement() 来构建 React 元素。


  - 2.1 虚拟元素可以理解为真实元素的对应，它的构建与更新都是在内存中完成的，并不会真正渲染到 DOM 中去。  
     在 React 中创建的虚拟元素可以分为两类，  
     DOM 元素（DOM element）与组件元素（component element），分别对应着原生 DOM 元素与自定义元素
  
      >元素类型: DOM 元素和组件元素,    
      对应规则是 HTML 标签首字母是否为小写字母，其中小写首字母对应 DOM   元素，而组件元素自然对应大写首字母;   
      JSX 还可以通过命名空间的方式使用组件元素，以解决组件相同名称冲突的问题，或是对一组组件进行归类
  
    - 2.1.1 DOM 元素

    - 2.1.2 组件元素

 - 2.2 JSX 基本语法  

   - 2.2.1 定义标签时，只允许被一个标签包裹  
   - 2.2.2 标签一定要闭合  
   - 2.2.3 元素类型: DOM 元素和组件元素, HTML 标签首字母是否为小写字母，其中小写首字母对应 DOM 元素，而组件元素自然对应大写首字母
   - 2.2.4 使用注释要用 {} 包起来
   - 2.2.5 元素属性  
     - class 属性改为 className；    
     - for 属性改为 htmlFor;    
      写自定义属性的时候，都由标准写法改为小驼峰写法 ;  
     - Boolean 属性：要传 false 时，必须使用属性表达式。
    
        ```
        例如，<Checkbox checked={true} /> 可以简写为 <Checkbox checked />，  
        反之 <Checkbox checked={false} /> 就可以省略 checked 属性。
        ```

     - 展开属性：可以使用 ES6 rest/spread 特性来提高效率：
    
        ```
        const data = { name: 'foo', value: 'bar' };
        const component = <Component name={data.name} value={data.value} />;
        可以写成：
        const data = { name: 'foo', value: 'bar' };
        const component = <Component {...data} />; 
        ```
     - 自定义 HTML 属性
       ```
        如果在 JSX 中往 DOM 元素中传入自定义属性，React 是不会渲染的：
        <div d="xxx">content</div>
        
        如果要使用 HTML 自定义属性，要使用 data- 前缀，这与 HTML 标准也是一致的：
        <div data-attr="xxx">content</div>
        
        然而，在自定义标签中任意的属性都是被支持的：
        <x-my-component custom-attr="foo" />
        以 aria- 开头的网络无障碍属性同样可以正常使用：
        <div aria-hidden={true}></div>
        
        不论组件是用什么方法来写，我们都需要知道，组件的最终目的是输出虚拟元素，也就是需
        要被渲染到界面的结构。其核心渲染方法，或称为组件输出方法，就是 render 方法
       ```
   - 2.2.6  JavaScript 属性表达式
     >属性值要使用表达式，只要用 {} 替换 "" 即可;  
      ```
       <Person name={window.isLoggedIn ? window.name : ''} />;
      ```
   - 2.2.7 HTML 转义
     ```
        React 会将所有要显示到 DOM 的字符串转义，防止 XSS。所以，如果 JSX 中含有转义后的
        实体字符，比如 &copy;（©），则最后 DOM 中不会正确显示，因为 React 自动把 &copy; 中的特
        殊字符转义了。有几种解决办法：
        -  直接使用 UTF-8 字符 ©；
        -  使用对应字符的 Unicode 编码查询编码；
        - 使用数组组装 `<div>{['cc ', <span>&copy;</span>, ' 2015']}</div>`；
        - 直接插入原始的 HTML。
        
        此外，React 提供了 dangerouslySetInnerHTML 属性。正如其名，它的作用就是避免 React 转
        义字符，在确定必要的情况下可以使用它：
        <div dangerouslySetInnerHTML={{__html: 'cc &copy; 2015'}} /> 
     ```

## 3.React 组件

 - 3.1 React 组件的构建
   - React.createClass
    ```
        const Button = React.createClass({
            getDefaultProps() {
                return {
                color: 'blue',
                text: 'Confirm',
                };
            },
            render() {
                const { color, text } = this.props;
                return (
                    <button className={`btn btn-${color}`}>
                        <em>{text}</em>
                    </button>
                );
            }
        }); 
    ```
  - ES6 classes
    ```
        import React, { Component } from 'react';
        class Button extends Component {
            constructor(props) {
                super(props);
            }
            static defaultProps = {
                color: 'blue',
                text: 'Confirm',
            };
            render() {
                const { color, text } = this.props;
                return (
                    <button className={`btn btn-${color}`}>
                        <em>{text}</em>
                    </button>
                );
            }
        } 
    ```
  - 无状态函数
    ```
    使用无状态函数构建的组件称为无状态组件，这种构建方式是 0.14 版本之后新增的，且官方颇为推崇。示例代码如下：
    function Button({ color = 'blue', text = 'Confirm' }) {
      return (
        <button className={`btn btn-${color}`}>
          <em>{text}</em>
        </button>
      );
    }
    无状态组件只传入 props 和 context 两个参数；也就是说，它不存在 state，也没有生命周
    期方法，组件本身即上面两种 React 组件构建方法中的 render 方法；
    
    它创建时始终保持了一个实例，避免了不必要的检查和内存分配，做到了内部优化；
    ```
    
## 6.ReactDOM 
>ReactDOM 中的 API 非常少，只有 findDOMNode、unmountComponentAtNode 和 render。

```
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class App extends Component {
  componentDidMount() {
    // myComp 是 Comp 的一个实例，因此需要用 findDOMNode 转换为相应的 DOM
    const myComp = this.refs.myComp;
    const dom = findDOMNode(myComp);
  }
  render() {
    return (
      <div>
        <Comp ref="myComp" />
      </div>
    );
  }
}

```


## 7.事件系统
>

### 7.1 合成事件的绑定方式
> React 合成事件的事件类型是 JavaScript 原生事件类型的一个子集。
```
<button onClick={this.handleClick}>Test</button> 

在 JSX 中，我们必须使用驼峰的形式来书写事件的属性名（比如
onClick），而 HTML 事件则需要使用全部小写的属性名（比如 onclick）。

React 并不会像 DOM0 级事件那样将事件处理器直接绑定到 HTML 元素之上。React 仅仅是
借鉴了这种写法而已
```

### 7.2合成事件的实现机制
>在 React 底层，主要对合成事件做了两件事：事件委派和自动绑定。
1. 事件委派
>在使用 React 事件前，一定要熟悉它的事件代理机制。  
它并不会把事件处理函数直接绑定到真实的节点上，而是把所有事件绑定到结构的最外层，  
使用一个统一的事件监听器，这个事件监听器上维持了一个映射来保存所有组件内部的事件监听和处理函数。  
当组件挂载或卸载时，只是在这个统一的事件监听器上插入或删除一些对象；  
当事件发生时，首先被这个统一的事件监听器处理，然后在映射里找到真正的事件处理函数并调用。  
这样做简化了事件处理和回收机制，效率也有很大提升;

2. 自动绑定
>在 React 组件中，每个方法的上下文都会指向该组件的实例，即自动绑定 this 为当前组件。  
而且 React 还会对这种引用进行缓存，以达到 CPU 和内存的最优化。  
在使用 ES6 classes 或者纯函数时，这种自动绑定就不复存在了，我们需要手动实现 this 的绑定。

  - bind 方法。这个方法可以帮助我们绑定事件处理器内的 this ，并可以向事件处理器中传递参数，比如：
    ```
    import React, { Component } from 'react';
    class App extends Component {
      handleClick(e, arg) {
        console.log(e, arg);
      }
      render() {
        // 通过bind方法实现，可以传递参数
        return <button onClick={this.handleClick.bind(this, 'test')}>Test</button>;
      }
    }
    ```
    如果方法只绑定，不传参，那 stage 0 草案中提供了一个便捷的方案①——双冒号语法，  
    其作用与 this.handleClick.bind(this) 一致，并且 Babel 已经实现了该提案。比如：

    ——————————————————————————————————————————

    ① ECMAScrip This-Binding Syntanx，详见 https://github.com/zenparsing/es-function-bind。

    ```
    import React, { Component } from 'react';
    class App extends Component {
      handleClick(e) {
        console.log(e);
      }
      render() {
        return <button onClick={::this.handleClick}>Test</button>;
      }
    } 
    ```
  - 构造器内声明。
    >在组件的构造器内完成了 this的绑定，这种绑定方式的好处在于仅需要进行一次绑定，而不需要每次调用事件监听器时去执行绑定操作：
    ```
    import React, { Component } from 'react';
    class App extends Component {
      constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }
      handleClick(e) {
        console.log(e);
      }
      render() {
        return <button onClick={this.handleClick}>Test</button>;
      }
    }
    ```

- 箭头函数。
  >箭头函数不仅是函数的“语法糖”，它还自动绑定了定义此函数作用域的 this，  
   因此我们不需要再对它使用 bind 方法。比如，以下方式就能运行：

    ```
    import React, { Component } from 'react';
    class App extends Component {
      const handleClick = (e) => {
        console.log(e);
      };
      render() {
        return <button onClick={this.handleClick}>Test</button>;
      }
    }
    或
    import React, { Component } from 'react';
    class App extends Component {
      handleClick(e) {
        console.log(e);
      }
      render() { 
        return <button onClick={() => this.handleClick()}>Test</button>
      }
    }
    使用上述几种方式，都能够实现在类定义的组件中绑定 this 上下文的效果。
    ```
  - 3.在 React 中使用原生事件
    >React 提供了很好用的合成事件系统，但这并不意味着在 React 架构下无法使用原生事件。
     React 提供了完备的生命周期方法，其中 componentDidMount 会在组件已经完成安装并且在浏览器
     中存在真实的 DOM 后调用，此时我们就可以完成原生事件的绑定;
    ```
    import React, { Component } from 'react';
    class NativeEventDemo extends Component {
      componentDidMount() {
      this.refs.button.addEventListener('click', e => {
        this.handleClick(e);
      });
      }
      handleClick(e) {
        console.log(e);
      }
      componentWillUnmount() {
        this.refs.button.removeEventListener('click');
      }
      render() {
        return <button ref="button">Test</button>;
      }
    }
    值得注意的是，在 React 中使用 DOM 原生事件时，一定要在组件卸载时手动移除，
    否则很可能出现内存泄漏的问题。  
    而使用合成事件系统时则不需要，因为 React 内部已经帮你妥善地处理了;
    ```
    
    >尽量避免在 React 中混用合成事件和原生 DOM 事件,另外，用 reactEvent.nativeEvent.stopPropagation() 来阻止冒泡是不行的。
    阻止 React 事件冒泡的行为只能用于 React合成事件系统中，且没办法阻止原生事件的冒泡。
    反之，在原生事件中的阻止冒泡行为，却可以阻止 React 合成事件的传播;
    
    >实际上，React 的合成事件系统只是原生 DOM 事件系统的一个子集。它仅仅实现了 DOM Level 3   的事件接口，并且统一了浏览器间的兼容问题。有些事件 React 并没有实现，  
    或者受某些限制没办法去实现，比如 window 的 resize 事件。  
    对于无法使用 React 合成事件的场景，我们还需要使用原生事件来完成
    
    >浏览器原生 DOM 事件的传播可以分为 3 个阶段：事件捕获阶段、目标对象本身的事件处理程序调用以及事件冒泡。  
    React的合成事件则并没有实现事件捕获，仅仅支持了事件冒泡机制;  
    阻止原生事件传播需要使用 e.preventDefault()，不过对于不支持该方法的浏览器（IE9 以下），只能使用 e.cancelBubble = true 来阻止。而在 React 合成事件中，只需要使用 e.preventDefault() 即可。
    
  - 8.受控组件和非受控组件
    >每当表单的状态发生变化时，都会被写入到组件的 state 中，这种组件在React 中被称为受控组件（controlled component）。  
    在受控组件中，组件渲染出的状态与它的 value 或 checked prop 相对应; 
    如果一个表单组件没有 value props（单选按钮和复选框对应的是 checked prop）时，就可以称为非受控组件;  
    不提倡在 React 中使用非受控组件
    
  - 9.样式处理
    >
    ```
    const style = {
      color: 'white',
      backgroundImage: `url(${imgUrl})`,
      // 注意这里大写的 W，会转换成 -webkit-transition
      WebkitTransition: 'all',
      // ms 是唯一小写的浏览器前缀
      msTransition: 'all',
    };
    const component = <Component style={style} />; 
    ```
    
    - 9.1 样式中的像素值
    >当设置 width 和 height 这类与大小有关的样式时，大部分会以像素为单位，此时若重复输
    入 px，会很麻烦。为了提高效率，React 会自动对这样的属性添加 px。比如：  
    // 渲染成 height: 10px  
    const style = { height: 10 }; 
    - 9.2 使用 classnames 库
      >给组件动态设置 className
      ```
        render() {
          const btnClass = classNames({
            'btn': true,
            'btn-pressed': this.state.isPressed,
            'btn-over': !this.state.isPressed && this.state.isHovered,
          });
          return <button className={btnClass}>{this.props.label}</button>;
        } 
      ```
    - 9.3 CSS Modules 
      >
      ```
      启用 CSS Modules 的代码如下：
      // webpack.config.js
      css?modules&localIdentName=[name]__[local]-[hash:base64:5]
      加上 modules 即为启用，其中 localIdentName 是设置生成样式的命名规则
      ```
       CSS Modules 实现了以下几点：
      - 所有样式都是局部化的，解决了命名冲突和全局污染问题；
      - class 名的生成规则配置灵活，可以以此来压缩 class 名；
      - 只需引用组件的 JavaScript，就能搞定组件所有的 JavaScript 和 CSS；
      - 依然是 CSS，学习成本几乎为零。
      ```
      使用了 CSS Modules 后，就相当于给每个 class 名外加了 :local，以此来实现样式的局部化。
        如果我们想切换到全局模式，可以使用 :global 包裹。示例代码如下：
        .normal {
          color: green;
        }
        /* 以上与下面等价 */
        :local(.normal) {
          color: green;
        }
        /* 定义全局样式 */
        :global(.btn) {
          color: red;
        }
        /* 定义多个全局样式 */
        :global { 
          .link {
           color: green;
          }
          .box {
           color: yellow;
          }
        } 
      ```
      下面是具体项目中使用的 webpack 部分配置代码：
      ```
        module: {
         loaders: [{
           test: /\.jsx?$/,
           loader: 'babel',
         }, {
           test: /\.scss$/,
           exclude: path.resolve(__dirname, 'src/styles'),
           loader: 'style!css?modules&localIdentName=[name]__[local]!sass?sourceMap=true',
         }, {
           test: /\.scss$/,
           include: path.resolve(__dirname, 'src/styles'),
           loader: 'style!css!sass?sourceMap=true',
         }]
        }
        
        /* src/app.js */
        import './styles/app.scss';
        import Component from './view/Component'
        /* src/views/Component.js */
        import './Component.scss';
        
        目录结构如下：
        src
        ├── app.js
        ├── styles
        │ ├── app.scss
        │ └── normalize.scss
        └── views
         ├── Component.js
         └── Component.scss
        这样所有全局的样式都放到 src/styles/app.scss 中引入就可以了，其他所有目录（包括
        src/views）中的样式都是局部的。
        CSS Modules 很好地解决了 CSS 目前面临的模块化难题
      ```
      
  - 10.组件间通信
    - 10.1 父组件向子组件通信
    - 10.2 子组件向父组件通信
    - 10.3 跨级组件通信
    - 10.4 没有嵌套关系的组件通信
  - 11.组件间抽象
    >在 React 组件的构建过程中，常常有这样的场景，有一类功能需要被不同的组件公用，此时就涉及抽象的话题。  
    在不同的设计理念下，有许多的抽象方法，而针对 React，我们重点讨论两种：mixin 和高阶组件;
    
    - 11.1 mixin(混入)
      ```
        React 在使用 createClass 构建组件时提供了 mixin 属性，比如官方封装的 PureRenderMixin：
        import React from 'react';
        import PureRenderMixin from 'react-addons-pure-render-mixin';
        React.createClass({
            mixins: [PureRenderMixin],
            render() {
                return <div>foo</div>;
            }
        });
        在 createClass 对象参数中传入数组 mixins，里面封装了我们所需要的模块
      ```
      
      -  mixin 最大的一些问题
      ```
        破坏了原有组件的封装
        命名冲突
        增加复杂性
      ```
      >针对这些困扰，React 社区提出了新的方式来取代 mixin，那就是高阶组件
      
      - 高阶组件
        >高阶组件（higher-order component），类似于高阶函数，它接受 React 组件作为输入，输出一个新的 React 组件;  
        实现高阶组件的方法有如下两种。
        - 属性代理（props proxy）。高阶组件通过被包裹的 React 组件来操作 props。 
          ```
            import React, { Component } from 'React';
            const MyContainer = (WrappedComponent) =>
            class extends Component {
                render() {
                    return <WrappedComponent {...this.props} />;
                }
            } 
          ```
        - 反向继承（inheritance inversion）。高阶组件继承于被包裹的 React 组件。
          ```
            const MyContainer = (WrappedComponent) =>
              class extends WrappedComponent {
                render() {
                  return super.render();
                }
              } 
          ```
  - 12.组件性能优化
    >，我们都知道影响网页性能最大的因素是浏览器的重绘（reflow）和
    重排版（repaint）。React 背后的 Virtual DOM 就是尽可能地减少浏览器的重绘与重排版。
    对于性能优化这个主题，我们往往会基于“不信任”的前提，即我们需要提高 React Virtual
    DOM 的效率。从 React 的渲染过程来看，如何防止不避要的渲染可能是最需要去解决的问题。
    然而，针对这个问题，React 官方提供了一个便捷的方法来解决，那就是 PureRender。
   
   - 12.1 纯函数
   - 12.2 PureRender
   - 12.3 Immutable 
   - 12.4 key
   - 12.5 react-addons-perf 
   
   
   ## 参考  
   - [深入 React 技术栈](https://fairyly.github.io/react_study/%E6%B7%B1%E5%85%A5React%E6%8A%80%E6%9C%AF%E6%A0%88.pdf)