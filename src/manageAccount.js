import login from './login.js';

function createManager() {
  const managerDiv = document.createElement('div');
  managerDiv.classList.add('managerDiv');

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
  passwordLabel.textContent = 'Password or Backup Code:';

  const passwordInput = document.createElement('input');
  passwordInput.type = 'password';
  passwordInput.minLength = 8;
  passwordInput.required = true;

  const newEmailLabel = document.createElement('label');
  newEmailLabel.setAttribute('for', 'email');
  newEmailLabel.textContent = 'New Email:';

  const newEmailInput = document.createElement('input');
  newEmailInput.type = 'email';
  newEmailInput.required = false;
  newEmailInput.placeholder = 'not required, optional';

  const newPasswordLabel = document.createElement('label');
  newPasswordLabel.setAttribute('for', 'password');
  newPasswordLabel.textContent = 'New Password:';

  const newPasswordInput = document.createElement('input');
  newPasswordInput.type = 'password';
  newPasswordInput.minLength = 8;
  newPasswordInput.required = true;

  const checkNewPasswordLabel = document.createElement('label');
  checkNewPasswordLabel.setAttribute('for', 'password');
  checkNewPasswordLabel.textContent = 'Confirm New Password:';

  const checkNewPasswordInput = document.createElement('input');
  checkNewPasswordInput.type = 'password';
  checkNewPasswordInput.minLength = 8;
  checkNewPasswordInput.required = true;

  const backToLogin = document.createElement('a');
  backToLogin.textContent = 'Back to Login';
  backToLogin.addEventListener('click', () => {
    login();
  });

  const updateBtn = document.createElement('input');
  updateBtn.classList.add('update-btn', 'btn');
  updateBtn.value = 'Update';
  updateBtn.type = 'submit';

  form.appendChild(emailLabel);
  form.appendChild(document.createElement('br'));
  form.appendChild(emailInput);
  form.appendChild(document.createElement('br'));
  form.appendChild(passwordLabel);
  form.appendChild(document.createElement('br'));
  form.appendChild(passwordInput);
  form.appendChild(document.createElement('br'));
  form.appendChild(newEmailLabel);
  form.appendChild(document.createElement('br'));
  form.appendChild(newEmailInput);
  form.appendChild(document.createElement('br'));
  form.appendChild(newPasswordLabel);
  form.appendChild(document.createElement('br'));
  form.appendChild(newPasswordInput);
  form.appendChild(document.createElement('br'));
  form.appendChild(updateBtn);
  form.appendChild(document.createElement('br'));
  form.appendChild(backToLogin);

  managerDiv.appendChild(form);

  return managerDiv;
}

function manageAccount() {
  const content = document.querySelector('.divContent');
  content.textContent = '';
  content.appendChild(createManager());
}

export default manageAccount;
