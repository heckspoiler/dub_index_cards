const backArrow = document.querySelector(".fa-arrow-right");
console.log(backArrow);

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

backArrow.addEventListener("click", function () {
  window.location = "../landing_page/landing_page.html";
});
