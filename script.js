"use strict";

window.addEventListener("load", sidenLoades);

function sidenLoades() {
  console.log("tjek om lortet virker");
  displayDate();
}

function displayDate() {
  let date = new Date();
  date = date.toString().split(" ");
  console.log(date);
  document.querySelector("#date").innerHTML = date[2] + " " + date[1] + " " + date[3];
}

function hoverSwitch() {
  const links = document.querySelectorAll(".a_tag_projekter");
  links.forEach((link) => {
    link.addEventListener("mouseenter", (e) => {
      document.querySelector(".projekt_img").src = e.target.dataset.image;
      console.log(e.target.dataset.image);
    });
  });
}

hoverSwitch();
