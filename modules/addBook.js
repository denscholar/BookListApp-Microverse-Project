import Book from './Book.js';
import Storage from './Storage.js';
import DummyData from './DummyData.js';
import { form, titleInput, authorInput } from './otherElement.js';

// ADD A BOOK EVENT
const addBook = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // get the form values, instantiate the Book class, add to collection.
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
};
export default addBook;
