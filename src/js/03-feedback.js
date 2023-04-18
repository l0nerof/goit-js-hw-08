import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-msg';

let formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('.feedback-form input'),
};

const savedFormData = localStorage.getItem(STORAGE_KEY);
if (savedFormData) {
  formData = JSON.parse(savedFormData);
  refs.input.value = formData.email || '';
  refs.textarea.value = formData.message || '';
}

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(e) {
  e.preventDefault();

  console.log(formData);

  formData = {};
  refs.input.value = '';
  refs.textarea.value = '';

  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(e) {
  formData.email = refs.input.value;
  formData.message = refs.textarea.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
