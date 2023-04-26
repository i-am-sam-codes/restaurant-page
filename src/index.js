import nav from "./nav.js";
import createHome from "./pages/home.js";

function component() {
  const element = document.createElement("div");

  document.addEventListener("DOMContentLoaded", nav);
  document.addEventListener("DOMContentLoaded", createHome);

  return element;
}

document.body.appendChild(component());
