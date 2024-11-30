const nameElement=document.querySelector(".name-tag");
const nameElement2=document.querySelector(".name-tag2");
const nameInput=document.querySelector(".name");
const nameInput2=document.querySelector(".name2");
const ageInput=document.querySelector(".age");
const ageElement=document.querySelector(".age-tag");


// Using Local Storage . But not a preferable method 
// inputData direct Dev Tools use krke set kiya tha

nameElement.innerText=localStorage.inputData;                                // Jo local storage me rhega us se data access kar rhe hai 
nameInput.addEventListener('input',(e)=>{
            localStorage.inputData=e.target.value                           // Updating in Local Storage 
            nameElement.innerText=localStorage.inputData                    // Accessing data from Local Storage 
})

// Preferable Method is  
nameElement2.innerText=localStorage.getItem("myName");
nameInput2.addEventListener('input',(e)=>{
        // localStorage.myName=e.target.value;
        // nameElement2.innerText=localStorage.myName;
        localStorage.setItem("myName",e.target.value);                          // set krt Local Storage wale variable ko jo ki left me hai , right wale se "e.target.value"
        nameElement2.innerText=localStorage.getItem("myName");                  // Jo access krna string jaisa pass krte hai 
})

// INCOGNITO me switch hoke waps aane pe hi data delete hoga Local storage ka automatically , vrna manually delete krne se hi hoga

ageElement.innerText=localStorage.getItem("age");
ageInput.addEventListener("input",(e)=>{
        localStorage.setItem("age",e.target.value);
        ageElement.innerText=localStorage.getItem("age");
})


//                                              We Can store Big Objects too 

const nameElement3=document.querySelector(".name-tag3")
const ageElement3=document.querySelector(".age-tag3")
const nameInput3=document.querySelector(".name3")
const ageInput3=document.querySelector(".age3")

// const myData={                                                // AGR lOCAL Storage exist nhi krta hia to aise set krke start krna 
//         name:"",
//         age:""
// }

myData=JSON.parse(localStorage.getItem('myData')) || {}          // agr local storage exist kre ya na kare uske liye optimum code // parse jo JSON String hogi Local Storage me usko object me convert krke vo object assign kar rha hai myData ko 
if(myData.name)                                                  // agr local storage me exist kr rha name tbhi value assign kre vrna yndefined show hoga heading pe page reload krne pe
{
        nameElement3.innerText=myData.name;
}
if(myData.age)                                                  // same cheez for age
{
        ageElement3.innerText=myData.age;
}

nameInput3.addEventListener('input',(e)=>{
        myData.name=e.target.value;                                               // data input obj me 
        localStorage.setItem('myData',JSON.stringify(myData));                    // obj ko JSON String me convert krke Local Storage me store kara rhe 
        nameElement3.innerText=e.target.value;                                    // heading bhi update hote rhe saath saath me 
})
// same cheez for age 
ageInput3.addEventListener('input',(e)=>{
        myData.age=e.target.value;
        localStorage.setItem('myData',JSON.stringify(myData));
        ageElement3.innerText=e.target.value;
})