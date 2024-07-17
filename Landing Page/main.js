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
let scrollRevealOption = {
    distance:"150px",
    origin:"bottom",
    duration: 1000,
};
ScrollReveal().reveal(".header_img>img", {
    ...scrollRevealOption,
    origin:"right",
});
ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal(".header_content p", {
    ...scrollRevealOption,
    delay:1000,
});
ScrollReveal().reveal(".header_content form", {
    ...scrollRevealOption,
    delay:1500,
});
ScrollReveal().reveal(".footer", {
    ...scrollRevealOption,
    delay:2000,
});




