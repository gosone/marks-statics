var express =require('express');

var router = express.Router();

var User = require('../models/user');



router.get('/',function(req,res,next){

    //从数据库中读取所有的用户数据
    User.find().then(function(users){
        res.render('admin/admin',{
            userInfo:req.userInfo,
            users:users
        });
    });
    
    
    
});

module.exports = router;