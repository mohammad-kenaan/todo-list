


export function createProjectEle(project) {
  
  const todoProject = createEle("div", "todo-item");
  todoProject.dataset.id = project.id;
  todoProject.dataset.eleType = "project";
  // ----------- Head
  const head = createEle("h1", "head");
  head.textContent = project.name;


  const mainDescripton = createEle("div", "main-descripton");
  const mainDescriptonSpan = createEle("span", "main-descripton-span");
  const mainDescriptonP = createEle("p", "main-descripton-p");

  mainDescriptonSpan.textContent = "Description";
  mainDescriptonP.textContent = project.description;

  // ------------ Checkbox
  const checkBoxContainer = createEle("li", "check-box-container");
  const checkbox = createEle("input", "is-done", "checkbox");
  checkbox.dataset.itemId = project.id;
  checkbox.checked = project.isChecked;
  const checkboxLabel = createEle("label", "checkbox-label", "is-done");

  checkboxLabel.htmlFor = project.id;

  const checkboxLabelSpanOn = createEle("span", "on");
  checkboxLabelSpanOn.textContent = "ON";
  const checkboxLabelSpanOff = createEle("span", "off");
  checkboxLabelSpanOff.textContent = "OFF";



  //---------Todo Btns Detailes
  const todoBtnsDetails = createEle("div", "btns-details");

  const todoBtnCancel = createEle("button", "btn-update");
  todoBtnCancel.textContent = "update";
  todoBtnCancel.type = "button";
  todoBtnCancel.dataset.btnType = "update";



  const todoBtnDelete = createEle("button", "btn-delete");
  todoBtnDelete.textContent = "Delete";
  todoBtnDelete.type = "button";
  todoBtnDelete.dataset.btnType = "delete";


  //----------- Tasks List

  const projectTasksList = createEle("div", "project-tasks-list");
  const table = document.createElement("table");
  table.style.textAlign = "center";
  table.style.width = "100%";
  table.style.borderSpacing = "20px";
  table.style.marginTop = "30px";
  table.style.fontSize = "16px";


  const headerRow = document.createElement("tr");
  headerRow.style.backgroundColor = "gray";
  headerRow.style.color = "white";
  headerRow.style.padding = "200px";


  table.appendChild(headerRow);


  const thId = document.createElement("th");
  thId.textContent = "Task ID";
  thId.style.padding = "15px";

  const thName = document.createElement("th");
  thName.textContent = "Task Name";
  thName.style.padding = "15px";


  headerRow.append(thId, thName);


  project.tasksList.forEach(obj => {
    const tdId = document.createElement("td");
    tdId.style.padding = "15px";

    const tdName = document.createElement("td");
    tdName.style.padding = "15px";

    tdId.textContent = obj.id;
    tdName.textContent = obj.title;

    const row = document.createElement("tr");
    row.style.borderBottom = "3px solid gray";





    row.append(tdId, tdName);

    table.appendChild(row);

  });



  projectTasksList.appendChild(table);


  // ---------- apend child to dom

  mainDescripton.append(mainDescriptonSpan, mainDescriptonP);

  checkboxLabel.append(checkboxLabelSpanOn, checkboxLabelSpanOff);
  checkBoxContainer.append(checkbox, checkboxLabel);

  todoBtnsDetails.append(todoBtnCancel, todoBtnDelete);


  todoProject.append(head, mainDescripton, checkBoxContainer, projectTasksList);
  return todoProject;

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