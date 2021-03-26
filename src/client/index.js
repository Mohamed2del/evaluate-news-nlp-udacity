import { handleSubmit } from './js/formHandler';
import { submitButton } from './js/submitButton';
import { userUrl } from './js/formHandler';
import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

// Gets a reference to the form element
var form = document.getElementById('cpa-form');

// console.log(checkForName);

// console.log('CHANGE!!');

export { submitButton, handleSubmit, userUrl };
