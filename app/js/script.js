'use strict';

const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', () => {
  //   header.classList.toggle('open');

  if (header.classList.contains('open')) {
    // close h menu
    body.classList.remove('noscroll');
    header.classList.remove('open');

    fadeElems.forEach((element) => {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
  } else {
    // open h menu
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElems.forEach((element) => {
      element.classList.add('fade-in');
      element.classList.remove('fade-out');
    });
  }
});