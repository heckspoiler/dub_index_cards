const btns = document.querySelectorAll(".landing__page--button");
const title = document.querySelector(".landing__page--title");
const text = document.querySelector(".landing__page--intro--text--p");

window.onload = function () {
  setTimeout(function () {
    title.style.animation = "slide-in 1s ease-in-out forwards";
  }, 500);
};

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(
    ".landing__page--background--icon"
  );

  elements.forEach((element) => {
    element.style.opacity = 0;

    setTimeout(() => {
      element.style.transition = "opacity 1s ease-out";
      element.style.opacity = 1;
    }, 500);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  text.style.opacity = 0;

  setTimeout(() => {
    text.style.transition = "opacity 1s ease-out";
    text.style.opacity = 1;
  }, 200);
});
