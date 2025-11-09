import { createTask } from "./task.js";
import { appControllerCanDo } from "./features.js";
import { showTasksEle, showSelecteOption } from "./itemsDisplay.js";
import { createProject } from "./project.js";

const Controller = appControllerCanDo();
const dialogElem = document.getElementById("dialog");
const formSubmit = document.querySelector("#confirmBtn");
const cancelProcess = document.querySelector("#cancel");
const form = document.getElementById('my-form');
const taskTitleInp = document.getElementById('title');
const taskTextareaInp = document.getElementById('textarea');


const openDialog = document.querySelector('.menu-add-task');
const todoList = document.querySelector('.todo-list');

const projects = JSON.parse(localStorage.getItem("projects")).map(project =>
  createProject(
    project.name,
    project.description,
    project.id,
    true
  )) || [];

const tasks = JSON.parse(localStorage.getItem("tasks")).map(task =>
  createTask(
    task.title,
    task.description,
    task.priority,
    task.dueDate,
    task.projectId,
    task.personId,
    task.isChecked,
    task.id,
    true
  )) || [];

openDialog.addEventListener("click", () => {
  showSelecteOption(JSON.parse(localStorage.getItem("projects")));
  dialogElem.showModal();
  taskTitleInp.classList.remove("required-inputs");
  taskTextareaInp.classList.remove("required-inputs");
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
  const projectSelected = document.querySelector("#project-id").
    value.match(/\d+/)[0] || 100;

  if (title.trim() !== "" && description.trim() !== "") {
    const task =
      createTask(
        title,
        description,
        priority,
        douDate,
        projectSelected);
    task.belongTo = projectSelected;

    tasks.unshift(task);

    const filterProjectsArray = task.filterProjects(projects, projectSelected);
    let projectIndex;
    filterProjectsArray.map((project) => {
      projectIndex = Controller.getElementIndex(projects, project.id);
      projects[projectIndex].tasksList.unshift(task);
    })

    localStorage.setItem("tasks", JSON.stringify(tasks));

    console.log("pro-id is: " + projects[projectIndex]);
    projects[projectIndex].filterTasks(tasks, projects[projectIndex].id);
    showTasksEle(JSON.parse(localStorage.getItem("tasks")), todoList);
    console.log(document.currentPage);
    document.currentPage = "inbox";
    console.log(document.currentPage);




    dialogElem.close();
  }
  else {
    taskTitleInp.classList.add("required-inputs");
    taskTextareaInp.classList.add("required-inputs");

    setTimeout(() => {
      taskTitleInp.classList.remove("required-inputs");
      taskTextareaInp.classList.remove("required-inputs");
    }, 3000);
  }

})


