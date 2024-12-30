
function makeReq(method,url,callback){
    const xhr =new XMLHttpRequest();
    xhr.responseType='json'
    xhr.addEventListener('load',()=>{
        callback(xhr.response);
    })
    xhr.open(method,url);
    xhr.send(); 
}

makeReq('GET','https://dummyjson.com/users',(data)=>{
    console.log(data);
    makeReq('GET',`https://dummyjson.com/users/${data.users[0].id}`,(data)=>{
        console.log(data.company);
            makeReq('GET',`https://dummyjson.com/users/${data.company.address}`,(data)=>{
                console.log(data);
            })
       
    })
})


//<----------------    v82 Fixing Callback hell                     ---------------------------------------------->
// hmlog aise function bna ke kaam nhi krenge hum jo kaam krenge vo GET FETCH ko use krke krenge 

function makeReq2(method,url){
    const xhr =new XMLHttpRequest();
    xhr.responseType='json'

    const promise= new Promise((resolve,reject)=>{
        xhr.addEventListener('load',()=>{
           resolve(xhr.response);
        })
        xhr.addEventListener('error',()=>{                              // jb error ho , ERROR EVENT
           reject("Error agya bhai");
        })
    })
    
    xhr.open(method,url);
    xhr.send(); 
    return promise;                                     // zaruri h ye 
}

makeReq2('GET','https://dummyjson.com/users')
 .then((userData)=> makeReq2('GET',`https://dummyjson.com/users/${userData.users[0].id}`) )  // implicit return krwa rhe arrow function se                // return ke taur pe dusra req bhej rha , purana data use krke jo iske resolve() se mila "useData"
.then((data)=>{
    console.log(data);                                                                                  //{id: 1, firstName: 'Emily', lastName: 'Johnson', maidenName: 'Smith', age: 28, …}
    return makeReq2('GET',`https://dummyjson.com/users/${data.company.address}`);
})
.catch((data)=>{
    console.log(data);                                                                                  // Agr error aya to direct ye chlega . upr ke .then nhi chlenge , nhi ayi error to sirf .then() run honge 
})