import title from "./module.js";
import { tabElements } from "./pages/home.js";

function component() {
  const element = document.createElement("div");

  document.addEventListener("DOMContentLoaded", tabElements);

  element.appendChild(title);

  return element;
}

document.body.appendChild(component());
