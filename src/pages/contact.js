import navbar from "../nav";

export default function createContact() {
  const contentDiv = document.getElementById("content");
  const pageDiv = document.getElementById("page");

  const contactContainer = document.createElement("div");
  contactContainer.setAttribute("id", "page");
  const box2 = document.createElement("h1");
  box2.textContent = "CALL BOB";

  contactContainer.appendChild(box2);
  if (pageDiv) contentDiv.removeChild(pageDiv);
  contentDiv.appendChild(contactContainer);
}
