import { createDetailedEle } from "./todoEle.js";
import { createSummaryEle } from "./summaryEle.js";
import { createSideListEle } from "./sideListEle.js";
import { createProjectEle } from "./projectEle.js";


export function displaycontroller() {
  return {
    showTasksEle,
    showArchiveTasksEle,
    showProjectsEle,
    showSideItems,
    showSelecteOption
  }
}

export function showTasksEle(tasksOfObj, HtmlEle) {
  tasksOfObj.forEach((task) => {
    const todoEle = createDetailedEle(task);
    HtmlEle.append(todoEle);
  });
}

export function showArchiveTasksEle(tasksOfObj, HtmlEle) {
  const HtmlEle2 = document.querySelector('.todo-list');
  tasksOfObj.forEach((task) => {
    const todoEle = createSummaryEle(task);
    HtmlEle2.append(todoEle);

  });
}

export function showProjectsEle(ProjectsObj, htmlEle) {
  ProjectsObj.forEach(project => {
    const proEle = createProjectEle(project);
    htmlEle.append(proEle)
  })
}

export function showSideItems(arr, HtmlEle, type) {
  let counter = 0;
  arr.forEach((task) => {
    if (counter === 4) return;
    const todoEle = createSideListEle(task, type);
    HtmlEle.append(todoEle);
    counter++;
  });
}

export function showSelecteOption(arr) {
  let selectedOptions = document.querySelector("#project-id");
  selectedOptions.textContent = "";
  arr.forEach((project) => {
    const option = document.createElement("option");
    const spaanHash = document.createElement("span");
    spaanHash.textContent = "# " + project.id + " ";
    const spaanProjectName = document.createElement("span").value = project.name;
    option.append(spaanHash, spaanProjectName);
    selectedOptions.append(option);
  });
}


