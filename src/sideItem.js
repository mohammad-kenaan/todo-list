import { appControllerCanDo } from "./features.js";
import { createSummaryEle } from "./archiveEle.js";
import { createProjectEle } from "./projectEle.js";
import { createProject } from "./project.js";

document.addEventListener("DOMContentLoaded", () => {
  const myProjectsEle = document.querySelector(".my-list-projects");
  const pageTitle = document.querySelector(".page-title");
  const todoListEle = document.querySelector(".todo-list");
  const doneTasksEleContainer = document.querySelector(".done-tasks");
  const archiveTasksEleContainer = document.querySelector(".fav-tasks-container");
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const Controller = appControllerCanDo();

  myProjectsEle.addEventListener("click", (e) => {
    document.currentPage = "taskFromSide";
    const projects = JSON.parse(localStorage.getItem("projects")).map(project => createProject(
      project.name,
      project.description,
      project.id,
      true
    )) || [];

    if (e.target.nodeName === "SPAN") {
      todoListEle.textContent = "";
      const projectElement = e.target;
      const projectElementId = projectElement.dataset.parentId;
      const clickerProjectIndex = Controller.getElementIndex(projects, projectElementId);

      projects[clickerProjectIndex].filterTasks(tasks, projectElementId);
      pageTitle.textContent = projects[clickerProjectIndex].name;
      if (projects[clickerProjectIndex]) {
        todoListEle.append(createProjectEle(projects[clickerProjectIndex]));
      }
    }
  })

  doneTasksEleContainer.addEventListener("click", (e) => {
    document.currentPage = "taskFromSide";
    if (e.target.nodeName === "SPAN") {
      const element = e.target;
      const elementId = element.dataset.parentId;
      todoListEle.textContent = "";
      let itemIndexInTasks = Controller.getElementIndex(tasks, elementId);

      if (itemIndexInTasks === -1) {
        Controller.showWarning("An item has been deleted recently. Please check your list")
      }
      else {
        pageTitle.textContent = tasks[itemIndexInTasks].title;
        const todoEle = createSummaryEle(tasks[itemIndexInTasks]);
        todoListEle.append(todoEle);
      }
    }
  });

  archiveTasksEleContainer.addEventListener("click", (e) => {
    document.currentPage = "taskFromSide";
    if (e.target.nodeName === "SPAN") {
      const element = e.target;
      const elementId = element.dataset.parentId;
      todoListEle.textContent = "";
      let itemIndexInTasks = Controller.getElementIndex(tasks, elementId);

      if (itemIndexInTasks === -1) {
        Controller.showWarning("An item has been deleted recently. Please check your list")
      }
      else {
        pageTitle.textContent = tasks[itemIndexInTasks].title;
        const todoEle = createSummaryEle(tasks[itemIndexInTasks]);
        todoListEle.append(todoEle);
      }
    }
  });
})




