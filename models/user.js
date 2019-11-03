var mongoose = require('mongoose');

var usersSchema = require('../schemas/users');

var MyModel = mongoose.model('MyModel',usersSchema);

//module.exports = mongoose.model('user',usersSchema);
module.exports = MyModel;
//用于对用户的表进行操作