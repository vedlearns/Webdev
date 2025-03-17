const {Home}=require('../models/home');

exports.getHome=(req,res,next)=>{
  Home.fetchAll(registeredHouse=> res.render('home',{registeredHouse:registeredHouse,title:'Home'}));
}