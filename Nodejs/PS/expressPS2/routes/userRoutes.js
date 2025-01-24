//External Module
const express=require('express');

//Core Module
const path=require('path');
const rootDir=require('../utils/pathUtils')

const userRouter=express();

userRouter.get('/contact-us',(req,res,next)=>{
res.sendFile(path.join(rootDir,'views','contactForm.html'))
})

userRouter.post('/contact-us',(req,res)=>{
  console.log("Body of the req is ",req.body);
res.sendFile(path.join(rootDir,'views','success.html'))
})

module.exports=userRouter;