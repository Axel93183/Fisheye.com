function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
}

document.getElementById("contact_button").addEventListener("click", displayModal)

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

document.getElementById("close-cross").addEventListener("click", closeModal)