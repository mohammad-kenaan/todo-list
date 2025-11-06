const tasks = JSON.parse(localStorage.getItem("tasks")) || [];  // has tasks Objescts

//-----------------------------------
export function createProject(id, name, description, isChecked = false) {
  const projectObj = {
    name: name,
    id: id,
    description: description,
    tasksList: filterTasks(tasks, id),
    isChecked: isChecked,
    type: "project",
  }
  return {
    ...projectObj, 
    ...projectCanDo(),
  }
}

function projectCanDo() {
  return {
    filterTasks,
  }
}

function filterTasks(tasks, id) {
  return tasks.filter(task => task.projectId == id);
}

