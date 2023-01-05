
const project=require('../models/project')

module.exports.showProjectDetail=async(req, res)=>{
    try{
        const data=await project.findById(req.params.id).populate({
            path:'issues',
            options:{
                sort:{
                    updatedAt: -1
                }
            }
        });
        return res.render('_project_description',{
            page:"_project_description",
            project:data
        });

    }catch(err){
        console.log("err in showProjectDetail", err);
        return;

    }
  
}


module.exports.addNewProject=async (req, res)=>{
    try{
       await project.create(req.body);

    }catch(err){
        console.log("error in addNewProject", err)
    }
    return res.redirect('back')

}