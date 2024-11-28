const card=document.querySelector(".ad-card");
const container=document.querySelector(".container");
let count=1;
card.addEventListener('click',()=>{
    const newCard=document.createElement("div");                    // we can also do this by cloning Node
    
    newCard.innerText=count++;
    newCard.classList.add("card");
    container.append(newCard)
})


// JS ke through Event Stimulate krna instead of user 

//                              CLICK EVENT

// Add cards Through JS 
// card.click();               // Ye aisa krega ki hmne jiase Click kiya h Card pe 

// For Printing 1000 cards 

// for (let i = 0; i < 999; i++) {
// card.click();    
// }


// Apne app hota rhe aur Interval pe ho ek to
const intervalID=setInterval(()=>{
if(count>999)
{
clearInterval(intervalID);
}
card.click();

},400);

const input=document.querySelector("input");

//                                   Focus & BLUR EVENT
// Jaise Page reload krenge apne app focus hojaye

setTimeout(()=>{                                // 2 sec ke baad apne app focus 
    input.focus();
},2000)
setTimeout(()=>{                                // 4 sec ke baad apne app blur
    input.blur();
},4000)


const form=document.querySelector("form");

//                                  SUBMIT & RESET EVENT
setTimeout(()=>{
    form.submit();                              //5 sec baad apne app submit hojayega
},5000)
setTimeout(()=>{
    console.log("reset done");
    form.reset();                              //3 sec baad apne app reset hojayega
},3000)