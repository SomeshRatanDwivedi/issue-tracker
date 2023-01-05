const express=require('express');
const router=express.Router();
const issueController=require('../controllers/issueController')

router.post('/create-issue/:id', issueController.createIssue);
router.get('/show-all-issue/:id', issueController.showAllIssue)









module.exports=router