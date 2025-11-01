


function assign(taskID, personId, projectId) {
  const obj = {
    taskID: taskID,
    personId: personId,
    projectId: projectId
  }
  storageE.push(obj);
}

//------task Fun---------
export function appControllerCanDo() {
  return {
    expandItem,
    unExpandItem,
    unExpandItems,
    addNewItemOnCancelBtnsNodeList,
    getElementIndex,
    isTaskChecked,
    sendItem,
    deletetask,

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
  console.log("we have Btns cancel: " + btnsCancel.length);
  console.log(btnsCancel);

  btnsCancel.forEach((btnCancel) => {
    console.log(btnCancel.dataset.id);
    btnCancel.addEventListener("click", () => {
      console.log("cancel btn clicked");
      unExpandItems();

    })
  })
}


function getElementIndex(arrayStorage, id) {
  return arrayStorage.findIndex((ele) => ele.id == id);

}

function isTaskChecked(task) {
  return task.checked;
}


function sendItem(from, to, index, keyName) {
  if (from[index]) {
    if (to.find(obj => obj.id === from[index].id)) {
      console.log("we have ");
      return;
    }
    to.push(from[index]);
    localStorage.setItem(keyName, JSON.stringify(to));
  }
}

//-----Shared Fun-----------
function editFun(id, arr, newObj) {
  const index = arr.findIndex((ele) => ele.id == id);
  arr.splice(index, 1, newObj);
}

//-----------------
function deletetask(arr, id) {
  
  const index = arr.findIndex((ele) => ele.id == id);
  arr.splice(index, 1);
}

//-----DOM-----]