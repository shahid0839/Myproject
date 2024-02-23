const hamburgerbtn = document.querySelector(".hamburger");
const Menu = document.querySelector(".menu")
const Hide = document.querySelector(".Menu");
function menu() {
  const hamburger = document.querySelector('.hamburger');
  hamburger.classList.toggle('active');
  Menu.classList.toggle("Menu");
}
hamburgerbtn.addEventListener("click", menu);

// function selectSlide(slideIndex) {

//   let carousel = document.getElementById('carouselExampleControls');
//   let carouselInstance = bootstrap.Carousel.getInstance(carousel);
//   carouselInstance.to(slideIndex);
// }
