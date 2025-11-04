
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];  // has tasks Objescts

export function createProject(id, name,description,  tasksListId = 100, isChecked = false) {
  const projectObj = {
    name: name,
    id: id,
    description: description,
    tasksList: filterTasks(tasksListId),
    isChecked: isChecked,
    type: "project",
  }
  return {
    ...projectObj
  }
}

  function filterTasks(id) {
    return tasks.filter(task => task.projectId == id);

  }