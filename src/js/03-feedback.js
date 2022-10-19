const form = document.querySelector('.feedback-form');
const throttle = require('lodash.throttle');
let email;
let message;
const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');

if (localStorage.getItem('feedback-form-state')) {


  const userInfo = JSON.parse(localStorage.getItem('feedback-form-state'));
  emailInput.value = userInfo.email;
  messageInput.value = userInfo.message;
}

form.addEventListener('input', e => {
  const item = e.target;

  if (item.tagName === 'INPUT') {
    email = e.target.value;
  };

  if (item.tagName === 'TEXTAREA') {
    message = e.target.value;
  };

  const throtted = throttle(function (userInfo) {
    localStorage.setItem('feedback-form-state', userInfo);
  }, 500, { leading: false, trailing: true });

  throtted(JSON.stringify({
    email: email,
    message: message,
  }));
});

form.addEventListener('submit', e => {
  e.preventDefault();
  
  emailInput.value = '';
  messageInput.value = '';
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.clear()
})
