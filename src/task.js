// import { taskCanDo } from "./features";
export function createTask(
  title, 
  description, 
  priority, 
  dueDate, 
  projectId = 1, 
  personId = 1, 
  isChecked = false) {

  const taskObj = {
    id: window.crypto.randomUUID(),
    title: title,
    description: description,
    priority: priority,
    dueDate: dueDate,
    projectId: projectId,
    personId: personId,
    isChecked: isChecked,
  }
  return {
    ...taskObj,
  }
}


