const checkBoxList=document.querySelectorAll(".custom-checkbox");
const inputFields=document.querySelectorAll(".goal-input");
const progressValue=document.querySelector(".progress-value");
const progressBar=document.querySelector(".progress-bar")


checkBoxList.forEach((checkbox)=>{
    checkbox.addEventListener('click',(e)=>{
        const allFieldsFilled=[...inputFields].every((input)=>{                         // bta rha ki ye saari fields empty hai ki nhi (false mtlb hai)
            return input.value;                                                 
        })
        if (allFieldsFilled) {                                                          // Agr sb filled hai to 
            checkbox.parentElement.classList.toggle("completed");                       // class lga ke check krdo , vrna class hta do (toggle)
        }
        else
        {
            progressBar.classList.add("show-error")                                     // Agr bina sare filled kiye check kr rhe to ERROR show kro 
        }
    })
})

inputFields.forEach((input)=>{                                                          // Input tag pe focus krne pe 
    input.addEventListener('focus',()=>{
        progressBar.classList.remove("show-error")                                      // Error remove krdo 
    })
})





















//<------------------    My Code       ------------------------>

// let count=0;
// checkBoxList.forEach((checkbox)=>{
//    checkbox.addEventListener('click',(e)=>{
// //    const container= e.target.parentElement;
// //    container.classList.add("completed")
// //                    or
          
//        if( checkbox.nextElementSibling.value!='')
//        {
//         checkbox.parentElement.classList.toggle("completed");
//         if(checkbox.parentElement.classList.contains("completed"))
//         {   count++;
//             if(count==1){
//             progressvalue.style.width='33%';
//             progressvalue.innerText="1/3 Completed";

//             }
//             else if(count==2){
//             progressvalue.style.width='66%';
//             progressvalue.innerText="2/3 Completed";
//             }
//             if(count==3){
//             progressvalue.style.width='99%';
//             progressvalue.innerText="3/3 Completed";
//             }
//         }
//         else{
//             count--;
//             if(count==0){
//                 progressvalue.style.width='0%';
//                 progressvalue.innerText="0/3 Completed";   
//             }
//             else if(count==1){
//             progressvalue.style.width='33%'
//             progressvalue.innerText="1/3 Completed";
//             }
//             else if(count==2){
//             progressvalue.style.width='66%'
//             progressvalue.innerText="2/3 Completed";
//             }
//             if(count==3){
//             progressvalue.style.width='99%'
//             progressvalue.innerText="3/3 Completed";
//             }
//         }
//        }
//        else{
//         const error=document.querySelector(".error-label")
//         error.style.display="block"
//        }
//    })
// })