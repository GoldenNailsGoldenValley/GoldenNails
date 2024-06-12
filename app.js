const menuBtn = document.querySelector(".middle-button")
const navBar = document.getElementById("mainNavBar")
const navLinks = document.querySelector(".nav-link")
const contactLink = document.querySelector(".contact")
const fullImgBox = document.getElementById("fullImgBox")
const fullImg = document.getElementById("fullImg")


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        } 
    })
 })
 

function openFullImg(pic){
    fullImgBox.style.display = "flex"
    fullImg.src = pic

}

function closeFullImg(){
    fullImgBox.style.display = "none"
}


menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle('mobile-menu')
    
 })
 
 
const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el) => observer.observe(el))
