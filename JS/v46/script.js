const months=["january","february","march","april","may"];
// months.forEach((month)=>{console.log(month);})
months.map((month)=>{console.log(month);})

const capitalMonths=months.map((month)=>{console.log(month);
    return month.toUpperCase()
})
console.log("\n");
console.log(capitalMonths);                                    //(5) ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY']

//direct printing without storing in a variable
console.log(months.map((month)=>{console.log(month);
    return month.toUpperCase()
}));                                                        //(5) ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY']


// we can also print the index along with array values
const Months=months.map((month,i,arr)=>{console.log(month,i+1);              //january 1 february 2 ...
    // console.log(arr);                                          //(5) ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY']              // ye har baar array print krega 
    return month.toUpperCase();                             // ek array return krega jisme upper case me honge months
})                    

console.log(Months);                                            // (5) ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY']
console.log('\n');


//<---------     FILTER       ----------->
const filteredMonths=months.filter((month,index,arr)=>{
    console.log(index+1,month);                                     // 1 'january' 2 'february'....
    return month.length<=5;                                         //(TRUTHY ya FALSY values check krta fir value return krta hai ".filter()" )  ye ek condition ke hisaab se data return krta (filtering array ) jitna array ke elements  ki length <= 5 hongi sb data jayega store hone "filteredMonths" me , jin elements pe conditions false hongi vo sb skip hojaenge 
})
console.log(filteredMonths);                                        //(3) ['march', 'april', 'may']     // kyunki conditions ke hisaab se yhi values aengi

const filteredMonths2=months.filter((month,index)=>{
    return month.includes("m"||"M");
    // return index>2;                                              //(2) ['april', 'may']
})
console.log(filteredMonths2);                                       // (2) ['march', 'may']


const students=[
   {
        name:"Ved",
        age:18
    },
    {
        name:"dev",
        age:19
    },
    {
        name:"Edan",
        age:20
    },
    {
        name:"vibhu",
        age:21
    },
    {
        name:"Vaarid",
        age:22
    },
    {
        name:"Xboyse",
        age:23
    }
]

// const adultStudents=students.filter((student)=>{
//     return student.age>18
// })
// const adultStudentsname=adultStudents.map((student)=>{return student.name})
// console.log(adultStudentsname);                   //(5) ['dev', 'Edan', 'vibhu', 'Vaarid', 'Xboyse']
// const adultStudentsname2=adultStudentsname.filter((student)=>{return student.includes("v"||"V")})
// console.log(adultStudentsname2);             //(2) ['dev', 'vibhu']

//<------   OR u could do   -------->
// const adultStudents=students.filter((student)=>{return student.age>18}).map((student)=>{return student.name}).filter((student)=>{return student.includes("v"||"V")})
// console.log(adultStudents);                 //(2) ['dev', 'vibhu']