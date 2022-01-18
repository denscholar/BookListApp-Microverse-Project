import Storage from './Storage.js';
import bookContainer from './bookElement.js';

// The dummy data class
class DummyData {
  static displayData = () => {
    const collections = Storage.getBookFromStorage();
    collections.forEach((book) => DummyData.addBook(book));
  };

  static addBook = (book) => {
    const bookList = document.createElement('tr');
    bookList.classList.add('table-row');
    bookList.innerHTML = `
    <td>"${book.title}" by <span>${book.author}</span></td>
    <input class="hidden" type="hidden" value="${book.id}">
    <td><button class="delete">Remove</button></td>
    `;
    bookContainer.appendChild(bookList);
  };

  // Delete Book Method
  static removeBook = (target) => {
    if (target.classList.contains('delete')) {
      target.parentElement.parentElement.remove();
    }
  };
}

export default DummyData;