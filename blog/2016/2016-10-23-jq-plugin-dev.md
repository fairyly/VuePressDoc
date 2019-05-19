# 2016-10-23 jQuery插件开发

> Here we go!


## 对象级插件:即给jQuery对象添加方法
```

    格式：;(function($){
            $.fn.extend({
                "pluginname":function(pram){
                     //do sonmething 
                }
            });
        })(jQuery);
        
    插件调用：$("class").plugin();

```

- demo

```
    ;(function($){
        $.fn.extend({
            "focuscolor":function(li_col){
                  var def_col="#ccc";
                  var les_col="#fff";
                  li_col=(li_col==undefined)? def_col:li_col;
                  $(this).each(function(){
                    $(this).mouseover(function(){
                        $(this).css("background",li_col);
                    })
                    $(this).mouseout(function(){
                        $(this).css("background","yellow");
                    })
                  });
                  return $(this);
            }
        });
    })(jQuery);
    
    调用：$("p").focuscolor("red");
    
```


## 类别级插件：即给jQuery添加新的全局函数，相当于给jQuery类本身添加方法

```
    格式：;(function($){
        $.extend({
            "pluginname":function(pram){
                 //do sonmething 
            }
        });
    })(jQuery);
   
    插件调用：$.plugin();
```

- demo
    
```
    ;(function($){
       $.extend({
              "add":function(pr,prt){
                     var re=parseInt(pr)+parseInt(prt);
                     return re;
              },
              "sub":function(pr,prt){
                     var re=parseInt(pr)-parseInt(prt);
                     return re;
              },
              "plus":function(pr,prt){
                     var re=parseInt(pr)*parseInt(prt);
                     return re;
              }

       })
    })(jQuery);
    
    调用： $.add($("input1").val(),$("input2").val())
    
```


 
> working  study......
