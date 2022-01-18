/* eslint-disable no-undef */
/* eslint-disable import/no-cycle */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */

// Modules
import navBar from './modules/navBar.js';
import DummyData from './modules/DummyData.js';
import addBook from './modules/addBook.js';
import deleteBook from './modules/delete.js';
import currentTime from './currentTime.js';

export const form = document.querySelector('#form');
export const titleInput = document.querySelector('#title');
export const authorInput = document.querySelector('#author');
export const bookContainer = document.querySelector('.book-container');
export const listLink = document.querySelector('.list');
export const addNew = document.querySelector('.add-new');
export const contact = document.querySelector('.contact-link');
export const contactPage = document.querySelector('.contact');
export const table = document.querySelector('.table-head');
export const time = document.querySelector('.time');
export const title = document.querySelector('.title');

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
