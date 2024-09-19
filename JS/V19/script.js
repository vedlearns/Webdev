// debugger
// const username =5>2?'dev':'ved';
// console.log(username);
const gender=prompt("enter M or F");
const userMessage=`${gender==('M'||'m')? 'He':'She'} is a college student.`;//using ternary operator
// brackets are imp otherwise 'm' is truthy value and will always print he is a college student
console.log(userMessage);

// <--for turthy or falsy value-->
// 0 in string is a truthy value , without it a falsy value
const userMessage2=`${'0'?'he':'she'} truthy`; 
console.log(userMessage2);

// <--using ternary operator as if else if-->
const result=0?'Anurag':null?'truthy ':''?'truthy 3rd':'falsy 3rd';// ek ke baad ek check krega 
console.log(result);
