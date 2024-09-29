  // Function definition
function introduction(username){              
    console.log("hello");
    console.log(`i am ${username} `);
    console.log("how are you");
    return "ved";
}


// <------Function calling---------> 
// const returnValue=introduction();           
// console.log(returnValue);


//<--Using functions-->
introduction('vedank');

console.log("\n ");
//<--USING DEFAULT PARAMETERS-->
function intro1(username='pro bhai')            // setting default parameters (Agr koi value nhi pass ki jayegi parenthesis me to default value  "pro bhai " use hoga)
{
    console.log(`hi i m ${username}`);
}
intro1();                       // hi i m pro bhai  // arguments nhi diya parenthesis to default value use krli " pro bhai"
intro1("vedu");                 // hi i m vedu      // default  values use nhi hongi
console.log("\n");

//<---ANOTHER WAY--->
function intro2(username)
{
    console.log(`hi i m ${username || "Dhinchakk"}`);       // Another way for Default parameters if the argument is not passed in the Parenthesis
}
intro2();

//<---USAGE----->
function intro3(username,designation,age)                       //passing 2 arguments
{
    console.log(`hi i m ${username|| " Pro bidu" } `);
    console.log(`I work at ${designation|| "Home " } `);
    console.log(`My age is ${age|| 22} `);
}

intro3();                   
console.log("\n");
intro3("Vaarid","Microsoft",23);