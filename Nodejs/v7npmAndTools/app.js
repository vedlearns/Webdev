const http = require("http");
const server = http.createServer((req,res)=>{
  console.log(req.url);
});

const PORT = 4402;
server.listen(PORT, () => {
  console.log(`Server Started at Port http://localhost:${PORT}`);
});
 