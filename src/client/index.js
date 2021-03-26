import { handleSubmit } from './js/formHandler';
import { checkForURL } from './js/urlcheck';
require('babel-core/register');
require('babel-polyfill');
import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

('use strict');

// Gets a reference to the form element
var form = document.getElementById('form');
// Adds a listener for the "submit" event.
form.addEventListener('submit', function (e) {
  e.preventDefault();
});
// console.log(checkForName);

// console.log('CHANGE!!');

export { handleSubmit, checkForURL };
