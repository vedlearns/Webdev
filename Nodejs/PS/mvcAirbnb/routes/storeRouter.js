//Core Module
const path=require('path')

//Local Module
const rootDir=require('../utils/pathUtils')

//External Module
const express=require('express');
const storeRouter=express.Router();

storeRouter.use(express.static(path.join(rootDir,'public')));

const storeController=require('../controllers/storeController')

storeRouter.get('/home-list',storeController.getHomeList)
storeRouter.get('/home-detail',storeController.getHomeDetail)
storeRouter.get('/favorite-list',storeController.getFavoriteList)
storeRouter.get('/reserve',storeController.getReserve)
storeRouter.get('/bookings',storeController.getBookings)

module.exports=storeRouter;