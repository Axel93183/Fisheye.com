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
}

async function displayLikesInsert() {
  const photographersData = await getDatas();
  const mediasData = await getDatas();

  const mainSection = document.getElementById("main");

  const insert = document.createElement("div");
  insert.className = "insert";

  const photographer = photographersData.photographers.find(
    (photographer) => photographer.id === photographerId
  );

  const price = document.createElement("p");
  price.textContent = `${photographer.price}€ / jour`;

  const totalLikesContainer = document.createElement("div");
  totalLikesContainer.className = "totalLikes-container";

  const likesSum = document.createElement("p");

  const totalLikes = mediasData.media
    .filter((media) => media.photographerId === photographerId)
    .map((media) => media.likes)
    .reduce((acc, cur) => acc + cur, 0);

  likesSum.textContent = totalLikes;

  const likeSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  likeSvg.setAttribute("width", "24");
  likeSvg.setAttribute("height", "24");
  const svgPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  svgPath.setAttribute(
    "d",
    "M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151 0.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402"
  );

  likeSvg.appendChild(svgPath);

  totalLikesContainer.appendChild(likesSum);
  totalLikesContainer.appendChild(likeSvg);

  insert.appendChild(totalLikesContainer);
  insert.appendChild(price);

  mainSection.appendChild(insert);
}

async function main() {
  displayInfos();
  displayMedia();
  displayLikesInsert();
}

main();
