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








//<------------------------------------    V60 (ELEMENT VS NODE)      --------------------------------------------------------------------->

// har element ek node hota hai par har node element nhi hota 
//element HTML defined code hote hai
// Node - HTML defined code ke sath baki sb kuch jo pure program me hai vo sb hota hai , For Eg- COMMENT , PLAIN TEXT , SCRIPT CSS TAGS , "\n" , HTML texts and elements 
// HTML ELEMENTS ke alawa kisi cheez me hme changes chaiye to hum use Nodes ke through Access krke Changes apply kr skte hai 

//<TO ACCESS>
// there are different type of nodes(with values as 1,2,3,...)
console.log(document.body.childNodes);                  // NodeList(18) [text, h1, text, br, text, br, text, h1, text, hr, text, p#paraid.para, text, ul, text, p, text, script]
console.log(document.body.childNodes[2]);               // #text

// Select element/Node from ELEMENTS section Then go to its PROPERTIES section , change properties and apply changes on the nodes 
document.body.childNodes[6].nodeValue="Namaste"
console.log(document.body.childNodes[6]);               // "Namaste"
