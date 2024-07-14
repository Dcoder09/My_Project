let menuBtn=document.querySelector(".nav_menu_btn")
let navLinks=document.querySelector(".nav_links")
let menuBtnIcon=document.querySelector("img")

menuBtn.addEventListener("click",()=>{
    navLinks.classList.toggle("open")
    let isopen=navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("src", isopen? "cancel.svg":"menu.svg")
    
})
navLinks.addEventListener("click", (e)=>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("src", "menu.svg")

})



