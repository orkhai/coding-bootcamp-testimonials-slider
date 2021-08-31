const profilePicture = document.querySelector(".profile-picture");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const testimonialOne = document.querySelector(".testimonial-one");
const testimonialTwo = document.querySelector(".testimonial-two");

function slider() {
  profilePicture.classList.toggle("profile-picture-change");
  testimonialOne.classList.toggle("testimonial-no-display");
  testimonialTwo.classList.toggle("testimonial-display");
}

prevBtn.addEventListener("click", slider);
nextBtn.addEventListener("click", slider);
