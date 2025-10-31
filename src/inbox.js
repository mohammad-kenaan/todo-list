
import "./dialogForm.js";


import { showTasksEle, showDoneTasksEle, showSideItems, showSelecteOption } from "./itemsDisplay.js";
import { appControllerCanDo } from "./features.js";

const pageTitle = document.querySelector(".page-title");
const inboxBtn = document.querySelector("#btn-inbox");
const Controller = appControllerCanDo();


const tasks = JSON.parse(localStorage.getItem("tasks")) || [];  // has tasks Objescts
const projects = JSON.parse(localStorage.getItem("projects")) || [];  // has tasks Objescts

const archiveTasks = [];
const doneTasks = [];


const addTask = document.querySelector('.menu-add-task');
const todoList = document.querySelector('.todo-list');
const doneTaskListEle = document.querySelector('.list-done-tasks');
const favTasksElement = document.querySelector('.fav-tasks-container');
const projectsElement = document.querySelector('.progects-list');


//---------------------------------------------


inboxBtn.addEventListener("click", () => {
  pageTitle.textContent = "Inbox";
  todoList.textContent = "";
  showTasksEle(tasks, todoList)
  showInboxContent();
})


function showInboxContent() {
  todoList.addEventListener('click', (e) => {
    const clickedTodoItem = e.target.closest('.todo-item');
    const clickedTodoItemIndex = Controller.getElementIndex(tasks, e.target.dataset.id);

    if (!clickedTodoItem) return;

    else if (e.target.nodeName === "BUTTON") {
      const btnType = e.target.dataset.btnType;
      const btnTId = e.target.dataset.id;


      switch (btnType) {
        case "delete": {
          Controller.deletetask(tasks, btnTId);
          todoList.textContent = "";
          showTasksEle(tasks, todoList);;

          break;

        }
        case "cancel": Controller.unExpandItems(); break;
        case "update": updatetask(); break;
        case "archive": {
          Controller.sendItem(tasks, archiveTasks, clickedTodoItemIndex, "archive");

          favTasksElement.textContent = "";
          showSideItems(archiveTasks, favTasksElement);
          break;
        }
      }
    }

    else if (e.target.nodeName === "INPUT" && e.target.type === "checkbox") {

      const checkbox = e.target;
      const checkboxId = checkbox.dataset.itemId;

      // taskIndex that contains clicked checkbox

      const taskIndex = Controller.getElementIndex(tasks, checkboxId);

      if (Controller.isTaskChecked(checkbox)) {
        tasks[taskIndex].isChecked = true;
        Controller.sendItem(tasks, doneTasks, taskIndex, "doneTasks");
        doneTaskListEle.textContent = "";
        showSideItems(doneTasks, doneTaskListEle);

      } else {

        Controller.deletetask(doneTasks, checkboxId);
        localStorage.setItem("doneTasks", JSON.stringify(doneTasks));
        tasks[taskIndex].isChecked = false;
        doneTaskListEle.textContent = "";
        showSideItems(doneTasks, doneTaskListEle);
      }

    }
    else {
      Controller.unExpandItems();
      Controller.expandItem(clickedTodoItem);
    }
  })

  //--------Test
  //----- create some tasks


}



