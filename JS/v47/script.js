const evenNumbers=[0,2,4,6,8]

//<-----  SOME    ------><-----  condition pe kaam krta hai(ek bhi true hogya to end krke ture bhejdega)    ------->
const result=evenNumbers.some((num, i,arr)=>{                // num , index , array
    // console.log(i+1,num);
    // console.log(arr);
    return num>4;                       // Condition check krega agr ek bhi condition "true" mil gyi to TRUE bhej dega variable aur end hojayega , vrna agr sari condition "false" hui to FALSE send krdega
})//har ek value ke liye loop krega agr ek bhi true hogya to result bna dega true aur end krdega wahi pe  ,par agr sari false hai to false dega
console.log(result);                    // true         // 3rd index pe 6 is "True" 

//<-----   EVERY     ------>(Agr ek bhi FALSE hogya to end krdega aur "False" bhejega , jb every element TRUE hoga tbhi "true" dega)

// const result2=evenNumbers.every((num)=>{
//     return num%2===0;
// })
// console.log(result2);                   // true

const evenNumbers1=[0,7,2,4]

const result3=evenNumbers1.every((num)=>{
    return num%2===0;
})
console.log(result3);                   // false , at index 1 