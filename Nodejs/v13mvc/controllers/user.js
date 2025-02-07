const {Home} = require("../models/home");

exports.getHome=(req,res,next)=>{
  console.log('2',req.url,req.method);
Home.fetchAll(registeredHouse=> res.render('home',{registeredHouse:registeredHouse,title:'home'}));
 
}