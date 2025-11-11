import { displaycontroller } from "./itemsDisplay.js";
import { appControllerCanDo } from "./features.js";
import { createTask } from "./task.js";


const Controller = appControllerCanDo();
const TaskController = createTask(
  "Master Task",
  "This Task has been created to give you access to task.js file content",
  2,
  new Date().toISOString(),
  9999,
  0,
  false,
  55555,
  true
);
const DisplayController = displaycontroller();


const todoDashboardList = document.querySelector('.todo-dashboard-list');
const doneTaskListEle = document.querySelector('.list-done-tasks');
const favTasksElement = document.querySelector('.fav-tasks-container');


todoDashboardList.addEventListener('click', (e) => {
  const clickedTodoItem = e.target.closest('.todo-item');

  if (!clickedTodoItem) return;

  else {
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

    if (clickedTodoItem.dataset.eleType == "task" && clickedTodoItem.parentElement.dataset.editable === "true") {
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
              TaskController.deletetask(tasks, clickedTodoItemId);
              localStorage.setItem("tasks", JSON.stringify(tasks));
              todoDashboardList.textContent = "";
              DisplayController.showTasksEle(JSON.parse(localStorage.getItem("tasks")), todoDashboardList);
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
            const priorityInp = expandedTask.
              querySelector(".todo-input-priority").value;
            const descriptionInp = expandedTask.
              querySelector(".todo-input-description-textarea").value;

            TaskController.updateTask(tasks, clickedTodoItemIndex, titleInp, dueDateInp, priorityInp, descriptionInp);

            todoDashboardList.textContent = "";
            DisplayController.showTasksEle(JSON.parse(localStorage.getItem("tasks")), todoDashboardList);
            Controller.unExpandItems();
            break;
          }

          case "archive": {
            Controller.sendItem(tasks, archiveTasks, clickedTodoItemIndex, "archive");
            favTasksElement.textContent = "";
            DisplayController.showSideItems(JSON.parse(localStorage.getItem("archive")), favTasksElement, "task");
            Controller.unExpandItems();
            break;
          }
        }

      }
      else if (e.target.nodeName === "INPUT" && e.target.type === "checkbox") {
        const checkbox = e.target;
        if (TaskController.isTaskChecked(checkbox) === true) {
          tasks[clickedTodoItemIndex].isChecked = true;
          Controller.sendItem(tasks, doneTasks, clickedTodoItemIndex, "doneTasks");
          localStorage.setItem("tasks", JSON.stringify(tasks));
          localStorage.setItem("doneTasks", JSON.stringify(doneTasks));
          doneTaskListEle.textContent = "";
          DisplayController.showSideItems(JSON.parse(localStorage.getItem("doneTasks")), doneTaskListEle, "task");

        } else {
          TaskController.deletetask(doneTasks, clickedTodoItemId);
          tasks[clickedTodoItemIndex].isChecked = false;
          localStorage.setItem("tasks", JSON.stringify(tasks));
          localStorage.setItem("doneTasks", JSON.stringify(doneTasks));
          doneTaskListEle.textContent = "";
          DisplayController.showSideItems(JSON.parse(localStorage.getItem("doneTasks")), doneTaskListEle, "task");
        }
      }
      else {
        Controller.unExpandItems();
        Controller.expandItem(clickedTodoItem);
      }
    }
  }
})
