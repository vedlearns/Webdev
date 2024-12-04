const hamburgerIcon=document.querySelector(".hamburger-container");
const header=document.querySelector(".header-content");
const closeIcon=document.querySelector(".close-icon")
const nav=document.querySelector("nav")
hamburgerIcon.addEventListener('click',(e)=>{
    e.stopPropagation();
    header.classList.add("menu-open");
})
nav.addEventListener('click',(e)=>{
    e.stopPropagation();
})
closeIcon.addEventListener('click',()=>{
    header.classList.remove("menu-open")
})
window.addEventListener('click',()=>{
    header.classList.remove("menu-open")
})
