const firstName='Akash';
const userAge=15;
const isGraduate=false;
// null/undefined , jo jo values change nhi hoskti unka address same rhta h baki sb ka alg hota
// primitive datatypes me mostly value compare hoti h , address ka zda involvement nhiu hota h , par non-primitive datatypes me addresses compare hote h usme kafi involvement hota h
// @33613- context (context ka address jisme sb variables(firstName,userAge) inka address aur data store hota h)

// <---Address----> <--only for Primitive Data Types-->
// ** jo string create hoti vo alg jgh hoti, aur uska ek address hota hai ek aur uska address diya jata h actual variables me 
// ** aur jb hm compare krte h 2 actual variables ko , to unme jo address hota hai uske through actual values ko fetch kiya jata h aur un values ko compare kiya jata h 
// ** jo values hoti h jaise string , to sare actual string ek jaisi group jgh pe store hote h aur unke particular addresses share hote variables ko 
//    in similar way all numbers are stored together and all booleans are stored together and their values are passed down 
// ** jo values hogyi jo ki same hai throughout program , vo ek hi baar create hote h aur stroage me aur unka ekhi address  different variables me refer kiya jata h
//   -For eg- string "akash " ye 'akash' ek baar create hoga aur jitne variables me iska value store h waha waha pe iska address refer hojayega 
//    similar way in boolean - for "false " & "true" inka address refer hota h
//   -but this will not be true in every case , agr jo string h For Eg-"Akash", agr iska creation different way me hua like
//    (a="Aka"+"sh") then iska address alg hoga , kyunki ye do different string se combine hoke bana h 
//   - Par false ka address same hota h

// <---non-primitive--->
// isme same string/values/Numbers sbka alg alg address hota , sb ek object me store hote h  
// different objects me different values bhi ho skti hai aur same values bhi hoskti hai   
// isliye sabhi objects ka address alg hota h