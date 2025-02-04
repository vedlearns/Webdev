//Core Module
const path=require('path');

//Local Module
const rootDir=require('../utils/pathUtil')

//External Module
const express=require('express');
const hostRouter=express.Router();

hostRouter.use(express.static(path.join(rootDir,'public')));

const registeredHouse=[];

hostRouter.get('/add-home',(req,res,next)=>{
res.render('addHome',{title:'Add Home'})
})

hostRouter.post('/add-home',(req,res,next)=>{
  registeredHouse.push({houseName:req.body.houseName,
    price:req.body.price,
    location:req.body.location,
    rating:req.body.rating
  });
  console.log("hello",registeredHouse);
  res.render('homeAdded',{registeredHouse:registeredHouse,title:'air bnb'})
})

exports.hostRouter=hostRouter;
exports.registeredHouse=registeredHouse;