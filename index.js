const form = document.querySelector('#form');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const booksContainer = document.querySelector('.books-container');

// collection that keeps a list of books
let collection = JSON.parse(localStorage.getItem('bookList')) || [];

// create the book element
const createBookelement = ({ title, author }) => {
  const booksList = document.createElement('div');
  booksList.innerHTML = `<h3 class="title">${title}</h3>
    <p class="author">${author}</p>
    <button class="delete" type="button">Remove</button><br><br><hr>`;
  booksContainer.appendChild(booksList);

  document.querySelectorAll('.delete').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const targetTitle = e.target.parentElement.firstChild.textContent;
      const targetAuthor = e.target.previousElementSibling.textContent;
      const targetEl = e.target.parentElement;
      collection = collection.filter(
        (book) => book.title !== targetTitle || book.author !== targetAuthor,
      );
      localStorage.setItem('bookList', JSON.stringify(collection));

      targetEl.remove();
    });
  });
};
collection.forEach(createBookelement);

// function to add a new book to the collection, with title and author.
const addBook = (title, author) => {
  if (!titleInput.value || !authorInput.value) {
    // eslint-disable-next-line no-alert
    alert('Please input values');
  } else {
    collection.push({
      title,
      author,
    });
    localStorage.setItem('bookList', JSON.stringify(collection));
  }
  return { title, author };
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newBook = addBook(titleInput.value, authorInput.value);
  if (!titleInput.value) return;
  createBookelement(newBook);
  titleInput.value = '';
  authorInput.value = '';
});
