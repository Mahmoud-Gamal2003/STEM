let lungSwitch = document.querySelector("header .main-menu .lung .lung-switch");
let lungMenu = document.querySelector("header .main-menu .lung .lung-menu");

// let otherLinks = document.querySelector("header .main-menu .other-links");
// let megaMenu = document.querySelector("header .mega-menu");

let scrollTop = document.querySelector(".scroll-to-top");
let study = document.querySelector(".study")

// let ourSkills = document.querySelector(".our-skills");
// let ourSkillsSpans = document.querySelectorAll(".our-skills .skills .skill .the-progress>span");


lungSwitch.onclick = () => {
  lungMenu.classList.toggle("main-menu-cliked");
  // megaMenu.classList.remove("mega-menu-onclik");
}



// otherLinks.onclick = () => {
//   megaMenu.classList.toggle("mega-menu-onclik");
//   lungMenu.classList.remove("main-menu-cliked");
// }

scrollTop.onclick = () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

window.onscroll = () => {
  if (window.scrollY >= study.offsetTop) {
    lungMenu.classList.remove("main-menu-cliked");
  }
  // if (window.scrollY >= study.offsetTop) {
  //   megaMenu.classList.remove("mega-menu-onclik");
  // }

  if (window.scrollY >= 600) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }

  // if (window.scrollY >= ourSkills.offsetTop - 300) {
  //   ourSkillsSpans.forEach((ourSkillsSpans) => {
  //     ourSkillsSpans.style.width = ourSkillsSpans.getAttribute("data-width");
  //   });
  // }
};