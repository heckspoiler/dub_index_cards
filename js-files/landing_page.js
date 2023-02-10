const btns = document.querySelectorAll(".landing__page--button");
const title = document.querySelector(".landing__page--title");
const text = document.querySelector(".landing__page--intro--text--p");
const alien = document.querySelector(".fa-alien-8bit");
const brackets = document.querySelector(".fa-brackets-curly");

window.onload = function () {
  setTimeout(function () {
    title.style.animation = "slide-in 1s ease-in-out forwards";
  }, 500);
  alien.style.left = "-200px";
  alien.style.transform = "rotate(-140deg)";
  setTimeout(function () {
    alien.style.transition = "left 1s ease-out, transform 1s ease-out";
    alien.style.left = "5vh";
    alien.style.transform = "rotate(-40deg)";
  }, 400);
  brackets.style.left = "100vw";
  brackets.style.transform = "rotate(160deg)";
  setTimeout(function () {
    brackets.style.transition = "left 1s ease-out, transform 1s ease-in";
    brackets.style.left = "70vw";
  }, 800);
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
    text.style.transition = "opacity 1.7s ease-in-out";
    text.style.opacity = 1;
  }, 600);
});
