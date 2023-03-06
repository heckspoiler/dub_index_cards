const plusSign = document.querySelector(".add-folder-p");
const folderImage = document.querySelector(".folder_image");
const body = document.querySelector("body");
const door = document.querySelector(".logout__door");
const missingFolderTitle = document.querySelector(".folder_section--title");
const missingFolderSmiley = document.querySelector(".folder_section--smiley");
const pointingArrow = document.querySelector(".pointing_arrow");
const addButton = document.querySelector("#add-folder-button");
const addForm = document.querySelector("#add-folder-form");
const formSection = document.querySelector(".folder_section--folder-form");
const mainSection = document.querySelector(".card_editor--main-section");
const folderSection = document.querySelector(".folder_section--added-folders");

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
  }, 2000);
});

plusSign.addEventListener("click", () => {
  mainSection.style.opacity = "0";
  mainSection.style.transition = "opacity ease-in-out";
  formSection.style.visibility = "visible";
  formSection.style.opacity = 1;
  formSection.style.transition = "opacity 0.6s ease-in-out";
  plusSign.style.visibility = "hidden";
});

const folderDiv = document.createElement("div");
folderDiv.className = "added_folder--div";
folderDiv.innerHTML = `
  <img
    src="../icons_and_images/folderPix.png"
    class="added_folderfolder--img"
  />
  <div class="added_folder--paragraph-container">
    <p class="added_folder--folder-name">Folder Name</p>
    <p class="added_folder--topic">Topic</p>
    <p class="added_folder--chapter">Chapter</p>
    <p class="added_folder--tags">Tags</p>
  </div>
`;

addButton.addEventListener("click", (event) => {
  event.preventDefault(); // prevents the default behavior of the button
  folderSection.appendChild(folderDiv);
});
