# 2016-10-21 Hexo

>
    describe hexo deployment and markdown grammar

## Hexo blog 

        npm install hexo-cli -g
        hexo init blog
        cd blog
        npm install
        hexo server  或者hexo server -p 5000更改端口号，浏览器打开网址http://localhost:5000/


        配置 Deployment
   	
        deploy:
            type=git
            repo:https://github.com/fairyly/仓库名
            branch: gh-pages

        hexo d部署到github

## markdown语法
      
      经常见到的以扩展名.md结尾的文件就是用markdown编写的文件：

      常见的语法：
      1、	标题
      #：一级标题；在 Markdown 中，如果一段文字被定义为标题，只要在这段文字前加 # 号即可；
      ##：二级标题；
      ###：三级标题；
      ####：四级标题；
      #####：五级标题；
      ######：六级标题；

      2、	列表：在 Markdown 下，列表的显示只需要在文字前加上 - 或 * 即可变为无序列表，  
          有序列表则直接在文字前加1. 2. 		3. 符号要和文字之间加上一个字符的空格。

        - 或 *：无序列表；

      3、	引用：如果你需要引用一小段别处的句子，那么就要用引用的格式。只需要在文本前加入 > 这种尖括号（大于号）即可。
        >:引用

      4、	图片
        ![](){ImgCap}{/ImgCap}：图片  如：![mou icon](http://baidu.com/baidu.png)这样就是插入图片的；

      5、	链接
        []()：链接  如：[baidu](http://www.baiodu.com)

      6、	粗体和斜体
        **文字**：粗体；用两个 * 包含一段文本就是粗体的语法；
        *文字*  ：斜体；用一个 * 包含一段文本就是斜体的语法

      7、	代码框
        `代码`:两个`反单引号;   用两个 ` 把中间的代码包裹起来

      8、	分割线
        ***：分割线；三个*号；

      9、	表格
        | Tables        | Are           | Cool  |
        | ------------- |:-------------:| -----:|
        | col 3 is      | right-aligned | $1600 |
        | col 2 is      | centered      |   $12 |
        | zebra stripes | are neat      |    $1 |

      10、	内嵌代码
        ```代码片段```:成对的```（就是反单引号）包裹代码。
        还可以是```javascript
          your code
          ```
    
