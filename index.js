/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
const form = document.querySelector('#form');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const bookContainer = document.querySelector('.book-container');
const listLink = document.querySelector('.list');
const addNew = document.querySelector('.add-new');
const contact = document.querySelector('.contact-link');
const contactPage = document.querySelector('.contact');
const table = document.querySelector('.table');
const time = document.querySelector('.time');

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

// this section handles the page navigation
listLink.addEventListener('click', () => {
table.classList.remove('toggle');
form.classList.add('toggle');
contactPage.classList.add('toggle');
});

addNew.addEventListener('click', () => {
form.classList.remove('toggle');
table.classList.add('toggle');
contactPage.classList.add('toggle');
});

contact.addEventListener('click', () => {
contactPage.classList.remove('toggle');
form.classList.add('toggle');
table.classList.add('toggle');
});

// time time function
const currentTime = (date) => {
  // for the date
  const currentDayAndMonth = date.toDateString().slice(3, 15);
  // for the time
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  const amPm = hours >= 12 ? 'pm' : 'am';
  hours %= 12;
  hours = hours || 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  const currentDate = `${currentDayAndMonth} ${hours}:${minutes}:${seconds} ${amPm}`;
  return currentDate;
};

time.textContent = currentTime(new Date());
