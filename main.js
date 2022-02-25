'use strict';

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let open = document.querySelector('#popModal');


// Function that Opens modal form
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden')
}

// Function that Closes the modal form
const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// Open Modal
open.addEventListener('click', openModal);
// Close modal
overlay.addEventListener('click', closeModal)