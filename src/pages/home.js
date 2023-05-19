import cat from "../images/cat.png";

export default function createHome() {
  const contentDiv = document.getElementById("content");
  const pageDiv = document.getElementById("page");

  const homeContainer = document.createElement("div");
  homeContainer.setAttribute("id", "page");
  homeContainer.classList.add("home-tab");
  homeContainer.style.backgroundColor = "black";

  const title = document.createElement("h1");
  title.textContent = "Welcome to the cat cafe!";
  title.style.color = "white";
  title.style.fontSize = "70px";

  const heroImage = document.createElement("img");
  heroImage.src = cat;
  heroImage.style.width = "100%";

  homeContainer.appendChild(title);
  homeContainer.appendChild(heroImage);

  if (pageDiv) contentDiv.removeChild(pageDiv);
  contentDiv.appendChild(homeContainer);
}
