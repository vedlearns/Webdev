// function makeReq()           // by default ek function undefined return krta hai
// {
// }

// async function makeReq()     // ASYNC lga ke vo function ek PROMISE return krega jo ki by default Fulfilled rhegaa 
// {
//  return "hello";
// }

// REJECT Krane ke liye hume throw ka use krna hoga
async function makeReq()                                        //  Promise {<rejected>: 'rejected'}
{
    throw "rejected"                   // throw ke age kuch bhi likh de string me , vo ek error ban ke show hoga
    console.log("hello");               // throw ke neeche likhe code execute nhi hote
}       


// Another way of using throw using am ERROR Constructor
async function makeReq2(){
    throw new Error("error in code ")                   // Uncaught (in promise) Error: error in code 
}




// AWAIT function , iska use krke hm code ko synchronous bna skte hai , jb result mil jaye uske baad hi aage ke code run honge  
// Main Thread use nhi hoti h , dusre thread me kaam hota hai , so main JS Engine abhi bhi chl rha hota Asynchronous

async function makeReq3()
{
    const url='https://dummyjson.com/users'
    const responsePromise=await (await fetch(url)).json()                 // ye AWAIT wait krta hai ki response aye fetch se ,aur aane ke baad use variable ko de derha , jb tk response nhi ayega tb tk code hmara aage badhega nhi
 return responsePromise                      
}
makeReq3().then(console.log).catch(err=>console.log(err))                                        //{users: Array(30), total: 208, skip: 0, limit: 30}

// fetch ko hum bahar hi rkhte hai , par jo await keyword hai vo async function ke andr hi kaam krta hai , vrna pure program ko module bna do  (script link me )  