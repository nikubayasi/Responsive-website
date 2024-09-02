let hamburger = document.querySelector(".hamburger");

hamburger.onClick = function(){
  let navbar = document.querySelector(".nav-list");
  navbar.classList.toggle("active");  
}