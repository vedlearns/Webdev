const numsArray=[1,2,3,4];
function add()
{
    console.log(arguments);
    let sum=0;
    for (let i = 0; i < arguments.length; i++) {
     sum+= arguments[i];    
    }
    return sum;
}
// Arguments ek array nhi h , ispe hm array ke function ya methods nhi apply kr skte , isliye ye recommend nhi krte "REST PARAMS" krte h

//<-------  Using Spread Operator        ---------->
add(...numsArray);                       // Spreading values of an Array


//<----------------   Rest Params       -------------------->
function add1(...nums1){                        // Aisa krne se hm jo bhi value denge vo ek array ke form me chla jayega
    console.log(nums1);
    let sum=0;
    for (let i = 0; i < nums1.length; i++) {
     sum+= nums1[i];    
    }
    return sum;
}

// Hum chahe to startring ki kuch values define kar skte h 
function add2(a,b,...nums1)                     // Rest Para hmesa Last me ana chaiye
{

    console.log("a b :",a,b);                         // Pahle ke 2 elemnts chor ke baki sb value print hoga
    console.log("nums1:",nums1);                         // Pahle ke 2 elemnts chor ke baki sb value print hoga
    let sum=0;
    for (let i = 0; i < nums1.length; i++) {
     sum+= nums1[i];    
    }
    return sum;
}

const result=add2(...numsArray,8,9,56,45)
//          a b : 1 2
//          nums1: (6) [3, 4, 8, 9, 56, 45]

add2(5,6)           // nums1 will be an Empty Array in this

// Performing Methods on Rest Params
function add3(...nums)
{
    const sum=nums.reduce((acc,i)=>{
        return acc+i;
    })
    return sum;
}
console.log(add3(...numsArray));            //10


// Using Arguments   <---------    Converting Arguments into Array         -------->
function add4()
{
    return [...arguments].reduce((acc,i)=>{return acc+i},0)             // isme hmne ek Array bna liya "[]" jisme hmne "..." spread operator use krke arguments ki value spread krdi hai aur usme ARRAY method lga ke function perform krdiya
}

console.log(add4(58,64,82,79) );                    //283

//<----------   Another Way of Converting        ---------->
function add5()
{
    return Array.from(arguments).reduce((acc,i)=>{return acc+i},0) 
}
console.log(add5(58,64,82,79) );                    //283