
import { showTasksEle, showSideItems } from "./itemsDisplay.js";
import { appControllerCanDo } from "./features.js";
import { createTask } from "./task.js";

const Controller = appControllerCanDo();


const tasks = JSON.parse(localStorage.getItem("tasks")).map(task => createTask(
  task.title,
  task.description,
  task.priority,
  task.dueDate,
  task.projectId,
  task.personId,
  task.isChecked,
  task.id
)) || []; 


const archiveTasks = JSON.parse(localStorage.getItem("archive")) || [];
const doneTasks = JSON.parse(localStorage.getItem("doneTasks")) || [];
const todoList = document.querySelector('.todo-list');
const doneTaskListEle = document.querySelector('.list-done-tasks');
const favTasksElement = document.querySelector('.fav-tasks-container');


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
            tasks[clickedTodoItemIndex].deletetask(tasks, clickedTodoItemId);
            todoList.textContent = "";
            localStorage.setItem("tasks", JSON.stringify(tasks));
            showTasksEle(JSON.parse(localStorage.getItem("tasks")), todoList);
            break;

          }
          case "cancel": Controller.unExpandItems(); break;

          // titleInp   dueDateInp   PriorityIpu    descriptionInp

          case "update": {

            const titleInp = document.querySelector(".todo-input-title").value;
            const dueDateInp = document.querySelector(".todo-input-due-date").value;
            const priorityInp = document.querySelector(".todo-input-priority").value;
            const descriptionInp = document.querySelector(".todo-input-description-textarea").value;

            tasks[clickedTodoItemIndex].updateTask(tasks, clickedTodoItemIndex, titleInp, dueDateInp, priorityInp, descriptionInp);
            Controller.unExpandItems();

            localStorage.setItem("tasks", JSON.stringify(tasks));
            todoList.textContent = "";
            showTasksEle(JSON.parse(localStorage.getItem("tasks")), todoList);

            break;

          }
          case "archive": {
            Controller.sendItem(tasks, archiveTasks, clickedTodoItemIndex, "archive");
            favTasksElement.textContent = "";

            showSideItems(JSON.parse(localStorage.getItem("archive")), favTasksElement, "task");
            showTasksEle(JSON.parse(localStorage.getItem("archive")), todoList);
            Controller.unExpandItems();
            break;
          }

        }
      }

      else if (e.target.nodeName === "INPUT" && e.target.type === "checkbox") {

        const checkbox = e.target;

        // taskIndex that contains clicked checkbox


        console.log(tasks[clickedTodoItemIndex]); // refer to JS Obj 
        if (tasks[clickedTodoItemIndex].isTaskChecked(checkbox)) {

          tasks[clickedTodoItemIndex].isChecked = true;
          Controller.sendItem(tasks, doneTasks, clickedTodoItemIndex, "doneTasks");

          localStorage.setItem("tasks", JSON.stringify(tasks));
          localStorage.setItem("doneTasks", JSON.stringify(doneTasks));

          doneTaskListEle.textContent = "";

          showSideItems(JSON.parse(localStorage.getItem("doneTasks")), doneTaskListEle, "task");


        } else {
          tasks[clickedTodoItemIndex].deletetask(doneTasks, clickedTodoItemId);

          tasks[clickedTodoItemIndex].isChecked = false;

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





