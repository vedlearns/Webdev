//FUNCTION DECLARATION
function Twice(num){
    return num*2;
}

// FUNCTION EXPRESSIONS
const a= function num1(num){
    return num+num;}
//way to access 
// console - a(5);


// ARROW FUNCTION EXPRESSION
// Syntax -agr sirf ekm line ka code h; 
const square =(num)=>num*num;             // ye Return kr rha h num*num          // Is return ko kehte hai IMPLICIT RETURN (Vo return jo automatic hojata h)
const add=(a1,b)=>a+b;                    // Arrow function ka syntax boht chota hota hai , isliye kafi common hota h as CALL BACK function ke liye


// For eg-
setTimeout(()=>{console.log("yooo");},5000)         // ek valid function without parameter , joki ARROW FUNCTION hai


// FOR NO PARAMETERS, we can leave parameters empty
const random =()=>Math.random();

// FOR ONE PARAMETER,
const mult=num=>num*5;                      // it will give value multiplies by 5
// Access in Console -
// mult(8)              // 40

//<---OR--->
// Normal way 
const mult6=(num)=>num*6                     // give value multiplied by 6


//FOR MORE THAN ONE PARAMETERS ,USE BRACKET <---USE THIS FORMAT--->
const div=(a,b,c)=>a/b/c;
// console -   div(9,6,3)                      //0.5

// agr code ke liye "{}" use kr rhe to return keyword ka use krna zruri h
const x=(a,b,c,d)=>{return a*b-c+d};
