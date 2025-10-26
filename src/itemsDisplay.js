
const todoList = document.querySelector('.todo-list');

export function showItems(list) {
list.forEach(item => {
  todoList.append(item);
});
console.log("show Item");
}