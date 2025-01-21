const express=require('express');
const app=express();
app.use((req,res,next)=>{
console.log("Dummy 1",req.url);
next();
})
app.use((req,res,next)=>{
console.log("Dummy 2",req.url);
next();
})
app.get("/",(req,res,next)=>{
console.log("Dummy 3",req.url);
res.send(`<a href="/contact-us">Contact-us</a>`);

})
app.get("/contact-us",(req,res,next)=>{
  res.write(`<html>
    <body>
        <form action="/contact-us" method="post">
        <label for="name">Name</label>
        <input id="name" placeholder="Enter Name" type="text">
        <label for="email">Email</label>
        <input id="email" placeholder="Enter E-Mail" type="email">
        <button>submit</button>
    </form>
    </body>
    </html>
    `)
  return res.end()
})
app.post("/contact-us",(req,res,next)=>{
  return res.send("Data received Successfully")
})

const PORT=4400;
app.listen(PORT,()=>{
  console.log(`Server Running at http://localhost:${PORT}`);
})