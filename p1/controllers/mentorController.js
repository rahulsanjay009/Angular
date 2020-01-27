const express=require('express')
var router=express.Router()
var { mentor } = require('../models/mentor')

router.get('/',(req,res)=>{
    mentor.find().exec((err,docs)=>{
        if(!err) { res.send(docs); }
        else { console.log("error in retrieving");}
    });
});
router.get('/:id',(req,res)=>{
    console.log('get request for a name');
    mentor.findById(req.params.id).exec((err,doc)=>{
        if(!err) { res.send(doc); }
        else { console.log("error in retrieving");}
    });
});
router.post('/',(req,res)=>{
    var ment=new mentor({
        firstname: req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        deptname:req.body.deptname,
        college:req.body.college,
        phoneno:req.body.phoneno,
        password:req.body.password
    });
    ment.save((err,docs)=>{
        if(!err) { res.send(docs); console.log("no error in user.save ");}
        else{ console.log('error in saving in Users : '+ JSON.stringify(err,undefined,2)); }
    });
});
module.exports=router;