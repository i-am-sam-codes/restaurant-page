export default function menuCreate() {
  const content = document.getElementById("content");
  const pageDiv = document.getElementById("page");

  const container = document.createElement("div");
  container.setAttribute("id", "page");
  const box = document.createElement("h1");
  box.textContent = "FOOD #1, FOOD #2, FOOD #3";

  container.appendChild(box);
  if (pageDiv) content.removeChild(pageDiv);
  content.appendChild(container);
}
