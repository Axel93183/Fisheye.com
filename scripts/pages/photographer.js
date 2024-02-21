// Extract Photographer ID From the Query Parameter in the URL
const photographerId = parseInt(
  new URLSearchParams(window.location.search).get("id")
);

// Fetch Data
async function getDatas() {
  const response = await fetch("data/photographers.json");
  const data = await response.json();
  return data;
}

// Display Photographer's Information
async function displayInfos() {
  const photographersData = await getDatas();

  photographersData.photographers
    .filter((photographer) => photographer.id === photographerId)
    .forEach((photographer) => {
      const photographerInfos = infosTemplate(photographer);
      photographerInfos.getInfosCardDOM();
    });
}

// Display Photographer's Media
async function displayMedia() {
  const medias = document.querySelector(".photograph-media");
  const mediaSection = document.createElement("div");
  mediaSection.className = "media-section";
  medias.appendChild(mediaSection);

  const mediasData = await getDatas();

  const filteredMedia = mediasData.media.filter(
    (media) => media.photographerId === photographerId
  );

  const filteredMediaMapped = filteredMedia.map(
    (filteredMedia) => new MediaFactory(filteredMedia)
  );

  filteredMediaMapped.forEach((media) => {
    const mediaCardDOM = mediaTemplate(media).getMediaCardDOM();
    mediaSection.appendChild(mediaCardDOM);
  });

  // Lightbox Display Events
  const mediaElements = document.querySelectorAll(".media-section a ");
  mediaElements.forEach(function (mediaElement) {
    mediaElement.addEventListener("click", (e) => {
      const mediaId = e.target.dataset.mediaId;
      displayLightBox(e, mediaId);
    });
    mediaElement.addEventListener("keypress", (e) => {
      const mediaId = e.target.dataset.mediaId;
      displayLightBox(e, mediaId);
    });
  });

  // Sort Medias
  function sortSelect() {
    const selectElement = document.getElementById("sort-menu");
    const selectedOption = selectElement.value;

    if (selectedOption === "titre") {
      sortByTitle();
    }
    if (selectedOption === "popularite") {
      sortByLike();
    }
    if (selectedOption === "date") {
      sortByDate();
    }
  }

  // Sort Event
  document.getElementById("sort-menu").addEventListener("change", sortSelect);
}

// Main function
async function main() {
  displayInfos();
  displayMedia();
  displayLikesInsert();
}

// Call Main func. to start
main();
