//Core Module
const path=require('path')

//Local Module
const rootDir=require('../utils/pathUtils')
const adminController=require('../controllers/adminController')

//External Module 
const express=require('express');
const adminRouter=express.Router();

adminRouter.use(express.static(path.join(rootDir,'public')));

adminRouter.get('/edit-home',adminController.getEditHome);
adminRouter.post('/home-list',adminController.postHomeList);
adminRouter.get('/home-list',adminController.getHomeList);

module.exports=adminRouter;