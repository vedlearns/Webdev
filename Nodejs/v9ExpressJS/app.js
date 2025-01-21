//Local Module
// const requestHandler=require("./user");

// Core Module

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer(app);
// const PORT = 4400;
// server.listen(PORT, () => {
//   console.log(`Server Started at Port http://localhost:${PORT}`);
// });

//External Module

const express = require("express");

const app = express();
app.use('/',(req, res, next) => {
  console.log(" first middleware ");
 next()
 console.log(" extra middleware "); 

});
app.use('/',(req, res, next) => {
  console.log(" second middleware ");
  next();
  console.log("yoo");

});
app.get('/',(req, res, next) => {
  console.log("third middleware ");
res.send(`<p>using get </p>`)
  next();
  console.log("suck it");

});
// .createServer krne ki zarurat nhi h direct .listen use kr skte hai
const PORT = 4400;
app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
