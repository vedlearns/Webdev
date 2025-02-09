//Local Module
const Home=require('../models/home')

exports.getEditHome=(req,res,next)=>{
  res.render('admin/edit-home',{title:'edit-home'})
}
exports.getHomeList=(req,res,next)=>{
 console.log('data ',req.body);
  Home.fetchAll(registeredHomes=>
    res.render('admin/admin-home-list',{registeredHomes,title:"admin-home"})
  )
}
exports.postHomeList=(req,res,next)=>{
 console.log('data ',req.body);
  const {houseName,price,location,rating}=req.body;
  const home=new Home(houseName,price,location,rating);
  home.save();
  Home.fetchAll(registeredHomes=>
    res.render('admin/admin-home-list',{registeredHomes,title:"admin-home"})
  )
}
