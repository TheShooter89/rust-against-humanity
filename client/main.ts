console.log("Hello from main.ts ran on client side");

// const toggle = document.getElementById("burger-button");
const toggle = document.querySelector(".toggle");
const toggle_icon = toggle?.querySelector("a");
const menu = document.querySelector(".topbar");
const items = document.querySelector(".item");
const profile_menu = document.querySelector(".topbar-menu");
const profile_menu_title = document.querySelector(".topbar-menu-title");
const profile_menu_items = document.querySelector(".topbar-menu-item");

const ToggleMenu = (e: Event) => {
  profile_menu_title?.addEventListener("click", ToggleProfileMenu);
  menu?.classList.toggle("active");

  if (menu?.classList.contains("active")) {
    if (toggle_icon) {
      toggle_icon.innerHTML = "<a href='#'><span class='icon'><i class='fa-solid fa-times'></i></span></a>";
    }
  } else {
    if (toggle_icon) {
      toggle_icon.innerHTML = "<a href='#'><span class='icon'><i class='fa-solid fa-bars'></i></span></a>";
    }
  }
};

const ToggleProfileMenu = (e: Event) => {
  profile_menu?.classList.toggle("topbar-menu-active");
  profile_menu_title?.classList.toggle("topbar-menu-title-active");
};

const burger_button = document.getElementById("burger-button");
console.log(burger_button);


burger_button?.addEventListener("click", ToggleMenu);
profile_menu_title?.addEventListener("click", ToggleProfileMenu);
