addButton.addEventListener("click", (event) => {
  event.preventDefault(); // prevents the default behavior of the button

  const folderDiv = document.createElement("div");
  folderDiv.className = "added_folder--div";
  folderDiv.innerHTML = `
      <img src="../icons_and_images/folderPix.png" class="added_folder--img" />
      <div class="added_folder--paragraph-container">
        <p class="added_folder--folder-name">Folder Name</p>
        <p class="added_folder--topic">Topic</p>
        <p class="added_folder--chapter">Chapter</p>
        <p class="added_folder--tags">Tags</p>
      </div>
    `;

  folderSection.appendChild(folderDiv);
  formSection.style.visibility = "hidden";
  plusSign.style.visibility = "visible";
  mainSection.style.opacity = 1;
  mainWordingSection.style.visibility = "hidden";
});
