export function getOverdueTasks(tasks) {
  const today = new Date();
  return tasks.filter(task => new Date(task.dueDate) < today && task.isChecked === false);
}