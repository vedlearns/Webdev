//Core Module
const path=require('path')

//External Module
const express=require('express');

const app=express();
app.set('view engine','ejs');
app.set('views','views');

//Local Module
const {hostRouter}=require('./routes/hostRouter');
const {userRouter}=require('./routes/userRouter');
const rootDir=require('./utils/pathUtil');
const errorController=require('./controllers/404');

app.use(express.urlencoded());
app.use(express.static(path.join(rootDir,'public')));

app.use(userRouter);
app.use('/host',hostRouter);

app.use(errorController.pageNotFound);

const PORT=3000;
app.listen(PORT,()=>{
  console.log(`server running at http://localhost:${PORT}`);
})