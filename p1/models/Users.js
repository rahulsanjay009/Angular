const mongoose = require('mongoose');
var Users=mongoose.model('Users',{
    username : { type : String },
    password : { type: String},
    email : {type : String }
});

module.exports={   Users };