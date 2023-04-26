function createHome() {
  const contentDiv = document.getElementById("content");

  const homeTab = document.createElement("button");
  homeTab.textContent = "Home";

  contentDiv.appendChild(homeTab);
}
export { createHome };
