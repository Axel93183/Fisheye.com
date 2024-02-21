const myLightbox = document.getElementById("myLightbox");
let lightboxCreated = false;

function displayLightBox(e, mediaId) {
  e.preventDefault();
  if (e.key !== "Enter" && e.type !== "click") {
    return;
  }
  if (!lightboxCreated) {
    const mediaElements = document.querySelectorAll(".media-section a");

    const mySlides = document.createElement("div");
    mySlides.className = "mySlides";

    mediaElements.forEach(function (mediaElement) {
      const slide = document.createElement("div");
      slide.className = "slide";
      slide.id = mediaElement.dataset.mediaId;

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
        video.setAttribute("controls", "");
        mediaTitle.textContent = video.alt;
        mediaContainer.appendChild(video);
        mediaContainer.appendChild(mediaTitle);
        slide.appendChild(mediaContainer);
      }

      mySlides.appendChild(slide);
    });

    const lightboxContainer = document.getElementById("lightboxContainer");

    const firstChild = lightboxContainer.children[1];

    lightboxContainer.insertBefore(mySlides, firstChild.nextSibling);

    lightboxCreated = true;
  }

  const currentSlide = document.getElementById(`${mediaId}`);
  if (currentSlide) {
    currentSlide.setAttribute("tabindex", "0");
    currentSlide.style.display = "block";
    document.querySelectorAll(".mySlides .slide").forEach((slide) => {
      if (slide !== currentSlide) {
        slide.style.display = "none";
      }
    });
  }

  myLightbox.style.display = "flex";

  myLightbox.focus();

  const nextButton = document.getElementById("nextButton");
  nextButton.addEventListener("click", goToNextSlide);
  nextButton.addEventListener("keypress", (e) => {
    if (e.key !== "Enter") {
      return;
    }
    goToNextSlide(e);
  });

  const prevButton = document.getElementById("prevButton");
  prevButton.addEventListener("click", goToPreviousSlide);
  prevButton.addEventListener("keypress", (e) => {
    if (e.key !== "Enter") {
      return;
    }
    goToPreviousSlide(e);
  });
}

const lbCloseCross = document.querySelector(".lightBoxClose");
function closeLightbox() {
  myLightbox.style.display = "none";
}

// Close lightBox events
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

// Next slide function
function goToNextSlide() {
  const slides = document.querySelectorAll(".mySlides .slide");
  let currentIndex = 0;
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].style.display === "block") {
      currentIndex = i;
    }
  }
  slides[currentIndex].style.display = "none";
  const nextIndex = (currentIndex + 1) % slides.length;
  slides[nextIndex].style.display = "block";
}

// Previous slide function
function goToPreviousSlide() {
  const slides = document.querySelectorAll(".mySlides .slide");
  let currentIndex = 0;
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].style.display === "block") {
      currentIndex = i;
    }
  }
  slides[currentIndex].style.display = "none";
  const previousIndex = (currentIndex - 1 + slides.length) % slides.length;
  slides[previousIndex].style.display = "block";
}
