import { createTask } from "./task.js";
import { appControllerCanDo } from "./features.js";
import { displaycontroller } from "./itemsDisplay.js";
import { createProject } from "./project.js";

const Controller = appControllerCanDo();
const ProjectController = createProject(
  "Master Project",
  "This project has been created to give you access to Project.js file content",
  9999,
  true
);
const TaskController = createTask(
  "Master Task",
  "This Task has been created to give you access to task.js file content",
  2,
  new Date().toISOString(),
  9999,
  0,
  false,
  55555,
  true
);
const DisplayController = displaycontroller();

const dialogElem = document.getElementById("dialog");
const formSubmit = document.querySelector("#confirmBtn");
const cancelProcess = document.querySelector("#cancel");
const form = document.getElementById('my-form');
const taskTitleInp = document.getElementById('title');
const taskTextareaInp = document.getElementById('textarea');
const pageTitle = document.querySelector(".page-title");

const openDialog = document.querySelector('.menu-add-task');
const todoList = document.querySelector('.todo-list');
const todoDashboardList = document.querySelector('.todo-dashboard-list');

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
  DisplayController.showSelecteOption(JSON.parse(localStorage.getItem("projects")));
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
  const douDate = document.getElementById('due-date').value || new Date();
  const projectSelected = +document.querySelector("#project-id").
    value.match(/\d+/)[0] || 100;

  if (title.trim() !== "" && description.trim() !== "") {
    const task =
      createTask(
        title,
        description,
        priority,
        douDate,
        projectSelected);

    task.belongTo = document.querySelector("#project-id").
      value.match(/\D+/g)[1] || "General";

    tasks.unshift(task);

    const filterProjectsArray = TaskController.filterProjects(
      JSON.parse(localStorage.getItem("projects")), projectSelected);

    let projectIndex;
    filterProjectsArray.map((project) => {
      projectIndex = Controller.getElementIndex(
        JSON.parse(localStorage.getItem("projects")), project.id);
      JSON.parse(localStorage.getItem("projects"))[projectIndex].
        tasksList.unshift(task);
    })

    localStorage.setItem("tasks", JSON.stringify(tasks));

    ProjectController.filterTasks(tasks, JSON.parse(localStorage.getItem("projects"))[projectIndex].id);

    todoDashboardList.textContent = "";
    todoList.textContent = "";

    DisplayController.showArchiveTasksEle(JSON.parse(localStorage.getItem("tasks")), todoList);
    document.currentPage = "inboxPage";
    pageTitle.textContent = "Inbox";

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


