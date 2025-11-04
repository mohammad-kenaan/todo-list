import { appControllerCanDo } from "./features.js";
import { createTodoEle } from "./todoEle.js";
import { createProjectEle } from "./projectEle.js";

document.addEventListener("DOMContentLoaded", () => {

  const sideItemstask = document.querySelectorAll(".side-item-task");

  const sideItemsProject = document.querySelectorAll(".side-item-project");

  const todoListEle = document.querySelector(".todo-list");
  const doneTasksEleContainer = document.querySelector(".done-tasks");
  const archiveTasksEleContainer = document.querySelector(".fav-tasks-container");

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const archiveTasks = JSON.parse(localStorage.getItem("archive")) || [];

  const doneTasks = JSON.parse(localStorage.getItem("donetasks")) || [];

  const projects = JSON.parse(localStorage.getItem("projects")) || [];  // has tasks Objescts

  const pageTitle = document.querySelector(".page-title");
  const Controller = appControllerCanDo();




  sideItemsProject.forEach(projectEle => {
    projectEle.addEventListener("click", (e) => {
      todoListEle.textContent = "";
      const projectElement = e.target;
      const projectElementId = projectElement.dataset.parentId;

      const clickerProjectIndex = Controller.getElementIndex(projects, projectElementId);

      if (projects[clickerProjectIndex]) {
        todoListEle.append(createProjectEle(projects[clickerProjectIndex]));
      }
    })
  })

  doneTasksEleContainer.addEventListener("click", (e) => {
    if (e.target.nodeName === "SPAN") {
      const element = e.target;
      const elementId = element.dataset.parentId;
      todoListEle.textContent = "";
      let itemIndexInTasks = Controller.getElementIndex(tasks, elementId);
      if (itemIndexInTasks === -1)  console.log("Item Not founded");
      else {
         const todoEle = createTodoEle(tasks[itemIndexInTasks]);
         Controller.expandItem(todoEle);
         todoListEle.append(todoEle);
      }

    }
  });


  archiveTasksEleContainer.addEventListener("click", (e) => {
    if (e.target.nodeName === "SPAN") {
      const element = e.target;
      console.log(element);
      const elementId = element.dataset.parentId;
      todoListEle.textContent = "";
      let itemIndexInTasks = Controller.getElementIndex(tasks, elementId);
      if (itemIndexInTasks === -1)  console.log("Item Not founded");
      else {
         const todoEle = createTodoEle(tasks[itemIndexInTasks]);
         Controller.expandItem(todoEle);
         todoListEle.append(todoEle);
      }

    }
  });




})




