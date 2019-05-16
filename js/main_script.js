var write_us = document.querySelector(".letter-link");
var popup_letter = document.querySelector(".letter");
var close_letter = popup_letter.querySelector(".close-modal-btn");
var user_name = popup_letter.querySelector("[name=username]");
var form = popup_letter.querySelector("form");
var user_mail = popup_letter.querySelector("[name=usermail]");
var text = popup_letter.querySelector("[name=usertext]");
var is_storage_support = true;
var storage_name = "";
var storage_mail = "";

try {
  storage_name = localStorage.getItem("username");
  storage_mail = localStorage.getItem("usermail");
} catch (error) {
  is_storage_support = false;
}

write_us.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_letter.classList.add("modal-show");

  if (storage_name && storage_mail) {
    user_name.value = storage_name;
    user_mail.value = storage_mail;
    text.focus();
  } else if (!storage_name && storage_mail) {
    user_mail.value = storage_mail;
    user_name.focus();
  } else if (storage_name && !storage_mail) {
    user_mail.focus();
  }
});

close_letter.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_letter.classList.remove("modal-show");
  popup_letter.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {

  if (!user_name.value || !user_mail.value || !text.value) {
    evt.preventDefault();
    popup_letter.classList.remove("modal-error");
    popup_letter.offsetWidth = popup_letter.offsetWidth;
    popup_letter.classList.add("modal-error");
    console.log("Введите имя и адрес");
  } else {
    if (is_storage_support) {
      localStorage.setItem("username", user_name.value);
      localStorage.setItem("usermail", user_mail.value);
    }
    form.submit();
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup_letter.classList.contains("modal-show")) {
      popup_letter.classList.remove("modal-show");
      popup_letter.classList.remove("modal-error");
    }
  }

});

var map_link = document.querySelector(".map-link");
var map = document.querySelector(".map");
var close_map = map.querySelector(".close-modal-btn");

map_link.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.add("modal-show");
});

close_map.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (map.classList.contains("modal-show")) {
      map.classList.remove("modal-show");
    }
  }
});
