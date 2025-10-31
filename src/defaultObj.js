import {createTask} from './task.js'
import {createProject} from './project.js'

const tasks = [];  // has tasks Objescts
const projects = [];  // has Projects Objescts



  for (let i = 0; i < 10; i++) {
    let task = createTask(
      "Task Title: " + i,
      "This is a description for Task Number: " + i, "Priority: " + i,
      "March / " + i,
      i,
      i,
      false)
    tasks.push(task)
  }

  
  for (let i = 0; i < 10; i++) {
    let project = createProject(
      "Project Name: " + i,
      i,
      tasks,
      false)
    projects.push(project);
  }
  

  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("projects", JSON.stringify(projects));

  console.log("----------");

