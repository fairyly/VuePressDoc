# 2016-10-22 webpack

## webpack入门

> Here !

Node环境下，

Webpack :它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（`Scss，TypeScript`等），  
并将其打包为合适的格式以供浏览器使用。  
和gulp,grunt差不多，webpack就是模块加载器兼打包工具

```
  It can beused as a module bundler similar to Browserify, and do much more.

  $ browserify main.js > bundle.js
  # be equivalent to
  $ webpack main.js bundle.js //和browserify等价


  Webpack常用命令：
  webpack 最基本的启动webpack命令
  webpack -w 提供watch方法，实时进行打包更新
  webpack -p 对打包后的文件进行压缩
  webpack -d 提供SourceMaps，方便调试
  webpack --colors 输出结果带彩色，比如：会用红色显示耗时较长的步骤
  webpack --profile 输出性能数据，可以看到每一步的耗时
  webpack --display-modules 默认情况下 node_modules 下的模块会被隐藏，加上这个参数可以显示这些被隐藏的模块
```

## 全局安装webpack和webpack-dev-server:

`npm install –g webpack webpack-dev-server`  

webpack-dev-server是一个小型的node.js   

Express服务器,它使用webpack-dev-middleware中间件来为通过webpack打包生成的资源文件提供Web服务。   

它还有一个通过Socket.IO连接着webpack-dev-server服务器的小型运行时程序。  
webpack-dev-server发送关于编译状态的消息到客户端，客户端根据消息作出响应。  


直接敲命令：webpack-dev-server  打开本机浏览器输入 http://127.0.0.1:8080就可以看到你页面效果；  

在webpack模块打包中最好先安装依赖，好多组件需要用，使用命令：npm install;  
 
可以按照阮一峰做的demo来学习：  
我fork的git地址：https://github.com/fairyly/webpack-demos#demo01-entry-file-source  
怎么使用里面都有介绍的，不过都是英文，马马虎虎应该可以看懂；  

说个例子，一个小项目下三个文件：

```
    For example, main.js is an entry file.
    // main.js
    document.write('<h1>Hello World</h1>');
    index.html

    <html>
    <body>
      <scripttype="text/javascript"src="bundle.js"></script>
    </body>
    </html>
    Webpack follows webpack.config.js to build bundle.js.
    // webpack.config.js
    module.exports = {
    entry:'./main.js',//entry用来定义入口文件
    output: {           //output用于定义构建后的文件的输出,有path和filename;
      filename:'bundle.js'
    }
    };
    //entry中定义构建多个文件时，filename可以对应的更改为[name].js用于定义不同文件构建后的名字
    $ webpack   //这一个命令就在目录下生成一个bundle.js文件
    $ webpack-dev-server
    Launch theserver, visit http://127.0.0.1:8080 .

```

## Babel-loader  ,babel就是转码器；

```
    看demo：
    main.jsx is a JSX file.
    constReact=require('react');
    constReactDOM=require('react-dom');

    ReactDOM.render(
      <h1>Hello, world!</h1>,
      document.querySelector('#wrapper')
    );
    index.html

    <html>
      <body>
        <divid="wrapper"></div>
        <scriptsrc="bundle.js"></script>
      </body>
    </html>
    webpack.config.js

    module.exports = {
      entry:'./main.jsx',
      output: {
        filename:'bundle.js'
      },
      module: {
        loaders:[
          {
            test:/\.js[x]?$/,
            exclude:/node_modules/,
            loader:'babel-loader?presets[]=es2015&presets[]=react'
          },
        ]
      }
    };
```
>这时候要配置module,loaders:  
模块的加载相关，我们就定义在module.loaders中。这里通过正则表达式去匹配不同后缀的文件名，然后给它们定义不同的加载器  
Loaders的配置选项包括以下几方面：  
test：一个匹配loaders所处理的文件的拓展名的正则表达式（必须）  
loader：loader的名称（必须）  
include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；  
query：为loaders提供额外的设置选项（可选）  



