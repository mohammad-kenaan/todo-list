import { createTask } from "./task.js";
import { createProject } from "./project.js";
import { showSelecteOption } from "./itemsDisplay.js";


const dialogElem = document.getElementById("dialog");
const formSubmit = document.querySelector("#confirmBtn");
const cancelProcess = document.querySelector("#cancel");
const form = document.getElementById('my-form');
const openDialog = document.querySelector('.menu-add-task');

//create some test project in select input
let projects = JSON.parse(localStorage.getItem("projects"));
  showSelecteOption(projects);
//----------------------------------------

openDialog.addEventListener("click", () => {
  dialogElem.showModal();
  form.reset();
  
});


cancelProcess.addEventListener("click", () => {
  dialogElem.close();
});


formSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const priority = document.getElementById('priority').value;
  const douDate = document.getElementById('due-date').value;
  const projectSelected = document.querySelector("#project-id").value || 1;

  const task =
    createTask(
      title,
      description,
      priority,
      douDate,
      projectSelected);

      

  dialogElem.close();
})



// // const smallImg = document.getElementById('imgInput-1').files[0];
// // const bigImg = document.getElementById('imgInput-2').files[0];
// // const smallImgURL = URL.createObjectURL(smallImg);
// // const bigImgURL = URL.createObjectURL(bigImg);
// const author = document.getElementById('book-author').value;
// const title = document.getElementById('book-title').value;
// const numOfPages = document.getElementById('book-num-of-pages').value;

// // Create your Book obj
// addBookToLibrary(author, title, numOfPages, smallImgURL, bigImgURL);
// cards.textContent = "";
// displayBooksAsCards(myLibrary)


