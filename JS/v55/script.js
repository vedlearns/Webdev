const a=document.getElementsByTagName("img");
//<--OR-->
// const a= document.images;     // ye "images" krke ek property hoti h jisko hm sue kr skte h 
console.log(a);                 // HTMLCollection [] 0:img 1:img 2:img      // ye ek Array jaisa hota h , par array nhi
const a1=document.getElementsByTagName("p");
console.log(a1);                // HTMLCollection []  0 se leke 12 jitne p tags the sb dega 


const allImages=document.getElementsByClassName("para");
console.log(allImages);        //HTMLCollection []  jitne class honge same sbko dedega

const allImages1=document.getElementById("paraid");
console.log(allImages1);        //null // par console me jake denge to vo PARA de rha jispe ID lgi h // agr 2-3 pe same id lgi h to sbse pahle wale ID ke element ko bhejdega // acchi practice yhi h ki ID unique rhe


//<------   what we will use     ------>// isme kuch bhi pass kr skte h TAG NAME/ID/CLASS 
//<------- querySelector     ------->(jo sbse pahla element milega use bhej dega)
document.querySelector("#paraid");                        //for Id # , for class .
document.querySelector(".para");          // class ke liye (value nhi store krwa skte , kyunki return me pura p tag arha)


//<--   Sare elements ke liye    ---><-----   querySelectorAll   ---->
const classValue=document.querySelectorAll(".para");
console.log(classValue);                    // NodeList []  jitne bhi honge sb NodeList ke form me send krdega , ispe Array ke kuch methods lga skte hai

const allIdValue=document.querySelectorAll("#paraid");
console.log(allIdValue);                    // NodeList []   ye saare Id ko bhejdega 

//<-----  isme hm ek Attribute ko bhi bhej skte h as value      ------->
const att=document.querySelectorAll("[alt='css roadmap']")      // hm CSS me jaise use krte h , vaise hi use krna h Parenthesis ke andr 
console.log(att);                           // NodeList []

//<------   NESTED elements      -------->
const li=document.querySelector("ul li")            // is se hua kya ki , jo sbse pahla ul tha use select kiya , fir jo ul ka first li tha use leliya 


//<------   performing a work to change all images   ---->
const imageUrl=[
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg"
]
document.querySelectorAll("img").forEach((element,i) => {
    element.src=imageUrl[i];
});


//ek particular part me se cheeze chiaye , jaise ek UL ke andr se to hum
document.querySelector("ul").querySelector(".para")


// Agr zada complex h code to elements me jao , jo element chaiye uspe right click then "COPY JS PATH" select krke use as a value pass krdo querySelector me  