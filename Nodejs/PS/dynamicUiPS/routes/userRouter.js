//Core Module
const path=require('path');

//Local Module
const rootDir=require('../utils/pathUtil');

//External  Module
const express=require('express');
const userRouter=express.Router();

userRouter.use(express.static(path.join(rootDir,'public')));

userRouter.get('/',(req,res,next)=>{
  console.log('2',req.url,req.method);
  res.render('home',{title:'home'})
})

exports.userRouter=userRouter