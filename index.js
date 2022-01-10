const form = document.querySelector('#form');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const booksContainer = document.querySelector('.books-container');

// collection that keeps a list of books
const collection = JSON.parse(localStorage.getItem('bookList')) || [
  {
    title: 'The Lions Den',
    author: 'Dennis',
  },
  {
    title: 'Peter Met Paul',
    author: 'Dennis Akagha',
  },
];

// create the book element
const createBookelement = ({ title, author }) => {
  const booksList = document.createElement('div');
  booksList.innerHTML = `<h3 class="title">${title}</h3>
    <p class="author">${author}</p>
    <button class="delete" type="button">Remove</button><br><br><hr>`;
  booksContainer.appendChild(booksList);
};

// function to add a new book to the collection, with title and author.
const addBook = (title, author) => {

  collection.push({
    title,
    author,
  });
  localStorage.setItem('bookList', JSON.stringify(collection));
  return { title, author };
};

collection.forEach(createBookelement);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newBook = addBook(
    titleInput.value,
    authorInput.value,
  );
  if(!titleInput.value){
    return;
  }else{
    createBookelement(newBook);
    titleInput.value = '';
    authorInput.value = '';
  }
  }
 );

// function that deletes a book

const deleteBtn = document.querySelectorAll('.delete');
deleteBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
  });
});

// deleteBtn.addEventListener('click', () => {

//     console.log('hello world');
// })
// const deleteBook = ({title, author}) => {

// }
