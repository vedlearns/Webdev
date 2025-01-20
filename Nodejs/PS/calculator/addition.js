const addition=(req,res)=>{
const body = [];
req.on("data", (chunk) => {
  body.push(chunk);
});
req.on("end", () => {
  const fullBody = Buffer.concat(body).toString();
  const params = new URLSearchParams(fullBody);
  const bodyObject = Object.fromEntries(params);
  const result = Number(bodyObject.num1) + Number(bodyObject.num2);
  res.write(`<html>
        <head><title>Result</title></head>
        <body>
        <h1>Result is : ${result}</h1>
        <body/> </html>`);
  return res.end();
  }
)
}
module.exports=addition;