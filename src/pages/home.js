import cat from "../images/cat.png";

export default function createHome() {
  const contentDiv = document.getElementById("content");

  const homeContainer = document.createElement("div");
  homeContainer.style.backgroundColor = "blue";

  const title = document.createElement("h1");
  title.textContent = "Welcome to the cat cafe!";
  title.style.fontSize = "70px";

  const heroImage = document.createElement("img");
  heroImage.src = cat;
  heroImage.style.width = "100%";

  homeContainer.appendChild(title);
  homeContainer.appendChild(heroImage);
  contentDiv.appendChild(homeContainer);
}
