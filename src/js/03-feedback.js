import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const saveInLocalStorage = throttle(() => {
  const feedbackState = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackState));
}, 500);

const loadLocalStorage = () => {
  const loadValuesLocalStorage = localStorage.getItem('feedback-form-state');

  if (loadValuesLocalStorage) {
    const valuesLocalStorage = JSON.parse(loadValuesLocalStorage);
    emailInput.value = valuesLocalStorage.email;
    messageInput.value = valuesLocalStorage.message;
  }
};

emailInput.addEventListener('input', saveInLocalStorage);
messageInput.addEventListener('input', saveInLocalStorage);

document.addEventListener('DOMContentLoaded', loadLocalStorage);

const handleFormSubmit = event => {
  event.preventDefault();

  console.log('Form data submitted:', {
    email: emailInput.value,
    message: messageInput.value,
  });

  localStorage.removeItem('feedback-form-state');

  emailInput.value = '';
  messageInput.value = '';
};

form.addEventListener('submit', handleFormSubmit);
