'use strict';

var contactsSellers = document.querySelector('.contacts-sellers');
var contactsForm = document.querySelector('.contacts-form');
var contactsElement = document.querySelector('.contacts');

var isBottomReached = function() {
  console.log(contactsElement);
  var contactsPosition = contactsElement.getBoundingClientRect();
  return contactsPosition.top - window.innerHeight + 100 <= 0;
};


var setScrollEnabled = function() {
  window.addEventListener('scroll', function(evt) {
    if (isBottomReached()) {
      contactsSellers.classList.add("animated");
      contactsSellers.classList.add("bounceInLeft");
      contactsForm.classList.add("animated");
      contactsForm.classList.add("bounceInRight");
    }
  });
};

setScrollEnabled();
