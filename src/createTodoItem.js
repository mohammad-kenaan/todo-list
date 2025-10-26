

export function createTodoEle() {

  const todoItem = createEle("div", "todo-item");
  const itemId =  new Date().getTime();
  todoItem.dataset.id = itemId;
  // ----------- Head
  const head = createEle("h1", "head");
  head.textContent = "Morning Study";

  const mainDescripton = createEle("div", "main-descripton");
  const mainDescriptonSpan = createEle("span", "main-descripton-span");
   const mainDescriptonP = createEle("p", "main-descripton-p");

  mainDescriptonSpan.textContent = "Description";
  mainDescriptonP.textContent = "Some Description"

  const dueDate = createEle("div", "due-date");
  const dueDateSpan = createEle("span", "due-date-span");
  dueDateSpan.textContent = "Due date: ";

  const dueDateP = createEle("p", "due-date-p");
  dueDateP.textContent = "Tomorow";

  // ------------ Checkbox
  const checkBoxContainer = createEle("li", "check-box-container");
  const checkbox = createEle("input", "is-done", "checkbox");
  const checkboxLabel = createEle("label", "checkbox-label", "is-done");
  const checkboxLabelSpanOn = createEle("span", "on");
  checkboxLabelSpanOn.textContent = "ON";
  const checkboxLabelSpanOff = createEle("span", "off");
  checkboxLabelSpanOff.textContent = "OFF";

  // ------------- Form Container (Hedden details)

  const hiddenDetailsContainer = createEle("div", "hidden-details");
  hiddenDetailsContainer.classList.add("un-expand-hidden-details");

  // -------------  Fofm Hidden
  const form = createEle("form", "form-details");
  const fieldset = createEle("fieldset", "details-fieldset");
  const legend = createEle("legend", "details-legend");

  legend.textContent = "Todo Details";

  // ------------ todo details label
  const todoDetails = createEle("div", "todo-details");
  const todoTitle = createEle("label", "todo-title", "title");
  todoTitle.textContent = "Title";
  const todoDueDate = createEle("label", "todo-due-date", "due-date");
  todoDueDate.textContent = "Due-date";
  const todoPriority = createEle("label", "todo-priority", "priority");
  todoPriority.textContent = "Priority";

  //--------- todo details inputs
  const todoInputs = createEle("div", "todo-inputs");
  const todoInputTitle = createEle("input", "todo-input-title");
  const todoInputDueDate = createEle("input", "todo-input-due-date");
  const todoInputPriority = createEle("input", "todo-input-priority");

  //------------- todo textarea description
  const todoInputDescription = createEle("div", "description");

  const todoInputDescriptionLabel = createEle("label", "todo-input-description-label", "description");
  todoInputDescriptionLabel.textContent = "Dsecription";

  const todoInputDescriptionTextarea = createEle("textarea", "todo-input-description-textarea", "textarea-description");

  //---------Todo Btns Detailes
  const todoBtnsDetails = createEle("div", "btns-details");
  const todoBtnUpdate = createEle("button", "btn-update");
  todoBtnUpdate.textContent = "Update";
  todoBtnUpdate.type = "button";
  todoBtnUpdate.dataset.id = itemId;
  const todoBtnCancel = createEle("button", "btn-cancel");
  todoBtnCancel.textContent = "Cancel";
  todoBtnCancel.type = "button";
  todoBtnCancel.dataset.id = itemId;

  // ---------- apend child to dom

  mainDescripton.append(mainDescriptonSpan, mainDescriptonP);
  dueDate.append(dueDateSpan, dueDateP);

  checkboxLabel.append(checkboxLabelSpanOn, checkboxLabelSpanOff);
  checkBoxContainer.append(checkbox, checkboxLabel);

  todoBtnsDetails.append(todoBtnUpdate, todoBtnCancel);
  todoInputDescription.append(todoInputDescriptionLabel, todoInputDescriptionTextarea)
  todoInputs.append(todoInputTitle, todoInputDueDate, todoInputPriority);
  todoDetails.append(todoTitle, todoDueDate, todoPriority)
  fieldset.append(legend, todoDetails, todoInputs, todoInputDescription)
  form.append(fieldset, todoBtnsDetails);
  hiddenDetailsContainer.append(form);

  todoItem.append(head, mainDescripton, dueDate, checkBoxContainer, hiddenDetailsContainer);
  console.log("Item created");
  return todoItem;

}

function createEle(eleType, eleClass, option = undefined) {
  const ele = document.createElement(eleType);
  ele.classList.add(eleClass);
  if (eleType == "input" && option) {
    ele.type = option || "text";
    ele.name = eleClass;
    ele.id = eleClass;
  }
  if (eleType == "label" && option) {
    ele.htmlFor = option;
  }
  return ele;

}