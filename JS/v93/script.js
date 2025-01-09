// # ka use krke hum kisi  bhi function/Method ko priavte bna skte hai (Console me nhi hoga , par JS me hoga)
// Without # class me sb public h aur aise hi inherit ho jaenge sb , inherited objects ke dwara (eg- Users)
//# sirf class ke andr use ho skta hai ,without class nhi hoga


class CreateUser{
    #age                                                                // Private bnane ke liye kisi bhi cheez ko ek baar public me # se define krna hi pdega , nhi krenge to vo value public hojayegi
    constructor(firstName,lastName,age){
        this.firstName=firstName
        this.lastName=lastName
        this.#age=age
    }
   static a= "hello";
   #b="World"
   c="YOo"
    #getBirthYear(){
        return new Date().getFullYear() -this.#age
    }
    getFullName(){
        // console.log(a);                                          //Error dega 
        console.log(this.a);                                        // undefined
        console.log(this.#b);                                        // World
        console.log(this.c);
        console.log(this.#getBirthYear());
        return this.firstName+" "+this.lastName
    }

}

const user1= new CreateUser("vedank","singh",22)
const user2= new CreateUser("vibhu","singh",23)
console.log(user1);                                                 //CreateUser {firstName: 'vedank', lastName: 'singh', #age: 22, #b: 'World'}        // sare global variables honge aur functions?methods sare prototype me honge
console.log(user1.a)                                                // undefined            kyunki static lg gya user se access nhi hoga ab vo constructor ka part ho chuka h joki class se hi access ho apyega 
console.log(CreateUser.a);                                          // hello
console.log(user1.c);                                               // YOo
// console.log(user1.#b);                                           // Private hai so it cant be accessed 
// console.log(CreateUser.#b);                                      // Private hai so it cant be accessed 
console.log(user1.getFullName());                                   // undefined world YOo  2003 vedank singh
// console.log(CreateUser.getFullName());                           // Not a function
// console.log(CreateUser.getFullName);                             // Undefined;
