const dayNumber=parseInt(prompt("enter number for the day"));
switch (dayNumber)// variable ke sath actual value bhi daal skte ho
{
    
    // agr Case nhi rhega to kuch run nhi hoga , par agr ek bhi case match hogya uske neeche ke sb run honge 
    case 0:
        console.log("sunday");
        console.log("yooo sunday");
        break; 
    case 1:
        console.log("Monday");
        console.log("yooo Monday");
        break;
    case 2:232
        console.log("Tuesday");
        console.log("yooo Tuesday"); 
        break;
    case 3:
        console.log("Wednesday");
        console.log("yooo Wednesday");
        break;
    case 4:
        console.log("Thursday");
        console.log("yooo Thursday");
        break;
    case 5:
        console.log("Friday");
        console.log("yooo Friday");
        break;
    case 6:
        console.log("Saturday");
        console.log("yooo Saturday");
        break;
    default:
    console.log("Enter valid value");
    
}

// switch(true) ye krke aur IF wali conditions cases me use krke bhi kr skte h
switch(false)// switch ke andr jo value hai use wahi value chaiye , to agr true hoga to sbse pahla jo true milega use execute krke break; agr false hai to false krke check krega pahli false value ke liye execute krke break;
{
    case(dayNumber>=0 && dayNumber<=2):
    console.log("between Sunday and tuesday");
    break;
    case(dayNumber>=3 && dayNumber<=5):
    console.log("between Wednesday and Friday");
    break;
    case(dayNumber===6):
    console.log("its Saturday");
    break;
    default:
        console.log("please enter  a value value");
        break; 

}
console.log("program ended");