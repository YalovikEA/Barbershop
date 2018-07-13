var map = document.querySelector('.contacts__map');
var modalMap = document.querySelector('.modal-map');
var modalMapClose = document.querySelector('.modal-map__close');
var modalOverlay = document.querySelector('.modal-overlay');

map.addEventListener('click', showMap);
modalMapClose.addEventListener('click', closeMap);
window.addEventListener('keydown', closeMapEscape);

function showMap(EO) {
  EO.preventDefault();
  modalMap.classList.add('modal-show');
  modalOverlay.classList.add('modal-overlay--show');
}

function closeMap(EO) {
  EO.preventDefault();
  modalMap.classList.remove('modal-show');
  modalOverlay.classList.remove('modal-overlay--show');
  map.focus();
}

function closeMapEscape(EO) {
  if(EO.keyCode === 27) {  

    if(modalMap.classList.contains('modal-show')) {
      EO.preventDefault();
      modalMap.classList.remove('modal-show');
      modalOverlay.classList.remove('modal-overlay--show');
      map.focus();
    }
  }
}