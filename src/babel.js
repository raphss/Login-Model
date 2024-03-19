import './style.css';
import login from './login.js';
import newAccount from './newAccount.js';
import manageAccount from './manageAccount.js';
import deleteAccount from './deleteAccount.js';
import aboutUsInfo from './aboutUsInfo.js';
import ourProductsInfo from './ourProductsInfo.js';

function navbar() {
  const nav = document.createElement('nav');
  nav.classList.add('navbar');

  const navItems = document.createElement('ul');

  const loginItem = document.createElement('li');
  loginItem.classList.add('list-items');
  const loginLink = document.createElement('a');
  loginLink.classList.add('navbar-hlinks');
  loginLink.textContent = 'Login';
  loginLink.addEventListener('click', () => {
    login();
  });

  const registerItem = document.createElement('li');
  registerItem.classList.add('list-items');
  const registerLink = document.createElement('a');
  registerLink.classList.add('navbar-hlinks');
  registerLink.textContent = 'Register';

  const registerSubmenu = document.createElement('ul');
  registerSubmenu.classList.add('register-submenu', 'submenu');

  const createAnAccount = document.createElement('li');
  const newAccountLink = document.createElement('a');
  newAccountLink.textContent = 'New User';
  newAccountLink.addEventListener('click', () => {
    newAccount();
  });
  createAnAccount.appendChild(newAccountLink);

  const editAccount = document.createElement('li');
  const editAccountLink = document.createElement('a');
  editAccountLink.textContent = 'Edit Account';
  editAccountLink.addEventListener('click', () => {
    manageAccount();
  });
  editAccount.appendChild(editAccountLink);

  const deleteAccountNav = document.createElement('li');
  const deleteAccountLink = document.createElement('a');
  deleteAccountLink.textContent = 'Delete Account';
  deleteAccountLink.addEventListener('click', () => {
    deleteAccount();
  });
  deleteAccountNav.appendChild(deleteAccountLink);

  registerSubmenu.appendChild(createAnAccount);
  registerSubmenu.appendChild(editAccount);
  registerSubmenu.appendChild(deleteAccountNav);

  const aboutItem = document.createElement('li');
  aboutItem.classList.add('list-items');
  const aboutLink = document.createElement('a');
  aboutLink.classList.add('navbar-hlinks');
  aboutLink.textContent = 'About';

  const aboutSubmenu = document.createElement('ul');
  aboutSubmenu.classList.add('about-submenu', 'submenu');

  const aboutUs = document.createElement('li');
  const aboutUsLink = document.createElement('a');
  aboutUsLink.textContent = 'About Us';
  aboutUsLink.addEventListener('click', () => {
    aboutUsInfo();
  });
  aboutUs.appendChild(aboutUsLink);

  const ourProducts = document.createElement('li');
  const productsLink = document.createElement('a');
  productsLink.textContent = 'Our Products';
  productsLink.addEventListener('click', () => {
    ourProductsInfo();
  });
  ourProducts.appendChild(productsLink);

  aboutSubmenu.appendChild(aboutUs);
  aboutSubmenu.appendChild(ourProducts);

  loginItem.appendChild(loginLink);
  registerItem.appendChild(registerLink);
  registerItem.appendChild(registerSubmenu);
  aboutItem.appendChild(aboutLink);
  aboutItem.appendChild(aboutSubmenu);

  navItems.appendChild(loginItem);
  navItems.appendChild(registerItem);
  navItems.appendChild(aboutItem);

  nav.appendChild(navItems);

  return nav;
}

function component() {
  const header = document.createElement('header');
  header.appendChild(navbar());

  const divContent = document.createElement('div');
  divContent.classList.add('divContent');

  const footer = document.createElement('div');
  footer.classList.add('footer');

  const copy = document.createElement('p');
  copy.innerHTML = `Copyright &copy; ${new Date().getFullYear()} Raphael Vilete`;

  footer.appendChild(copy);

  return {
    header,
    divContent,
    footer
  };
}

const components = component();

document.body.appendChild(components.header);
document.body.appendChild(components.divContent);
document.body.appendChild(components.footer);
login();
