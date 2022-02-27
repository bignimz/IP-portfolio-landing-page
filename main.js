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





// // Project Card Hover Effect
//  let projectCard = document.querySelectorAll('.project-card');
//  let cardHover = document.querySelectorAll('project-hover');


// //  Function that diplays the hover effect on mouse over
// const showHover = function() {
//     cardHover.classList.remove('hidden');
// }

// const hideHover = function() {
//     cardHover.classList.add('hidden');
// }

// projectCard.addEventListener('mouseover', showHover);
// projectCard.addEventListener('mouseout', hideHover);


// for(let i = 0; i < projectCard.length; i++){

//     projectCard[i].addEventListener('mouseover', showHover);
//     projectCard[i].addEventListener('mouseout', hideHover);
// }

