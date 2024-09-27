const fruits =["Mango","Apple","orange"]
const myFruits=fruits;

//<--Changes made in Non-Original Array/Objects-->
myFruits.push("dates");
myFruits.push("grapes");
console.log(myFruits,fruits );              //(5) ['Mango', 'Apple', 'orange', 'dates', 'grapes'] (5) ['Mango', 'Apple', 'orange', 'dates', 'grapes']      //changes made in non original array causes changes to be makes in the original array too
//<--In objects-->
const user1={
    fname:"Anurag",
    Lname:"Singh"
}
const user2=user1;
user2.Lname="pandey";
console.log(user1.Lname);          //pandey // changes made in temp obj cause changes in Original Array too


//<--Explanation-->
// Object/Array dono ko jb hum copy krte hai (ln 2,13) to jo new array/object create hote vo original array/object ke elements ke address ko refer kr rhe hote h , Aur original Array/object & new dono ka address same hota , isliye kisi me bhi changes krne se dono me affect hota h


// <--Checking for String-->
const s="abs";
const t=s;
console.log(t);         // abs
const t2=t+":yo";
console.log(t2);        // abs:yo
let t3=t2;
t3=t3+"yy";
console.log(t3);        // abs:yoyy
console.log(t2);        // abs:yo
// ye cheez String me nhi hoti hai , kyunki har baar string ka new Address create hota hai 

//<--SHALLOW COPY (jo bhi hoga sirf ek level tk hoga , nested arrays/objects ke liye same problem hogi , kyunki sirf ek level ko copy krta h properly)-->
//<--how to Correctly Copy objects --><--OLD WAY-->
const user3={};                                     // create  new Object with Empty Parenthesis 
Object.assign(user3,user1);                        // then Assign "User3" with "User1" using "Object.assign(Jisme values dalni, jiki values daalni)" 
const fruits2=[];                                 // creating temp array with empty set
Object.assign(fruits2,fruits);                   //  Assigning values to temp Array
console.log(fruits2);                           // (5) ['Mango', 'Apple', 'orange', 'dates', 'grapes']
fruits2.pop();
console.log(fruits2,fruits);                  //(4) ['Mango', 'Apple', 'orange', 'dates'] (5) ['Mango', 'Apple', 'orange', 'dates', 'grapes'] 
 

//<--NEW WAY--><--Most widely used-->
 const user4={...user1};              // "..." lga ke jiski value chaiye usko likh dete , hojata copy ,"..." is called spread operator (ye sb kuch copy krdeta h)
 const fruits4=[...fruits];
 console.log(fruits4);              // (5) ['Mango', 'Apple', 'orange', 'dates', 'grapes']


//<--other Ways-->
const fruits5=[].concat(fruits4);          // using concat
console.log(fruits5);                    //(5) ['Mango', 'Apple', 'orange', 'dates', 'grapes']

const fruits6=fruits5.slice();              // ye new Address create krdega 
fruits6.pop();
console.log(fruits6, fruits5);              //(4) ['Mango', 'Apple', 'orange', 'dates'](5) ['Mango', 'Apple', 'orange', 'dates', 'grapes']

//<TRYING = FOR COPYING ARRAYS>
const fruits7=fruits5;                       //new Array create hojayega par Address Same rhega
console.log(fruits7);                       //(5) ['Mango', 'Apple', 'orange', 'dates', 'grapes']
fruits7.pop();
console.log(fruits7,fruits5);               //(4) ['Mango', 'Apple', 'orange', 'dates'](4) ['Mango', 'Apple', 'orange', 'dates']
//<--SO THIS SHOULD NOT BE USED -->


