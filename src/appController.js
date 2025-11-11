import "./defaultObj.js";
import "./dialogForm.js";
import "./dialogFromProject.js";
import "./todoDashboard.js";
import "./sideItem.js";

import { getOverdueTasks } from "./missingTasks.js";
import { displaycontroller } from "./itemsDisplay.js";
import { appControllerCanDo } from "./features.js";
import { getTodayTasks } from "./today.js";
import { getUpcomingTasks } from "./upcomingTasks.js";
import { createProject } from "./project.js";

document.currentPage = "homePage";

const Controller = appControllerCanDo();
const ProjectController = createProject(
  "Master Project",
  "This project has been created to give you access to Project.js file content",
  9999,
  true);
const DisplayController = displaycontroller();

const doneTaskListEle = document.querySelector('.list-done-tasks');
const favTasksElement = document.querySelector('.fav-tasks-container');
const projectsElement = document.querySelector('.progects-list');

const projects = JSON.parse(localStorage.getItem("projects")) || [];
const archiveTasks = JSON.parse(localStorage.getItem("archive")) || [];
const doneTasks = JSON.parse(localStorage.getItem("doneTasks")) || [];

const todoList = document.querySelector('.todo-list');
const todoDashboardList = document.querySelector('.todo-dashboard-list');
const pageTitle = document.querySelector(".page-title");
const dashboard = document.querySelector(".dashpoard-list");

DisplayController.showSideItems(projects, projectsElement, "project");
DisplayController.showSideItems(archiveTasks, favTasksElement, "task");
DisplayController.showSideItems(doneTasks, doneTaskListEle, "task");


dashboard.addEventListener("click", (e) => {
  const clickedItem = e.target;
  if (!clickedItem || clickedItem === null) return;

  else {
    if (clickedItem.id === "btn-projects") {
      document.currentPage = "myProjectsPage";
      showPageContent("My Projects");
    }
    else if (clickedItem.id === "btn-to-do-dashboard") {

      document.currentPage = "todoDashboard";
      showPageContent("Dashboard");
    }
    else if (clickedItem.id === "btn-inbox") {
      document.currentPage = "inboxPage";
      showPageContent("Inbox");
    }
    else if (clickedItem.id === "btn-missing") {
      document.currentPage = "MissingPage";
      showPageContent("Missing");
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

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  const archiveTasks = JSON.parse(localStorage.getItem("archive")) || [];
  const doneTasks = JSON.parse(localStorage.getItem("doneTasks")) || [];

  pageTitle.textContent = title;
  todoList.textContent = "";

  switch (title) {
    case "My Projects":

      todoDashboardList.textContent = "";
      todoList.textContent = "";
      for (let i = 0; i < projects.length; i++) {
        projects[i].tasksList = ProjectController.filterTasks(tasks, projects[i].id);
      }
      localStorage.setItem("projects", JSON.stringify(projects));
      DisplayController.showProjectsEle(projects, todoList);
      break;

    case "Done Tasks":
      todoDashboardList.textContent = "";
      todoList.textContent = "";
      DisplayController.showArchiveTasksEle(doneTasks, todoList);
      break;

    case "Dashboard":
      todoDashboardList.textContent = "";
      todoList.textContent = "";

      DisplayController.showTasksEle(tasks, todoDashboardList);
      break;

    case "Archive":
      todoDashboardList.textContent = "";
      todoList.textContent = "";
      DisplayController.showArchiveTasksEle(archiveTasks, todoList);
      break;

    case "Inbox":
      todoDashboardList.textContent = "";
      todoList.textContent = "";
      DisplayController.showArchiveTasksEle(tasks, todoList);
      break;

    case "Missing":
      todoDashboardList.textContent = "";
      todoList.textContent = "";
      DisplayController.showArchiveTasksEle(getOverdueTasks(tasks), todoList);
      break;

    case "Today Tasks":
      todoDashboardList.textContent = "";
      todoList.textContent = "";
      DisplayController.showArchiveTasksEle(getTodayTasks(tasks), todoList);

      break;

    case "Upcomming Tasks":
      todoDashboardList.textContent = "";
      todoList.textContent = "";
      DisplayController.showArchiveTasksEle(getUpcomingTasks(JSON.parse(localStorage.getItem("tasks"))), todoList);

      break;

    default:
      todoDashboardList.textContent = "";
      todoList.textContent = "";
      DisplayController.showArchiveTasksEle(getTodayTasks(JSON.parse(localStorage.getItem("tasks"))), todoList);
  }
}