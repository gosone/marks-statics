var express =require('express');

var router = express.Router();

var User = require('../models/user');
//使用数据库中的user模块
var responseData;

router.use(function(req,res,next){
  /* responseData = {
        "code":0,
        "message":""
    }
    */
   responseData=0;
   loginResponse=0;
    next();
})


//用户登录
router.post('/user/login',function(req,res,next){
   loginResponse=0;
    var username=req.body.username;
    var password = req.body.password;

    
    User.findOne({
         username: username,
         password: password
    }).then(function(userInfo){
        if(userInfo){
            //找到用户
            if(username=="admin"){
                loginResponse=1;
                //农场主
            }
            if(username=="tech"){
                loginResponse=2;
                //技术人员
            }
            if(username="tech2"){
                loginResponse=3
                //技术人员2
            }
            if(username="market"){
                loginResponse=4;
                //市场人员
            }
            if(username="guest"){
                loginResponse=5;
                //顾客
            }
        }

        res.json(loginResponse);
    })

});

module.exports = router;