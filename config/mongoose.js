const mongoose=require('mongoose');
const env=require('../config/environment')
mongoose.set("strictQuery", false);
mongoose.connect(`mongodb+srv://somesh:1vM3kfBrY7SBSq82@cluster0.idq0vi9.mongodb.net/test`);

const db=mongoose.connection;
db.on('error', console.error.bind(console, 'error occured'));
db.once('open', ()=>{
    console.log("database connected successfully");
})


module.exports=db;