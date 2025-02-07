const {Home} = require("../models/home");
// // const {registeredHouse}=require('../models/home')

exports.postAddHome=(req,res,next)=>{
  const {houseName,price,location,rating}=req.body;
  const home=new Home(houseName,price,location,rating)
    home.save();
    res.render('homeAdded',{title:'air bnb'})
  }
  exports.getAddHome=(req,res,next)=>{
    res.render('addHome',{title:'Add Home'})
  }