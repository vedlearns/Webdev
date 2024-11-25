function sayhi(){
    console.log("yoo");
}
function sayhi2(){
    console.log("yoo2");
}

// 3ways for adding Event Listener
// 1) through Property in HTMl      

//2)
const h1=document.querySelector("h1")
// h1.onclick=sayhi;

//3) What we are going to use
// This is different from onClick() ,in this we are adding an event which is click   
h1.addEventListener('click',sayhi);
// Reason why this is a preferable method 
//      we can add more than one events in single click or in a single time 
//    for eg-
        // h1.onclick=sayhi;
        // h1.onclick=sayhi2;      // In this method only this will execute because other onClick fun gets overwritten

        // BUt
        h1.addEventListener('click',sayhi);
        h1.addEventListener('click',sayhi2);        // In this both event will Execute


const card=document.querySelector(".ad-card");
const container=document.querySelector(".container");
let count=0;
card.addEventListener('click',()=>{
    const newCard=document.createElement("div");                    // we can also do this by cloning Node
    count++;
    newCard.innerText=count;
    newCard.classList.add("card");
    container.append(newCard)
})