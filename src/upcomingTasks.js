export function getUpcomingTasks(tasks) {
  const now = new Date();
  return tasks
    .filter(task => new Date(task.dueDate) > now) 
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate)); 
}