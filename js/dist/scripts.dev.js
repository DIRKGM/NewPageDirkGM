"use strict";

/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 
window.addEventListener('DOMContentLoaded', function (event) {
  // Cookie Altrt
  function cookie() {
    alert("This website does not store any data about you. Only technically necessary cookies are used.  These are necessary for the website to function at all.");
  }

  cookie(); // Navbar shrink function

  var navbarShrink = function navbarShrink() {
    var navbarCollapsible = document.body.querySelector('#mainNav');

    if (!navbarCollapsible) {
      return;
    }

    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink');
    } else {
      navbarCollapsible.classList.add('navbar-shrink');
    }
  }; // Shrink the navbar 


  navbarShrink(); // Shrink the navbar when page is scrolled

  document.addEventListener('scroll', navbarShrink); // Activate Bootstrap scrollspy on the main nav element

  var mainNav = document.body.querySelector('#mainNav');

  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      offset: 74
    });
  }

  ; // Collapse responsive navbar when toggler is visible

  var navbarToggler = document.body.querySelector('.navbar-toggler');
  var responsiveNavItems = [].slice.call(document.querySelectorAll('#navbarResponsive .nav-link'));
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', function () {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });
});