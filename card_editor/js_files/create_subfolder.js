// // Define an array to store all the folders
// let folders = [];

// // Get references to the HTML elements
// const addFolderBtn = document.querySelector("#add-folder-btn");
// const folderSection = document.querySelector("#folder-section");

// // Add a click event listener to the "Add Folder" button
// addFolderBtn.addEventListener("click", () => {
//   // Ask the user to enter a name for the new folder
//   const folderName = prompt("Enter a name for the new folder:");

//   // If the user entered a name, create the folder
//   if (folderName) {
//     const newFolder = {
//       name: folderName,
//       subfolders: []
//     };

//     // Add the new folder to the array
//     folders.push(newFolder);

//     // Create the HTML elements to display the new folder
//     const folderDiv = document.createElement("div");
//     folderDiv.className = "folder";
//     folderDiv.innerHTML = `
//       <img src="folder-icon.png" alt="${folderName}" />
//       <p>${folderName}</p>
//     `;

//     // Add a click event listener to the folder
//     folderDiv.addEventListener("click", () => {
//       // Display the subfolders of the clicked folder
//       displaySubfolders(newFolder);
//     });

//     // Add the folder to the DOM
//     folderSection.appendChild(folderDiv);
//   }
// });

// function displaySubfolders(folder) {
//   // Clear the folder section
//   folderSection.innerHTML = "";

//   // Create the HTML elements to display the subfolders
//   const backDiv = document.createElement("div");
//   backDiv.className = "folder";
//   backDiv.innerHTML = `
//     <img src="back-icon.png" alt="Back" />
//     <p>Back</p>
//   `;
//   backDiv.addEventListener("click", () => {
//     // Go back to the main folder view
//     displayFolders();
//   });
//   folderSection.appendChild(backDiv);

//   for (let i = 0; i < folder.subfolders.length; i++) {
//     const subfolderDiv = document.createElement("div");
//     subfolderDiv.className = "folder";
//     subfolderDiv.innerHTML = `
//       <img src="subfolder-icon.png" alt="${folder.subfolders[i].name}" />
//       <p>${folder.subfolders[i].name}</p>
//     `;
//     subfolderDiv.addEventListener("click", () => {
//       // Display the card decks of the clicked subfolder
//       displayCardDecks(folder.subfolders[i]);
//     });
//     folderSection.appendChild(subfolderDiv);
//   }

//   const addSubfolderDiv = document.createElement("div");
//   addSubfolderDiv.className = "folder";
//   addSubfolderDiv.innerHTML = `
//     <img src="add-subfolder-icon.png" alt="Add Subfolder" />
//     <p>Add Subfolder</p>
//   `;
//   addSubfolderDiv.addEventListener("click", () => {
//     // Ask the user to enter a name for the new subfolder
//     const subfolderName = prompt("Enter a name for the new subfolder:");

//     // If the user entered a name, create the subfolder
//     if (subfolderName) {
//       const newSubfolder = {
//         name: subfolderName,
//         cardDecks: []
//       };

//       // Add the new subfolder to the folder
//       folder.subfolders.push
