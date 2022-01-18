// Modules
import navBar from './modules/navBar.js';
import DummyData from './modules/DummyData.js';
import addBook from './modules/addBook.js';
import deleteBook from './modules/delete.js';
import currentTime from './modules/currentTime.js';

// Event: display Books
document.addEventListener('DOMContentLoaded', DummyData.displayData);

// ADDING A BOOK
document.addEventListener('DOMContentLoaded', addBook);

// DELETING A BOOK
document.addEventListener('DOMContentLoaded', deleteBook);

// Navigation Bar
document.addEventListener('DOMContentLoaded', navBar);

// Time
document.addEventListener('DOMContentLoaded', currentTime);
