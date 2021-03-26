import { checkForURL } from './js/urlcheck';
import { handleSubmit } from './js/formHandler';
import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

// Gets a reference to the form element
var form = document.getElementById('cpa-form');

// Adds a listener for the "submit" event.
form.addEventListener('submit', function (e) {
  e.preventDefault();
});

// console.log(checkForName);

// console.log('CHANGE!!');

export { checkForURL, handleSubmit };
