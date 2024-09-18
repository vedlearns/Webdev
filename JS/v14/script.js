
let username=prompt("please enter your name")  || 'Procoder';//default agr input na de to

// <--Alternate solution-->
//  if(!username)
//  username="Procoder";
//  console.log("hello");

// <--Maine kaise default value di thi-->
// if(username==null) 
//     username="vedu";
let  userAge = parseInt(prompt("please enter your age"))  || 22 ;//same way , for default value

// <-my solution->
// if(userAge==null)
//     userAge=22;

//<--Alternate soln--> 
//if(!userAge)
// userAge=22;
//     console.log("YOO");


console.log(`Name: ${username}`);
console.log(`Age: ${userAge}`);
if(userAge>=18&&userAge<=25)
{
    console.log("user is a college student");
    console.log("he/she is learning computer science");
}
// if(false)console.log("User is a working professional")

console.log(`Program Ended!!`);     