const btns = document.querySelectorAll(".landing__page--button");
const title = document.querySelector(".landing__page--title");

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
