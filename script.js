'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const btnsCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');


//Function to close the modal window
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//Function to open the modal window
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal); //Here, openModal is a callback function. Execute only when 1st function is executed.
}

btnsCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//Handling a Keypress Event
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
