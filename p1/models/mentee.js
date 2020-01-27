const mongoose=require('mongoose');
var mentee=mongoose.model('mentee',{
    firstname:{type:String},
    lastname:{type:String},
    email:{type:String},
    phoneno:{type:String},
    year:{type:String},
    dept:{type:String},
    college:{type:String},
    city:{type:String},
    password:{type:String}
});
module.exports={mentee};