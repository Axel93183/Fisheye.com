const body = document.getElementById("body");
const contactModal = document.getElementById("contact_modal");
const form = document.forms.reserve;
const contactButton = document.getElementById("contact_button");

contactButton.setAttribute("aria-label", "Contactez-moi");

const closeCross = document.getElementById("close-cross");

function openModal() {
  contactModal.style.display = "block";

  const modalH2 = document.querySelector(".modal header h2");

  const photographerName = document.querySelector(
    ".photograph-header h2"
  ).textContent;
  const newText = document.createTextNode(photographerName);

  const lineBreak = document.createElement("br");

  modalH2.appendChild(lineBreak);
  modalH2.appendChild(newText);
}

contactButton.addEventListener("click", openModal);

function closeModal() {
  contactModal.style.display = "none";
  body.style.overflow = "initial";
}

closeCross.addEventListener("click", closeModal);
