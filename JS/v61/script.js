const h1=document.querySelector("h1")
const container = document.querySelector(".container")
const card = document.querySelector(".card")

// Append Meaning - Add something to the end of an document 
// we can copy / Cut paste also but using JS 
container.appendChild(h1)           // Container ke andr cut paste hogya h1 tag element

// COPY bna ke krne ke liye "cloneNode"
container.appendChild(h1.cloneNode())           // Aisa krne se sirf TAG copy hota h uske andr ka content nhi 
container.appendChild(h1.cloneNode(true))       // ye hota h Deep Clone //  TAG element ke andr ka content bhi copy hojayega ie text

// Already existing element ko append krna usi container me
container.appendChild(card)                     // No changes 

container.appendChild(card.cloneNode(true))          // pura Copy hoke Append hojayega

// Create 100 cards in  a container


for(let i = 2; i <=100 ; i++) {
    const newCard=card.cloneNode();
    newCard.innerText=i;
    container.appendChild(newCard)
}

// Doing this using Emmit of VS CODE
// .card*100{$}

// Parent / Grand Parent... element ko Append nhi kr skte h 


// appendChild VS append


// 1) appendChild returns the Element which has been appended  whereas append does not return 


// 2) append can append String values also
container.append("hello");
// container.appendChild("hello");         // Error that hello is not a Node

// To make a string as a Node 
const newTextNode=document.createTextNode(" Hello 2");
// Now using appendChild
container.appendChild(newTextNode)              // Hello 2

// Using append we Can append multiple elements in one time 
container.append(newTextNode, h1,card);

container.appendChild(newTextNode, h1,card);            // Only the first value is appended 


// sirf Element chaiye hota hai
container.cloneNode()       // sirf element

// pura content chaiye to 
container.cloneNode(true)       // everything is cloned including texts
 