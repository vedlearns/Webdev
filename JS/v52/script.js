const colors=["red","green","yellow","pink","black","orange"];

//<------------------  Array Destructuring   ------------------------>
const [colora1,colora2,colora3]=colors[0];          // first index ke element ko array jaisa treat kr rha aur ek ek value ko store kr rha alg alg variables me 
const [colorb2]=colors[1];
const [colorc3]=colors[2];
const [colord4]=colors[3]
console.log(colora1,colora2,colora3);                   // r e d
console.log(colorb2);                                    // g
console.log(colorc3);                                    // y
console.log(colord4);                                    // p


const [color1,color2,color3]=colors;
console.log(color1);                        // red
console.log(color2);                        // green
console.log(color3);                        // yellow

// Directly accessing Third Value
const [,,colors3a]=colors;
console.log(colors3a);              // yellow
// 4th value
const [,,,colors4a]=colors;
console.log(colors4a);

//<------------------------   Object Destructuring          -------------------------->
const user={
    name:"anurag",
    age:25,
    address:{
        city:"Banglore",
        state:"Karnataka"
    } 
}

// Accessing Values of an Object <---------  Normal Way   --------------->
// const age=user.age;
// const name=user.name;

// Using Destructuring(Isme wahi naam rkhna hota hai variables ka jo object me hai)
const{name,age,job}=user;                            // ye check krega ki User object ke andr koi "name" , "age" naam ke koi varaibels hai kya , agr hai to unko vo value assign krdega , agr koi varaible aisa hai ki uske naam ka koi variable nhi hai object ke andr to usme "Undefined" ajayega 
console.log(name);                              // anurag
console.log(age);                               // 25
console.log(job);                               // undefined

// Par agr hm chahte hai ki kisis susre variable ke naam me value store ho to 
const{name:username,age:userage}=user;
console.log(username);                                  // anurag
console.log(userage);                                  // 25

//Nested Objects ke liye
const {address}=user;                                   // Aisa krne se pura nested object hi ajayega variable
console.log(address);                                   // {city: 'Banglore', state: 'Karnataka'}

const {address:useraddress}=user;                   
console.log(useraddress);                               // {city: 'Banglore', state: 'Karnataka'}


// Nested object ke andr kisi Key ki value chaiye to, isko kehte hai =><-------  MULTI LAYERED DESTRUCTING  ------->
const {address:{city}}=user;
console.log(city);                                      // Banglore

const {address:{city:userCity}}=user;
console.log(userCity);                                  // Banglore


// ARRAY JO HOTA VO BEHIND THE SCENES OBJECT JAISA WORK KRTA HAI , to hum chahe to use bhi OBJECT jaise DESTRUCTURE kr skte hai
// to access array's 4 value(index 3)
const {3:colors4,5:colors5}=colors                     // agr hm console me jaake dekhe ARRAY ko , usko expand kre to dekhenge ki usme values ek object ke form me store hui h in front of indexes , so un indexes ko use krke hum ARRAY me DESTRUCTURING kr skte hai Object jaise
console.log(colors4);                       // pink
console.log(colors5);                       // orange


// DESTRUCTURING in a Function

//Object
function intro({name,age,address:{city:userCity}})
{
    console.log(name,age,userCity);
}
intro(user);               // anurag 25 Banglore

//Array
function printcolors([a,b,,d])
{
    console.log(a,b,d);
}
printcolors(colors);        // red green pink


// agr seedha particular index wala chaiye 
function printcolors2({5:color6})
{
    console.log(color6);
}
printcolors2(colors)                    // orange