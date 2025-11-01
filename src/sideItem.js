import { appControllerCanDo } from "./features.js";
import { createTodoEle } from "./todoEle.js";

document.addEventListener("DOMContentLoaded", () => {

  const sideItemstask = document.querySelectorAll(".side-item-task");

  const sideItemsProject = document.querySelectorAll(".side-item-project");

  const todoListEle = document.querySelector(".todo-list");

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const archiveTasks = JSON.parse(localStorage.getItem("archive")) || [];

  const doneTasks = JSON.parse(localStorage.getItem("donetasks")) || [];

  const projects = JSON.parse(localStorage.getItem("projects")) || [];  // has tasks Objescts

  const pageTitle = document.querySelector(".page-title");
  const Controller = appControllerCanDo();




  sideItemstask.forEach(item => {
    item.addEventListener("click", (e) => {
      const element = e.target;
      const elementId = element.dataset.parentId;

      if (e.target.nodeName === "SPAN") {
        todoListEle.textContent = "";
        let itemIndexInTasks = Controller.getElementIndex(tasks, elementId)

        if (itemIndexInTasks === -1)
          console.log("Item Not founded");
        else {
          console.log(tasks[itemIndexInTasks]);
          const todoEle = createTodoEle(tasks[itemIndexInTasks]);
          Controller.expandItem(todoEle);
          todoListEle.append(todoEle);
        }
      }
    });
  })
})


// 

// console.log("-------------");
// console.log("Ele in Tasks is is: " + tasks[itemIndex]); //undefined
// console.log("ItemIndex is: " +itemIndex);
// 