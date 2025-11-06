
import {createProject} from "./project.js";
import { showSideItems } from "./itemsDisplay.js";


const openDialog = document.querySelector('.add-project');
const dialogElem = document.getElementById("dialog-project");
const formSubmit = document.querySelector("#confirm-project");
const cancelProcess = document.querySelector("#cancel-project");
const form = document.getElementById('my-form-project');
const projectsElement = document.querySelector('.progects-list');



let projects = JSON.parse(localStorage.getItem("projects"));


openDialog.addEventListener("click", () => {
  dialogElem.showModal();
  form.reset();

});

cancelProcess.addEventListener("click", () => {
  dialogElem.close();
});


formSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  const title = document.getElementById('title-project').value;
  const description = document.getElementById('description-project').value;
  const id = document.getElementById('project-input-id').value;

console.log("Id is:" + id);
console.log("title is:" + title);
console.log("description is:" + description);
  const project =
    createProject(
      id,
      title,
      description,
      );

  projects.unshift(project);
  localStorage.setItem("projects", JSON.stringify(projects))
  showSideItems(projects, projectsElement, "project");


  dialogElem.close();
})
