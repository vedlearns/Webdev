const http = require("http");
const requestHandler=require('./user')
const server = http.createServer(requestHandler);

const PORT = 4400;
server.listen(PORT, () => {
  console.log(`Server Started at Port http://localhost:${PORT}`);
});
 