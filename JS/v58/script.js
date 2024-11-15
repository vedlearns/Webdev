const h1=document.querySelector("h1");
const para=document.querySelector("p");

//h1 wale tag ka css property change kr rhe hai 
h1.style.color ='pink';

//Saare anchor tags ka color change krn hai to

const aLinks=document.querySelectorAll("a");

// Using For let loop

// for(let i=0;i<aLinks.length;i++)
// {
//     aLinks[i].style.color="orange";
// }


//Using For of Loop

// for (const link of aLinks) {                             // ek ek kar ke CSS ki value set krna
//     link.style.color="red";
//     link.style.textDecoration="none";
//     link.style.weight="800";
// }

// Easy way to do all of those changes

// for (const link of aLinks) {
//     link.style.cssText="color:red; font-size:18px; text-decoration:none; ";         // CSS ka code de dena seedha 
// }

// Better Way to do 
//Jitne Elements pe hume chaiye unpe hum Class Add krde

for (const link of aLinks) {
    link.className="red"   // aisa krne se har element pe Class set hojayega "red"

    //<------    OR       ------->
    // link.setAttribute("class","red");
}


//YE SB KRNE SE EK DM NEW CLASS SET HOGI HMESA JO HM DE RHE , AGR HM CHAHTE JO PAHLE SE CLASS HAI WO REMAIN KRE AUR NEW CLASSES HM ADD KR SKE UNME THEN we use CLASSLIST

// for (const link of aLinks) {
//     link.classList="border"                          // Yaha pe bhi jo value denge wahi class ki value set hogi , removing purani wali 
// }


// IF we want to add a class to it  then we use CLASSLIST methods

for (const link of aLinks) {
    link.classList.add("border");                   // To Add a class without affecting  already  present classes in the Element
    link.classList.remove("border");                //  To Add a class without affecting  already  present classes in the Element
    link.classList.toggle("border");                // If the Class is already present in the Element then REMOVE it , if not Present then ADD it
}



