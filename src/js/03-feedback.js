import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('[type="email"]');
const messageInput = document.querySelector('.feedback-form textarea');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onDateInput, 500));

const dataInput = {};

populateData();

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log(dataInput);
  // console.log({email: emailInput.value, message: messageInput.value})
  // console.log(evt.currentTarget.elements);

  evt.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY);
}

function onDateInput(evt) {
  dataInput[evt.target.name] = evt.target.value;
  // console.log(dataInput);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataInput));
}

function populateData() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  console.log(savedData);

  if (savedData) {
    const parsedData = JSON.parse(savedData);

    emailInput.value = parsedData.email;
    messageInput.value = parsedData.message;

    dataInput.email = parsedData.email;
    dataInput.message = parsedData.message;
    // console.log(dataInput)
  }
}
