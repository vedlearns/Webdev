function a(b){
    console.log("\n",typeof b);
    console.log(b);
}
a("Hii");                                      //  string    Hii                                   // on passing a string  
a({userName:"ved",userAge:25});                // object     {userName: 'ved', userAge: 25}        // on passing an object
a([2,5,6,8,9,1,4]);                            //  object    (7) [2, 5, 6, 8, 9, 1, 4]             // on passing an array

console.log("\n");
// console.log(a);                     //ƒ a(){console.log("hii");}                //clg pe pura code as it is print krdeta agr hm kisi function ko clg kraye  to , so instead of that we use CONSOLE.DIR  
// console.dir(a);                     //ƒ a()     // it shows that function is an object 


//<----PASSING FUNCTION INSIDE A FUNCTION---->
function b1(b){
    console.dir(b);                     // ƒ sayHi()                    // ye ayega is line se
    // console.log(b);                  // is se pura code sayHi ka, as it is  
    b();                                // HIIIIIIIIIIIII               // is line se ye ayega 
}
function sayHi(){
    console.log("HIIIIIIIIIIIII");
}
b1(sayHi);


// <---CALLING FUNCTION USING CONSTANT--->

// wrong way
// const x=sayHi();
// console.log(x);              // undefined

// This is also a way to call a function
const x=sayHi;
x();

// Updation in function
x.age=22;                   // aisa krne se function sayHi me age naam ka variable add hojayega jiski value 22 hogi
console.log(x.age);         // 22
console.log(sayHi.age);     //22


//<---ANONYMOUS FUNCTION----><Jis function ka naam na ho>
b1(function(){        // jis function me dusra function pass kiya hai uss function ko kehte hai HIGHER ORDER FUNCTION(b1)  // jis function ko pass krte hai use kahte hai CALLBACK FUNCTION(in this case anonymous fun) ,kyunki use hote vakt vo call back hoke use hoga 
    console.log("This is an example of Anonymous Function");        //ƒ anonymous()       This is an example of Anonymous Function
})

// Function jo input leta function ya return krta hai function ko use kahte h HIGH ORDER FUNCTION