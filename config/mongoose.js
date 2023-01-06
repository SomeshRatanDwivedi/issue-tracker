const mongoose=require('mongoose');
const env=require('../config/environment')
mongoose.set("strictQuery", false);
mongoose.connect(`mongodb://localhost/${env.db_name}`);

const db=mongoose.connection;
db.on('error', console.error.bind(console, 'error occured'));
db.once('open', ()=>{
    console.log("database connected successfully");
})


module.exports=db;