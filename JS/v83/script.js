// fetch('https://dummyjson.com/users')
// .then(res => res.json())
// .then(console.log);


// By default GET Req bhejta h 

fetch('https://dummyjson.com/users')                        // 2 baar cheeze krni hoti h isme  .then jo h vo promise deta hai to pahle .then se  Ek PROMISE OBJ milega data nhi , DATA ke liye .then use kiya hai 
.then(res=>res.json() )
.then((data)=>{console.log(data)})
.catch(console.log)  


// -------------------------------------------KOI aur REQ Bhejni Ho to

// fetch('https://dummyjson.com/users',{
//     method: 'VED',                  
// })

//<-------------------     SYNTAX               ------------------------>


fetch('https://dumyjson.com/products/add', {                        // ek m uda diya h error ke liye
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: 'BMW Pencil',  
      category:'Stationary'
      /* other product data */
    })
  })
  .then(res => res.json())
  .then(console.log)
  .catch(console.log)                                   //net::ERR_NAME_NOT_RESOLVED                      // jo error hoga vo apne app aake print hojayega , kyunki console.log bhi ek function hai aur use hm direct Catch me bhej skte hai (automatic returned data leke use pe react krega)

  /* updating title of product with id 1 */
fetch('https://dummyjson.com/products/1', {
    method: 'PUT', /* or PATCH */
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: 'iPhone Galaxy +1'
    })
  })
  .then(res => res.json())
  .then(console.log)
  .catch(console.log)  