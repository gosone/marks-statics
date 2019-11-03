# ajax
## 完成页面局部刷新
  + 异步的Javascript和XML
  + 浏览器本身这个软件是支持多线程并发的，其中ajax请求就是一个线程，一个页面上可以同时发出多个ajax请求，多个ajax请求对应浏览器多个线程，请求之间互不干扰

## 使用ajax发送get请求
### 原生ajax
 - 1.创建ajax核心对象XMLHttpRequest（浏览器内置的，可以直接使用）
 ~~~jsp
 if(window.XMLHttpRequest){

    var xhr = new XMLHttpRequest();

 }else{
  //不支持XMLHttpRequest对象，IE5和IE6是不支持的，它只支持ACtiveXObject对象
   var xhr = new ActiveXObject("Microsoft.XMLHTTP");
   }
 ~~~

 - 2.注册回调函数
 ~~~jsp
   xhr.onreadystatechange = function(){

   }
   //程序执行到这里，后面的回调函数并不会执行，只是将回调函数注册给xhr对象
   //等xhr对象的readystate发生改变的时候，后面的回调函数才会执行
   /*
   XMLHttpRequest对象在请求和响应的过程中，该对象的readyState状态从0-4：
      0：请求为初始化
      1：服务器连接已建立
      2：请求已接收
      3：请求处理中
      4：请求已完成，且响应已就绪
    */
 ~~~
 - 3.开启浏览器和服务器之间的通道
  ~~~jsp
  /*xhr.open(method,url,asyn)
  method:指定请求方式为get还是post
  url：请求路径
  asyn：true/false（true表示支持异步，false表示同步）
  */
  xhr.open("GET","
  ~~~
 - 4.发送ajax请求

 ### JQeury
 ~~~js
 <script src="js/jquery-3.3.1.min.js"></script>
 ~~~
 + 1.$.ajax()
     - 语法：
       1. $.ajax(url,[settings])
       2. $.ajax({键值对})
   ~~~jsp
   $.ajax({
    url : "ajaxServlet",//请求路径
    type : "POST" ,//七种请求方式
    //data : "username=jack & age=2",//请求参数
    data:{"username":"jack","age":23},//json数据格式
    scuess:function(data){
    alert(data);
    },//响应成功后的回调函数

    error:function(){
    alert("出错啦");
    }
   })
   ~~~
 + 2.$.get():发送get请求
    - 语法：$.get(url, [data], [callback], [type])
    - 参数：
       - url:请求路径
       - data:请求参数
       - callback:回调函数
       - type:响应结果的类型

  ~~~js
  $.get("ajaxSerlet",{username:"rose"},funciton(data){
  alert(data);
  },"text")
  ~~~
 + 3.$.post():发送post请求
    - 语法：$.post(url, [data], [callback], [type])
    - 参数：
       - url:请求路径
       - data:请求参数
       - callback:回调函数
       - type:响应结果的类型

  ~~~js
  $.post("ajaxSerlet",{username:"rose"},funciton(data){
  alert(data);
  },"text")
  ~~~
  