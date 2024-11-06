//We can give our own custom Attributes in HTMl , like  hello='world'.(inside a < > tag )
// For eg- <h1 hello="world">Frontend Development</h1> // ye Attribute HTML ke hisaab se nhi hn , par ek attribute hai yer bhi 

// HOW to use this  Attribute in css 
// in CSS-
//          [hello]{
//                      color:green;
//                  } 
//  <------ OR ----->  
//          [hello="world"]{.............} (ek hi naam se kai attributes hai , with different values)

//<--- Using same way in JS--->
document.querySelector('[hello="world"]');          // <h1> poora
// console.dir(document.querySelector('[hello="world"]'))


//To find all Attributes 
document.querySelector('[hello="world"]').attributes            // NamedNodeMap {0: hello, 1: yooo, hello: hello, yooo: yooo, length: 2}
// TO access specific attribute & and its value
document.querySelector('[hello="world"]').attributes.hello      //hello="world               //(hello naam se hi attribute h )
// To Access Value 
document.querySelector('[hello="world"]').attributes.hello.value        // "world"


//<------------    TO GET ATTRIBUTE     ----------------->
// HTMl ki predefined Attributes bhi select and access kr skte h 
document.querySelector("h1").getAttribute("class")                      // 'heading yooo'       // sare classes ki value dedega string format me 


//<--------------   TO SET ATTRIBUTE  --------------------------------->
document.querySelector("h1").setAttribute("title","heading");           // First one is Attribute and the second one is its value
// we can set any attribute
document.querySelector("h1").setAttribute("Hiii","hello");


document.querySelector("h1").setAttribute("id","heading");

// WE can access and update Attributes directly which are heavily used in JS (eg- id, class (className) , title , href) , Not those ids defined by us         // agr sare attributes dekhne h DOM me to Properties me jaao style wale column me then properties me se Attributes section me sare attribute rhenge defined by us and the JS  
document.querySelector("h1").id="hello";             // Updating id directly
document.querySelector("h1").className="hieez";  
