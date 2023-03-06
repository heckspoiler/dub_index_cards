const folderSection = document.querySelector(".folder_section--added-folders");
const addButton = document.querySelector("#add-folder-button");
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

addButton.addEventListener("click", () => {
  folderSection.appendChild(folderDiv);
});
