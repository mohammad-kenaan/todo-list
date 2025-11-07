import "./defaultObj.js";
import "./dialogForm.js";
import "./dialogFromProject.js";
import "./inbox.js";
import "./sideItem.js";
import { showTasksEle, showSideItems } from "./itemsDisplay.js";
import { showProjectsEle } from "./itemsDisplay.js";
import { appControllerCanDo } from "./features.js";
import { getTodayTasks } from "./today.js";
import { getUpcomingTasks } from "./upcomingTasks.js";
import { createTask } from "./task.js";
import { createProject } from "./project.js";


const Controller = appControllerCanDo();
const doneTaskListEle = document.querySelector('.list-done-tasks');
const favTasksElement = document.querySelector('.fav-tasks-container');
const projectsElement = document.querySelector('.progects-list');

const tasks = JSON.parse(localStorage.getItem("tasks")).map(task =>
  createTask(
    task.title,
    task.description,
    task.priority,
    task.dueDate,
    task.projectId,
    task.personId,
    task.isChecked,
    task.id
  )) || [];
const projects = JSON.parse(localStorage.getItem("projects")).map(project =>
  createProject(
    project.name,
    project.description,
    project.id
  )) || [];

const archiveTasks = JSON.parse(localStorage.getItem("archive")) || [];
const doneTasks = JSON.parse(localStorage.getItem("doneTasks")) || [];
const btnToday = document.querySelector("#btn-today");
const upcoming = document.querySelector("#btn-upcomming");
const todoList = document.querySelector('.todo-list');
const inboxBtn = document.querySelector("#btn-inbox");
const myProjectBtn = document.querySelector("#btn-projects");
const archiveBtn = document.querySelector("#btn-archive");
const doneTasksBtn = document.querySelector("#btn-done-tasks");
const pageTitle = document.querySelector(".page-title");

showSideItems(projects, projectsElement, "project");
showSideItems(archiveTasks, favTasksElement, "task");
showSideItems(doneTasks, doneTaskListEle, "task");

inboxBtn.addEventListener("click", () => {
  pageTitle.textContent = "Inbox";
  todoList.textContent = "";
  favTasksElement.textContent = "";
  doneTaskListEle.textContent = "";
  Controller.filterDoneTasks(tasks);
  showSideItems(JSON.parse(localStorage.getItem("doneTasks")),
    doneTaskListEle, "task");
  showSideItems(JSON.parse(localStorage.getItem("archive")),
    favTasksElement, "task");
  showTasksEle(JSON.parse(localStorage.getItem("tasks")), todoList);
})

myProjectBtn.addEventListener("click", () => {
  pageTitle.textContent = "My Projects";
  todoList.textContent = "";
  for (let i = 0; i < projects.length; i++) {
    projects[i].filterTasks(tasks, projects[i].id);
  }
  showProjectsEle(projects, todoList);
})

archiveBtn.addEventListener("click", () => {
  pageTitle.textContent = "Archive";
  favTasksElement.textContent = "";
  todoList.textContent = "";
  showSideItems(JSON.parse(localStorage.getItem("archive")), favTasksElement, "task");
  showTasksEle(JSON.parse(localStorage.getItem("archive")), todoList)
})

doneTasksBtn.addEventListener("click", () => {
  pageTitle.textContent = "Done Tasks";
  doneTaskListEle.textContent = "";
  todoList.textContent = "";
  showSideItems(JSON.parse(localStorage.getItem("doneTasks")), doneTaskListEle, "task");
  showTasksEle(JSON.parse(localStorage.getItem("doneTasks")), todoList);
})

btnToday.addEventListener("click", () => {
  pageTitle.textContent = "Today Tasks";
  todoList.textContent = "";
  showTasksEle(getTodayTasks(tasks), todoList)
})

upcoming.addEventListener("click", () => {
  pageTitle.textContent = "Upcomming Tasks";
  todoList.textContent = "";
  showTasksEle(getUpcomingTasks(JSON.parse(localStorage.getItem("tasks"))), todoList)
})


