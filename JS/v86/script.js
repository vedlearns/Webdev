const user ={
    firstName:"Vedank",
    lastName:"Singh",
    age:22,
    stay:{
        city:'Lucknow'
    },
    getFullName(){
        return user.firstName+" "+user.lastName;
    }
}
const a= "city"


// console.log(user.address.city)              //script.js:7 Uncaught TypeError: Cannot read properties of undefined (reading 'city')
console.log(user.address?.city);                // undefined

console.log(user.stay?.[a]);                    //Lucknow
console.log(user.getFullName());                // Vedank Singh
console.log(user.fullName?.());                 //undefined