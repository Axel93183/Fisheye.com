const contactButton = document.getElementById("contact_button");
contactButton.setAttribute("aria-label", "Contactez-moi");

function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
}

contactButton.addEventListener("click", displayModal);

const closeCross = document.getElementById("close-cross");

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}

closeCross.addEventListener("click", closeModal);
