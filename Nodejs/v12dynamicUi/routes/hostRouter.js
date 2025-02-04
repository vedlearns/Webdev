// Core Module
const path=require("path")

//External Module
const express=require("express")
const hostRouter=express.Router();

//Local Module
const rootDir=require('../utils/pathUtil')
hostRouter.use(express.static(path.join(rootDir,'public')));

const registeredHouse=[];

hostRouter.get("/add-home",(req,res,next)=>{
  res.sendFile(path.join(rootDir,'views','addHome.html'))
})
hostRouter.post("/add-home",(req,res,next)=>{
  registeredHouse.push({houseName:req.body.houseName})
  console.log("Home Registration Successful",registeredHouse);
  res.sendFile(path.join(rootDir,'views','homeAdded.html'))
})

exports.hostRouter=hostRouter;
exports.registeredHouse=registeredHouse;