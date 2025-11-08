import { createTask } from "./task.js";
import { appControllerCanDo } from "./features.js";
import { showTasksEle, showSelecteOption } from "./itemsDisplay.js";
import { createProject } from "./project.js";

const Controller = appControllerCanDo();
const dialogElem = document.getElementById("dialog");
const formSubmit = document.querySelector("#confirmBtn");
const cancelProcess = document.querySelector("#cancel");
const form = document.getElementById('my-form');
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

  if (title !== "" && projectSelected !== "") {
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
    projects[projectIndex].filterTasks(tasks, projects[projectIndex].id);
    showTasksEle(JSON.parse(localStorage.getItem("tasks")), todoList);

    dialogElem.close();
  }

})
