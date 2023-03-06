addButton.addEventListener("click", (event) => {
  event.preventDefault();

  const folderDiv = document.createElement("div");
  folderDiv.className = "added_folder--div";
  const folderNameInput = document.querySelector("#folder-name");
  const topicInput = document.querySelector("#folder-topic");
  const createdInput = document.querySelector("#folder-created");
  const tagsInput = document.querySelector("#folder-tags");

  folderDiv.innerHTML = `
        <img src="../icons_and_images/folderPix.png" class="added_folder--img" />
        <div class="added_folder--paragraph-container">
          <p class="added_folder--folder-name">${folderNameInput.value.toUpperCase()}</p>
          <p class="added_folder--topic">${topicInput.value}</p>
          <p class="added_folder--created">created: ${createdInput.value}</p>
          <p class="added_folder--tags">${tagsInput.value.toLowerCase()}</p>
        </div>
      `;

  folderNameInput.value = "";
  topicInput.value = "";
  createdInput.value = "";
  tagsInput.value = "";

  if (folderSection.children.length === 0) {
    folderSection.appendChild(folderDiv);
  } else {
    folderSection.insertBefore(folderDiv, folderSection.firstElementChild);
  }

  formSection.style.visibility = "hidden";
  plusSign.style.visibility = "visible";
  mainSection.style.opacity = 1;
  mainWordingSection.style.visibility = "hidden";
  inputFields.value = "";
});

// retrieve the name from localStorage
const name = localStorage.getItem("name");

// set the title
document.querySelector(".card_editor--main-title").innerHTML = `Hello, ${name}`;
