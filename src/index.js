import nav from "./nav.js";
import createHome from "./pages/home.js";
import menuCreate from "./pages/menu.js";

function component() {
  const contentDiv = document.getElementById("content");
  const element = document.createElement("div");
  // element.setAttribute("id", "page");
  element.appendChild(createHome());
  contentDiv.appendChild(element);
}

document.body.appendChild(nav(), component());
