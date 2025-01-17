const http=require('http');

const server=http.createServer((req,res)=>{
  res.write("<html>");
  res.write("<head><title>Myntra</title></head>");
  res.write("<body><navbar>");
  res.write("<a href='/home'>Home</a>  ")
  res.write("<a href='/men'>Men</a>  ")
  res.write("<a href='/women'>Women</a>  ")
  res.write("<a href='/kids'>Kids</a>  ")
  res.write("<a href='/cart'>Cart</a>  ")
  res.write("</navbar></body>");

  // if( req.url==="/home"){

  //   res.write("<html>");
  //   res.write("<head><title>Myntra</title></head>");
  //   res.write("<body><navbar>");
  //   res.write("<a href='/home'>Home</a>  ")
  //   // res.write("<a href='/men'>Men</a>  ")
  //   // res.write("<a href='/women'>Women</a>  ")
  //   // res.write("<a href='/kids'>Kids</a>  ")
  //   // res.write("<a href='/cart'>Cart</a>  ")
  //   res.write("</navbar></body>");
  //   return res.end();
  // }
   if(req.url==="/men"){
    res.write("<html>");
    res.write("<head><title>MEN</title><head>")
    res.write("<body><h1>Welcome to Men Section </h1><br><a href='/'>HOME</a></body>")
    return res.end();
  }
  else if(req.url==="/women"){

    res.write("<html>");
    res.write("<head><title>WOMEN</title><head>")
    res.write("<body><h1>Welcome to Women Section </h1><br><a href='/'>HOME</a></body>")
    return res.end();
  }
  else if(req.url==="/kids"){

    res.write("<html>");
    res.write("<head><title>KIDS</title><head>")
    res.write("<body><h1>Welcome to Kids Section </h1><br><a href='/'>HOME</a></body>")
    return res.end();
  }
  else if(req.url==="/cart"){

    res.write("<html>");
    res.write("<head><title>CART</title><head>")
    res.write("<body><h1>Welcome to Cart Section </h1><br><a href='/'>HOME</a></body>")
    return res.end();
  }
})

const PORT=4400;
server.listen(PORT,()=>{
  console.log(`server running at http://localhost:${PORT}`);
})