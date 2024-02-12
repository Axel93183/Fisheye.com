function infosTemplate(dataPhotographer) {
  const photographer = new Photographer(dataPhotographer);

  function getInfosCardDOM() {
    const h2 = document.createElement("h2");
    h2.textContent = photographer.name;

    const locationArea = document.createElement("p");
    locationArea.textContent = `${photographer.city}, ${photographer.country}`;
    locationArea.className = "location";

    const tagLine = document.createElement("p");
    tagLine.textContent = photographer.tagline;
    tagLine.className = "tagline";

    const article = document.createElement("article");
    article.appendChild(h2);
    article.appendChild(locationArea);
    article.appendChild(tagLine);

    const img = document.createElement("img");
    img.setAttribute("src", photographer.picture);
    img.setAttribute("alt", `Portrait de ${photographer.name}`);

    const contactButton = document.getElementById("contact_button");

    const photographHeader = document.querySelector(".photograph-header");

    photographHeader.appendChild(article);
    photographHeader.appendChild(contactButton);
    photographHeader.appendChild(img);

    return photographHeader;
  }
  return { dataPhotographer, getInfosCardDOM };
}
