const addcard=document.querySelector(".ad-card");
const container=document.querySelector(".container");
let count=1;

// TO Remove Added Cards

addcard.addEventListener('click',()=>{
    const newCard=document.createElement("div");                    // we can also do this by cloning Node
    newCard.innerText=count++;
    newCard.classList.add("card");
    container.append(newCard);

    // To Remove Cards on getting Clicked  
    // Applying EventListener on Every Card , then Removing it 
    newCard.addEventListener('click',()=>{
        newCard.remove();
    })
})


// To remove Cards if clicked by applying EventListener on PARENT instead of Children

container.addEventListener('click',(e)=>{
    if(e.target!=container)
    {
        e.target.remove();
    }
})


// Event Delegation(Code Optimization) jaise upr hume card remove krne ke liye , agr sb children card pe ek EventListenere lgaate to boht memory leta , joki achhi Approach nhi h 
// Isliye Children ke Bjaye Parent pe hi Event Lgake hum same Kaam kra le to use kehte hai EVENT DELEGATION 