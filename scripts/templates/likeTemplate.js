async function displayLikesInsert() {
  const photographersData = await getDatas();
  const mediasData = await getDatas();

  const mainSection = document.getElementById("main-photographer-page");

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

  const likeIcon = document.createElement("i");
  likeIcon.className = "fa-solid fa-heart";

  totalLikesContainer.appendChild(likesSum);
  totalLikesContainer.appendChild(likeIcon);

  insert.appendChild(totalLikesContainer);
  insert.appendChild(price);

  mainSection.appendChild(insert);
}
