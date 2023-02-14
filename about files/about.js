const paragraphs = document.querySelectorAll(
  ".about__section--paragraphs--paragraph"
);

paragraphs.forEach(function (paragraph) {
  const button = paragraph.previousElementSibling;
  button.addEventListener("click", function () {
    paragraph.style.display =
      paragraph.style.display === "none" ? "block" : "none";
  });
});
