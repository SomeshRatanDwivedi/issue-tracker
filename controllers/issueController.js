const issue=require('../models/issue');
const project=require('../models/project')

module.exports.createIssue=async(req, res)=>{
    try{
        const newIssue=await issue.create(req.body);
        const newIssueProject=await project.findById(req.params.id);
        newIssueProject.issues.push(newIssue._id);
        newIssueProject.save();
        res.redirect('back');

    }catch(err){
        console.log("err in createIssue", err);
        return;

    }
    
}

module.exports.showAllIssue=async(req, res)=>{
    try{
        const data=await project.findById(req.params.id).populate('issues');
        return res.render('_project_description',{
            page:"show_all_issue",
            project:data
        });

    }catch(err){
        console.log("err in show all issue", err);
        return;
    }

}