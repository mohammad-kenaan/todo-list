

export function createSideListEle(item) {
  const ele = document.createElement("li");
  ele.classList.add("done-task")

  const hashCharachter = document.createElement("i");
  hashCharachter.classList.add("fa-solid", "fa-hashtag");

  const eleName = document.createElement("span");
  eleName.classList.add("done-task-name");

  if(item.name) eleName.textContent =  item.name;
  if(item.title) eleName.textContent =  item.title;

  ele.append(hashCharachter, eleName);
  return ele;

}

