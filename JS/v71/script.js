const checkBoxList = document.querySelectorAll(".custom-checkbox");
const inputFields = document.querySelectorAll(".goal-input");
const progressValue = document.querySelector(".progress-value");
const progressBar = document.querySelector(".progress-bar");
const progressLabel = document.querySelector(".progress-label");
const allQuotes=[
  'Raise the bar by Completing your Goals!',
  'Well begun its half done  ',
  'Just a step away',
  'wooohooo!! '
]

 // Agr local storage me already exist krta hia object to vo ayega vrna predefined object



 //                                                         SOLN 1 regarding Local Storage

//  const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {
//   first:{
//     name:"",
//     completed:false
//   },
//   second:{
//     name:"",
//     completed:false
//   },
//   third:{
//     name:"",
//     completed:false
//   }
// }


// //  Page Reload hone pe jo values dikhengi uske liye
// let completedGoalsCount=Object.values(allGoals).filter((goal)=>goal.completed).length                             // Object.values(allGoals) se allGoals object ki values ka array milega "[{..}{..}{..}]" , us array pe hum method apply krenge filter jisme call back function "((goal)=>goal.completed)" jaa rha jo filter krke vo vo values dega array ki jo jo completed true hai  (2)[{..}{..}], jiska hum length nikal rhe array ka jis se pta chle kitne elements hai joki completed hai 

// progressValue.style.width=`${completedGoalsCount/3 *100}%`
// progressValue.firstElementChild.innerText=`${completedGoalsCount}/3 completed`

// checkBoxList.forEach((checkbox) => {
//   checkbox.addEventListener("click", (e) => {
//     const allGoalsAdded = [...inputFields].every((input) => {
//       // bta rha ki ye saari fields empty hai ki nhi (false mtlb hai)
//       return input.value;
//     });
//     if (allGoalsAdded) {
//       // Agr sb filled hai to
//         checkbox.parentElement.classList.toggle("completed");                                             // class lga ke check krdo , vrna class hta do (toggle)
//         const inputId=checkbox.nextElementSibling.id                                                  // Check box jis Input box pe lga hai uski id nikaal rhe hai checkbox se nextElement.id krke aur inputID me store kra rhe hai
//         allGoals[inputId].completed=!allGoals[inputId].completed;                                    // Jo object tha usme INPUTID use krke Particular checkbox ke saamne wale Input box ka "completed" key ki value change kr rhe , agr TRUE thi to FALSE warna vice-versa using NOT operator ("!") kyunki completed key me false value store ki gyi thi
//         completedGoalsCount=Object.values(allGoals).filter((goal)=>goal.completed).length           // No of completed elements update 
//         progressLabel.innerText=allQuotes[completedGoalsCount];
//         progressValue.style.width=`${(completedGoalsCount/3)*100}%`
//         progressValue.firstElementChild.innerText=`${completedGoalsCount}/3 completed`
//         localStorage.setItem("allGoals", JSON.stringify(allGoals));                                      // Local STORAGE me Update 
//     } else {
//       progressBar.classList.add("show-error"); // Agr bina sare filled kiye check kr rhe to ERROR show kro
//     }
//   });
// });

// inputFields.forEach((input) => {
//   // Input tag pe focus krne pe
//   input.addEventListener("focus", () => {
//     progressBar.classList.remove("show-error"); // Error remove krdo
//   });
//   input.value=allGoals[input.id].name;                                              // Reload hone pe INPUT BOX me Show ho 
  
//   if(allGoals[input.id].completed){
//     input.parentElement.classList.add("completed");
//   }
//   input.addEventListener("input", (e) => {
//     // console.log(e.target.id);                                                  // jisme type krenge uska id mil jayega
//     // or
//     // console.log(input.id);                                                    // jisme type krenge uska id mil jayega
//     if(allGoals[input.id].completed)                                            // Logic ki agr checkbox check hogya , uske baad bina uncheck kiye input me update nhi kr skte 
//     {
//       input.value=allGoals[input.id].name                                       // jo input ka value tha check krte time usi ko waps set krde rhe aur return kra de rhe taaki koi further update na ho 
//       return;                                                                    
//     }
//     allGoals[input.id].name= input.value                                                    // Jo empty OBJECT tha uska KEY set kr rhe input ki id use krke using '[]' bracket notation , uske dusra object daal rhe h jisme value store krenge hum
//     localStorage.setItem("allGoals", JSON.stringify(allGoals)); // Local STorage me update kar rhe object ko
//   });
// });


