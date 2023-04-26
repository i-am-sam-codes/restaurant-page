import nav from "./nav.js";

function component() {
  const element = document.createElement("div");

  document.addEventListener("DOMContentLoaded", nav);

  return element;
}

document.body.appendChild(component());
