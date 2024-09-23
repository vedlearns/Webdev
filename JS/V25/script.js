const nameAndNumber=[["Adarsh",75,25],["Akash",95,25]];
console.log(nameAndNumber);             //(2) [Array(3), Array(3)] // bta rha 2 elements(nested Arrays) hia jisme me 3 elements aur hai

/* <Accessing elemnts in MD Arrays--> */
console.log(nameAndNumber[0]);          //(3) ['Adarsh', 75, 25]   // pahla Array diya o\p meand consisting of 3 elements


// <--Nested Array Elements Accessing-->
console.log(nameAndNumber[0][0]);       // Adarsh       // nested array ka 0th element
console.log(nameAndNumber[0][2]);       // 25           //  nested Array 2th element
console.log(nameAndNumber[1][1]);       // 95           // nested Arrays 1th element
 

// <--Adding elements in the array-->
nameAndNumber[1][5]="heyy";
console.log(nameAndNumber[1][5]);       // heyy
console.log(nameAndNumber);             // (2) [Array(3), Array(6)]
console.log(nameAndNumber[1]);          // (6) ['Akash', 95, 25, empty × 2, 'heyy']
console.log(nameAndNumber[1][4]);       // undefined


const tickTackToe=[
    ["X",null,null],
    [null,null,"O"],
    ["O",null,"X"]
]
console.log(tickTackToe);               // (3) [Array(3), Array(3), Array(3)]
console.log(tickTackToe[0]);            // (3) ['X', null, null]