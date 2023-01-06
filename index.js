const express=require('express');
const env=require('./config/environment')
const port=8000 ||  process.env.PORT;
const ejsLayouts=require('express-ejs-layouts');
const db=require('./config/mongoose')
const app=express();


app.use(express.urlencoded());
app.use(express.static(env.asset_path));
app.use(ejsLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.set('view engine', 'ejs');
app.set('views', 'views');








app.use('/', require('./routes'))




app.listen(port, ()=>{
    console.log(`Server is listening on Port ${port}`)
})