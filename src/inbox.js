import { showTasksEle, showSideItems } from "./itemsDisplay.js";
import { appControllerCanDo } from "./features.js";
import { createTask } from "./task.js";
import { getTodayTasks } from "./today.js";
import { getUpcomingTasks } from "./upcomingTasks.js";

const Controller = appControllerCanDo();

const tasks = JSON.parse(localStorage.getItem("tasks")).map(task => createTask(
  task.title,
  task.description,
  task.priority,
  task.dueDate,
  task.projectId,
  task.personId,
  task.isChecked,
  task.id,
  true
)) || [];

const archiveTasks = JSON.parse(localStorage.getItem("archive")) || [];
const doneTasks = JSON.parse(localStorage.getItem("doneTasks")) || [];
const todoList = document.querySelector('.todo-list');
const doneTaskListEle = document.querySelector('.list-done-tasks');
const favTasksElement = document.querySelector('.fav-tasks-container');
const pageTitle = document.querySelector(".page-title");


todoList.addEventListener('click', (e) => {
  const clickedTodoItem = e.target.closest('.todo-item');
  if (!clickedTodoItem || clickedTodoItem === null) return;

  else {
    if (clickedTodoItem.dataset.eleType == "task") {
      const clickedTodoItemId = clickedTodoItem.dataset.id;
      const clickedTodoItemIndex = Controller.getElementIndex(tasks, clickedTodoItemId);

      if (e.target.nodeName === "BUTTON") {
        const btnType = e.target.dataset.btnType;
        switch (btnType) {
          case "delete": {
            if (tasks[clickedTodoItemIndex] === undefined) {
              Controller.showWarning("An item has been deleted recently. Please check your list")
            }
            else {
              tasks[clickedTodoItemIndex].deletetask(tasks, clickedTodoItemId);
              localStorage.setItem("tasks", JSON.stringify(tasks));
              displayItemsOnCurrentPage();
            }
            break;
          }
          case "cancel": Controller.unExpandItems(); break;

          case "update": {
            const expandedTask = clickedTodoItem;
            const titleInp = expandedTask.querySelector
              (".todo-input-title").value;
            const dueDateInp = expandedTask.querySelector
              (".todo-input-due-date").value;

            const priorityInp = expandedTask.querySelector(".todo-input-priority").value;
            const descriptionInp = expandedTask.querySelector(".todo-input-description-textarea").value;

            tasks[clickedTodoItemIndex].updateTask(tasks, clickedTodoItemIndex, titleInp, dueDateInp, priorityInp, descriptionInp);
            Controller.unExpandItems();            
            displayItemsOnCurrentPage();

            break;
          }

          case "archive": {
            Controller.sendItem(tasks, archiveTasks, clickedTodoItemIndex, "archive");
            favTasksElement.textContent = "";
            showSideItems(JSON.parse(localStorage.getItem("archive")), favTasksElement, "task");
            Controller.unExpandItems();
            break;
          }
        }

      }
      else if (e.target.nodeName === "INPUT" && e.target.type === "checkbox") {
        const checkbox = e.target;
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
        if (document.currentPage === "inboxPage" ||
          document.currentPage === "todayPage" ||
          document.currentPage === "upcomingPage"
        ) {
          Controller.unExpandItems();
          Controller.expandItem(clickedTodoItem);
        }

      }
    }
  }
})


function displayItemsOnCurrentPage() {
   todoList.textContent = "";
  if (document.currentPage === "inboxPage"){
    pageTitle.textContent = "Inbox";
    showTasksEle(JSON.parse(localStorage.getItem("tasks")), todoList);
  }
    
  else if (document.currentPage === "todayPage"){
        pageTitle.textContent = "Today Tasks";
    showTasksEle(getTodayTasks(JSON.parse(localStorage.getItem("tasks"))), todoList)
  }

  else if (document.currentPage === "upcomingPage"){
        pageTitle.textContent = "Upcoming Tasks";
    showTasksEle(getUpcomingTasks(JSON.parse(localStorage.getItem("tasks"))), todoList)
  }

}