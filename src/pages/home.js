function tabElements() {
  const contentDiv = document.getElementById("content");

  const firstTab = document.createElement("button");
  firstTab.textContent = "Home";

  const middleTab = document.createElement("button");
  middleTab.textContent = "Menu";

  const thirdTab = document.createElement("button");
  thirdTab.textContent = "Contact";

  contentDiv.appendChild(firstTab);
  contentDiv.appendChild(middleTab);
  contentDiv.appendChild(thirdTab);
}
export { tabElements };