//                                                      SOLN 2 Regarding Local Storage
// Advantage- More Dynamic we can add more tasks and it would work on the same code without doing any changes
// bcuz other code it was predefined that only three tasks will be there 


const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {}

//  Page Reload hone pe jo values dikhengi uske liye
let completedGoalsCount=Object.values(allGoals).filter((goal)=>goal.completed).length                             // Object.values(allGoals) se allGoals object ki values ka array milega "[{..}{..}{..}]" , us array pe hum method apply krenge filter jisme call back function "((goal)=>goal.completed)" jaa rha jo filter krke vo vo values dega array ki jo jo completed true hai  (2)[{..}{..}], jiska hum length nikal rhe array ka jis se pta chle kitne elements hai joki completed hai 

progressValue.style.width=`${completedGoalsCount/inputFields.length *100}%`
progressValue.firstElementChild.innerText=`${completedGoalsCount}/${inputFields.length} completed`

checkBoxList.forEach((checkbox) => {
  checkbox.addEventListener("click", (e) => {
    const allGoalsAdded = [...inputFields].every((input) => {
      // bta rha ki ye saari fields empty hai ki nhi (false mtlb hai)
      return input.value;
    });
    if (allGoalsAdded) {
      // Agr sb filled hai to
        checkbox.parentElement.classList.toggle("completed");                                             // class lga ke check krdo , vrna class hta do (toggle)
        const inputId=checkbox.nextElementSibling.id                                                  // Check box jis Input box pe lga hai uski id nikaal rhe hai checkbox se nextElement.id krke aur inputID me store kra rhe hai
        allGoals[inputId].completed=!allGoals[inputId].completed;                                    // Jo object tha usme INPUTID use krke Particular checkbox ke saamne wale Input box ka "completed" key ki value change kr rhe , agr TRUE thi to FALSE warna vice-versa using NOT operator ("!") kyunki completed key me false value store ki gyi thi
        completedGoalsCount=Object.values(allGoals).filter((goal)=>goal.completed).length           // No of completed elements update 
        progressLabel.innerText=allQuotes[completedGoalsCount];
        progressValue.style.width=`${completedGoalsCount/inputFields.length *100}%`
        progressValue.firstElementChild.innerText=`${completedGoalsCount}/${inputFields.length} completed`
        localStorage.setItem("allGoals", JSON.stringify(allGoals));                                      // Local STORAGE me Update 
    } else {
      progressBar.classList.add("show-error"); // Agr bina sare filled kiye check kr rhe to ERROR show kro
    }
  });
});

inputFields.forEach((input) => {
  // Input tag pe focus krne pe
  input.addEventListener("focus", () => {
    progressBar.classList.remove("show-error"); // Error remove krdo
  });
  if(allGoals[input.id]){
  input.value=allGoals[input.id].name;                                              // Reload hone pe INPUT BOX me Show ho 
  
  if(allGoals[input.id].completed){
    input.parentElement.classList.add("completed");
  }

  }

  
  input.addEventListener("input", (e) => {
    // console.log(e.target.id);                                                  // jisme type krenge uska id mil jayega
    // or
    // console.log(input.id);                                                    // jisme type krenge uska id mil jayega
    if(allGoals[input.id] && allGoals[input.id].completed)                                            // Logic ki agr checkbox check hogya , uske baad bina uncheck kiye input me update nhi kr skte 
    {
      input.value=allGoals[input.id].name                                       // jo input ka value tha check krte time usi ko waps set krde rhe aur return kra de rhe taaki koi further update na ho 
      return;                                                                    
    }
    if (allGoals[input.id]) {
      allGoals[input.id].name= input.value                                                    // Jo empty OBJECT tha uska KEY set kr rhe input ki id use krke using '[]' bracket notation , uske dusra object daal rhe h jisme value store krenge hum
    }
    else{
      allGoals[input.id]={
        name:input.value,
        completed:false
      }
    }
    localStorage.setItem("allGoals", JSON.stringify(allGoals)); // Local STorage me update kar rhe object ko
  });
});





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
