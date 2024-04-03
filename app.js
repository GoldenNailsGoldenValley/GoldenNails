const menuBtn = document.querySelector(".middle-button")
const navBar = document.getElementById("mainNavBar")
const navLinks = document.querySelector(".nav-link")
const contactLink = document.querySelector(".contact")
const fullImgBox = document.getElementById("fullImgBox")
const fullImg = document.getElementById("fullImg")

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
 
