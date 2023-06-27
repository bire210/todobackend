const mongoose=require("mongoose");
require("dotenv").config();

mongoose.set('strictQuery',false);

const connecttion=mongoose.connect(process.env.mongoUrl);
module.exports=connecttion
