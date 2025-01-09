
// EXAMPLE of POLYMORPHISM ek function hai par alg alg kaam krega "this" keyword ki vjah se 


// function getBirthYear(){
//     return new Date().getFullYear()-this.age
// }


// function createUser(firstName,lastName,age){
//     const User={
//         firstName,
//         lastName,
//         age,
//         getBirthYear
//     }
//     return User
// }

// const user1=createUser("Shourya","singh",17)
// const user2=createUser("vibhu","singh",23)

// console.log(user1.getBirthYear===user2.getBirthYear);               //true     // ab alg jgh pe store nhi hora function




// BUt this doesn't  contain ENCAPSULATION and ABSTRACTION(hiding the complexity) 
// so for that

createUser.commonMethods={                                                                       // createUser ek function hai but behind the scene vo ek Object hai so hum aise methods store kar skte hai 
    getBirthYear(){
   return new Date().getFullYear()-this.age
   },
}


function createUser(firstName,lastName,age){
    const User={
        firstName,
        lastName,
        age,
        getBirthYear:createUser.commonMethods.getBirthYear,
    }
    return User
}

const user1=createUser("Shourya","singh",17)
const user2=createUser("vibhu","singh",23)

console.log(user1.getBirthYear());                          //2008


console.log(this);                                          // Window {window: Window, self: Window, document: document, name: '', location: Location, …}

//Better way for this is to use NEW keyword
//



function sayHi(){
    console.log(this);                                      // sayHi {}    // on calling use NEW keyword  pointing to the function in which it has been created instead of the window
    return "hi"
}

// New keyword use karke call krna is imp , vrna Undefined
function CreateUser1(firstName,lastName,age){                       // CONSTRUCTOR FUNCTION             
    this.firstName=firstName
    this.lastName=lastName
    this.age=age
}

CreateUser1.prototype.getBirthYear1=function(){
    return new Date().getFullYear() -this.age
}

CreateUser1.prototype.getFullName=function(){
    return this.firstName +" "+ this.lastName
}


// INHERITANCE ka example hai , jitni properties createUser1 ki andr honge (prototype) me vo sb inherit hojayega "nUser" ke dwara example - "getBirthYear1"    
const nUser1=new CreateUser1("vedank","singh",22);
const nUser2=new CreateUser1("vibhu","singh",22);

console.log(nUser1.getFullName());                                      // vedank singh

console.log(nUser1);                                                    // CreateUser1 {firstName: 'vedank', lastName: 'singh', age: 22}            ek object create krke return krta hai (using new keyword)
console.log(nUser1.getBirthYear1());                                    // 2003
console.log(nUser1.getBirthYear1===nUser2.getBirthYear1);               // true                                         // ek hi jgh store hora function aur uska access mil rha Nuser s ko 

console.log(nUser1.__proto__);                                          // {getBirthYear1: ƒ}
console.log(nUser1.__proto__.constructor);                              // ƒ createUser1(firstName,lastName,age){                               // pura constructor function hi mil jata h original wala jisko ye NUser1 &2 inherit kr rhe hai
                                                                        //     this.firstName=firstName
                                                                        //     this.lastName=lastName
                                                                        //     this.age=age
                                                                        // }
