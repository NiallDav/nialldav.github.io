const hamburger = document.getElementById("hamburger");
// const show = document.querySelector(".show");
// const navlinks = document.querySelector(".nav_links");
const navUL = document.getElementById("navUL");
const character = document.getElementById("character");

hamburger.addEventListener("click", function(){
    navUL.classList.toggle("show");
});


document.onclick = function(e){
    if(e.target !== hamburger){
        navUL.classList.remove("show");
    }
}


/*-----game-------*/

var tID; //we will use this variable to clear the setInterval()
window.onload = function animateScript() {
    var    position = 45; //start position for the image slicer
    const  interval = 110; //100 ms of interval for the setInterval()
    tID = setInterval ( () => {
    document.getElementById("character").style.backgroundPosition = 
    `-${position}px 0px`; 
    //we use the ES6 template literal to insert the variable "position"
    if (position < 150)
    { position = position + 50;}
    //we increment the position by 256 each time
    else
    { position = 45; }
    //reset the position to 256px, once position exceeds 1536px
    }
    , interval ); //end of setInterval
} //end of animateScript()



var block = document.getElementById("balloon");
// var counter = document.getElementById("counterNum");
let highScore = document.querySelector("#highScore");
// var highScoreCounter = 0
let scoreSpan = document.querySelector("#scoreSpan")

function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}

counter=0;
counter2=0;
// if(counter>highScore){
//     i++;
// } else{
//     highScore = counter;
// }

var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<45 && blockLeft>0 && characterTop>=150){
        block.style.animation = "none";
        // alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
    } else if(enter.classList.contains("hidden")){
        counter++;
        counter2++;
        if(counter>counter2){
            counter + counter2;
        } else{
            counter2--;
        }
    }
        // document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
        // document.getElementById("highScore").innerHTML = Math.floor(counter/100);
    scoreSpan.textContent = Math.floor(counter/100);
    highScore.textContent = Math.floor(counter2/100);
}, 10);

var enter = document.getElementById("enter");
var playVid = document.getElementById("playVid");
var game = document.getElementById("gameJump");
var bg2 = document.querySelector(".bg2");

enter.onclick = function(){
    enter.classList.toggle("hidden");
    playVid.classList.toggle("hidden");
    game.classList.remove("hidden");
    bg2.classList.remove("hidden");
    // game.classList.toggle("show");
}