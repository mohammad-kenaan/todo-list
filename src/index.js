import "./reset.css";
import "./style.css";

import "./reset.css";
import "./style.css";
import { createTodoEle } from "./createTodoItem.js";
import { showItems } from "./itemsDisplay.js";

const todoListArr = [];
const addTask = document.querySelector('.menu-add-task');
const todoList = document.querySelector('.todo-list');


addTask.addEventListener("click", () => {
  unExpandItems();
  const createTodoItem = createTodoEle();
  todoListArr.push(createTodoItem);
  showItems(todoListArr);
  addNewItemOnCancelBtnsNodeList()

});

todoList.addEventListener('click', (e) => {

  const clickedTodoItem = e.target.closest('.todo-item');

  if (!clickedTodoItem || e.target.nodeName === "INPUT" || e.target.nodeName === "BUTTON") return;

  else {
    unExpandItems();
    expandItem(clickedTodoItem);
  }
})


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