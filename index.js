/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
const form = document.querySelector('#form');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const bookContainer = document.querySelector('.book-container');

// The Book class
class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}

// Local Storage class
class Storage {
  static getBookFromStorage() {
    let bookList;
    if (localStorage.getItem('bookList') === null) {
      bookList = [];
    } else {
      bookList = JSON.parse(localStorage.getItem('bookList'));
    }
    return bookList;
  }

  static addBookToStorage(book) {
    const bookList = Storage.getBookFromStorage();
    bookList.push(book);
    localStorage.setItem('bookList', JSON.stringify(bookList));
  }

  static removeFromStorage(id) {
    const bookList = Storage.getBookFromStorage();
    // eslint-disable-next-line eqeqeq
    const filteredBooks = bookList.filter((book) => book.id != id);
    localStorage.setItem('bookList', JSON.stringify(filteredBooks));
  }
}

// The dummy data class
class DummyData {
  static displayData() {
    const collections = Storage.getBookFromStorage();
    collections.forEach((book) => DummyData.addBook(book));
  }

  static addBook(book) {
    const bookList = document.createElement('tr');
    bookList.classList.add('table-row');
    bookList.innerHTML = `
    <td>"${book.title}" by <span>${book.author}</span></td>
    <input class="hidden" type="hidden" value="${book.id}">
    <td><button class="delete">Remove</button></td>
    `;
    bookContainer.appendChild(bookList);
  }

  // Delete Book Method

  static removeBook(target) {
    if (target.classList.contains('delete')) {
      target.parentElement.parentElement.remove();
    }
  }
}

// Event: display Books
document.addEventListener('DOMContentLoaded', DummyData.displayData);

// ADD A BOOK EVENT
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // get the form values, instantiate the Book class, add to collection, clear the input on submit.
  const title = titleInput.value;
  const author = authorInput.value;
  const id = Math.floor(Math.random() * 100);
  const book = new Book(title, author, id);
  if (!title || !author) {
    // eslint-disable-next-line no-alert
    alert('Please Input a title and author of a book');
  } else {
    DummyData.addBook(book);
    Storage.addBookToStorage(book);
    titleInput.value = '';
    authorInput.value = '';
  }
});

// REMOVE A BOOK EVENTs
bookContainer.addEventListener('click', (e) => {
  DummyData.removeBook(e.target);
  Storage.removeFromStorage(e.target.parentElement.previousElementSibling.value);
});
