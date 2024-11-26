const userNameInput=document.querySelector("#username");
const para=document.querySelector("p");
// userNameInput.addEventListener('input',()=>{console.log("input Event Fired");}) 

//To Access value thats been getting input      // INPUT EVENT
userNameInput.addEventListener('input',(e)=>{                           //Passing an EVENT OBJECT as Parameter in Arrow Function as 'e' , e for 'event' (parameter me kuch bhi pass kr skte hai , par e preferable rhta hai)
    console.log(e)                                                       // InputEvent {....}
    console.log(e.target.value);                                     //Input ke andr jo value hogi use hum access kar skte hai    // target is jispe event apply hora rha   "target: input#username"  // .value gives the value which we are giving 
    para.innerText=e.target.value                                       // input ke neeche wale para me joj value dalenge wahi hota jayega  
    inputValue=e.target.value                                           // For storing the input data
})                                                 


// CHANGE EVENT                 
// Jb input pe click krke input krte hai to use kahte hai "INPUT FOCUS" aur jb kahi bahr click krke input ke bahr ajate hai to use kehte hai "INPUT BLUR" krdiya 
userNameInput.addEventListener('change',(e)=>{                          // Jb hum input krke bahr kahi aur click krenge tb hoga ye 
    console.log(e.target.value,"change event");         
})


// FOCUS EVENT
userNameInput.addEventListener('focus',(e)=>{                          // Jb hum input focus  krenge tb ye event fire hoga  
    console.log(e.target.value,"Focus event Fired");         
    console.log(e.type,"e.type");         
})


// BLUR EVENT
userNameInput.addEventListener('blur',(e)=>{                          // Jb hum input blur krenge tb ye event fire hoga  
    console.log(e.target.value,"Blur event Fired");         
    console.log(e.type,"e.type");         
})


//                          FORM ka part hote h input and button elements 
// agr button form ke bahr hota h to normla react krta hai , par agr button form ke andar hai to vo to automatically submit krdeta hai ( SUBMIT EVENT karta hai by Default)  aur page refresh kardeta hai as in default feature 
// Form basically ek Anchor Tag jaisa kaam karta hai , jo submit hone pe kisi aur url pe le jaaye aur vo url hm dete hai ' action="" ' wale part me 
// Form jo hota hai vo URL ko DYNAMICALLY create krta hai , using INPUTS like action , Username , Email id . Ye sb input leke tab me ek url create krta hai aur ek specific Page pe le jata h . FOR EG- USER LOGIN (jo uper tab me username=ved emailid=Vedanksingh22 )
//    For eg - Dynamic URL http://127.0.0.1:5500/search?username=&Email+id=  (without input)
//                        http://127.0.0.1:5500/search?username=Vedank+Singh&Email+id=Vedanksingh22%40gmail.com     (After Input )

const form=document.querySelector("form")

form.addEventListener("click",(e)=>{
    console.log(e);                                         // PointerEvent {...}  isme jaake hum type pe dekhenge to ayega "click"
})


//SUBMIT EVENt
form.addEventListener("submit",(e)=>{
    console.log(e);                                        // ye turant gyb hojata hai kyunki dusre page pe chle jate hai hmlog , memory clean hojata h , so e.preventDefault()         // SubmitEvent 
    e.preventDefault()                                     // is se Form ka default behaviour Prevent hojata hai , aur submit dikhega 
    console.log("form submitted");
})



// e.target change hota rhta h based on what it has been clicked on , agr input pe click krenge to e.target input tag hojayega kyunki trigger uspe se hua h par input form ke andr hai to Mainly target form bhi hoga , agr hum chaah rhe ki mainly event Target jo hai use access kre ya show kre to we use e.currentTarget 

// On Clicking Input box of Form
form.addEventListener('click',(e)=>{
console.log(e.target);                              // Input
console.log(e.currentTarget);                       // Form 
})
// CurrentTarget mtlb hota hia kispe  Event Fire hua h , kispe Target hua hai 
// e.target Btata hai kaha se event Trigger Hoke Start hua h  // Ye change hota rehta hai 
