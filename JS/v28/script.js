console.log("while L");
let i=1;


//<--Checking pre increment and post increment-->
while(i<10)
{
    console.log(i);
    i++;
}
i=1;
console.log("\n");
while(i<10)
{
    console.log(i);
    ++i;
}
// BOTH HAS SAME RESULT


const alphabets=["a","b","c","d","e","f"];
let j=0;
while(j<alphabets.length)
{
    console.log(`${j+1}. ${alphabets[j]} procoder`);
    alphabets[j]=alphabets[j]+" pro";
    j++;
}
console.log(alphabets);

//<------------------------  V29   ------------------------------>
//<--FOR LOOP-->
console.log("\n for loop \n \n");
for (let i = 0; i < 10; i++) {
    console.log(i);
} 
//<----------------------   V30   ------------------------------>
//<---FOR DO WHILE->
console.log("\n for Do While \n \n");
let k=0;
do
{
console.log(k);
k++;
}while(k<0)