let menuToggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
menuToggle.onclick = function () {
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
};

function show(anything) {
  document.querySelector(".dropdown-name").value = anything;
}

let dropdown = document.querySelector(".dropdown-menu");

dropdown.onclick = function () {
  dropdown.classList.toggle("active");
};
