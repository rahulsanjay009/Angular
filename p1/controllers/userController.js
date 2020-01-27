const express = require('express');
var router = express.Router();
var { Users } = require('../models/Users');
var ObjectId=require('mongoose').Types.ObjectId;
router.get('/',(req,res)=>{
    Users.find((err,docs)=>{
        if(!err) { res.send(docs);}
        else{ console.log('error in retrieving in Users : '+ JSON.stringify(err,undefined,2)); }
    });
});

router.post('/',(req,res)=>{
    var user=new Users({
        username : req.body.username,
        password : req.body.password,
        email : req.body.email
    }); 
    user.save((err,docs)=>{
        if(!err) { res.send(docs); console.log("no error in user.save ");}
        else{ console.log('error in saving in Users : '+ JSON.stringify(err,undefined,2)); }
    });
});
module.exports=router;