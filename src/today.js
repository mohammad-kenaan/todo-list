export function getTodayTasks(tasks) {
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayDate = today.getDate();

  return tasks.filter(task => {
    const taskDate = new Date(task.dueDate);
    return (
      taskDate.getFullYear() === todayYear &&
      taskDate.getMonth() === todayMonth &&
      taskDate.getDate() === todayDate
    );
  });
}


