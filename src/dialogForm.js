import { createTask } from "./task.js";
import { showSelecteOption } from "./itemsDisplay.js";
import { appControllerCanDo } from "./features.js";


const Controller = appControllerCanDo();
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
  const projectSelected = document.querySelector("#project-id").value.match(/\d+/)[0] || 100;

  const task =
    createTask(
      title,
      description,
      priority,
      douDate,
      projectSelected);



  console.log("Task inputs are: -------");
  console.log("title is: " + title);
  console.log("desc is:  " + description);
  console.log("Proj selected is: " + projectSelected);
  console.log("-----------------");

  const filterProjectsArray = task.filterProjects(projects, projectSelected);

  filterProjectsArray.map((project) => {
   const projectIndex = Controller.getElementIndex(projects,project.id);
    projects[projectIndex].tasksList.unshift(task);
  })


  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("projects", JSON.stringify(projects));



  dialogElem.close();
})
