//Local Module
const Home=require('../models/home')

exports.getHomeList=(req,res,next)=>{
  Home.fetchAll((registeredHouse)=>{
    console.log(registeredHouse);
    res.render('store/home-list',{registeredHouse,title:"home-list"})
  })
}
exports.getHomeDetail=(req,res,next)=>{
  Home.fetchAll((registeredHouse)=>{
    console.log(registeredHouse);
    res.render('store/home-detail',{title:"home-detail"})
  })
}
exports.getFavoriteList=(req,res,next)=>{
  Home.fetchAll((registeredHouse)=>{
    console.log(registeredHouse);
    res.render('store/favorite-list',{title:"favorite-list"})
  })
}
exports.getReserve=(req,res,next)=>{
  Home.fetchAll((registeredHouse)=>{
    console.log(registeredHouse);
    res.render('store/reserve',{title:"reserve"})
  })
}
exports.getBookings=(req,res,next)=>{
  Home.fetchAll((registeredHouse)=>{
    console.log(registeredHouse);
    res.render('store/bookings',{title:"bookings"})
  })
}