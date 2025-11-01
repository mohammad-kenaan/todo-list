import "./defaultObj.js";
import "./inbox.js";
import "./sideItem.js";
import { showTasksEle, showDoneTasksEle, showSideItems, showSelecteOption } from "./itemsDisplay.js";

const doneTaskListEle = document.querySelector('.list-done-tasks');
const favTasksElement = document.querySelector('.fav-tasks-container');
const projectsElement = document.querySelector('.progects-list');


const tasks = JSON.parse(localStorage.getItem("tasks")) || [];  // has tasks Objescts
const projects = JSON.parse(localStorage.getItem("projects")) || [];  // has tasks Objescts

const archiveTasks = JSON.parse(localStorage.getItem("archive")) || [];
const doneTasks = JSON.parse(localStorage.getItem("doneTasks")) || [];

  showSideItems(projects, projectsElement, "project");
  showSideItems(archiveTasks, favTasksElement, "task");
  showSideItems(doneTasks, doneTaskListEle, "task");