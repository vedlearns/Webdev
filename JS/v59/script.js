const firstLink=document.querySelector("body > ul > li:nth-child(3) > ol > li:nth-child(2) > p > i")
console.log(firstLink);             // correct print kr rha hai 

//<---  For Parent Element    --->
console.log(firstLink.parentElement);           // p  // correct parent element
console.log(firstLink.parentElement.parentElement.parentElement.parentElement);           // li  // It will give parent element till HTML outer most root element


// For Children ELements 
console.log(firstLink.children);                                                    // HTMLCollection []        // Empty collection kyunki koi children  nhi hn 
console.log(firstLink.parentElement.parentElement.parentElement.children);          // HTMLCollection(4) [li, li, li, li]     


// For Siblings (2 Siblings rhenge jinhe hum access krenge , ek rhega NEXT SIBLING(jo age rhega) aur dusra hoga PREVIOUS SIBLING(jo purana sibling rhega vo) )
// Next sibling use krke hm 2-3 sibling aage ke access kr skte hai 
console.log(firstLink.nextElementSibling);                                         // null          //nextElementSibling Node ko skip krdega aur element sibling dega    "nextSibling" use krenge to vo ya to NODE(could be text) ya next element dega
console.log(firstLink.parentElement.parentElement.nextElementSibling);             // <li>....</li>
console.log(firstLink.parentElement.parentElement.previousElementSibling);         // li