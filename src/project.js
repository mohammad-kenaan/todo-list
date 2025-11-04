

export function createProject(id, name,description,  tasksList, isChecked = false) {
  const projectObj = {
    name: name,
    id: id,
    description: description,
    tasksList: tasksList,
    isChecked: isChecked,
    type: "project",
  }
  return {
    ...projectObj
  }
}

