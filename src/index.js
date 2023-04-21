import title from "./module.js";
import { firstTab, middleTab, thirdTab } from "./pages/home.js";

function component() {
  const element = document.createElement("div");

  element.appendChild(firstTab);
  element.appendChild(middleTab);
  element.appendChild(thirdTab);

  element.appendChild(title);

  return element;
}

document.body.appendChild(component());
