'strict mode';

const addBooks = document.querySelector('.add_books');
const booksContainer = document.querySelector('.books_container');

function addBookToLibrary() {
  const parentElement = document.createElement('div');
  booksContainer.appendChild(parentElement);
  parentElement.classList.add('parentElement');

  const author = document.createElement('section');
  const childElement1 = document.createElement('input');
  const title = document.createElement('section');
  const childElement2 = document.createElement('input');
  const genre = document.createElement('section');
  const childElement3 = document.createElement('input');

  childElement1.setAttribute('type', 'text');
  childElement2.setAttribute('type', 'text');
  childElement3.setAttribute('type', 'text');
  childElement1.setAttribute('size', '10');
  childElement2.setAttribute('size', '10');
  childElement3.setAttribute('size', '10');
  childElement1.setAttribute('id', 'title');
  childElement2.setAttribute('id', 'book');
  childElement3.setAttribute('id', 'genre');

  author.textContent = 'Author';
  title.textContent = 'Title';
  genre.textContent = 'Genre';

  parentElement.appendChild(author);
  parentElement.appendChild(childElement1);
  parentElement.appendChild(title);
  parentElement.appendChild(childElement2);
  parentElement.appendChild(genre);
  parentElement.appendChild(childElement3);

  const divChildren = document.querySelectorAll('div');
  for (i = 0; i < divChildren.length; i++) {
    divChildren[i].classList.add(`book_${i + 1}`);
  }
  const readBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');

  parentElement.appendChild(readBtn);
  parentElement.appendChild(deleteBtn);
  readBtn.textContent = 'unread';
  readBtn.classList.add('read');
  deleteBtn.textContent = 'delete';
  deleteBtn.classList.add('delete');

  const allDeleteBtn = document.querySelectorAll('.delete');
  const allReadBtn = document.querySelectorAll('.read');

  // assign classes to btn upon creation _1
  for (i = 0; i < divChildren.length; ++i) {
    allDeleteBtn[i].classList.add(`delete_${i + 1}`);
  }
  // delete listener
  allDeleteBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.target.parentElement.remove();
    });
  });

  allReadBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.target.classList.add('visited');
      e.target.textContent = 'read';
    });
  });
}
addBooks.addEventListener('click', addBookToLibrary);

// add eventListener for every delete/edit btn with loop, either deleting index numbers or elements directly

// input instead of section; no need for prompts and edit btn is not needed as well

// js work is mostly done, maybe add read checkbox later; now css is in order
