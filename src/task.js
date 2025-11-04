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
  }
}


