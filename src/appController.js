import "./defaultObj.js";
import "./inbox.js";
import "./myProjects.js"
import "./sideItem.js";
import { showTasksEle, showDoneTasksEle, showSideItems, showSelecteOption } from "./itemsDisplay.js";
import { showProjectsEle } from "./itemsDisplay.js";
import { appControllerCanDo } from "./features.js";

const Controller = appControllerCanDo();

const doneTaskListEle = document.querySelector('.list-done-tasks');
const favTasksElement = document.querySelector('.fav-tasks-container');
const projectsElement = document.querySelector('.progects-list');


const tasks = JSON.parse(localStorage.getItem("tasks")) || [];  // has tasks Objescts
const projects = JSON.parse(localStorage.getItem("projects")) || [];  // has tasks Objescts

const archiveTasks = JSON.parse(localStorage.getItem("archive")) || [];
const doneTasks = JSON.parse(localStorage.getItem("doneTasks")) || [];

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

  const t1 = JSON.parse(localStorage.getItem("tasks")) || [];  // has tasks Objescts
  todoList.textContent = "";

  showTasksEle(t1, todoList);

})


inboxBtn.addEventListener("click", () => {
  pageTitle.textContent = "Inbox";
  todoList.textContent = "";
  favTasksElement.textContent = "";
  doneTaskListEle.textContent = "";

  Controller.filterDoneTasks(tasks);

  showSideItems(JSON.parse(localStorage.getItem("doneTasks")), doneTaskListEle, "task");
  showSideItems(JSON.parse(localStorage.getItem("archive")), favTasksElement, "task");
  showTasksEle(JSON.parse(localStorage.getItem("tasks")), todoList);


})

myProjectBtn.addEventListener("click", () => {
  pageTitle.textContent = "My Projects";
  todoList.textContent = "";
  showProjectsEle(projects, todoList);
})

//----------------------


archiveBtn.addEventListener("click", () => {
  pageTitle.textContent = "Archive";

  favTasksElement.textContent = "";
  todoList.textContent = "";

  showSideItems(JSON.parse(localStorage.getItem("archive")), favTasksElement, "task");
  showTasksEle(JSON.parse(localStorage.getItem("archive")), todoList)
})
//-----------------------------


doneTasksBtn.addEventListener("click", () => {
  pageTitle.textContent = "Done Tasks";

  doneTaskListEle.textContent = "";
  todoList.textContent = "";

  showSideItems(JSON.parse(localStorage.getItem("doneTasks")), doneTaskListEle, "task");
  showTasksEle(JSON.parse(localStorage.getItem("doneTasks")), todoList);

})

