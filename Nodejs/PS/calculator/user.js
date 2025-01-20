const addition=require('./addition')
const userRequestHandler = (req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
    <head><title>HOME</title></head>
    <body><h1>Welcome to The Calculator<h1/>
    <a href="/calculator">Calculator</a>
    <body/> </html>`);
    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.write(`<html>
      <head><title>Calculator</title></head>
      <body>
      <h1>Addition</h1>
      <form action="/calculate-result" method="POST">
      <input name="num1" type="number">
      <p> + </p>
      <input name="num2" type="number">
      <button >SUM</button>
      </form>
      <body/> </html>`);
    return res.end();
  } else if (
    req.url.toLowerCase() === "/calculate-result" &&
    req.method == "POST"
  ) {
      addition(req,res);
  }
  else{
    res.write(`<html>
      <head><title>PS</title></head>
      <body><h1>404 Page not found<h1/>
      <a href="/">Go to Home</a>
      <body/> </html>`);
  }
};
module.exports = userRequestHandler;
