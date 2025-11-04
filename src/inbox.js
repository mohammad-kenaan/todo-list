
import "./dialogForm.js";


import { showTasksEle, showDoneTasksEle, showSideItems, showSelecteOption } from "./itemsDisplay.js";
import { appControllerCanDo } from "./features.js";

const Controller = appControllerCanDo();


const tasks = JSON.parse(localStorage.getItem("tasks")) || [];  // has tasks Objescts
const projects = JSON.parse(localStorage.getItem("projects")) || [];  // has tasks Objescts

const archiveTasks = JSON.parse(localStorage.getItem("archive")) || [];
const doneTasks = JSON.parse(localStorage.getItem("doneTasks")) || [];


const addTask = document.querySelector('.menu-add-task');
const todoList = document.querySelector('.todo-list');
const doneTaskListEle = document.querySelector('.list-done-tasks');
const favTasksElement = document.querySelector('.fav-tasks-container');
const projectsElement = document.querySelector('.progects-list');


//---------------------------------------------

todoList.addEventListener('click', (e) => {

  const clickedTodoItem = e.target.closest('.todo-item');

  if (clickedTodoItem.dataset.eleType == "task") {

    if (!clickedTodoItem) return;

    else if (clickedTodoItem) {

      const clickedTodoItemId = clickedTodoItem.dataset.id;
      const clickedTodoItemIndex = Controller.getElementIndex(tasks, clickedTodoItemId);

      if (e.target.nodeName === "BUTTON") {
        const btnType = e.target.dataset.btnType;

        switch (btnType) {
          case "delete": {
            Controller.deletetask(tasks, clickedTodoItemId);
            todoList.textContent = "";
            updateDomContent()
            break;

          }
          case "cancel": Controller.unExpandItems(); break;
          case "update": updatetask(); break;
          case "archive": {
            Controller.sendItem(tasks, archiveTasks, clickedTodoItemIndex, "archive");
            favTasksElement.textContent = "";
            
            showSideItems(JSON.parse(localStorage.getItem("archive")), favTasksElement, "task");
            showTasksEle(JSON.parse(localStorage.getItem("archive")), todoList)
            Controller.unExpandItems();
            break;
          }
        }
      }

      else if (e.target.nodeName === "INPUT" && e.target.type === "checkbox") {

        const checkbox = e.target;

        // taskIndex that contains clicked checkbox
        const taskIndex = Controller.getElementIndex(tasks, clickedTodoItemId);

        if (Controller.isTaskChecked(checkbox)) {                                
        
          tasks[taskIndex].isChecked = true;
          Controller.sendItem(tasks, doneTasks, taskIndex, "doneTasks");

          localStorage.setItem("tasks", JSON.stringify(tasks));
          localStorage.setItem("doneTasks", JSON.stringify(doneTasks));

          doneTaskListEle.textContent = "";

          showSideItems(JSON.parse(localStorage.getItem("doneTasks")), doneTaskListEle, "task");


        } else {

          Controller.deletetask(doneTasks, clickedTodoItemId);
          tasks[taskIndex].isChecked = false;


          localStorage.setItem("tasks", JSON.stringify(tasks));
          localStorage.setItem("doneTasks", JSON.stringify(doneTasks));

          doneTaskListEle.textContent = "";

          showSideItems(JSON.parse(localStorage.getItem("doneTasks")), doneTaskListEle, "task");

        }

      }
      else {
        Controller.unExpandItems();
        Controller.expandItem(clickedTodoItem);
      }
    }
  }
})





