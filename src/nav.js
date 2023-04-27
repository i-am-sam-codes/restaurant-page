export default function navBar() {
  const contentDiv = document.getElementById("content");
  const navContainer = document.createElement("div");

  const homeTab = document.createElement("button");
  homeTab.textContent = "Home";
  homeTab.setAttribute("id", "home-tab");
  homeTab.style.backgroundColor = "#FFA500";
  homeTab.style.color = "black";
  homeTab.style.padding = "20px";
  homeTab.addEventListener("click", () => {});

  const menuTab = document.createElement("button");
  menuTab.textContent = "Menu";
  menuTab.setAttribute("id", "main-tab");
  menuTab.style.backgroundColor = "#FFA500";
  menuTab.style.color = "black";
  menuTab.style.padding = "20px";
  menuTab.addEventListener("click", () => {});

  const contactTab = document.createElement("button");
  contactTab.textContent = "Contact";
  contactTab.setAttribute("id", "contact-tab");
  contactTab.style.backgroundColor = "#FFA500";
  contactTab.style.color = "black";
  contactTab.style.padding = "20px";
  contactTab.addEventListener("click", () => {});

  navContainer.appendChild(homeTab);
  navContainer.appendChild(menuTab);
  navContainer.appendChild(contactTab);

  contentDiv.appendChild(navContainer);
}
