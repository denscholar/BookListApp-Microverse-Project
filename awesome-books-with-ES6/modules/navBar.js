import {
  listLink, title, table, form, contactPage, addNew, contact,
} from './otherElement.js';

// this section handles the page navigation
export default function navBar() {
  listLink.addEventListener('click', () => {
    title.classList.remove('toggle');
    table.classList.remove('toggle');
    form.classList.add('toggle');
    contactPage.classList.add('toggle');
  });

  addNew.addEventListener('click', () => {
    form.classList.remove('toggle');
    table.classList.add('toggle');
    title.classList.add('toggle');
    contactPage.classList.add('toggle');
  });

  contact.addEventListener('click', () => {
    contactPage.classList.remove('toggle');
    form.classList.add('toggle');
    table.classList.add('toggle');
  });
}
