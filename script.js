const hamburger = document.getElementById("hamburger");
// const show = document.querySelector(".show");
// const navlinks = document.querySelector(".nav_links");
const navUL = document.getElementById("navUL");



hamburger.addEventListener("click", function(){
    navUL.classList.toggle("show");
});