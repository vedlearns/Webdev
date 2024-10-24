function add(a,b){
    console.log(arguments);         //iske andr vo sb keyword ajate h jo function me hmne define kiye hho na kiye ho like "add(5,6,4,4,4)"
    return a+b;
}
console.log(add(5,6,4,4,4));             //11

function add1(a,b){
    let sum=0;
    for (let index = 0; index < arguments.length; index++) {
        const element = arguments[index];
        console.log(element);
        sum+=element
    }
    return sum;
}
console.log(add1(5,5,5,5,5,5,5));               // 35

//Arguments keyword Arrow Function me nhi hota , uske liye we use "..." ,isko kehte h Rest Parameters 
const add2=(...num)=>{
    let sum=0;
    for (let index = 0; index < num.length; index++) {
        const element = num[index];
        sum+=element;
    }
    return sum;
}

console.log(add2(5,5,5,5,5,5));     //30 


//<------------------------    V49         --------------------------------------------------->
//<DEFAULT PARAMETERS>
function mul(a,b=1){
    return a*b
}
console.log(mul(5));                    // 5 // ye arha kyunki b ki defualt value hmne 1 daal rkhi hai , vrna NAN ata 

// Another Eg- Rolling a Dice
function dice(numberOfSides=6){
    return Math.floor(Math.random()*numberOfSides)+1;
}
console.log(dice());        // 1-6 tak ke beech ka no dega , kyunki 6 default parameter set h
console.log(dice(12));      // 1-12 ke beech ke no dega , kyunki iss baar value daali gyi h 12 , aur 6 jo default parameter tha over ride hogya h 