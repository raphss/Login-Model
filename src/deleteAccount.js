import login from './login.js';

function createDelete() {
  const deleteDiv = document.createElement('div');
  deleteDiv.classList.add('deleteDiv');

  const form = document.createElement('form');
  form.enctype = 'multipart/form-data';
  form.method = 'POST';

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

  const confirmPasswordLabel = document.createElement('label');
  confirmPasswordLabel.setAttribute('for', 'password');
  confirmPasswordLabel.textContent = 'Confirm Password:';

  const confirmPasswordInput = document.createElement('input');
  confirmPasswordInput.type = 'password';
  confirmPasswordInput.minLength = 8;
  confirmPasswordInput.required = true;

  const backToLogin = document.createElement('a');
  backToLogin.textContent = 'Back to Login';
  backToLogin.addEventListener('click', () => {
    login();
  });

  const deleteBtn = document.createElement('input');
  deleteBtn.classList.add('delete-btn', 'btn');
  deleteBtn.value = 'Delete';
  deleteBtn.type = 'submit';

  form.appendChild(emailLabel);
  form.appendChild(document.createElement('br'));
  form.appendChild(emailInput);
  form.appendChild(document.createElement('br'));
  form.appendChild(passwordLabel);
  form.appendChild(document.createElement('br'));
  form.appendChild(passwordInput);
  form.appendChild(document.createElement('br'));
  form.appendChild(confirmPasswordLabel);
  form.appendChild(document.createElement('br'));
  form.appendChild(confirmPasswordInput);
  form.appendChild(document.createElement('br'));
  form.appendChild(deleteBtn);
  form.appendChild(document.createElement('br'));
  form.appendChild(backToLogin);

  deleteDiv.appendChild(form);

  return deleteDiv;
}

function deleteAccount() {
  const content = document.querySelector('.divContent');
  content.textContent = '';
  content.appendChild(createDelete());
}

export default deleteAccount;
