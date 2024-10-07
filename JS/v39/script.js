// setTimeout("hiiiiii");                  //Isme error dega kyunki hiiii ko js ka code nhi h 

// const hi="hiii";
// setTimeout("hi");                           // isme error nhi ayega kyunki "" ke andr jo ata use ya to code jaise treat krte hai ya fir variable jaise treat krte hai

setTimeout("console.log('hello');",2000);

const timer1=setTimeout(`console.log("hi-1");`,1000);        // timer 1 id store krlega pahle setTimer ki
const timer2=setTimeout(`console.log("hi-2");`,2000);
const timer3=setTimeout(`console.log("hi-3");`,3000);

clearTimeout(timer3);                                  // is se timer3 wala print nhi hoga , uska setTimeout cancel hojayega
clearInterval(timer2)                                  // same CLEARTIMEOUT wala kaam kreg ye i.e. timer 2 nhi print hoga


function a(){
    console.log("yoooo");
}

//<-USING SETTIMEOUT AS HIGHER ORDER FUNCTION->
const timer4=setTimeout(a,4000);                // yahi syntax h proper (USE THIS WAY)
const timer5=setTimeout(a(),5000);              // "a()" use krne se a() call hojayega aur vo pura execute hoga jaisa hota , then a() ka return value ayega setTimeout() me ,aur uska return value print hoga given time ke baad , par is case me undefined ayega kyunki a() ka return nhi h , undefined hone ki vjh se kuch bhi print nhi hoga


//<-USING SETINTERVAL->
const timer6= setInterval(`console.log("hh")`,1000);            // ye har ek sec me print krwata rhega
clearInterval(timer6);                                          // ye setInterval ko rokne ke liye use hoga 
clearTimeout(timer6);                                           // same work as cleaeinterval


setTimeout(function(){console.log("yoink");},0)             // asynchronous code       // MOST common way of using setTimeout (anonymous func)
console.log("first");                                         //  synchronous code


//<---------------------------------------      v40       ----------------------------------->
// <---ASYNCHRONOUS AND SYNCHRONOUS CODE---->
//functions like setTimeout in sb ka execution js ke under nhi ata ye aata h webapis ke , browser engine ke under
// jb setTimeout jaisa function ata code me to vo normal CALL-STACK me bheje jane ke bjaaye vo Jata h CALL-QUEUE , jitne function browser engine se honge vo sb line se hote h , aur end me execute hote 
// ek hota h EVENT LOOP jo call stack aur call queue ke beech me kaam krta h , uska function hota h check krna ki call queue khali h ki nhi ,agr khali nhi hoti h to use call stacke me dalta jata h turn by turn 
// ye sb code kehlate h ASYNCHRONOUS CODE(jo seedha call stack me na jaaye , call queue hote hue jaye)

//MDN DEFINITION- Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result.
//W3SCHOOL - "I will finish later!"
//           Functions running in parallel with other functions are called asynchronous
//           A good example is JavaScript setTimeout()

// SYNCHRONOUS CODE -
// jo code line by line execute hote h JS engine se , ek ke ek baad execute honge. 