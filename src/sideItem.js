import { appControllerCanDo } from "./features.js";
import { createSummaryEle } from "./summaryEle.js";
import { createProjectEle } from "./projectEle.js";
import { createProject } from "./project.js";

document.addEventListener("DOMContentLoaded", () => {
  const myProjectsEle = document.querySelector(".my-list-projects");
  const pageTitle = document.querySelector(".page-title");
  const todoList = document.querySelector('.todo-list');
  const todoDashboardList = document.querySelector('.todo-dashboard-list');
  const doneTasksEleContainer = document.querySelector(".done-tasks");
  const archiveTasksEleContainer = document.querySelector(".fav-tasks-container");
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const Controller = appControllerCanDo();
  const ProjectController = createProject(
    "Master Project",
    "This project has been created to give you access to Project.js file content",
    9999,
    true
  );


  myProjectsEle.addEventListener("click", (e) => {

    document.currentPage = "taskFromSide";
    
    const projects = JSON.parse(localStorage.getItem("projects"))|| [];

    if (e.target.nodeName === "SPAN") {
      todoList.textContent = "";
      todoDashboardList.textContent = "";

      const projectElement = e.target;
      const projectElementId = projectElement.dataset.parentId;
      const clickerProjectIndex = Controller.getElementIndex(projects, projectElementId);

      projects[clickerProjectIndex].tasksList = ProjectController.filterTasks(JSON.parse(localStorage.getItem("tasks")) || [], projectElementId);

      pageTitle.textContent = projects[clickerProjectIndex].name;
      if (projects[clickerProjectIndex]) {
        todoList.append(createProjectEle(projects[clickerProjectIndex]));
      }
    }
  })

  doneTasksEleContainer.addEventListener("click", (e) => {
    document.currentPage = "taskFromSide";
    if (e.target.nodeName === "SPAN") {
      const element = e.target;
      const elementId = element.dataset.parentId;
      todoList.textContent = "";
      todoDashboardList.textContent = ""; let itemIndexInTasks = Controller.getElementIndex(tasks, elementId);

      if (itemIndexInTasks === -1) {
        Controller.showWarning("An item has been deleted recently. Please check your list")
      }
      else {
        pageTitle.textContent = "Past tasks";
        const todoEle = createSummaryEle(tasks[itemIndexInTasks]);
        todoList.append(todoEle);
      }
    }
  });

  archiveTasksEleContainer.addEventListener("click", (e) => {
    document.currentPage = "taskFromSide";
    if (e.target.nodeName === "SPAN") {
      const element = e.target;
      const elementId = element.dataset.parentId;
      todoList.textContent = "";
      todoDashboardList.textContent = ""; let itemIndexInTasks = Controller.getElementIndex(tasks, elementId);

      if (itemIndexInTasks === -1) {
        Controller.showWarning("An item has been deleted recently. Please check your list")
      }
      else {
        pageTitle.textContent = "Past tasks";
        const todoEle = createSummaryEle(tasks[itemIndexInTasks]);
        todoList.append(todoEle);
      }
    }
  });
})




