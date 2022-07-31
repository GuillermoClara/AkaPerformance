var hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function(){
  const links = document.querySelector(".links");
  links.classList.toggle("active");
  hamburger.classList.toggle("active-hamburger");
})
