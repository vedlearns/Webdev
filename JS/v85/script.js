const user={
    name:"ved",
    age:22
}

try{
    console.log(user.address.city);
}
catch(err){
    console.log(typeof err);                                                    // object
    console.log(err);                                                    // TypeError: Cannot read properties of undefined (reading 'city')
    console.log(err.message);                                           // Cannot read properties of undefined (reading 'city')
}
finally{
    console.log("this will always run");
}

// try cath mostly used for Async Functions in js


async function makeReq3()
{   try{
    const url='https://dummjson.com/users'
    const responsePromise=await (await fetch(url)).json()                 // ye AWAIT wait krta hai ki response aye fetch se ,aur aane ke baad use variable ko de derha , jb tk response nhi ayega tb tk code hmara aage badhega nhi
    console.log(responsePromise);
    }                      
    catch (err){
        console.log(err);
    }
}
makeReq3()  