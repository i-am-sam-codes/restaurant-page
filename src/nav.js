export default function navBar() {
  const contentDiv = document.getElementById("content");

  const homeTab = document.createElement("button");
  homeTab.textContent = "Home";
  homeTab.classList.add("home");
  homeTab.style.backgroundColor = "#FFA500";
  homeTab.style.color = "black";
  homeTab.style.padding = "20px";
  homeTab.addEventListener("click", () => {
    alert("peepeepoopoo");
  });

  const menuTab = document.createElement("button");
  menuTab.textContent = "Menu";
  menuTab.style.backgroundColor = "#FFA500";
  menuTab.style.color = "black";
  menuTab.style.padding = "20px";
  menuTab.addEventListener("click", () => {
    alert("wtf");
  });

  const contactTab = document.createElement("button");
  contactTab.textContent = "Contact";
  contactTab.style.backgroundColor = "#FFA500";
  contactTab.style.color = "black";
  contactTab.style.padding = "20px";
  contactTab.addEventListener("click", () => {
    alert("yoooo");
  });

  contentDiv.appendChild(homeTab);
  contentDiv.appendChild(menuTab);
  contentDiv.appendChild(contactTab);
}
