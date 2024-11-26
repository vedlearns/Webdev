// Keyboard Event kisi ke bhi upar lga skte hia jb tk vo focusable hai , meaning cursor uske upr h 


// KeyPress Event               // Jb tk Key Pressed rhengi tb tk chlega
const h1=document.querySelector("h1");      // we have to focus h1 too , because in default state it can not be focused .
// To focus it give ' tabindex="0" ' in HTML code in h1 tag
h1.addEventListener('keypress',(e)=>{
    console.log("Key Code ",e.code);            
    console.log("Key ",e.key);            
})


// KeyUp Event                  // Key Press krke Loose krnege tb
h1.addEventListener("keyup",(e)=>{
    console.log("Key Code ",e.code);            
    console.log("Key ",e.key);
})


// Keydown Event                // same as Keypress par isme sare keys ka value n code deta , like tab ,shift ctlrshift joki KEYPRESS me nhi hota  
h1.addEventListener("keydown",(e)=>{
    console.log("Key Code ",e.code);            
    console.log("Key ",e.key);
})


// Key Events are usually applied on Document or Window