## CSS-loader  加载css

```
    配置module：

    module: {
        loaders:[
          { test:/\.css$/, loader:'style-loader!css-loader' },
        ]
      }
```

## Image loader 加载图片
```
    配置module：
    module: {
        loaders:[
          { test:/\.(png|jpg)$/, loader:'url-loader?limit=8192' }
        ]
      }
    Limit=8192，如果图片大小小于8192字节，将转换成base64编码格式显示，如果大于就按照正常的url显示；
```

## CSS Module 加载css 模块

```
    {
      test:/\.css$/,
      loader:'style-loader!css-loader?modules'
    }

```

## UglifyJs Plugin  js压缩组件

```
    Js压缩插件配置：
    var webpack =require('webpack');
    var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
    module.exports = {
      entry:'./main.js',
      output: {
        filename:'bundle.js'
      },
      plugins: [
        newuglifyJsPlugin({
          compress: {
            warnings:false
          }
        })
      ]
    };

```

## HTML Webpack Plugin andOpen Browser Webpack Plugin  webpack的html和打开浏览器插件

```
    var HtmlwebpackPlugin =require('html-webpack-plugin');
    var OpenBrowserPlugin =require('open-browser-webpack-plugin');

    module.exports = {
      entry:'./main.js',
      output: {
        filename:'bundle.js'
      },
      plugins: [
        newHtmlwebpackPlugin({
          title:'Webpack-demos',
          filename:'index.html'
        }),
        newOpenBrowserPlugin({
          url:'http://localhost:8080'
        })
      ]
    };
    $ Webpack 
    Run webpack-dev-server.
    $ webpack-dev-server

    这时候不需要写一个index.html文件，也不需要手动打开浏览器输入http://localhost:8080，webpack会做这些事情；
    
 ```   
    
## Environment flags  环境标志

```
    main.js

    document.write('<h1>Hello World</h1>');

    if (__DEV__) {
      document.write(newDate());
    }
    index.html

    <html>
    <body>
      <scriptsrc="bundle.js"></script>
    </body>
    </html>
    webpack.config.js

    var webpack =require('webpack');

    var devFlagPlugin =newwebpack.DefinePlugin({
      __DEV__:JSON.stringify(JSON.parse(process.env.DEBUG||'false'))
    });

    module.exports = {
      entry:'./main.js',
      output: {
        filename:'bundle.js'
      },
      plugins: [devFlagPlugin]
    };
    Now passenvironment variable into webpack.

    # Linux & Mac
    $ env DEBUG=true webpack-dev-server

    # Windows
    $ set DEBUG=true
    $ webpack-dev-server
```

## Code splitting 代码分离
```
    you use require.ensure to define a split point. (official document)
    // main.js
    require.ensure(['./a'], function(require) {
      var content =require('./a');
      document.open();
      document.write('<h1>'+ content +'</h1>');
      document.close();
    });
    require.ensure tells Webpack that ./a.js should be separated from bundle.js and built into a single chunk file.
    // a.js
    module.exports ='Hello World';
    Now Webpack takes care of the dependencies, outputfiles and runtime stuff. You don't have to put any redundancy into your index.html and webpack.config.js.
    <html>
      <body>
        <scriptsrc="bundle.js"></script>
      </body>
    </html>
    webpack.config.js

    module.exports = {
      entry:'./main.js',
      output: {
        filename:'bundle.js'
      }
    };
    Launch theserver.

    $ webpack-dev-server 
 ```
 
## Code splitting withbundle-loader

```
    Another wayof code splitting is using bundle-loader.

    // main.js

    // Now a.js is requested, it will be bundled into another file
    var load =require('bundle-loader!./a.js');

    // To wait until a.js is available (and get the exports)
    //  you need to async wait for it.
    load(function(file) {
      document.open();
      document.write('<h1>'+ file +'</h1>');
      document.close();
    });
    require('bundle-loader!./a.js') tells Webpack to load a.js from another chunk.
    Now Webpack will build main.js into bundle.js, and a.js into 1.bundle.js.
 
```
## Common chunk  通用模块

