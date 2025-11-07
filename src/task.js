export function createTask(
  title,
  description = "Please add a task description",
  priority = 3,
  dueDate = new Date(),
  projectId = 4,
  personId = 1,
  isChecked = false,
  id = null
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
    id: id || generateTaskId(),
  }
  return {
    ...taskObj,
    ...taskCanDo(),
  }
}


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
  arr.splice(index, 1);

}

function updateTask(tasks, clickedTodoItemIndex, titleInp, dueDateInp, priorityInp, descriptionInp) {
  const pageTitle = document.querySelector(".page-title");
  pageTitle.textContent = "Inbox";
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

function generateTaskId() {
  if (!localStorage.getItem("taskIdCounter")) {
    localStorage.setItem("taskIdCounter", JSON.stringify(0));
  }

  let counter = JSON.parse(localStorage.getItem("taskIdCounter"));
  counter++;
  localStorage.setItem("taskIdCounter", JSON.stringify(counter));

  return counter;
}