/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
const form = document.querySelector('#form');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
// const booksContainer = document.querySelector('.books-container');
const table = document.querySelector('.table');

// The collection class
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// The dummy data class
class DummyData {
  static displayData() {
    const collections = [
      {
        title: 'The living and dead',
        author: 'John doe',
      },
      {
        title: 'Power of the Tongue',
        author: 'Jane doe',
      },
    ];
    // loop through the book collection and pass it to the addbook funtion
    collections.forEach((book) => DummyData.addBook(book));
  }

  static addBook(book) {
    const bookList = document.createElement('tr');
    bookList.className('table-row');
    bookList.innerHTML = `
    <td>${book.title} by <span>${book.author}</span></td>
    <td><button class="delete">Remove</button></td>
    `;
    table.appendChild(bookList);
  }

  // static delete(e) {
  //   const targetTitle = e.target.parentElement.firstChild.textContent;
  //     const targetAuthor = e.target.previousElementSibling.textContent;
  //     const targetEl = e.target.parentElement;
  //     collections = collections.filter(
  //       (book) => book.title !== targetTitle || book.author !== targetAuthor,
  //     );
  //     localStorage.setItem('bookList', JSON.stringify(collection));

  //     targetEl.remove();
  // }

  // clear input function
  static clearInput() {
    titleInput.value = '';
    authorInput.value = '';
  }
}

// The storage class

// Event: display Books
document.addEventListener('DOMContentLoaded', DummyData.displayData);

// Event: Add a book
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // get the form values
  const title = titleInput.value;
  const author = authorInput.value;

  // instatiate the book
  const book = new Book(title, author);
  // Add the book to the collection

  DummyData.addBook(book);
  // titleInput.value = '';
  // authorInput.value = '';

  // clear the input after submit
  DummyData.clearInput();
});

// Event: Remove a book
const tr = document.querySelector('table-row');
console.log(tr);

// collection that keeps a list of books
// let collection = JSON.parse(localStorage.getItem('bookList')) || [];

// // create the book element
// const createBookelement = ({ title, author }) => {
//   const booksList = document.createElement('div');
//   booksList.innerHTML = `<h3 class="title">${title}</h3>
//     <p class="author">${author}</p>
//     <button class="delete" type="button">Remove</button><br><br><hr>`;
//   booksContainer.appendChild(booksList);

//   document.querySelectorAll('.delete').forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//       const targetTitle = e.target.parentElement.firstChild.textContent;
//       const targetAuthor = e.target.previousElementSibling.textContent;
//       const targetEl = e.target.parentElement;
//       collection = collection.filter(
//         (book) => book.title !== targetTitle || book.author !== targetAuthor,
//       );
//       localStorage.setItem('bookList', JSON.stringify(collection));

//       targetEl.remove();
//     });
//   });
// };
// collection.forEach(createBookelement);

// // function to add a new book to the collection, with title and author.
// const addBook = (title, author) => {
//   if (!titleInput.value || !authorInput.value) {
//     // eslint-disable-next-line no-alert
//     alert('Please input values');
//   } else {
//     collection.push({
//       title,
//       author,
//     });
//     localStorage.setItem('bookList', JSON.stringify(collection));
//   }
//   return { title, author };
// };

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const newBook = addBook(titleInput.value, authorInput.value);
//   if (!titleInput.value) return;
//   createBookelement(newBook);
//   titleInput.value = '';
//   authorInput.value = '';
// });
