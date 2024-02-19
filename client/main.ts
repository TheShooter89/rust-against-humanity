console.log("Hello from main.ts ran on client side");

const ToggleMenu = (e: Event) => {
  e.preventDefault();

  console.log("burger button pressed! fuck yeah!");

  const topbar_menu = document.getElementById("navbarBasicExample");
  topbar_menu?.classList.toggle("is-active");
};

const burger_button = document.getElementById("topbar-menu");
console.log(burger_button);


burger_button?.addEventListener("click", ToggleMenu);

