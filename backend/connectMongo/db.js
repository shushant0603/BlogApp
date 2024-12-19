const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
const formSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
});
module.exports=mongoose.model("user",formSchema)