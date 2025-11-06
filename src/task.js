// import { taskCanDo } from "./features";
export function createTask(
  title,
  description,
  priority,
  dueDate,
  projectId = 100,
  personId = 1,
  isChecked,
  id = Math.floor(Date.now() / 1000),
) {
  const taskObj = {
    title: title,
    description: description,
    priority: priority,
    dueDate: dueDate,
    projectId: projectId,
    personId: personId,
    isChecked: isChecked,
    type: "task",
    id: id,
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
  const task = tasks[clickedTodoItemIndex];
  task.title = titleInp,
    task.dueDate = dueDateInp,
    task.priority = priorityInp,
    task.description = descriptionInp
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function filterProjects(projectsArr, id) {
  return projectsArr.filter(project => +project.id == +id);
}
