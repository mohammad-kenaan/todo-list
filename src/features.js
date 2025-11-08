//------task Fun---------
export function appControllerCanDo() {
  return {
    expandItem,
    unExpandItem,
    unExpandItems,
    addNewItemOnCancelBtnsNodeList,
    sendItem,
    getElementIndex,
    filterDoneTasks,
    showWarning,
    closeWarning
  }
}

function expandItem(itemClicked) {
  itemClicked.classList.add('expand');
  const hiddenDetails = itemClicked.querySelector('.hidden-details');
  hiddenDetails.classList.remove("un-expand-hidden-details");
  hiddenDetails.classList.add("expand-hidden-details");
}

function unExpandItem(todoItem) {
  const hiddenEle = todoItem.querySelector(".hidden-details");
  hiddenEle.classList.remove("expand-hidden-details");
  hiddenEle.classList.add("un-expand-hidden-details");
  todoItem.classList.remove("expand");
}

function unExpandItems() {
  const todoItems = document.querySelectorAll('.todo-item');
  todoItems.forEach((todoItem) => {
    unExpandItem(todoItem);
  })
}

function addNewItemOnCancelBtnsNodeList() {
  const btnsCancel = document.querySelectorAll(".btn-cancel");
  btnsCancel.forEach((btnCancel) => {
    btnCancel.addEventListener("click", () => {
      unExpandItems();
    })
  })
}

function sendItem(from, to, index, keyName) {
  if (from[index]) {
    if (to.find(obj => obj.id === from[index].id)) {
      showWarning("Item already Archived");
      return;
    }
    to.unshift(from[index]);
    localStorage.setItem(keyName, JSON.stringify(to));
  }

}

function getElementIndex(arrayStorage, id) {
  return arrayStorage.findIndex((ele) => ele.id == id);
}

function filterDoneTasks(tasks) {
  const doneTasks = JSON.parse(localStorage.getItem("doneTasks")) || [];
  tasks.forEach(task => {
    if (task.isTaskChecked(task)) {
      doneTasks.unshift(task);
    }
  });
  localStorage.setItem("doneTasks", JSON.stringify(doneTasks));
}


export function showWarning(content) {
  const warning = document.querySelector(".warning-message");
  const warningMsgTitle = document.getElementById("title-warning-message");
  warningMsgTitle.textContent = content;
  warning.classList.add("warning-message-show");
}

export function closeWarning() {
  const warning = document.querySelector(".warning-close-btn");
  const warningContainer = document.querySelector(".warning-message");
  warningContainer.classList.remove("warning-message-show");
}