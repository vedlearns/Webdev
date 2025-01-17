const http=require('http');
const reqHandler=require('./user')
const server=http.createServer(reqHandler);
const PORT=4400;
server.listen(PORT,()=>{
  console.log(`Server Running at http://localhost:${PORT}`);
})