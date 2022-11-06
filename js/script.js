"use strict";
console.log("Hello world");
let tab = function () {
  let tabNav = document.querySelectorAll(".tabs__item");
  let tabContent = document.querySelectorAll(".tabs__block");
  let tabName;

  tabNav.forEach((item) => {
    item.addEventListener("click", selectTabNav);
  });
  function selectTabNav() {
    tabNav.forEach((item) => {
      item.classList.remove("is-active");
    });
    this.classList.add("is-active");
    tabName = this.getAttribute("data-tab-name");
    selectTabContent(tabName);
  }
  function selectTabContent(tabName) {
    tabContent.forEach((item) => {
      item.classList.contains(tabName)
        ? item.classList.add("is-active")
        : item.classList.remove("is-active");
    });
  }
};

tab();

const buttonAdd = document.querySelector(".button__add");
buttonAdd.addEventListener("click", addCharacter);
function addCharacter() {
  const form = document.getElementById("form");
  const formData = new FormData(form);
  const character = formData.get("character");
  console.log(character);
  const listElement = document.querySelector(".tabs-character__list");
  const newElement = document.createElement("li");
  newElement.className = "tabs-character__item";
  newElement.innerHTML = `${character}`;
  listElement.append(newElement);
  return false;
}
const buttonAddWoman = document.querySelector(".button__add_woman");
buttonAddWoman.addEventListener("click", addCharacterWoman);
function addCharacterWoman() {
  const form2 = document.getElementById("form-2");
  const formData = new FormData(form2);
  const character = formData.get("character");
  console.log(character);
  const listElement = document.querySelector(".list__women");
  const newElement2 = document.createElement("li");
  newElement2.className = "tabs-character__item";
  newElement2.innerHTML = `${character}`;
  listElement.append(newElement2);
  return false;
}
