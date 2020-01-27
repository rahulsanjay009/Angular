const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/startups',(err)=>{
	if(!err)
		console.log('mongo Db connection succeded');
	else
		console.log('Connection error');	
});
module.exports=mongoose;