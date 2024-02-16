const myLightbox = document.getElementById("myLightbox");
let lightboxCreated = false;
function displayLightBox(e) {
  e.preventDefault();
  if (e.key !== "Enter" && e.type !== "click") {
    return;
  }
  if (!lightboxCreated) {
    const mediaElements = document.querySelectorAll(".media-section a");
    const slideDiv = document.createElement("div");
    slideDiv.className = "mySlides";

    mediaElements.forEach(function (mediaElement) {
      const img = document.createElement("img");
      if (mediaElement.querySelector("img")) {
        img.src = mediaElement.querySelector("img").getAttribute("src");
        slideDiv.appendChild(img);
      }

      const video = document.createElement("video");
      if (mediaElement.querySelector("video")) {
        video.src = mediaElement.querySelector("video").getAttribute("src");
        slideDiv.appendChild(video);
      }

      const mediaTitle = document.createElement("p");
      mediaTitle.textContent = mediaElement.alt;

      const lightboxContainer = document.getElementById("lightboxContainer");
      lightboxContainer.appendChild(slideDiv);
    });
    lightboxCreated = true;
  }

  myLightbox.style.display = "block";
}

const lbCloseCross = document.querySelector(".lightBoxClose");
function closeLightbox() {
  myLightbox.style.display = "none";
}
lbCloseCross.addEventListener("click", closeLightbox);
lbCloseCross.addEventListener("keypress", (e) => {
  if (e.key !== "Enter") {
    return;
  }
  closeLightbox(e);
});
window.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") {
    return;
  }
  closeLightbox(e);
});
