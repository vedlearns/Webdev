//Core Module
const path=require('path');

//Local Module
const rootDir=require('../utils/pathUtil');
const userController=require('../controllers/user');

//External Module
const express=require('express');
const userRouter=express();

userRouter.use(express.static(path.join(rootDir,'public')));

userRouter.get('/',userController.getHome);

exports.userRouter=userRouter;