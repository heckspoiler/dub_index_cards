const plusSign = document.querySelector(".add-folder-p");
const folderImage = document.querySelector(".folder_image");
const body = document.querySelector("body");
const door = document.querySelector(".logout__door");
const missingFolderTitle = document.querySelector(".folder_section--title");
const missingFolderSmiley = document.querySelector(".folder_section--smiley");
const pointingArrow = document.querySelector(".pointing_arrow");

plusSign.addEventListener("mouseover", () => {
  folderImage.style.opacity = "1";
});

plusSign.addEventListener("mouseout", () => {
  folderImage.style.opacity = "0.6";
});

document.addEventListener("DOMContentLoaded", () => {
  body.style.opacity = "1";
  door.style.marginTop = "4rem";
  setTimeout(() => {
    missingFolderTitle.style.opacity = 1;
    missingFolderSmiley.style.opacity = 1;
    pointingArrow.style.opacity = 1;
  }, 2500);
});
