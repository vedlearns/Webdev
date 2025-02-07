//Core Module
const path=require('path');

//Local Module
const rootDir=require('../utils/pathUtil')
const hostController=require('../controllers/host')

//External Module
const express=require('express');
const hostRouter=express.Router();

hostRouter.use(express.static(path.join(rootDir,'public')));

hostRouter.get('/add-home',hostController.getAddHome)

hostRouter.post('/add-home',hostController.postAddHome)

exports.hostRouter=hostRouter;