function menuCreate() {
  const content = document.getElementById("content");

  const middleTab = document.createElement("button");
  middleTab.textContent = "Menu";

  content.appendChild(middleTab);
}
export { menuCreate };
