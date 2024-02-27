console.log("Hello from main.ts ran on client side");

// const toggle = document.getElementById("burger-button");
const toggle = document.querySelector(".toggle");
const toggle_icon = toggle?.querySelector(".a");
const menu = document.querySelector(".topbar");
const items = document.querySelector(".item");

const ToggleMenu = (e: Event) => {
  e.preventDefault();

  console.log("burger button pressed! fuck yeah!");

  if (menu?.classList.contains("active")) {
    // toggle?.querySelector("a")?.innerHTML = "<span class='icon'><i class='fa-solid fa-bars'></i></span>";
    if (toggle_icon) {
      toggle_icon.innerHTML = "<span class='icon'><i class='fa-solid fa-bars'></i></span>";
    }
  } else {
    if (toggle_icon) {
      toggle_icon.innerHTML = "<span class='icon'><i class='fa-solid fa-times'></i></span>";
    }
  }

  menu?.classList.toggle("active");
};

const burger_button = document.getElementById("burger-button");
console.log(burger_button);


burger_button?.addEventListener("click", ToggleMenu);

