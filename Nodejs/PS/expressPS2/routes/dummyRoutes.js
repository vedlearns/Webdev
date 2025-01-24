//Core Module
const path=require('path')

//Local Module
const rootDir=require('../utils/pathUtils')

//External Module
const express=require('express')
const dummyRouter=express.Router();

dummyRouter.get('/',(req,res,next)=>{
  console.log("dummy 1" , req.method,req.url);
  next()
})
dummyRouter.get('/',(req,res,next)=>{
  console.log("dummy 2" , req.method,req.url);
  next()
})
dummyRouter.get('/',(req,res,next)=>{
  console.log("dummy 3" , req.method,req.url);
  res.sendFile(path.join(rootDir,'views','toContactUs.html'))
})

module.exports=dummyRouter;
