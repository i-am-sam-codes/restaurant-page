import createContact from "./pages/contact";
import createHome from "./pages/home";
import menuCreate from "./pages/menu";

export default function navBar() {
  const contentDiv = document.getElementById("content");

  const navContainer = document.createElement("div");
  navContainer.classList.add("nav");

  const homeTab = document.createElement("button");
  homeTab.textContent = "Home";
  homeTab.setAttribute("id", "home-tab");
  homeTab.style.backgroundColor = "#ada7ff";
  homeTab.style.color = "black";
  homeTab.style.padding = "20px";
  homeTab.addEventListener("click", createHome);

  const menuTab = document.createElement("button");
  menuTab.textContent = "Menu";
  menuTab.setAttribute("id", "menu-tab");
  menuTab.style.backgroundColor = "#ada7ff";
  menuTab.style.color = "black";
  menuTab.style.padding = "20px";
  menuTab.addEventListener("click", menuCreate);

  const contactTab = document.createElement("button");
  contactTab.textContent = "Contact";
  contactTab.setAttribute("id", "contact-tab");
  contactTab.style.backgroundColor = "#ada7ff";
  contactTab.style.color = "black";
  contactTab.style.padding = "20px";
  contactTab.addEventListener("click", createContact);

  navContainer.appendChild(homeTab);
  navContainer.appendChild(menuTab);
  navContainer.appendChild(contactTab);

  contentDiv.appendChild(navContainer);
}
