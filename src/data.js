/* eslint-disable import/no-extraneous-dependencies */
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  deleteUser,
} from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAAuciH9fD4-roTQhtgbmVe4wbRMgL0rKI',
  authDomain: 'login-model-91221.firebaseapp.com',
  projectId: 'login-model-91221',
  storageBucket: 'login-model-91221.appspot.com',
  messagingSenderId: '536606575941',
  appId: '1:536606575941:web:2bad8cb647a9f7e530422c',
  measurementId: 'G-ESFLDK5HB0',
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const auth = getAuth(firebase);
const database = getDatabase(firebase);

function register() {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const checkPassword = document.getElementById('check-password').value;

    if (
      !validateRequiredFields(fullName, email, password, checkPassword) ||
      !validateEmail(email) ||
      !validatePasswordLength(password) ||
      !validatePasswordMatch(password, checkPassword)
    ) {
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;

        const databaseRef = ref(database, `users/${user.uid}`);

        const userData = {
          fullName,
          email,
        };

        set(databaseRef, userData)
          .then(() => {
            console.log('User data saved successfully');
            alert('Account created successfully');
            resolve();
          })
          .catch((error) => {
            console.error('Error saving user data: ', error);
            reject(error);
          });
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          alert('This email is already registered');
        } else {
          alert(error.message);
        }
        console.error('Error creating user: ', error);
      });
  });
}

function loginAcess() {
  return new Promise((resolve, reject) => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
      alert('All fields are required');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('User logged in successfully');
        alert('Login successful');
        resolve();
      })
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          alert('No user found with this email');
        } else if (error.code === 'auth/invalid-email') {
          alert('Invalid email');
        } else if (error.code === 'auth/invalid-credential') {
          alert('Invalid login credentials. Check your email and password');
        } else {
          alert(error.message);
        }
        console.error('Error logging in: ', error);
        reject(error);
      });
  });
}

function sendResetPasswordEmail() {
  const email = document.getElementById('email').value;

  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert('Password reset email sent!');
    })
    .catch((error) => {
      console.error('Error sending password reset email: ', error);
      if (error.code === 'auth/user-not-found') {
        alert('No user found with this email');
      } else if (error.code === 'auth/missing-email') {
        alert('Empty email field');
      } else {
        alert(error.message);
      }
    });
}

function removeUser() {
  return new Promise((resolve, reject) => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const checkPassword = document.getElementById('check-password').value;

    if (!email || !password) {
      alert('All fields are required');
      return;
    }

    if (!validatePasswordMatch(password, checkPassword)) {
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        deleteUser(userCredential.user)
          .then(() => {
            console.log('User deleted successfully');
            alert('Account deleted successfully');
            resolve();
          })
          .catch((error) => {
            console.error('Error deleting user: ', error);
            alert(error.message);
          });
      })
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          alert('No user found with this email');
        } else if (error.code === 'auth/invalid-email') {
          alert('Invalid email');
        } else if (error.code === 'auth/invalid-credential') {
          alert(
            // eslint-disable-next-line prettier/prettier
            'Invalid login credentials. User not found or password is incorrect'
          );
        } else {
          alert(error.message);
        }
        console.error('Account not deleted', error);
        reject(error);
      });
  });
}

function validateRequiredFields(fullName, email, password, checkPassword) {
  if (!fullName || !email || !password || !checkPassword) {
    alert('All fields are required');
    return false;
  }
  return true;
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email');
    return false;
  }
  return true;
}

function validatePasswordLength(password) {
  if (password.length < 8) {
    alert('Password must be at least 8 characters long');
    return false;
  }
  return true;
}

function validatePasswordMatch(password, checkPassword) {
  if (password !== checkPassword) {
    alert('Passwords do not match');
    return false;
  }
  return true;
}

export { register, loginAcess, sendResetPasswordEmail, removeUser };
