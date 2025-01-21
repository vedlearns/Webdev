const fs = require("fs");
const userRequestHandler=(req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Ved+Backend</title></head>");
    res.write(`<body><h1>Home<h1/>
          <a href="/form">Form</a> 
      <body/>`);
    return res.end();
  }
  if (req.url === "/form") {
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
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const params=new URLSearchParams(fullBody)
      // const bodyObject={};
      // for(const [key,value] of params.entries())
      // {
      //     bodyObject[key]=value;
      // }
        const bodyObject=Object.fromEntries(params);
        console.log(bodyObject);
        fs.writeFileSync("user-details.txt", JSON.stringify(bodyObject));
      });
    res.statusCode = 302;
    res.setHeader("Location", "/");

  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Ved+Backend</title></head>");
  res.write("<body><h1>YOOOO<h1/><body/>");
  return res.end();
}

module.exports=userRequestHandler;