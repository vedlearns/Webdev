// HOISTING-   ye wo process hota h jisme hme appear hota ki VAR ko use krke jo variable & functions hai vo move hoke upar hojate hai (joki aisa nhi hota)
// MDN Definition -JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

debugger;
console.log(a);         // undefined  // because of hoisting
var a ="hey";

//<----IF used CONST/LET instead of VAR-->
// const/let  a = "hey";    // Error :variable can't be accessed before declaration 
// aisa isliye hota kyunki const/let temporal dead zone me hote h jb tk vo declare na hote execution ke time , aur temporal dead zone se unhe access nhi kar skte hai so it shows error


//<--FOR FUNCTIONS-->
hi();                           // isme proper hoisting hojayegi aur vo proper work krega 
function hi(){                  //// FUNCTION DECLARATION(this is what it is called) // BUT IT IS ALSO A FUNCTION DEFINITION
    console.log("Hello");
}
// Same for CLASSes


//<---ANOTHER WAY OF DECLARATION OF FUNCTIONS--->
sayHi();                        //error dega kyunki const/let se declared function variable jaise kaam krte hai so : ERROR cant be accessed before Declaration
const sayHi=function(){         
    console.log("hi");
}
//<-------IF USED var--------->
sayHii();                       //ERROR sayHii is not a function because Memory creation phase me sayHii ki value Undefined dedi gyi thi aur Code execution me jb Call hoga to uski value Undefined hi rhi hogi and UNDEFINED is not a Function 
var sayHii=function(){          // FUNCTION EXPRESSION(this is what it is called)  // IT IS ALSO FUNCTION DEFINITION (BOTH WAYS A RE FUNCTION DEFINITION)
    console.log("hi");
}


//IIFE(IMMEDIATELY INVOKE FUNCTION EXPRESSION)(anonymous function : function without name )
// LINE 20 (
//                function(){         
//               console.log("hi");
//               }
//          )( this part is an Anonymous function)