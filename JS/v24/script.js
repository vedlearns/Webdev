const evenNumbers=[0,2,4,6,8];
evenNumbers.shift();         // age se element remove
// console.log(evenNumbers.unshift(0));  shift ka ulta aage se ek elememt add krdeta h   

console.log(`New array is [${evenNumbers}]`);
const oddNumbers=[1,3,5,7];
const animals=["cat","cow","chameleon","cat"];
const animals2=["cat","cow","chameleon","cat","Lion ","fox","bear"];
const animals3=["cat","cow","chameleon","cat","Lion ","fox","bear"];
const SortedArray=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28];


// <--Using concat--->
console.log(evenNumbers.concat(animals));           //[2, 4, 6, 8, 'cat', 'cow', 'chameleon']
console.log(evenNumbers.concat(evenNumbers));       // [2,4, 6, 8, 2, 4, 6, 8]
console.log(animals.concat(evenNumbers));           //['cat', 'cow', 'chameleon', 2, 4, 6, 8]

// <-- array me sath me ek particular string ko bhi concat kr skte h-->
console.log(animals.concat("abc"));         //['cat', 'cow', 'chameleon', 'abc']
console.log(evenNumbers.concat("abc"));     // [2, 4, 6, 8, 'abc']

// <--can concat more than one arrays-->
console.log(evenNumbers.concat(animals,oddNumbers));        //[2, 4, 6, 8, 'cat', 'cow', 'chameleon', 1, 3, 5, 7]

console.log("\n");
// <--USING INDEXOF-->
console.log(evenNumbers.indexOf(4));              //1
console.log(evenNumbers.indexOf(18));            //-1  // element na milne pe -1 deta
console.log(animals.indexOf("cat"));            //0   // agr do cat hoti to sbse pahla wala deta o/p 


// <--INCLUDES-->
console.log(evenNumbers.includes(2));          // true // true ya false deta h 


// <--REVERSE-->
console.log(animals.reverse());                //['cat', 'chameleon', 'cow', 'cat'] // reversing an array
console.log(evenNumbers.reverse());            //[8, 6, 4, 2]


//<--SORTING-->
console.log(animals.sort());                   //['cat', 'cat', 'chameleon', 'cow'] (according to ASCII value )   //Sorting Alphabetically but giving wrong o/p as COW is at last cuz the first alphabet is in CAPITAL LETTER , so giving wrong o/p , Sbko capital kro ya small tbhi right answer milega
console.log(evenNumbers.sort());               //[2, 4, 6, 8]
console.log(oddNumbers.sort());                // [1, 3, 5, 7]
// <---sorting for numbers->
console.log(SortedArray.sort());               //[0, 10, 12, 14, 16, 18, 2, 20, 22, 24, 26, 28, 4, 6, 8]  // it gives wrong output


// <--SLICE-->
console.log(animals2);                           //['cat', 'cow', 'chameleon', 'cat', 'Lion ', 'fox', 'bear']
console.log(animals.slice());                   //['cat', 'cat', 'chameleon', 'cow'] // no changes ,as no input was given
console.log(animals2.slice(3));                //['cat', 'Lion ', 'fox', 'bear']    // starting value dene pe , waha se agee ki elements tk array ko slice krke diya hn 
console.log(animals2.slice(3,6));             // ['cat', 'Lion ', 'fox']           // 3 se leke 6 se ek pahle tak value dega
console.log(animals2);                       // ['cat', 'cow', 'chameleon', 'cat', 'Lion ', 'fox', 'bear']  // no changes in original array


// <--SPLICE-->  <--Removes elements from given index and new elements-->
console.log(animals3);                              // ['cat', 'cow', 'chameleon', 'cat', 'Lion ', 'fox', 'bear']
console.log(animals3.splice(2,1));                 // ['chameleon']   // it removes element from the array . First input value indicates the starting position after which we have to remove elements from , 2nd input values indicates NO. of elements to remove . In this case we are removing only one element so 1.
console.log(animals3);                             // ['cat', 'cow', 'cat', 'Lion ', 'fox', 'bear']   // new array . Changes are made in the original array 
console.log(animals3.splice(2,1,"elephant ", " Giraffe"));      // ['cat'] // 'cat' is removed and new elements "elephant" and "Giraffe" are added into the original Array.
console.log(animals3);                             // ['cat', 'cow', 'elephant ', ' Giraffe', 'Lion ', 'fox', 'bear']  // new array
console.log(animals3.splice(3,2,"leopard ","Gorilla",58956));       // [' Giraffe', 'Lion ']  // Elements Removed
console.log(animals3);                             // ['cat', 'cow', 'elephant ', 'leopard ', 'Gorilla', 58956, 'fox', 'bear']  // New array 

console.log(animals3.splice(2,0,"only adding"));    // [] 
console.log(animals3);                              // ['cat', 'cow', 'only adding', 'elephant ', 'leopard ', 'Gorilla', 58956, 'fox', 'bear']   // Element added without Deletion of any element