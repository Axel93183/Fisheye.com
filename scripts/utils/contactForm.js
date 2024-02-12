const body = document.getElementById("body");
const contactModal = document.getElementById("contact_modal");
const form = document.forms.reserve;
const contactButton = document.getElementById("contact_button");

contactButton.setAttribute("aria-label", "Contactez-moi");

const closeCross = document.getElementById("close-cross");

function openModal() {
  contactModal.style.display = "block";

  const modalHeader = document.querySelector(".modal header");

  const modalTitle = document.createElement("div");
  modalTitle.className = "modal-title";

  const modalH2 = document.querySelector(".modal header h2");
  const modalName = document.createElement("h3");

  const photographerName = document.querySelector(
    ".photograph-header h2"
  ).textContent;

  modalName.textContent = photographerName;

  modalTitle.appendChild(modalH2);
  modalTitle.appendChild(modalName);

  modalHeader.appendChild(modalTitle);
  modalHeader.appendChild(closeCross);
}

contactButton.addEventListener("click", openModal);

function closeModal() {
  contactModal.style.display = "none";
  body.style.overflow = "initial";
}

closeCross.addEventListener("click", closeModal);
