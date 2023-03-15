"use strict";

/*---------**********************************************----------*/
/*---------* CHECK INPUT EMAIL TO DISPLAY PERSONAL INFO *----------*/
/*---------**********************************************--------- */
const personalInfo = document.querySelector(".hidden-personal-info");
const emailCheckForm = document.querySelector(".email-check");
const emailHelp = document.getElementById("emailHelp");
const btnEmail = document.querySelector(".btn--email");

const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

btnEmail.addEventListener("click", function () {
  const inputEmail = document.getElementById("InputEmail1").value;
  if (!inputEmail) {
    emailHelp.textContent = "Có vẻ như anh/chị chưa nhập email!";
  } else if (inputEmail.match(regex)) {
    console.log("ahoj");
    emailCheckForm.classList.add("d-none");
    personalInfo.classList.remove("d-none");
  } else {
    emailHelp.textContent = "Email không hợp lệ, vui lòng thử lại.";
  }
});

/*---------***********************************************----------*/
/*---------* MOUSE OVER TITLE TO SHOW "VIEW MORE" BUTTON *----------*/
/*---------***********************************************--------- */
const cardTitle = document.querySelectorAll(".card-title");
const hiddenViewButton = document.querySelectorAll(".hidden-view-button");
const cardDetails = document.querySelectorAll(".card-details");

for (let i = 0; i < cardTitle.length; i++) {
  cardTitle[i].addEventListener("mouseover", function () {
    console.log("touched!");
    hiddenViewButton[i].classList.remove("d-none");
  });
  cardTitle[i].addEventListener("mouseleave", function () {
    console.log("left already?");
    hiddenViewButton[i].classList.add("d-none");
  });
  cardTitle[i].addEventListener("click", function () {
    console.log("clicked!");
    cardDetails[i].classList.toggle("d-none");
    if (cardDetails[i].classList.contains("d-none")) {
      hiddenViewButton[i].innerHTML = "<p>&#9660; View more</p>";
    } else {
      hiddenViewButton[i].innerHTML = "<p>&#9650; View less</p>";
    }
  });
}
