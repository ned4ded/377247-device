// WRITE US FORM

var link = document.querySelector(".info__contacts .info__btn");

var popup = document.querySelector(".write-us-form");
var close = popup.querySelector(".close-btn");

var email = popup.querySelector("[name=email]");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("write-us-form--active");
  email.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("write-us-form--active");
});

window.addEventListener("keydown", function(event) {
if (event.keyCode === 27) {
  if (popup.classList.contains("write-us-form--active")) {
    popup.classList.remove("write-us-form--active");
    }
  }
});

// MAP

var mapOpen = document.querySelector(".info__map");

var mapPopup = document.querySelector(".info .info__map-popup");
var mapClose = mapPopup.querySelector(".close-btn");

mapOpen.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.add("info__map-popup--active");
});

mapClose.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.remove("info__map-popup--active");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains("info__map-popup--active")) {
      mapPopup.classList.remove("info__map-popup--active");
    }
  }
});
