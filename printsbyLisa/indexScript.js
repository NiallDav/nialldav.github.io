// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
//     document.getElementsByClassName("navbar").style.backgroundColor = "white";
//   } else {
//     document.getElementsByClassName("navbar").style.backgroundColor = "black";
//   }
// }

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementsByClassName("navbar").style.boxShadow = "30px";
//   } else {
//     document.getElementsByClassName("navbar").style.fontSize = "90px";
//   }
// }
// const navUL = document.getElementById('navbar-ul');
// const hamburger = document.getElementById('hamburger');

// hamburger.onclick = function(){
//   navUL.classList.toggle('show');
// }; 

// var top = $('.navbar').offset().top;
//   $(window).scroll(function (event) {
//     var y = $(this).scrollTop(); 
//     if (y >= 60) {  $('.navbar').addClass('shadow'); }
//     else { $('.navbar').removeClass('shadow'); }
//   });



/*-----------------------------------------------------------------------*/

let scrollpos = window.scrollY
const header = document.querySelector("nav")
const header_height = 25

const add_class_on_scroll = () => header.classList.add("scrolled")
const remove_class_on_scroll = () => header.classList.remove("scrolled")

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;
  if (scrollpos >= header_height) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
})

/*carousel*/
index = 0;       
const left = document.querySelector('.left');
const right = document.querySelector('.right');

left.addEventListener('click', function() {
  index--;
  if(index < 0){
    index=3
  }
  document.querySelector('.control .selected').classList.remove('selected');
  indicatorParent.children[index].classList.add('selected');
  slider.style.transform = 'translateX(' + (index) * -25 + '%)';
});

right.addEventListener('click', function() {
  index++;
  if(index > 3){
    index=0
  }
  document.querySelector('.control .selected').classList.remove('selected');
  indicatorParent.children[index].classList.add('selected');
  slider.style.transform = 'translateX(' + (index) * -25 + '%)';
});


const slider = document.querySelector(".slider")
const indicatorParent = document.querySelector('.control ul'); 
const indicators = document.querySelectorAll('.control li');
const arrow = document.querySelectorAll(".arrow");
let carouselTimer = null;

function createCarousel() {
  if (carouselTimer) {
    clearInterval(carouselTimer);
  }

  carouselTimer = setInterval(() => {
    if(index > 2){
        index=0-1;
      }
    ++index;
    slider.style.transform = 'translateX(' + (index) * -25 + '%)';
    document.querySelector('.control .selected').classList.remove('selected');
    indicatorParent.children[index].classList.add('selected');
  }, 7000);
}

createCarousel();

for (const idk of arrow) {
  idk.addEventListener('mouseover', () => clearInterval(carouselTimer));
}

for (const idk of arrow) {
  idk.addEventListener('mouseleave', createCarousel);
}


const navUL = document.getElementById('navbar-ul');
const hamburger = document.getElementById('hamburger');
const logo_img = document.getElementById('logo_img');

hamburger.onclick = function(){
  navUL.classList.toggle('show');
  logo_img.classList.toggle('reposition');
}; 



// const customerName = document.querySelectorAll(".customerName");


//--------THIS WORKS I THINK----------
var reviewText = document.querySelectorAll("[class='reviewText']");

// for (var i=0;i<reviewText.length;i++) {
//   // let lowerText = reviewText[i].textContent.toLowerCase();

//   for(const replaceL of reviewText){
//       replaceL.innerHTML = replaceL.textContent.toString().toLowerCase().replace(/lisa/g, "Lisa");
//   }
// }

var text = document.body; // Reference to an object
var lisaName = "lisa";
var replace;

//--------finds the amount of lisas in text but doesn't replace them yet--------
for(var p=0; p<text.length; p++){
  if(text[p].textContent == lisaName){
    var lemmesee = text[p].innerHTML.replace("lisa", "Lisa");
  }
  break;
}

// console.log(lemmesee);



// var allText = document.body.innerText.toLowerCase();

// allText = allText.replace(/lisa/gi, "Lisa");

// allText.innerHTML = allText.replace(/lisa/gi, "Lisa");

// document.body.innerHTML.replace(/lisa/gi, "Lisa").toLowerCase()

// console.log(document.body.innerText.toLowerCase());

// console.log(allText.replace(/lisa/g, "Lisa"));


document.onclick = function(e){
  if(e.target !== hamburger){
      navUL.classList.remove("show");
      logo_img.classList.remove('reposition');
  }
}
