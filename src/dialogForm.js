import { createTask } from "./task.js";
import { showSelecteOption } from "./itemsDisplay.js";


const dialogElem = document.getElementById("dialog");
const formSubmit = document.querySelector("#confirmBtn");
const cancelProcess = document.querySelector("#cancel");
const form = document.getElementById('my-form');
const openDialog = document.querySelector('.menu-add-task');

let projects = JSON.parse(localStorage.getItem("projects"));


const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//----------------------------------------

openDialog.addEventListener("click", () => {
 
  showSelecteOption(JSON.parse(localStorage.getItem("projects")));

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
  const projectSelected = document.querySelector("#project-id").value || 100;

  const task =
    createTask(
      title,
      description,
      priority,
      douDate,
      projectSelected);

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks))
  localStorage.setItem("projects", JSON.stringify(projects))

  dialogElem.close();
})
