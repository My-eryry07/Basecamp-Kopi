// toggle class active
const navbarNav = document.querySelector(".navbar_nav");
// ketika hambrg menu di click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// toggle class active for search from
const searchfrom = document.querySelector(".search-from");
const searchbox = document.querySelector("#search-box");

document.querySelector("#search-butom").onclick = (e) => {
  searchfrom.classList.toggle("active");
  searchbox.focus();
  e.preventDefault();
};

// klik di luar selement
const hamburger = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-butom");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchfrom.contains(e.target)) {
    searchfrom.classList.remove("active");
  }
});
