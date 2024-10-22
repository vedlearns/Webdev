console.log(months);                    //(5) ['january', 'february', 'march', 'april', 'may']

const nums=[1,2,3,4,5,6,]

const sum=nums.reduce((accumulator,current, i)=>{
    console.log(i,current);                 // 01 12 23 34  45 56 (index aur current value print krenge)
    console.log(accumulator);               // agr return statement nhi rhega to , pahla starting value print krke sbme undefined jayega
    // return accumulator;                  // 0 0 0 0 0 0 (starting value 0 thi , aur return sirf "accumulator hora tha to harr baar sirf 0 print hua kyunki uspe koi function nhi hua")
    // return accumulator+1;                // 0 1 2 3 4 5 (function perform kiya iss baar)
    return accumulator+current;            //  0 1 3 6 10 15 
},0)                                // isko kahte hai INITIAL VALUE , isko leke start hota accumulator (kuch value nhi dalenge to 1 se start hoga)

// ACCUMULATOR starting value leke "in this case 0" uspe function perform krta aur return krwata hn , jo value return hoti h vo accumulator ban jata h agle element ke liye , aise krte krte vo data accumulate krta pura array ka aur given variable me store hojata "in this case- sum " , last value accumulator ki print nhi hoti kyunki last value return hoti h loop end hojata aur value variable me store hojati h 
console.log(sum);                          // 21
