

export function createProject(name, id, tasksList, isChecked = false) {
  const projectObj = {
    name: name,
    id: id,
    tasksList: tasksList,
    isChecked: isChecked
  }
  return {
    ...projectObj
  }
}

