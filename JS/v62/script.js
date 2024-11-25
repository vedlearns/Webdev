const h1=document.querySelector("h1");
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
