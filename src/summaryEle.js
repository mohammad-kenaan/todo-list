export function createSummaryEle(task) {
  const todoItem = createEle("div", "todo-item");
  todoItem.dataset.id = task.id;
  todoItem.dataset.eleType = "task";

  // --------- Belong to Project
  const projectIdContainer = createEle("div", "project-head");
  const projectId = createEle("h4", "project-head");
  projectId.textContent = "From Project: #" + task.belongTo;

  // ----------- Head
  const head = createEle("h1", "head");
  head.textContent = task.title;

  const mainDescripton = createEle("div", "main-descripton");
  const mainDescriptonSpan = createEle("span", "main-descripton-span");
  const mainDescriptonP = createEle("p", "main-descripton-p");
  mainDescriptonSpan.textContent = "Description";
  mainDescriptonP.textContent = task.description;

  const dueDate = createEle("div", "due-date");
  const dueDateSpan = createEle("span", "due-date-span");
  dueDateSpan.textContent = "Due date: ";

  const format = {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }
  const date = new Date(task.dueDate);
  let dateFormated = date.toLocaleString("en-CA", format)

  const dueDateP = createEle("p", "due-date-p");
  dueDateP.textContent = dateFormated;


  //---------Todo Btns Detailes
  const todoBtnsDetails = createEle("div", "btns-details");

  const todoBtnDelete = createEle("button", "btn-delete");
  todoBtnDelete.textContent = "Delete";
  todoBtnDelete.type = "button";
  todoBtnDelete.dataset.btnType = "delete";

  // ---------- apend child to dom
  projectIdContainer.append(projectId)
  mainDescripton.append(mainDescriptonSpan, mainDescriptonP);
  dueDate.append(dueDateSpan, dueDateP);
  todoBtnsDetails.append(todoBtnDelete);
  todoItem.append(projectIdContainer, head, mainDescripton, dueDate);
  return todoItem;
}

function createEle(eleType, eleClass, option = undefined) {
  const ele = document.createElement(eleType);
  ele.classList.add(eleClass);
  if (eleType == "input" && option) {
    ele.type = option || "text";
    ele.name = eleClass;
  }
  return ele;
}