//Core Module
const path=require("path")

//  External Module
const express = require("express");
const app = express();

//Local Module
const userRouter=require("./routes/userRouter");
const {hostRouter} = require("./routes/hostRouter");
const rootDir=require('./utils/pathUtil')
app.use(express.static(path.join(rootDir,'public')));

app.use(express.urlencoded())
app.use(userRouter)
app.use("/host",hostRouter)

app.use((req,res,next)=>{
res.status(404).sendFile(path.join(rootDir,'views','404.html'))
})

const PORT = 3000;
app.listen(3000, () => {
  console.log(`Server Running at http://localhost:${PORT}`);
});
