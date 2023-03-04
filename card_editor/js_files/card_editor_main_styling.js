//folder and cross on foldler

const plusSign = document.querySelector(".add-folder-p");
const folderImage = document.querySelector(".folder_image");

console.log(plusSign);

plusSign.addEventListener("mouseover", () => {
  folderImage.style.opacity = "1";
});

plusSign.addEventListener("mouseout", () => {
  folderImage.style.opacity = "0.6";
});
