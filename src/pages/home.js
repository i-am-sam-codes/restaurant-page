export default function createHome() {
  const contentDiv = document.getElementById("content");
  const homeContainer = document.createElement("div");

  const title = document.createElement("h1");
  title.textContent = "Welcome to the cat cafe!";

  homeContainer.appendChild(title);
  contentDiv.appendChild(homeContainer);
}
