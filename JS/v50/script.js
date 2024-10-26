const nums=[1,2,3,4,5];
const nums2=[6,7,8,9,10];
//<Normal way to join two arrays using Concat>
const joinedArrays=nums.concat(nums2);
console.log(joinedArrays);                              //(10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("\n");

//<---------  Using Spread Operator          -------------><USed with Arrays and String >
const joinedArrays2=[...nums,...nums2];
console.log(joinedArrays2);                           // (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Even use it with String
const A="Hello"
const B="Hi"
// const C=A.concat(B);                        

const c=[...A,...B];
console.log(c);                               // (7) ['H', 'e', 'l', 'l', 'o', 'H', 'i']
const d=[...joinedArrays2,...A]
console.log(d);

//Using Object

const user={
    name:"Anurag",
    age:25
}

const UpdatedUser={...user,city:"Lucknow"};             // "..." ye Spread krdeta sare elements ko isliye sare function , method , array sb element sb copy hojayega 
console.log(UpdatedUser);                           // {name: 'Anurag', age: 25, city: 'Lucknow'}


function add(){
    console.log(arguments);
    let element=0
    for (let index = 0; index < arguments.length; index++) {
         element += arguments[index];
        
    }
    console.log(element);
    return element;
}

// For Joined Array this function

//Normally
// add(joinedArrays2[0],joinedArrays2[1].A...) and so on 


//Using Spread Operator "..."
add(...joinedArrays2);

// add(...user)            // Error Only String And Array can be used like this , not Object