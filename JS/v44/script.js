'use strict'
const fruits=["apple","orange","Pineapple","guava"]
// for i loop(normal)
for(let i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}
console.log("   ");


//<-------      FOR OF      ------------------>(For ITERABLE Objs - ARRAY,STRING,MAP,NODE LIST ,TYPED ARRAY)
// Array, string ke liye hotya h
for(const fruit of fruits)                            //  ( CONVENTION )variable singular , array be plural 
{
    console.log(fruit);                             //  fruit me ek ek data store hoga ARRAY ka , har Loop me naya Variable(Fruit) banega to CONST se ERROR nhi Ayega , Var use krenge to loop/function ke baad bhi memory me stored rhega isliye const 
}
// String
const name="vedanksingh";
for(const letter of name)
{
    console.log(letter);
}
console.log("   ");

//<------------------------    FOR IN         --------------------------------------->
// Objects ke liye 
const person={
    firstName:"John",
    lastName:"Doe",
    age:22,
    color:"black"
}

// <----TIME CONSUMING , SHOULD AVOID ---->
for(const key in person)                        //Syntax 
{
    console.log(key , ": ",person[key]);                   //How to access elements in objs
}
 
console.log("   ");

// Other Method to get objs in loop
const personKeys=Object.keys(person);                               //For getting All the Keys of an Object       // personKeys me saari keys chli gyi hai object Person , ab use normal loop jaise access kar skte hai (Array Wala Loop Lgaenge )
 for(const key of personKeys)                                       // This is Better Saves time
 {
    console.log(person[key]);
 }
 console.log("   ");

 const personValues=Object.values(person);                          // FOR getting all the values of an Object
 for(const values of personValues)
 {
    console.log(values);                                            // it will print all the values from person obj
 }
 console.log("   ");

 const personEntries=Object.entries(person);                           // for getting both KEYS and VALUES from Obj PERSON
 console.log(personEntries);                                            //(4) [Array(2), Array(2), Array(2), Array(2)]      //ek array jiske andr  aur array hai jo value or keys store kar rhe hai  
 for(const e of personEntries)
 {
    console.log(person[e[0]]);                                      // ye maine kiya hehehe
 }

 // AGR check krna ki koi element kisi object me hai ki nhi 
 console.log("firstName" in person);                                //true      // ye dhundne ke liye "in" key word use krte joke for in se totally different hai


 

//<-----------------------         V45          ------------------------------->

console.log("\n","Using For of");
 for(const fruit of fruits)
 {
    console.log(fruit);
 }

 console.log("\n","Using For each");

 //<-----       FOR EACH LOOP           ------->(forEach ek method hota hai,Array ke liye)
 fruits.forEach(function(fruit){console.log(fruit);})       // jitne bhi elements hai hmare Array me utni baar ye Anonymous function ko call krega
 // forEach (method/function) is a eg of higher ordered function ,and the anonymous/anonymous function is a callback function , 

 console.log("\n","using Arrow function ");

 //<-----    using Arrow Function       ------>
fruits.forEach((Fruit)=>{console.log(Fruit);});

//named function bhi pass kr skte h anonymous ki jagh pe 
function abc(eL){
    console.log("yooo");
}

fruits.forEach(abc);                    // (4) yooo

