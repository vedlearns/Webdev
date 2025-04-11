//Core Module
const path=require('path');

//Local Module
const rootDir=require('../utils/pathUtil');
const userController=require('../controllers/user');

//External Module
const express=require('express');
const userRouter=express();

userRouter.use(express.static(path.join(rootDir,'public')));

userRouter.get('/',userController.getHome);
userRouter.get('/home-list',userController.getHomeList);
userRouter.get('/favorites',userController.getFavorites);
userRouter.get('/bookings',userController.getBookings);
userRouter.get('/home-list/:homeId',userController.getHomeDetails);
userRouter.post('/favorites',userController.postAddToFavorites);


exports.userRouter=userRouter;