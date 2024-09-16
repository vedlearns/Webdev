
let username=prompt("please enter your name");
if(username==null)
    username="vedu";
let  userAge = prompt("please enter your age");
if(userAge==null)
    userAge=22;
console.log(`Name: ${username}`);
console.log(`Age: ${userAge}`);
if(userAge>=18&&userAge<=25)
{
    console.log("user is a college student");
    console.log("he/she is learning computer science");
}
// if(false)console.log("User is a working professional")

console.log(`Program Ended!!`);    