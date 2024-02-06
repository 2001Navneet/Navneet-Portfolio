const profile = document.querySelector("#profile");
function toggle() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  profile.classList.toggle("blur");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// sticky navigation
const nav = document.querySelector(".desk-nav");
const hamburgerNav = document.querySelector(".hamburger-nav");
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};
const obserProfile = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});
obserProfile.observe(profile);
