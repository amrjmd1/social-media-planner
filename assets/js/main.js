"use strict";

const pageNavLinks = document.querySelectorAll(".scrollto");

pageNavLinks.forEach((pageNavLink) => {
  pageNavLink.addEventListener("click", (e) => {
    e.preventDefault();

    var target = pageNavLink.getAttribute("href").replace("#", "");
    document.getElementById(target).scrollIntoView({ behavior: "smooth" });
  });
});

function importHotmart() {
  var imported = document.createElement("script");
  imported.src = "https://static.hotmart.com/checkout/widget.min.js";
  document.head.appendChild(imported);
}
importHotmart();

function openModal() {
  var myModal = new bootstrap.Modal(document.getElementById("staticBackdrop"), {
    keyboard: false,
  });
  myModal.show();
}

// setTimeout(openModal, 2500);
