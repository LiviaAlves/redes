// script.js
const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (usernameInput.value === '' || passwordInput.value === '') {
    alert('Por favor preencha os campos de nome de usuário e senha');
  } else {
    form.submit();
  }
});