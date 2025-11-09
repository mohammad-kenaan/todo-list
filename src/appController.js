import "./defaultObj.js";
import "./dialogForm.js";
import "./dialogFromProject.js";
import "./inbox.js";
import "./sideItem.js";
import { showTasksEle, showSideItems, showArchiveTasksEle }
  from "./itemsDisplay.js";
import { showProjectsEle } from "./itemsDisplay.js";
import { appControllerCanDo } from "./features.js";
import { getTodayTasks } from "./today.js";
import { getUpcomingTasks } from "./upcomingTasks.js";
import { createTask } from "./task.js";
import { createProject } from "./project.js";

document.currentPage = "homePage";

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
    task.id,
    true
  )) || [];

const projects = JSON.parse(localStorage.getItem("projects")).map(project =>
  createProject(
    project.name,
    project.description,
    project.id,
    true
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
const dashboard = document.querySelector(".dashpoard-list");

showSideItems(projects, projectsElement, "project");
showSideItems(archiveTasks, favTasksElement, "task");
showSideItems(doneTasks, doneTaskListEle, "task");


dashboard.addEventListener("click", (e) => {
  const clickedItem = e.target;
  if (!clickedItem || clickedItem === null) return;

  else {
    if (clickedItem.id === "btn-projects") {
      document.currentPage = "myProjectsPage";
      showPageContent("My Projects");
    }
    else if (clickedItem.id === "btn-inbox") {
      document.currentPage = "inboxPage";
      showPageContent("Inbox");
    }
    else if (clickedItem.id === "btn-archive") {
      document.currentPage = "archivePage";
      showPageContent("Archive");
    }
    else if (clickedItem.id === "btn-done-tasks") {
      document.currentPage = "doneTasksPage";
      showPageContent("Done Tasks");
    }
    else if (clickedItem.id === "btn-today") {
      document.currentPage = "todayPage";
      showPageContent("Today Tasks");
    }
    else if (clickedItem.id === "btn-upcomming") {
      document.currentPage = "upcomingPage";
      showPageContent("Upcomming Tasks");
    }
  }

})

document.addEventListener("DOMContentLoaded", () => {
  const warningCloseBtn = document.querySelector('.warning-close-btn');
  warningCloseBtn.addEventListener("click", () => {
    Controller.closeWarning()
  })
});


function showPageContent(title) {
  pageTitle.textContent = title;
  todoList.textContent = "";

  switch (title) {
    case "My Projects":
      for (let i = 0; i < projects.length; i++) {
        projects[i].filterTasks(tasks, projects[i].id);
      }
      showProjectsEle(projects, todoList);
      break;

    case "Done Tasks":
      showArchiveTasksEle(JSON.parse(localStorage.getItem("doneTasks")), todoList);
      break;

    case "Archive":
      showArchiveTasksEle(JSON.parse(localStorage.getItem("archive")), todoList);
      break;

    case "Inbox":
      showTasksEle(JSON.parse(localStorage.getItem("tasks")), todoList);
      break;

    case "Today Tasks":
      showArchiveTasksEle(getTodayTasks(JSON.parse(localStorage.getItem("tasks"))), todoList);

      break;

    case "Upcomming Tasks":
      showArchiveTasksEle(getUpcomingTasks(JSON.parse(localStorage.getItem("tasks"))), todoList);

      break;

    default:
      showTasksEle(getTodayTasks(JSON.parse(localStorage.getItem("tasks"))), todoList);
  }
}