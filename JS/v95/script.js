// Normal way

// const user={
//     firstName:"Vedank",
//     lastName:"Singh",
// }
// console.log(user.firstName+" "+user.lastName);

//Better way

const user={
    fName:"Ved",
    lName:"S",
    fullName(){
        return `${this.fName} ${this.lName}`
    }
}

console.log(user.fullName());

user.fullName="Vedank Singh"                    // ab aisa krne se vo function string ban gya so its better to use getter and setter
console.log(user.fullName);

const user1={
    fName:"Vedank",
    lName:"Singh",
    get fullName(){                                         // get property lg gyi hai , invoke krne pe chlegi property
        console.log("invoked");
        return `${this.fName} ${this.lName}`
    },
    set fullName(value){
        console.log(value);
    }
}
// TO call a Get property we have to call it without parenthesis 
// console.log(user1.fullName());                                              // Error script.js:33 Uncaught TypeError: user1.fullName is not a function
console.log(user1.fullName);                                                   // Humne Get lgaya hai to hum is function ko ek property ki tarah set kr rhe hai // Vedank Singh

// jb ise set krna hoga to ek property ki tarah set krna hoga 
user.fullName="hello hi"                                                        // aisa krne se fullName jo function tha vo change nhi hoga string me , original jo function tha wahi rhega
console.log(user1.fullName);                                                    // Vedank Singh


// hum get set ka use krke first aur last name ko alg alg set kr skte hai 
const user2={
    fName:"ved",
    lName:"s",
    get fullName(){
        return `${this.fName} ${this.lName}`
    },
    set fullName(value){
        // const splitted=value.split(" ")
        // this.fName=splitted[0];
        // this.lName=splitted[1];
//              OR

        const[firstName,lastName]=value.split("")
        this.fName=firstName;
        this.lName=lastName;
    }
}

console.log(user2.fullName);                                                        // ved s
user2.fullName="Vibhu Singh";
console.log(user2.fullName);                                                        // Vibhu Singh
console.log(user2);                                                                 // {fName: 'Vibhu', lName: 'Singh'}     // aise krke hum set krskte bina function ko change kiye aur ek ek individual ko pick krke change krne se

// We Most commonly use this in class 
class Createuser{
    constructor(fName,lName,age){
        this.fName=fName
        this.lName=lName
        this.age=age
    }

    get FullName(){
        return this.fName+" "+this.lName
    }
    set FullName(value){
        const [firstName,lastName]=value.split(' ');
        this.fName=firstName
        this.lName=lastName
    }

}
const byClassUser=new Createuser("ved","singh",24);
console.log(byClassUser);                                       //  Createuser {fName: 'ved', lName: 'singh', age: 24}
//                                                                  age: 24
//                                                                  fName: "ved"
//                                                                  lName: "singh"
//                                                                  FullName: (....)

console.log(byClassUser.FullName);                              //  ved singh
byClassUser.FullName="Vedank Singh"                             // Bina setter function ke hum set krenge to koi changes nhi implement honge code me  
console.log(byClassUser.FullName);                               // Vedank Singh
console.log(byClassUser);                                        // Createuser {fName: 'Vedank', lName: 'Singh', age: 24}