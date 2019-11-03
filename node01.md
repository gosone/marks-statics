# node

 ## 优点：

   + 高并发处理
   + 非阻塞的I/O：正常情况下I/O都是阻塞的（ajax 同步）
     网络请求，数据库处理，文件读写。。。

 ## api接口

 [api接口文档]()

### js运行环境
+ 浏览器
    - 基本语法
    - bom
    - dom
    - ajax
    - 系统文件数据库（处于安全考虑不能）

   + 服务器
    - 基本语法
    - 能操作数据库
    - 能操作本地文件

### nvm
### node运行环境 REPL

  + 直接在命令行写代码

### 模块化
   + 内置模块
   + 第三方模块
   + 自定义模块
       - 创建一个模块（一个js文件一个模块）
       - 导出一个模块（module.experts=name)
       - 引用一个模块并且调用(require)




## readdir打印目录树
  ~~~js
  const fs = require('fs')
  ~~~

 ### 1.同步读取文件
  ~~~js
  const fs = require('fs')
  let dirs = fs.readdirSync('.\ ')
  console.log(dirs)
  //如果报错的话，下面的代码中止执行
  ~~~
  #### 同步执行关键位置捕获错误信息
  ~~~js
  try{
   let dirs = fs.readdirSync('.\ ')
  }
  catch(err){
   console.log('出错了')
   console,log(err)
  }
  console.log()
  ~~~

 ### 2.异步读取文件
 ~~~js
 fs.readdir('./',(err,data)=>{
     console.log(err)
     //错误的回调优先，第一个参数表示错误，默认为空
     console.log(data)
 })
 ~~~

 ## mkdir
 ### 创建
  ~~~js
   const fs = require('fs')
   fs.mkdir('./test',(err)=>{
       console.log(err)
   })
  ~~~

 ### 更改
 ~~~js
 fs.rename('./test','./test01',(err)=>{
 if(err){
     console.log('更改失败')
 }else{
     console.log('ok')s
 }
 })
 ~~~
 ### 删除

 ~~~js
 fs.rmdir('./test01',(err)=>{
     if(err){
         console.log('更改失败')
         console.log(err)
     }else{
         console.log('ok')
     }
 })
 //只能删除空文件夹
 ~~~

 ## url

 ~~~js
 url.parse() //将url字符串转成对象
 url.format()//将url对象转成字符串
 ~~~


## express

~~~js
const express = require('express')
const app = express()
//express实例化

//最简单的api窗口
app.get('/user/login',(req,res)=>{
    console.log('你好')
    res.send({err:0,msg:'regist ok'})
})

app.listen(3000,()=>{
    //监听3000 端口 开启服务器
    console.log('server start')
})
//http://locaolhost:3000/user/login
api 构成要素
ip
port
pathname
method get post
接收用户传递数据
~~~

~~~js
const express = require('express')
const app = express()
//express实例化

//最简单的api窗口
app.get('/user/login',(req,res)=>{
    console.log(req.query)
    console.log('你好')
    let {us,ps} = req.query
    //处理数据
    
   if(us=="wangyi" && ps==456){
       res.send({err:0,msg:'login ok'})
   }else{
       res.send({err:-1,msg:'us pass no ok'})
   }
})

app.listen(3000,()=>{
    //监听3000 端口 开启服务器
    console.log('server start')
})
~~~

### postman 接口测试工具
## exports和module.exports的区别

通常exports方式使用方法是：

~~~js
exports.[function name] = [function name]
~~~
moudle.exports方式使用方法是：

~~~js
moudle.exports= [function name]
~~~

这样使用两者根本区别是

**exports **返回的是模块函数
**module.exports **返回的是模块对象本身，返回的是一个类
使用上的区别是
exports的方法可以直接调用
module.exports需要new对象之后才可以调用
