const btns = document.querySelectorAll(".landing__page--button");
const title = document.querySelector(".landing__page--title");
const text = document.querySelector(".landing__page--intro--text--p");
const alien = document.querySelector(".fa-alien-8bit");
const brackets = document.querySelector(".fa-brackets-curly");
const saturn = document.querySelector(".fa-planet-ringed");
const flask = document.querySelector(".fa-flask ");
const buttons = document.querySelector(".landing__page--button--section");
const logInSection = document.querySelector(".landing__page--login--section");
const logInButton = document.querySelector(".login__button");
const cross = document.getElementById("cross");

window.onload = function () {
  setTimeout(function () {
    title.style.animation = "slide-in 1s ease-in-out forwards";
  }, 500);
  alien.style.left = "-200px";
  alien.style.transform = "rotate(-80deg)";
  setTimeout(function () {
    alien.style.transition = "left 1s ease-out, transform 1s ease-out";
    alien.style.left = "5vh";
    alien.style.transform = "rotate(-40deg)";
  }, 500);
  brackets.style.left = "100vw";
  brackets.style.transform = "rotate(160deg)";
  setTimeout(function () {
    brackets.style.transition = "left 1s ease-out, transform 1s ease-in";
    brackets.style.left = "70vw";
  }, 800);
  saturn.style.left = "50vw";
  setTimeout(() => {
    saturn.style.transition = "left 1.2s ease-in-out";
    saturn.style.left = "10vw";
  }, 800);
  flask.style.left = "-60vw";
  flask.style.transform = "rotate(20deg)";
  setTimeout(() => {
    flask.style.transition = "left 1.4s ease-out";
    flask.style.left = "12vw";
  }, 900);
  buttons.style.opacity = "0";
  setTimeout(() => {
    buttons.style.transition = "opacity 1.5s ease-in-out";
    buttons.style.opacity = "1";
  }, 1500);
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

logInButton.addEventListener("click", function () {
  if (logInSection.style.visibility === "hidden") {
    logInSection.style.visibility = "visible";
  } else {
    logInSection.style.visibility = "hidden";
  }
});

cross.addEventListener("click", function (event) {
  if (logInSection.style.visibility === "visible") {
    logInSection.style.visibility = "hidden";
  }
});
