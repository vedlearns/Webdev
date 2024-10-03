// debugger;

//<---CONST & LET ---> ( are present in script Scope )
const username="Anurag";
let userAge=22;


//<---VAR--->(is present in WINDOW OBJ(Global scope))
var a=50;
console.log("hello");

function add(){
    const username="Rahul";
    const a =14;
    const b=13;
    console.log(a+b);
    console.log(username);
}
add();
function subtract(){
    const a =14;
    const b=13;
    console.log(a-b);
    console.log(username);
}
subtract();
console.log(username);