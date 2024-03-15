import login from './login.js';

function createRegister() {
  const registerDiv = document.createElement('div');
  registerDiv.classList.add('registerDiv');

  const form = document.createElement('form');
  form.enctype = 'multipart/form-data';
  form.method = 'POST';

  const nameLabel = document.createElement('label');
  nameLabel.setAttribute('for', 'username');
  nameLabel.textContent = 'Full Name:';

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.required = true;

  const emailLabel = document.createElement('label');
  emailLabel.setAttribute('for', 'email');
  emailLabel.textContent = 'Email:';

  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.required = true;

  const passwordLabel = document.createElement('label');
  passwordLabel.setAttribute('for', 'password');
  passwordLabel.textContent = 'Password:';

  const passwordInput = document.createElement('input');
  passwordInput.type = 'password';
  passwordInput.minLength = 8;
  passwordInput.required = true;

  const checkPasswordLabel = document.createElement('label');
  checkPasswordLabel.setAttribute('for', 'password');
  checkPasswordLabel.textContent = 'Confirm Password:';

  const checkPasswordInput = document.createElement('input');
  checkPasswordInput.type = 'password';
  checkPasswordInput.minLength = 8;
  checkPasswordInput.required = true;

  const backToLogin = document.createElement('a');
  backToLogin.textContent = 'Back to Login';
  backToLogin.addEventListener('click', () => {
    login();
  });

  const registerBtn = document.createElement('input');
  registerBtn.classList.add('register-btn', 'btn');
  registerBtn.value = 'Register';
  registerBtn.type = 'submit';

  form.appendChild(nameLabel);
  form.appendChild(document.createElement('br'));
  form.appendChild(nameInput);
  form.appendChild(document.createElement('br'));
  form.appendChild(emailLabel);
  form.appendChild(document.createElement('br'));
  form.appendChild(emailInput);
  form.appendChild(document.createElement('br'));
  form.appendChild(passwordLabel);
  form.appendChild(document.createElement('br'));
  form.appendChild(passwordInput);
  form.appendChild(document.createElement('br'));
  form.appendChild(checkPasswordLabel);
  form.appendChild(document.createElement('br'));
  form.appendChild(checkPasswordInput);
  form.appendChild(document.createElement('br'));
  form.appendChild(registerBtn);
  form.appendChild(document.createElement('br'));
  form.appendChild(backToLogin);

  registerDiv.appendChild(form);

  return registerDiv;
}

function newAccount() {
  const content = document.querySelector('.divContent');
  content.textContent = '';
  content.appendChild(createRegister());
}

export default newAccount;
