const express=require('express');
const router=express.Router();
const projectController=require('../controllers/projectController');


router.get('/show-project/:id', projectController.showProjectDetail);
router.post('/add-new-project', projectController.addNewProject)









module.exports=router;