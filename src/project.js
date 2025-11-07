
export function createProject(
  name, 
  description = "Please add a Project description",  
  id = null, 
  isChecked = false,) {

  const projectObj = {
    name: name,
    id: id || generateProjectId(),
    description: description,
    tasksList: filterTasks(JSON.parse(localStorage.getItem("tasks")) || [], id),
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
    generateProjectId,
  }
}

function filterTasks(tasks, id) {
  return tasks.filter(task => task.projectId == id);
}

function generateProjectId() {
  if (!localStorage.getItem("projectIdCounter")) 
    localStorage.setItem("projectIdCounter", JSON.stringify(0));
  let counter = JSON.parse(localStorage.getItem("projectIdCounter"));
  counter++;
  localStorage.setItem("projectIdCounter", JSON.stringify(counter));
  return counter;
}