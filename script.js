const profile = document.querySelector("#profile");
function toggle() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  profile.classList.toggle("blur");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
