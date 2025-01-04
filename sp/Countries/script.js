const dropDown=document.querySelector("#filter-text");
const filter=document.querySelector(".filter");
const theme=document.querySelector("#theme")
console.log(filter);
dropDown.addEventListener("click",()=>{
    if(filter.classList.contains("blocked"))
    {
   filter.classList.remove("blocked");
    dropDown.innerHTML="Filter by Region &#11165;"
    }
    else{
     filter.classList.add("blocked");
     dropDown.innerHTML="Filter by Region &#11167;"
    }
})
