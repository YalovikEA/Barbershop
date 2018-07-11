var login = document.querySelector('.user-block__link');
var form = document.querySelector('.login-form');
var named = document.getElementById('login-name');
var password = document.getElementById('login-password');
var storage = localStorage.getItem('name');
var map = document.querySelector('.contacts__map');
var modalLogin = document.querySelector('.modal-login');
var modalMap = document.querySelector('.modal-map');
var close = document.querySelector('.modal__close');
var closeLoginClose = document.querySelector('.modal-login__close');
var closeMapClose = document.querySelector('.modal-map__close');

login.addEventListener('click', showLogin);
form.addEventListener('submit', submitForm);
closeLoginClose.addEventListener('click', closeLogin);
window.addEventListener('keydown', closeModal);
map.addEventListener('click', showMap);
closeMapClose.addEventListener('click', closeMap);

function showLogin(EO) {
  EO.preventDefault();
  modalLogin.classList.add('modal-show');  
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
    named.value = 'Введите логин';
  } else {
    localStorage.setItem('name', named.value);
  }
}

function closeLogin(EO) {
  EO.preventDefault();
  modalLogin.classList.remove('modal-show');
}

function showMap(EO) {
  EO.preventDefault();
  modalMap.classList.add('modal-show');
}

function closeMap(EO) {
  EO.preventDefault();
  modalMap.classList.remove('modal-show');
}

function closeModal(EO) {
  if(EO.keyCode == 27) {
    EO.preventDefault();
    modalMap.classList.remove('modal-show');
  }
  
}


localStorage.clear('name')