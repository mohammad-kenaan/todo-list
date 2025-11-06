import { appControllerCanDo } from "./features.js";
import { createTodoEle } from "./todoEle.js";
import { createProjectEle } from "./projectEle.js";

document.addEventListener("DOMContentLoaded", () => {

  const sideItemsProject = document.querySelectorAll(".side-item-project");

  const myProjectsEle = document.querySelector(".my-list-projects");
  const pageTitle = document.querySelector(".page-title");
  const todoListEle = document.querySelector(".todo-list");
  const doneTasksEleContainer = document.querySelector(".done-tasks");
  const archiveTasksEleContainer = document.querySelector(".fav-tasks-container");
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const projects = JSON.parse(localStorage.getItem("projects")) || [];

  const Controller = appControllerCanDo();


  //-----------------------------------


  myProjectsEle.addEventListener("click", (e) => {
    console.log("yop");
    if (e.target.nodeName === "SPAN") {

      todoListEle.textContent = "";
      const projectElement = e.target;
      const projectElementId = projectElement.dataset.parentId;

      const clickerProjectIndex = Controller.getElementIndex(projects, projectElementId);
      pageTitle.textContent = projects[clickerProjectIndex].name;
      if (projects[clickerProjectIndex]) {
        todoListEle.append(createProjectEle(projects[clickerProjectIndex]));
      }
    }
  })


  doneTasksEleContainer.addEventListener("click", (e) => {
    if (e.target.nodeName === "SPAN") {
      const element = e.target;
      const elementId = element.dataset.parentId;
      todoListEle.textContent = "";
      let itemIndexInTasks = Controller.getElementIndex(tasks, elementId);
      pageTitle.textContent = tasks[itemIndexInTasks].title;

      if (itemIndexInTasks === -1) console.log("Item Not founded");
      else {
        const todoEle = createTodoEle(tasks[itemIndexInTasks]);
        Controller.unExpandItems(todoEle);
        todoListEle.append(todoEle);
      }

    }
  });


  archiveTasksEleContainer.addEventListener("click", (e) => {
    if (e.target.nodeName === "SPAN") {
      const element = e.target;
      const elementId = element.dataset.parentId;
      todoListEle.textContent = "";
      let itemIndexInTasks = Controller.getElementIndex(tasks, elementId);
      pageTitle.textContent = tasks[itemIndexInTasks].title;

      if (itemIndexInTasks === -1) console.log("Item Not founded");
      else {
        const todoEle = createTodoEle(tasks[itemIndexInTasks]);
        Controller.unExpandItems(todoEle);
        todoListEle.append(todoEle);
      }
    }
  });



})




