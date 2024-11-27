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


// Key Events are usually applied on Document or Window

//<-----------------  v67 Mouse Events     --------------------->

// click & dblclick

// h1.addEventListener("click",(e)=>{               //jaise click complete hoga tb
//    console.log(e);
// })

// MouseDown

// h1.addEventListener("mousedown",(e)=>{              // jaise mouse se click krenge tb 
//     console.log(e);
//  })
 
// MouseUp

// h1.addEventListener("mouseup",(e)=>{                    // jb mouse click krke loose krenge tb
//     console.log(e);
//  })
 
// Mouseenter

// h1.addEventListener("mouseenter",(e)=>{                    // jb mouse enter krega dive me tb
//     console.log(e);
//  })
 
// Mouseleave

// h1.addEventListener("mouseleave",(e)=>{                    // jb mouse leave krega dive me se tb
//     console.log(e);
//  })

 // Mousemove

// h1.addEventListener("mousemove",(e)=>{                    // jb mouse move krega dive ke andr tb
//     console.log(e);
//  })

 // Mouseout

// h1.addEventListener("mouseout",(e)=>{                    // jb mouse leave krega dive me se tb
//     console.log(e);
// })

// Mouseover

// h1.addEventListener("mouseover",(e)=>{                    // jb mouse div area ke upr rhega tb bhale usme kitne alg div rhe ,un sb ke upr rhega tb bhi jb tk main div ke andr h 
//     console.log(e);
// })

//Wheel

// h1.addEventListener("wheel",(e)=>{                    // jb wheel move krenge tb
//     console.log(e);
// })

// //Scroll

// h1.addEventListener("scroll",(e)=>{                    // jb scroll lga ho Div pe aur uspe kre 
//     console.log(e);
// })


// Mobile Devices ke liye 

// touchstart , touchend , touchmove

// h1.addEventListener("touchstart",(e)=>{                    // jb touch  krenge element tb
//     console.log(e);
// })

//Drag                      // Normally elements drag nhi hote , unhe drage krne ke liye HTML me use draggable property and set it true
// h1.addEventListener("drag",(e)=>{                    // jb Element drag krenge tb
//     console.log(e);
// })

//Desktop and Mobile dono ke liye Kamm kre 

//Pointer Event

//pointermove , pointerenter , pointerleave and more 
h1.addEventListener("pointermove",(e)=>{                    // jb move krenge div me  tb
    console.log(e);
})