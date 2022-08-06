'strict mode';

let objectLibrary = [];
let arrayLibrary = [];

const addBooks = document.querySelector('.add_books');
const booksContainer = document.querySelector('.books_container');

// CF for new book objects
function CFbook(title, author, genre) {
  this.title = title;
  this.author = author;
  this.genre = genre;
}

function addBookToLibrary() {
  // input variables
  const t = prompt('title');
  const a = prompt('author');
  const g = prompt('genre');

  // creating new objects
  objectLibrary.push(new CFbook(t, a, g));

  // object into array at any new given position
  arrayLibrary.push(Object.entries(objectLibrary[objectLibrary.length - 1]));

  console.log(arrayLibrary);
  console.log(objectLibrary);
  const parentElement = document.createElement('div');
  booksContainer.appendChild(parentElement);
  parentElement.classList.add('parentElement');
  const childElement1 = document.createElement('li');
  const childElement2 = document.createElement('li');
  const childElement3 = document.createElement('li');
  parentElement.appendChild(childElement1);
  parentElement.appendChild(childElement2);
  parentElement.appendChild(childElement3);

  for (let i = 0; i < arrayLibrary.length; i++) {
    childElement1.textContent = `${arrayLibrary[i][0][0]}: ${arrayLibrary[i][0][1]}`;
    childElement2.textContent = `${arrayLibrary[i][1][0]}: ${arrayLibrary[i][1][1]}`;
    childElement3.textContent = `${arrayLibrary[i][2][0]}: ${arrayLibrary[i][2][1]}`;
  }
  const divChildren = document.querySelectorAll('div');
  for (i = 0; i < divChildren.length; i++) {
    divChildren[i].classList.add(`book_${i + 1}`);
  }
  const editBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');
  parentElement.appendChild(editBtn);
  parentElement.appendChild(deleteBtn);
  editBtn.textContent = 'edit';
  deleteBtn.textContent = 'delete';
  editBtn.classList.add('edit');
  deleteBtn.classList.add('delete');

  const allEditBtn = document.querySelectorAll('.edit');
  const allDeleteBtn = document.querySelectorAll('.delete');

  // assign classes to btn upon creation _1
  for (i = 0; i < divChildren.length; ++i) {
    allEditBtn[i].classList.add(`edit_${i + 1}`);
    allDeleteBtn[i].classList.add(`delete_${i + 1}`);
  }
  // delete listener
  allDeleteBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.target.parentElement.remove();
    });
  });

  // edit listener
}
addBooks.addEventListener('click', addBookToLibrary);

// add eventListener for every delete/edit btn with loop, either deleting index numbers or elements directly
