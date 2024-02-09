async function getDatas() {
  const response = await fetch("data/photographers.json");
  const data = await response.json();
  return data;
}
async function displayPhotographerName() {
  const photographersData = await getDatas();
  const filteredPhotographer = photographersData.photographers.filter(
    (photographer) => photographer.id === photographerId
  );

  console.log("======");
  console.log(filteredPhotographer);
  console.log("======");
  // const modalTitle = document.querySelector(".modal-title");
  // modalTitle.textContent = filteredPhotographer.name;
}

const body = document.getElementById("body");
const contactModal = document.getElementById("contact_modal");
const form = document.forms.reserve;
const contactButton = document.getElementById("contact_button");

contactButton.setAttribute("aria-label", "Contactez-moi");

const closeCross = document.getElementById("close-cross");

function openModal() {
  contactModal.style.display = "block";
  displayPhotographerName();
}

contactButton.addEventListener("click", openModal);

function closeModal() {
  contactModal.style.display = "none";
  body.style.overflow = "initial";
}

closeCross.addEventListener("click", closeModal);
