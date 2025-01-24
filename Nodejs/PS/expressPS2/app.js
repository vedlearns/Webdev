//Core Module
const path=require('path');
const rootDir=require('./utils/pathUtils');

//External Module 
const express=require('express');

//Local Module
const dummyRouter=require('./routes/dummyRoutes');
const userRouter=require('./routes/userRoutes');

const app=express()

app.use(express.urlencoded());
app.use(dummyRouter);
app.use('/user',userRouter);

app.use((req,res)=>{
  res.status(404).sendFile(path.join(rootDir,'views','404.html'))
})


const PORT=4000;
app.listen(PORT,()=>{
  console.log(`Server Running at http://localhost:${PORT}`);
})