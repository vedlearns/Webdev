const resolveButton=document.querySelector("#resolve-btn")
const rejectButton=document.querySelector("#reject-btn")
const p=new Promise((resolve,reject)=>{
    resolveButton.addEventListener('click',()=>{
        resolve("promise resolved")
    })
    rejectButton.addEventListener('click',()=>{
        reject("promise rejected")
    })
})

p.then((data)=>{
    console.log(data);
    return 15;
}).then((data)=>{
    console.log(data);
    return 16;
}).then((data)=>{
    console.log(data);
    return 18;
}).catch((err)=>{
    console.log(err);
    return 19;
}).then(()=>{
console.log("444");

})                          // can go infinite times , solving call back hell