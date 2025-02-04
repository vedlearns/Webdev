//Core Module
const path=require("path")

//External Module
const express=require("express");
const userRouter=express.Router();

//Local Module
const rootDir=require('../utils/pathUtil')
userRouter.use(express.static(path.join(rootDir,'public')));

userRouter.get("/",(req,res,next)=>{
  console.log("2",req.url,req.method);
  res.sendFile(path.join(rootDir,'views','home.html'))
})

module.exports=userRouter