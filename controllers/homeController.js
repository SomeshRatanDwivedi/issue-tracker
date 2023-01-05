const project=require('../models/project')

module.exports.home=(req, res)=>{
    project.find({}, null,{
        sort:{
            updatedAt: -1
        }
    },(err, data)=>{
        if(err){
            console.log("error in home", err);
            return;
        }
        return res.render('_home',{
            page:"_home",
            projects:data
        })

    })
 
}