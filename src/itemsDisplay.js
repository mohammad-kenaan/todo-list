import { createTodoEle } from "./todoItem.js";
import { createSideListEle } from "./sideListEle.js"


export function showTasksEle(tasksOfObj, HtmlEle) {

  tasksOfObj.forEach((task) => {
    const todoEle = createTodoEle(task);
    HtmlEle.append(todoEle);
  });
}

export function showDoneTasksEle(doneTasksOfObj, HtmlEle) {

  doneTasksOfObj.forEach((task) => {
    const todoEle = createSideListEle(task);
    HtmlEle.append(todoEle);
  });

}


export function showSideItems(arr, HtmlEle) {
  let counter = 0;
    arr.forEach((task) => {
      if(counter === 4) return;
    const todoEle = createSideListEle(task);
    HtmlEle.append(todoEle);
    counter++;
  });
}

export function showSelecteOption(projects) {

  projects.forEach((project) => {
    const selectedOptions = document.querySelector("#project-id");
    const option = document.createElement("option");
    const spaanHash = document.createElement("span");
    spaanHash.textContent = "# "+ project.id + " ";
    const spaanProjectName = document.createElement("span").value = project.name;
    option.append(spaanHash,spaanProjectName);
    selectedOptions.append(option);
  });
}


