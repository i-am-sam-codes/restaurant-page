import title from "./module.js";
import { createHome } from "./pages/home.js";
import { menuCreate } from "./pages/menu.js";
import { createContact } from "./pages/contact.js";

function component() {
  const element = document.createElement("div");

  document.addEventListener("DOMContentLoaded", createHome);
  document.addEventListener("DOMContentLoaded", menuCreate);
  document.addEventListener("DOMContentLoaded", createContact);

  element.appendChild(title);

  return element;
}

document.body.appendChild(component());
