const menuBtn = document.querySelector(".middle-button")
const navBar = document.getElementById("mainNavBar")
const navLinks = document.querySelector(".nav-link")
const contactLink = document.querySelector(".contact")
const mapEl = document.querySelector(".map")
const viewEl = document.querySelector(".view")

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle('mobile-menu')

    if(navLinks.classList.toggle("mobile-menu" == true)){
        mapEl.style.display = "none"
        viewEl.style.display = "none"
    }  else{
        mapEl.style.display = "flex"
        viewEl.style.display = "flex"
    }
 })
 



mapEl.addEventListener("click", () => {
    window.open("https://www.google.com/maps/place/Golden+Nails/@44.9836675,-93.3797745,16z/data=!4m6!3m5!1s0x52b334feb064256f:0x1df10c1e3836c302!8m2!3d44.9843922!4d-93.3787874!16s%2Fg%2F1v3kmqfg?entry=ttu")
})

viewEl.addEventListener("click", () => {
    window.open("https://www.google.com/maps/place/Golden+Nails/@44.9836675,-93.3797745,16z/data=!4m6!3m5!1s0x52b334feb064256f:0x1df10c1e3836c302!8m2!3d44.9843922!4d-93.3787874!16s%2Fg%2F1v3kmqfg?entry=ttu")
})
