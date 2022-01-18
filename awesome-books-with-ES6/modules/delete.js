import Storage from './Storage.js';
import DummyData from './DummyData.js';
import { bookContainer } from '../index.js';

// REMOVE A BOOK EVENTS

const deleteBook = () => {
  bookContainer.addEventListener('click', (e) => {
    DummyData.removeBook(e.target);
    Storage.removeFromStorage(e.target.parentElement.previousElementSibling.value);
  });
};

export default deleteBook;
