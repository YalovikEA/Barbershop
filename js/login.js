var login = document.querySelector('.user-block__link');
var modalLogin = document.querySelector('.modal-login');
var modalLoginClose = document.querySelector('.modal-login__close');
var form = document.querySelector('.login-form');
var named = document.getElementById('login-name');
var password = document.getElementById('login-password');
var storage = localStorage.getItem('name');
var modalOverlay = document.querySelector('.modal-overlay');

login.addEventListener('click', showLogin);
form.addEventListener('submit', submitForm);
modalLoginClose.addEventListener('click', closeLogin);
window.addEventListener('keydown', closeLoginEscape);


function showLogin(EO) {
  if(EO.preventDefault) 
    EO.preventDefault(); 
  else 
    EO.returnValue = false;

  modalLogin.classList.add('modal-show');  
  modalOverlay.classList.add('modal-overlay--show')

  if (storage) {
    named.value = storage;
    password.focus();
  } else {
    named.focus();
  }
}

function submitForm(EO) {
  if(!named.value || !password.value) {
    EO.preventDefault();
    modalLogin.classList.remove('modal-error');
    modalLogin.offsetWidth = modalLogin.offsetWidth;
    modalLogin.classList.add('modal-error');
  } else {
    localStorage.setItem('name', named.value);
  }
}

function closeLogin(EO) {
  EO.preventDefault();
  modalLogin.classList.remove('modal-show');  
  modalOverlay.classList.remove('modal-overlay--show');
  modalLogin.classList.remove('modal-error');
  login.focus();
}

function closeLoginEscape(EO) {
  if(EO.keyCode === 27) {  

    if(modalLogin.classList.contains('modal-show')) {
      EO.preventDefault();
      modalLogin.classList.remove('modal-show');
      modalOverlay.classList.remove('modal-overlay--show');
      modalLogin.classList.remove('modal-error');
      login.focus();
    }
  }
}

