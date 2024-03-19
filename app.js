const menuBtn = document.querySelector(".middle-button")
const navBar = document.getElementById("mainNavBar")
const navLinks = document.querySelector(".nav-link")
const contactLink = document.querySelector(".contact")

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle('mobile-menu')
    
 })
 
