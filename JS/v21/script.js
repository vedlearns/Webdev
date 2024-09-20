const user ={firstName:"DEV"};// this is how you make object content in them is called key and value
// to access content of object in console write- "user.firstName"
//there can be different key and values in an object
const user2={firstName:"ved",lName:"Singh"}// 2 diff object can have variables of the same name

const Age=25;
const user3={
    fName:"Edan",
    lName:"XB",
    Age:22,
    city:"Banglore",
    "city2":"Lucknow"//keys can also be written like this , keys can be written in string ,the engine will automatically remove the string and store it as key
   // sometimes its is necessary to write in string , when keys are to be written in "city-name"(cuz this is not how its is supposed to be written) so usage of string is imp 
   // aur bracket notation use krte "l-name" type ke key ko access krne ke liyee 
}
const user4={
    fName:"Edan",
    lName:"XB",
    Age:22,
    city:"Banglore",
}

console.log(user4.lName);// This is called dot Notation

console.log(user4["lName"]);// This is called Bracket Notation
// <--Square/Bracket Notation is imp -->
// **is we need to access other variables outside the object it will give "undefined" (using dot notataion)
// - when can access other variables outside object by using BRACKET NOTATAION  written in string  
// for eg- <---using JS Variables-->
console.log(user4["Age"]);
// <--for JS Expressions-->
console.log(user4["f"+"Name"]);// ye aise bhi work krta expression form me bhi

// <-Updation of Object->
const user5={
    fName:"Edan",
    lName:"XB",
    Age:22,
    city:"Banglore",
}
user5.class=5; // by doing this we can update the code 
// user5.student-section="A" // this code will have error so
user5["student-section"]="A" //is way me access bhi hoga 

// <--NESTED OBJECT-->
const user6={
    fName:"Edan",
    lName:"XB",
    Age:22,
    Address:{                         // This is an eg of Nested Object
        city:"Banglore",
        pincode:228050,
        state:"Karnataka",
        Address:"xyz"
        // we can create more nested objects here
    }
}
//<--To access values in Nested object-->
console.log(user6.Address.city);
console.log(user6.Address.Address);
