export function createSideListEle(item, type) {
  const ele = document.createElement("li");
  ele.classList.add("side-item");
  ele.setAttribute("role", "button");
  if(type === "project") 
      ele.classList.add("side-item-project");
  if(type === "task") 
      ele.classList.add("side-item-task");
  const hashCharachter = document.createElement("i");
  hashCharachter.classList.add("fa-solid", "fa-hashtag");
  const eleName = document.createElement("span");
  eleName.classList.add("done-task-name");
  eleName.dataset.parentId = item.id;
  if(item.name) eleName.textContent =  item.name;
  if(item.title) eleName.textContent =  item.title;

  ele.append(hashCharachter, eleName);
  return ele;
}

