const green=document.querySelector(".green")
const blue=document.querySelector(".blue")
const pink=document.querySelector(".pink")
const body=document.body;

// EVENT BUBBLING (andr se bahr ki tarf jana , Event trigger hoke sare Parents ke Event ko Fire  krdeta if Present )

window.addEventListener("click",(e)=>{
    console.log("1: Window Event Listener");                        // pure window me kahi bhi  click krne pe hoga , chaahe kisi bhi div box me click kre
})
document.addEventListener("click",(e)=>{
    console.log("2: Document Event Listener");                        // pure Document me kahi bhi  click krne pe hoga , chaahe kisi bhi div box me click kre
})
body.addEventListener("click",(e)=>{
    console.log("3: Body Event Listener");                        // pure Body me kahi bhi  click krne pe hoga , chaahe kisi bhi div box me click kre
} )
green.addEventListener("click",(e)=>{
    console.log("4: Green Event Listener");                        // Green pe click krne pe sirf Green
} )
pink.addEventListener("click",(e)=>{
    console.log("5: Pink Event Listener");                         // Pink pe click krne se Green ke sath Pink bhi Print hora hai 
})
blue.addEventListener("click",(e)=>{
    console.log("6: Blue Event Listener");                         // Blue pe click krne se pink ke saath saath Green bhi hora hai 
} )
// Kyunki Green Parent hai blue aur Pink ka , Ise kehte hai Event Ka bubble hona , andr se bahr ki trf jaa rha , blue ke event trigger hone se Uske parents pe bhi Event Fire hora 

// Agr Blue pe click krenge to saare events Fire hojaenege , kyunki sb uske parent hai   

//---------------------------------- TO Stop Event Bubbling -----------------------------
// Use stopPropagation()    , andr se bahr Event Propagate hota hia to use Stop krdiya 

blue.addEventListener("click",(e)=>{
    e.stopImmediatePropagation();
    console.log("6: Blue Event Listener");                         // Blue pe click krenge aur sirf Blue ka hi Event Fire Hoga
} )



// EVENT BUBBLING ka ulta bahr se andr ki trf aaye Event Trigger Hote hue , for eg - Blue Box me click kiya par sbse pahle Window ka event occur ho then document and so on Till Blue Div
// This is Known as Event Capturing

// To do this we give third Argument  in addEventListener 
// Third Value is known as Use Capture

window.addEventListener("click",(e)=>{
    console.log("1: Window Event Listener");                        // pure window me kahi bhi  click krne pe hoga , chaahe kisi bhi div box me click kre
}, true)
document.addEventListener("click",(e)=>{
    console.log("2: Document Event Listener");                        // pure Document me kahi bhi  click krne pe hoga , chaahe kisi bhi div box me click kre
}, true)
body.addEventListener("click",(e)=>{
    console.log("3: Body Event Listener");                        // pure Body me kahi bhi  click krne pe hoga , chaahe kisi bhi div box me click kre
}, true )
green.addEventListener("click",(e)=>{
    console.log("4: Green Event Listener");                        // Green pe click krne pe sirf Green
}, true )
pink.addEventListener("click",(e)=>{
    console.log("5: Pink Event Listener");                         // Pink pe click krne se Green ke sath Pink bhi Print hora hai 
}, true)

//                              OR

blue.addEventListener("click",(e)=>{
    console.log("6: Blue Event Listener");                     
}, {capture: true} )                        // By default false rehta hai


//  -------------------- Agr Hum Chaah rhe ki Hmara Event Sirf EK hi baar kaam kre to -------------------------------------

blue.addEventListener("click",(e)=>{            
    console.log("6: Blue Event Listener");                         
}, {once:true} )                                            // Sirf Ek baar Run hoga uske baad Trigger hoga tb bhi nhi Run krega
