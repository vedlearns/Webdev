function outer(){
    const a=4;
    function parent(){
        const b=6;
        function add(){
            console.log(a+b);
        }

        return add;             // 10                   // return krte vkt "()" lgana function ka zaruri h
        // return add;          // console.log(a+b); // aisi sotuation print hogi 
    }
    return parent();
}

const add1=outer();
console.log(add1);


//ye sb function return kr rhee to ye eb HIGH ORDERED FUNCTION hai

// <--------CLOSURE------>
// DEFINITION - Closure in JavaScript is a form of lexical scoping used to preserve variables from the outer scope of a function in the inner scope of a function.

// function ke execute hone ke baad uska scope bhi delete hojata h , par age hm koi function return krwate h to aisa nhi hota , jo function hmne return krwaya hai uske andar jitne variable used rhenge (jo function ke andr declare kiye gye the) unka ek CLOSURE banega ,taki baad me jb return function ki value evaluate krenge to usme used hue variables ko hm access kar paaye
// in this example 2 closure banega , ek closure me outer function ka variable saved rhega aur dusra parent func ka jsime uska variable rhega .
