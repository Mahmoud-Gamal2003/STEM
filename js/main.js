let lungSwitch = document.querySelector("header .main-menu .lung .lung-switch");
let lungMenu = document.querySelector("header .main-menu .lung .lung-menu");
let scrollTop = document.querySelector(".scroll-to-top");
let study = document.querySelector(".study");
// let slider = document.querySelector(".photo .slider");
let sliderLis = document.querySelectorAll(".photo .slider li");
let sliderBox = document.querySelectorAll(".photo .boxs .box");

lungSwitch.onclick = () => {
  lungMenu.classList.toggle("main-menu-cliked");
};

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

  if (window.scrollY >= 600) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
};

sliderLis.forEach((li) => {
  li.addEventListener("click", (e) => {
    sliderLis.forEach((li) => {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    if (e.currentTarget.dataset.type === "all") {
      sliderBox.forEach((box) => {
        box.style.display = "block";
      });
    }

    if (e.currentTarget.dataset.type === "school") {
      sliderBox.forEach((box) => {
        box.style.display = "none";
        if (
          box.dataset.work === "From STEM School" ||
          box.dataset.work === "من مدرسة استم"
        ) {
          box.style.display = "block";
        }
      });
    }

    if (e.currentTarget.dataset.type === "capstone") {
      sliderBox.forEach((box) => {
        box.style.display = "none";
        if (
          box.dataset.work === "From Capstone Presentation" ||
          box.dataset.work === "من عرض الكابستون"
        ) {
          box.style.display = "block";
        }
      });
    }

    if (e.currentTarget.dataset.type === "Presentations") {
      sliderBox.forEach((box) => {
        box.style.display = "none";
        if (
          box.dataset.work === "From Our Presentations" ||
          box.dataset.work === "من عروضنا"
        ) {
          box.style.display = "block";
        }
      });
    }
  });
});
