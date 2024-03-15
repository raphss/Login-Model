import newAccount from './newAccount.js';
import manageAccount from './manageAccount.js';

function createLogin() {
  const loginDiv = document.createElement('div');
  loginDiv.classList.add('loginDiv');

  const form = document.createElement('form');
  form.enctype = 'multipart/form-data';
  form.method = 'POST';

  const emailLabel = document.createElement('label');
  emailLabel.setAttribute('for', 'email');
  emailLabel.textContent = 'User:';

  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.placeholder = 'email address';
  emailInput.required = true;

  const passwordLabel = document.createElement('label');
  passwordLabel.setAttribute('for', 'password');
  passwordLabel.textContent = 'Password:';

  const passwordInput = document.createElement('input');
  passwordInput.type = 'password';
  passwordInput.minLength = 8;
  passwordInput.required = true;

  const recoverPassword = document.createElement('a');
  recoverPassword.textContent = 'Forgot your password?';
  recoverPassword.addEventListener('click', () => {
    manageAccount();
  });

  const registerLink = document.createElement('a');
  registerLink.textContent = 'Register new account';
  registerLink.addEventListener('click', () => {
    newAccount();
  });

  const loginBtn = document.createElement('input');
  loginBtn.classList.add('login-btn', 'btn');
  loginBtn.value = 'Login';
  loginBtn.type = 'submit';

  form.appendChild(emailLabel);
  form.appendChild(document.createElement('br'));
  form.appendChild(emailInput);
  form.appendChild(document.createElement('br'));
  form.appendChild(passwordLabel);
  form.appendChild(document.createElement('br'));
  form.appendChild(passwordInput);
  form.appendChild(document.createElement('br'));
  form.appendChild(recoverPassword);
  form.appendChild(document.createElement('br'));
  form.appendChild(loginBtn);
  form.appendChild(document.createElement('br'));
  form.appendChild(registerLink);

  loginDiv.appendChild(form);

  return loginDiv;
}

function login() {
  const content = document.querySelector('.divContent');
  content.textContent = '';
  content.appendChild(createLogin());
}

export default login;
