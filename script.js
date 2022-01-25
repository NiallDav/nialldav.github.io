const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("navUL");


hamburger.addEventListener("click", function(){
    navUL.classList.toggle("show");
});

// hamburger.onclick = function(){
//     navUL.classList.toggle("show");
// }


    


document.onclick = function(e){
    if(e.target !== hamburger){
        navUL.classList.remove("show");
    }
}



window.onclick = e => {
    console.log(e.target);  // to get the element
    console.log(e.target.tagName);  // to get the element tag name alone
} 
