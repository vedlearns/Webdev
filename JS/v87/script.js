// Named import

// import { usersData,FName as firstName,LastName } from "./usersData.js";
// import { productsData } from "./productsData.js";

// console.log(usersData);
// console.log(productsData);
// console.log(firstName);
// console.log(LastName);


// Default Export

// import usersData  from "./usersData.js";
console.log(usersData);

// combination of both
import usersData ,{FName as firstName  , LastName,a} from "./usersData.js";
console.log(firstName);
console.log(LastName);

console.log(a());                                           //{id: 12, firstName: 'Assunta', lastName: 'Rath', maidenName: 'Heller', age: 42, …}


// to import everything from a file in one go
import * as something from "./productsData.js"
console.log(something);                             //Module {Symbol(Symbol.toStringTag): 'Module'}
console.log(something.fullName);