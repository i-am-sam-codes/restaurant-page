function createContact() {
  const content = document.getElementById("content");

  const contactTab = document.createElement("button");
  contactTab.textContent = "Contact";

  content.appendChild(contactTab);
}

export { createContact };
