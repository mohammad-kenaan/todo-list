import { createProject } from "./project.js";
import { showSideItems, showProjectsEle } from "./itemsDisplay.js";

const openDialog = document.querySelector('.add-project');
const dialogElem = document.getElementById("dialog-project");
const formSubmit = document.querySelector("#confirm-project");
const cancelProcess = document.querySelector("#cancel-project");
const form = document.getElementById('my-form-project');
const projectsElement = document.querySelector('.progects-list');
const todoList = document.querySelector('.todo-list');
const projectTitleInp = document.getElementById('title-project');
const projectTextareaInp = document.getElementById('textarea-project');
let projects;

openDialog.addEventListener("click", () => {
  projects = JSON.parse(localStorage.getItem("projects"));
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

  if (title != "" && description != "") {
    const project =
      createProject(
        title,
        description,
      );

    projectsElement.textContent = "";
    todoList.textContent = "";

    const filterTasksArray = project.filterTasks(JSON.parse(localStorage.
      getItem("tasks")), project.id);

    project.tasksList = filterTasksArray;
    projects.unshift(project);
    localStorage.setItem("projects", JSON.stringify(projects));

    showSideItems(JSON.parse(localStorage.
      getItem("projects")), projectsElement, "project");

    showProjectsEle(JSON.parse(localStorage.
      getItem("projects")), todoList);

    dialogElem.close();
  }

  else {
    projectTitleInp.classList.add("required-inputs");
    projectTextareaInp.classList.add("required-inputs");

    setTimeout(() => {
      projectTitleInp.classList.remove("required-inputs");
      projectTextareaInp.classList.remove("required-inputs");
    }, 3000);
  }
})

