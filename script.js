const Menubtn = document.querySelector(".menu-btn");
const Navigation = document.querySelector(".navigation");
Menubtn.addEventListener("click", () => {
  Menubtn.classList.toggle("active");
  Navigation.classList.toggle("active");
});

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var Slidernav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  contents.forEach((content) => {
    content.classList.remove("active");
  });
  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");
};
btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    Slidernav(i);
  });       
});     
/*function toggleReadMore() {
    var moreText = document.getElementById("more");
    var mainText = document.getElementById("mainText");

    if (moreText.style.display === "none" || moreText.style.display === "") {
      moreText.style.display = "inline";
      mainText.style.display = "none";
    } else {
      moreText.style.display = "none";
      mainText.style.display = "inline";
    }
  }*/