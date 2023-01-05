const mongoose=require('mongoose');

const issueSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    label:{
        type:[String],
        required:true
    }
},
{
    timestamps:true
})

const issue=mongoose.model('issue', issueSchema);

module.exports=issue