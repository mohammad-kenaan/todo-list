// import { taskCanDo } from "./features";
export function createTask(
  id,
  title,
  description,
  priority,
  dueDate,
  projectId = 1,
  personId = 1,
  isChecked,
  ) {


  const taskObj = {
    id: id,
    title: title,
    description: description,
    priority: priority,
    dueDate: dueDate,
    projectId: projectId,
    personId: personId,
    isChecked: isChecked,
    type: "task",
  }
  return {
    ...taskObj,
  }
}


