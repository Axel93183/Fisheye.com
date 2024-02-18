const photographerId = parseInt(
  new URLSearchParams(window.location.search).get("id")
);

async function getDatas() {
  const response = await fetch("data/photographers.json");
  const data = await response.json();
  return data;
}

async function displayInfos() {
  const photographersData = await getDatas();

  photographersData.photographers
    .filter((photographer) => photographer.id === photographerId)

    .forEach((photographer) => {
      const photographerInfos = infosTemplate(photographer);
      photographerInfos.getInfosCardDOM();
    });
}

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

  const mediaElements = document.querySelectorAll(".media-section a");
  mediaElements.forEach(function (mediaElement) {
    mediaElement.addEventListener("click", displayLightBox);
    mediaElement.addEventListener("keypress", displayLightBox);
  });

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

  document.getElementById("sort-menu").onchange = sortSelect;
  sortSelect();
}

async function main() {
  displayInfos();
  displayMedia();
  displayLikesInsert();
}

main();
