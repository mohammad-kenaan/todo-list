import { appControllerCanDo } from "./features.js";

export function createTask(
  title,
  description = "Please add a task description",
  priority = 3,
  dueDate,
  projectId = 4,
  personId = 1,
  isChecked = false,
  id = null,
  isFromLocalStorage = false

) {
  const taskObj = {
    title,
    description,
    priority,
    dueDate,
    projectId,
    personId,
    isChecked,
    type: "task",
    id: id || generateTaskId(isFromLocalStorage),
    belongTo: "General"
  }
  return {
    ...taskObj,
    ...taskCanDo(),
  }
}

const Controller = appControllerCanDo();

function taskCanDo() {
  return {
    isTaskChecked,
    deletetask,
    updateTask,
    filterProjects,
  }
}

function isTaskChecked(task) {
  return task.checked;
}

function deletetask(arr, id) {
  const index = arr.findIndex((ele) => ele.id == id);
  if (index !== -1)
    arr.splice(index, 1);
  else{
    Controller.showWarning("Item already deleted");
    return;
  }
  return;
}

function updateTask(tasks, clickedTodoItemIndex, titleInp, dueDateInp, priorityInp, descriptionInp) {

  const task = tasks[clickedTodoItemIndex];
  task.title = titleInp || task.title,
    task.dueDate = dueDateInp || task.dueDate,
    task.priority = priorityInp || task.priority,
    task.description = descriptionInp || task.description
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function filterProjects(projectsArr, id) {
  return projectsArr.filter(project => +project.id == +id);
}

function generateTaskId(importedFromLocal) {

  if (importedFromLocal === false) {

    const taskCounterStart = JSON.parse(localStorage.getItem("tasks")).length || 10;

    if (!localStorage.getItem("taskIdCounter")) {
      localStorage.setItem("taskIdCounter", JSON.stringify(taskCounterStart));
    }

    let counter = JSON.parse(localStorage.getItem("taskIdCounter"));
    counter++;
    localStorage.setItem("taskIdCounter", JSON.stringify(counter));

    return counter;
  }
  return;

}
