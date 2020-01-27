const mongoose=require('mongoose');
var mentor=mongoose.model('mentor',{
    firstname:{type:String},
    lastname:{type:String},
    email:{type:String},
    phoneno:{type:String},
    Designation:{type:String},
    dept:{type:String},
    rating:{type:String},
    college:{type:String},
    city:{type:String},
    startups:{type:String},
    password:{type:String}
});
module.exports={mentor};