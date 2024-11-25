const container=document.querySelector(".container");   
const image=document.querySelector("img")


// for (let i = 0; i < 10; i++) {
//     const newImage=image.cloneNode();
//     // newImage.src=`zkashxina s${i} xn`
//     container.append(newImage);
// }


// To create Element
document.createElement("p")              // <p></p>                 // HTml element 
document.createElement("ved")           //  <ved></ved>             // custom Element   valid element even created in HTML and set with some default Values (sare custom created element inline element hote hai)


// create a paragraph tag 
const para=document.createElement("p")                      //<p></p>          
para.innerText="heeelooooo";
para.classList.add("my-para");
para.id="para1"
container.append(para)


// creating an image tag                        // Is poore section ko for loop me lga ke source set krke multiple no of times image add kar skte hai container me
const newImage=document.createElement("img");
newImage.src="/sp/recepie/im2.jpeg"
container.append(newImage)



// <--------------------      v63 (Removing an Element)         ------------------------->

// New Method .remove()
const h1=document.querySelector("h1");          // Selecting element to delete
h1.remove();                                    // Element removed

// Old method using   .removeChild()
// h1.parentElement.removeChild(h1);                // Parent element select krke remove krna pdta tha 


// Aisa krne se Actual Memory se remove nhi hota h , hum jab chaahe tb use Append kr skte hai 
console.log(h1);                            // <h1>Document....</h1>
// Memory se remove krne ke liye , Memory free krne ke liye set it to null
