const dialogElem = document.getElementById("dialog");
const showDialog = document.querySelector(".show");
const formSubmit = document.querySelector("#confirmBtn");
const cancelProcess = document.querySelector("#cancel");

const form = document.getElementById('my-form');

const addTask = document.querySelector('.menu-add-task');


addTask.addEventListener("click", () => {
  dialogElem.showModal();
  form.reset();
});


cancelProcess.addEventListener("click", () => {
  dialogElem.close();
});



formSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  const smallImg = document.getElementById('imgInput-1').files[0];
  const bigImg = document.getElementById('imgInput-2').files[0];
  const smallImgURL = URL.createObjectURL(smallImg);
  const bigImgURL = URL.createObjectURL(bigImg);
  const author = document.getElementById('book-author').value;
  const title = document.getElementById('book-title').value;
  const numOfPages = document.getElementById('book-num-of-pages').value;

  // Create your Book obj
  addBookToLibrary(author, title, numOfPages, smallImgURL, bigImgURL);
  cards.textContent = "";
  displayBooksAsCards(myLibrary)
  dialogElem.close();
})

