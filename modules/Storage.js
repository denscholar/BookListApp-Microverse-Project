// Local Storage class
export default class Storage {
  static getBookFromStorage = () => {
    let bookList;
    if (localStorage.getItem('bookList') === null) {
      bookList = [];
    } else {
      bookList = JSON.parse(localStorage.getItem('bookList'));
    }
    return bookList;
  }

  static addBookToStorage = (book) => {
    const bookList = Storage.getBookFromStorage();
    bookList.push(book);
    localStorage.setItem('bookList', JSON.stringify(bookList));
  }

  static removeFromStorage = (id) => {
    const bookList = Storage.getBookFromStorage();
    // eslint-disable-next-line eqeqeq
    const filteredBooks = bookList.filter((book) => book.id != id);
    localStorage.setItem('bookList', JSON.stringify(filteredBooks));
  }
}
