const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit();
  // if (req.url === "/") {
  //   res.setHeader("Content-Type", "text/html");
  //   res.write("<html>");
  //   res.write("<head><title>Ved+Backend</title></head>");
  //   res.write("<body><h1>Home<h1/><body/>");
  //   return res.end();
  // }
  // else if (req.url === "/products") {
  //   res.setHeader("Content-Type", "text/html");
  //   res.write("<html>");
  //   res.write("<head><title>Ved+Backend</title></head>");
  //   res.write("<body><h1>Products<h1/><body/>");
  //   return res.end();
  // }
  // res.setHeader("Content-Type", "text/html");
  // res.write("<html>");
  // res.write("<head><title>Ved+Backend</title></head>");
  // res.write("<body><h1>YOOOO<h1/><body/>");
  // return res.end();
  if (req.url === "/") {
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title>Ved+Backend</title></head>");
      res.write("<body><h1>Home<h1/><body/>");
      return res.end();
    }
  else if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Ved+Backend</title></head>");
    res.write("<body><h1>Enter Details</h1>");
    res.write('<form action="/submit-details" method="POST">');
    res.write(
      '<input type="text" name="username" placeholder="Enter Your Name"><br>'
    );
    res.write("<label  >Gender:</label>");
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male" />');
    res.write('<label for="female">Female</label>');
    res.write(
      '<input type="radio" id="female" name="gender" value="female" />'
    );
    res.write('<label for="others">Others</label>');
    res.write(
      '<input type="radio" id="others" name="gender" value="others" />'
    );
    res.write('<br><button type="submit">Submit</button>');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) {
    fs.writeFileSync("user.txt", "Vedank Singh");
    res.statusCode = 302;                                                                         //302 means redirection
    res.setHeader('Location','/')
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Ved+Backend</title></head>");
  res.write("<body><h1>YOOOO<h1/><body/>");
  return res.end();
});

const PORT = 4400;
server.listen(PORT, () => {
  console.log(`Server Started at Port http://localhost:${PORT}`);
});
  