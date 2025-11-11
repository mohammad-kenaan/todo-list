export function createProject(
  name,
  description = "Please add a Project description",
  id = null,
  isFromLocalStorage = false
) {
  const proId = id;

  const projectObj = {
    name: name,
    id: id || generateProjectId(isFromLocalStorage),
    description: description,
    tasksList: filterTasks(JSON.parse(localStorage.getItem("tasks")) || [], proId),
    isChecked: false,
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

function generateProjectId(importedFromLocal) {

  if (importedFromLocal === false) {

    const projectCounterStart = JSON.parse(localStorage.getItem("projects")).length || 10;

    if (!localStorage.getItem("projectIdCounter"))
      localStorage.setItem("projectIdCounter", JSON.stringify(projectCounterStart));

    let counter = JSON.parse(localStorage.getItem("projectIdCounter"));
    counter++;
    localStorage.setItem("projectIdCounter", JSON.stringify(counter));
    return counter;
  }

}