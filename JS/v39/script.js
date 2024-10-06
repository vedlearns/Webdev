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