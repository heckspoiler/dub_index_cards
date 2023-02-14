const paragraphs = document.querySelectorAll(
  ".about__section--paragraphs--paragraph"
);

document
  .querySelector(".about__paragraphs")
  .addEventListener("click", function (event) {
    if (
      event.target.className === "arrow" ||
      event.target.className === "button"
    ) {
      let targetElement = event.target.paragraphs;
      targetElement.style.display =
        targetElement.style.display === "none" ? "block" : "none";
    }
  });
