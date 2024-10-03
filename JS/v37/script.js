"use strict"                        // ye use krte hai strict follow krne ke liye (eg - num=42) taki aise declaration jaisi cheez na kre hm code me apne 
const username="Anurag";
let userAge=22;
var a=50;
console.log("hello");

function add(){
    const username="Rahul";
    const a =14;
    const b=13;
    console.log(a+b);
    console.log(username);
 
    function child(){
        const childName="Golu";
        console.log(childName);
        console.log(b);                 // isko use krne se CLOSURE SCOPE ayega
        
        function grandchild(){              // iska LEXICAL scope vo sb honge jithe iske parent functions honge upto global scope
            const grandchildname="aa"       // iske andr ke elements sirf is block tk hi accessible honge par ye bahr ke jitne hai lexical scope me sbko access kr skta h
            console.log(grandchildname);
        }
    }
    child();
}
add();
if(true){                                   // isme hoga BLOCK SCOPE 
    const username="a";                     // const/let use kiye gye jitne variables honge vo sb is block ke bahr access nhi hoskenge Par VAR wale hojaenge
    clg("yooo")
}