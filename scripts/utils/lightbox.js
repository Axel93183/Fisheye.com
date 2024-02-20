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
      const slide = document.createElement("div");
      slide.className = "slide";
      const mediaContainer = document.createElement("div");
      mediaContainer.className = "media-container";
      const mediaTitle = document.createElement("p");

      const img = document.createElement("img");
      if (mediaElement.querySelector("img")) {
        img.src = mediaElement.querySelector("img").getAttribute("src");
        img.alt = mediaElement.querySelector("img").getAttribute("alt");
        mediaTitle.textContent = img.alt;
        mediaContainer.appendChild(img);
        mediaContainer.appendChild(mediaTitle);
        slide.appendChild(mediaContainer);
      }

      const video = document.createElement("video");
      if (mediaElement.querySelector("video")) {
        video.src = mediaElement.querySelector("video").getAttribute("src");
        video.alt = mediaElement.querySelector("video").getAttribute("alt");
        mediaTitle.textContent = video.alt;
        mediaContainer.appendChild(video);
        mediaContainer.appendChild(mediaTitle);
        slide.appendChild(mediaContainer);
      }

      slideDiv.appendChild(slide);
    });

    const lightboxContainer = document.getElementById("lightboxContainer");
    const firstChild = lightboxContainer.children[1];
    lightboxContainer.insertBefore(slideDiv, firstChild.nextSibling);

    lightboxCreated = true;
  }

  myLightbox.style.display = "flex";
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
