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
    distance:"50px",
    origin:"bottom",
    duration: 3000,
};
scrollReveal().reveal(".header_image img", {
    ...scrollRevealOption,
    origin:"right",
});
scrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay:500,
});
scrollReveal().reveal(".header_content p", {
    ...scrollRevealOption,
    delay:500,
});
scrollReveal().reveal(".header_content form", {
    ...scrollRevealOption,
    delay:500,
});
scrollReveal().reveal(".header_content .bar", {
    ...scrollRevealOption,
    delay:500,
});
scrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay:500,
});



