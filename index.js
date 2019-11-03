var express = require('express');

//加载模板处理模块
var swig = require('swig');
//加载数据库模块
var mongoose = require('mongoose');
//创建app应用 =>Node JS Http.cfreateServer();

//加载body-parser,用来处理post提交过来的数据
var bodyParser = require('body-parser');

var app = express();

//配置应用模板
//定义当前应用所使用的模板引擎
//第一个参数，模板引擎的名称。同时也是模板文件的后缀
//第二个参数表示用于处理模板内容的方法
//加载静态文件
app.use('/public',express.static(__dirname +'/public'));
app.engine('html',swig.renderFile);//解析文件
//设施模板文件存放的参数
//第一个参数必须是views，第二个参数是目录
app.set('views','./views');
//注册所使用的模板引擎，第一个参数必须是view engine，第二个参数和app.engine
//这个方法中定义的模板引擎的名称（第一个参数）是一致的
app.set('view engine','html');

//取消模板缓存
swig.setDefaults({cache:false});
//bodyparser设置

app.use(bodyParser.urlencoded({extended:true}));
/*
首页
req request对象
res response对象
next 函数
*/

//根据不同功能划分模块

app.use('/admin',require('./routers/admin'));//管理员页面
app.use('/api',require('./routers/api'));//接口
app.use('/',require('./routers/main'));//主页面
app.use('/welcome',require('./routers/welcome'));//用户界面

/*app.get('/',function(req,res,next){
     //读取views目录下指定文件,解析并返回给客户端
     //第一个参数：表示模板的文件，相当于views目录 views/index.html
     //第二个参数：传递给模板使用的数据
     res.render('index');
})
*/

mongoose.connect('mongodb://localhost:27017/userinformation',function(err){
    if(err){
        console.log("数据库连接失败");
    }
    else{
        console.log("数据库连接成功");
        app.listen(8080);
    }
});

