const navBtn = document.querySelector(".nav__btn");
const navBar = document.querySelector(".nav__bar");
const navList = document.querySelector(".list__container");

navBtn.addEventListener("click", () => {
  if (navList.classList.contains("hide")) {
    navList.classList.remove("hide");
    navBtn.innerHTML = `<img src="imgs/menu-x.svg" alt="pic">`;
  } else {
    navList.classList.add("hide");
    navBtn.innerHTML = `<img src="imgs/menu.svg" alt="pic">`;
  }
});

navBar.addEventListener("mouseleave", () => {
  navList.classList.add("hide");
  navBtn.innerHTML = `<img src="imgs/menu.svg" alt="pic">`;
});
