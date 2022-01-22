let scrollpos = window.scrollY;
const header = document.querySelector("nav");
const header_height = 25;

const add_class_on_scroll = () => header.classList.add("scrolled")
const remove_class_on_scroll = () => header.classList.remove("scrolled")

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= header_height) { add_class_on_scroll() }
  else { remove_class_on_scroll() }

  console.log(scrollpos)
})

// const openGalleyPicture = document.querySelectorAll("[data-gallery-target]")
// const closeGalleyPicture = document.querySelectorAll("[data-gallery-close]")

const navUL = document.getElementById('navbar-ul');
const hamburger = document.getElementById('hamburger');

hamburger.onclick = function(){
  navUL.classList.toggle('show');
  logo_img.classList.toggle('reposition');
  console.log("clicked");
}; 



// var text = document.body; // Reference to an object
// text.innerHTML = text.innerHTML.replace(/lisa/gi, "Lisa").toLowerCase();

