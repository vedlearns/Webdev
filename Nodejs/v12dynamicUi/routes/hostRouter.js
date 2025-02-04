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
  res.render('addHome',{title:'addhome'})
})
hostRouter.post("/add-home",(req,res,next)=>{
  registeredHouse.push({houseName:req.body.houseName})
  console.log("Home Registration Successful",registeredHouse);
  res.render('homeAdded',{registeredHouse:registeredHouse,title:'air bnb'});        //{registeredHouse} means {registeredHouse:registeredHouse}  shortcut
})

exports.hostRouter=hostRouter;
exports.registeredHouse=registeredHouse;