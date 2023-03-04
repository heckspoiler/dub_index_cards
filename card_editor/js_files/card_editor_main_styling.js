//folder and cross on foldler

const plusSign = document.querySelector(".add-folder-p");
const folderImage = document.querySelector(".folder_image");
const body = document.querySelector("body");
const door = document.querySelector(".logout__door");
const missingFolderTitle = document.querySelector(".folder_section--title");
const missingFolderSmiley = document.querySelector(".folder_section--smiley");
const pointingArrow = document.querySelector(".pointing_arrow");

console.log(plusSign);

plusSign.addEventListener("mouseover", () => {
  folderImage.style.opacity = "1";
});

plusSign.addEventListener("mouseout", () => {
  folderImage.style.opacity = "0.6";
});

window.addEventListener("load", (event) => {
  body.style.opacity = "1";
  door.style.marginTop = "4rem";
  setTimeout(function () {
    missingFolderTitle.style.opacity = 1;
  }, 1000);
  setTimeout(function () {
    missingFolderSmiley.style.opacity = 1;
  }, 2500);
  setTimeout(function () {
    pointingArrow.style.opacity = 1;
  }, 2500);
});
