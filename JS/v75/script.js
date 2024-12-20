const popup=document.querySelector(".popup-container");
const button=document.querySelector("button");
const closeIcon=document.querySelector(".close-icon");
const overlay=document.querySelector(".overlay");

button.addEventListener('click',()=>{
    popup.classList.add("open");
})

closeIcon.addEventListener("click",()=>{
    popup.classList.remove("open");
})

overlay.addEventListener('click',()=>{
    popup.classList.remove("open");
})