const body = document.getElementById("body");
const contactModal = document.getElementById("contact_modal");
const form = document.forms.reserve;
const contactButton = document.getElementById("contact_button");
const closeCross = document.getElementById("close-cross");
const modalH2 = document.querySelector(".modal header h2");
const lineBreak = document.createElement("br");
const firstInput = document.getElementById("first-name");

function openModal() {
  const photographerName = document.querySelector(
    ".photograph-header h2"
  ).textContent;
  const newText = document.createTextNode(photographerName);
  contactModal.style.display = "block";

  modalH2.appendChild(lineBreak);
  modalH2.appendChild(newText);

  firstInput.focus();
}

contactButton.addEventListener("click", openModal);

function closeModal() {
  contactModal.style.display = "none";
  body.style.overflow = "initial";

  lineBreak.remove();
  modalH2.lastChild.remove();
}

closeCross.addEventListener("click", closeModal);
closeCross.addEventListener("keypress", (e) => {
  if (e.key !== "Enter") {
    return;
  }
  closeModal(e);
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// form validation
function validateForm() {
  // retrieving form field values
  const firstName = form.first.value.trim();
  const lastName = form.last.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  // checking validation conditions
  const isFirstNameValid = firstName.length >= 2 && !firstName == "";
  const isLastNameValid = lastName.length >= 2 && !lastName == "";
  const isEmailValid = validateEmail(email);
  const isMessageValid = message.length >= 2 && message.length <= 500;

  // display error messages in the DOM
  function displayError(input, message, isValid) {
    const errorMessageElement = document.createElement("p");
    errorMessageElement.className = "error-message";
    errorMessageElement.textContent = message;

    const existingMsgError = input.parentNode.querySelector(".error-message");
    if (existingMsgError) {
      existingMsgError.remove();
    }

    if (!isValid) {
      // error message below the input element if invalid condition
      input.parentNode.appendChild(errorMessageElement);
    }
  }

  displayError(
    form.first,
    "Le champ Prénom doit avoir au moins 2 caractères.",
    isFirstNameValid
  );
  displayError(
    form.last,
    "Le champ Nom doit avoir au moins 2 caractères.",
    isLastNameValid
  );
  displayError(
    form.email,
    "Veuillez saisir une adresse e-mail valide.",
    isEmailValid
  );
  displayError(form.message, "Veuillez saisir votre message.", isMessageValid);

  return isFirstNameValid && isLastNameValid && isEmailValid && isMessageValid;
}
// submit form event
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validateForm()) {
    console.log("==========================");
    console.log("Votre message a bien été envoyé.");
    console.log("==========================");

    const firstInput = form.first;
    const lastInput = form.last;
    const emailInput = form.email;
    const messageInput = form.message;

    firstInput.value = "";
    lastInput.value = "";
    emailInput.value = "";
    messageInput.value = "";

    closeModal();
  }
});
