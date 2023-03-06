addButton.addEventListener("click", (event) => {
  event.preventDefault();

  const folderNameInput = document.querySelector("#folder-name");
  const createdInput = document.querySelector("#folder-created");
  const tagsInput = document.querySelector("#folder-tags");
  const date = new Date(createdInput.value);
  const options = { day: "numeric", month: "numeric", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  newFolder = new Folder(
    folderNameInput.value.toUpperCase(),
    formattedDate,
    tagsInput.value.toLowerCase()
  );

  // append the new folder to the DOM
  const folderDiv = document.createElement("div");
  folderDiv.className = "added_folder--div";
  folderDiv.innerHTML = `
    <img src="../icons_and_images/folderPix.png" class="added_folder--img img--${newFolder.folderName}" />
    <div class="added_folder--paragraph-container">
      <p class="added_folder--folder-name"> ${newFolder.folderName}</p>
      <p class="added_folder--topic"> Number of Decks: {Amount}</p>
      <p class="added_folder--created">created: ${formattedDate}</p>
      <p class="added_folder--tags"> ${newFolder.tags}</p>
    </div>
  `;
  folderSection.insertBefore(folderDiv, folderSection.firstElementChild);

  // clear the input fields
  folderNameInput.value = "";
  createdInput.value = "";
  tagsInput.value = "";

  formSection.style.visibility = "hidden";
  plusSign.style.visibility = "visible";
  mainSection.style.opacity = 1;
  mainWordingSection.style.visibility = "hidden";
});

// retrieve the name from localStorage
const name = localStorage.getItem("name");

// set the title
document.querySelector(".card_editor--main-title").innerHTML = `Hello, ${name}`;

//   // changing the url to add the folder name at the end
//   const folderImage = document.querySelector(`.img--${newFolder.folderName}`);
// folderImage.addEventListener("click", () => {
//   const url = window.location.href + newFolder.folderName.toLowerCase();
//   history.pushState({}, url);
// });

// window.addEventListener("popstate", () => {
//   // check the URL and update the page accordingly
//   const path = window.location.pathname;
//   if (path !== "/" && path !== "") {
//     // code to display the appropriate content for the URL
//     console.log(`Displaying content for ${path}`);
//   }