```
    When multiscripts have common chunks, you can extract the common part into a separatefile with CommonsChunkPlugin.

    // main1.jsx
    var React =require('react');
    var ReactDOM =require('react-dom');

    ReactDOM.render(
      <h1>Hello World</h1>,
      document.getElementById('a')
    );

    // main2.jsx
    var React =require('react');
    var ReactDOM =require('react-dom');

    ReactDOM.render(
      <h2>Hello Webpack</h2>,
      document.getElementById('b')
    );
    index.html

    <html>
      <body>
        <divid="a"></div>
        <divid="b"></div>
        <scriptsrc="init.js"></script>
        <scriptsrc="bundle1.js"></script>
        <scriptsrc="bundle2.js"></script>
      </body>
    </html>
    webpack.config.js

    var CommonsChunkPlugin =require("webpack/lib/optimize/CommonsChunkPlugin");
    module.exports = {
      entry: {
        bundle1:'./main1.jsx',
        bundle2:'./main2.jsx'
      },
      output: {
        filename:'[name].js'
      },
      module: {
        loaders:[
          {
            test:/\.js[x]?$/,
            exclude:/node_modules/,
            loader:'babel-loader',
            query: {
              presets: ['es2015', 'react']
            }
          },
        ]
      },
      plugins: [
        newCommonsChunkPlugin('init.js')
      ]
    }

```

## Vendor chunk 

```
    You can alsoextract the vendor libraries from a script into a separate file withCommonsChunkPlugin.

    main.js

    var $ =require('jquery');
    $('h1').text('Hello World');
    index.html

    <html>
      <body>
        <h1></h1>
        <scriptsrc="vendor.js"></script>
        <scriptsrc="bundle.js"></script>
      </body>
    </html>
    webpack.config.js

    var webpack =require('webpack');

    module.exports = {
      entry: {
        app:'./main.js',
        vendor: ['jquery'],
      },
      output: {
        filename:'bundle.js'
      },
      plugins: [
        newwebpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.js')
      ]
    };
    If you want a module available as variable in everymodule, such as making $ and jQuery available in every module without writing require("jquery"). You should use ProvidePlugin (Official doc).
    // main.js
    $('h1').text('Hello World');


    // webpack.config.js
    var webpack =require('webpack');

    module.exports = {
      entry: {
        app:'./main.js'
      },
      output: {
        filename:'bundle.js'
      },
      plugins: [
        newwebpack.ProvidePlugin({
          $:"jquery",
          jQuery:"jquery",
          "window.jQuery":"jquery"
        })
      ]
    };
```


## Exposing globalvariables暴露全局变量

```
    For example, we have a data.js.
    var data ='Hello World';
    We can expose data as a global variable.
    // webpack.config.js
    module.exports = {
      entry:'./main.jsx',
      output: {
        filename:'bundle.js'
      },
      module: {
        loaders:[
          {
            test:/\.js[x]?$/,
            exclude:/node_modules/,
            loader:'babel-loader',
            query: {
              presets: ['es2015', 'react']
            }
          },
        ]
      },
      externals: {
        // require('data') is external and available
        //  on the global var data
        'data':'data'
      }
    };
    Now, you require data as a module variable in your script. but it actually is a globalvariable.
    // main.jsx
    var data =require('data');
    var React =require('react');
    var ReactDOM =require('react-dom');

    ReactDOM.render(
      <h1>{data}</h1>,
      document.body
    );

    resolve

    webpack在构建包的时候会按目录的进行文件的查找，resolve属性中的extensions数组中用于配置程序可以自行补全哪些文件后缀：

     resolve:{
         extensions:['','.js','.json']
     }
    然后我们想要加载一个js文件时，只要require('common')就可以加载common.js文件了。

```
> working  study......
