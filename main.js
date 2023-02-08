let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

let si = document.querySelector("#sing");

si.addEventListener("click", function () {
  alert("თქვენ შეხვედით აქქაუნთზე");
});

window.onload = function () {
  let effect = document.querySelector(".fetchcont");
  window.addEventListener("scroll", scrollEffect);
  function scrollEffect() {
    if (window.scrollY >= 820) {
      effect.style.opacity = "1";
      effect.style.transform = "translateX(0px)";
      effect.style.transition = "2s ease-in-out";
    } else {
      effect.style.opacity = "0";
      effect.style.transform = "translateX(-50px)";
    }
  }
  scrollEffect();
};
