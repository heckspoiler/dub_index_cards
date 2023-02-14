document
  .querySelector(".about__paragraphs")
  .addEventListener("click", function (event) {
    if (
      event.target.className === "arrow" ||
      event.target.className === "button"
    ) {
      let targetElement = event.target.nextElementSibling;
      targetElement.style.display =
        targetElement.style.display === "none" ? "block" : "none";
    }
  });
