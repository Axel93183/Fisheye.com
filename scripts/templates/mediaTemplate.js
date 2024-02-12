function mediaTemplate(media) {
  function getMediaCardDOM() {
    const article = document.createElement("article");

    const mediaTag = document.createElement(media.htmlTag);
    mediaTag.setAttribute("src", media.url);
    mediaTag.setAttribute("alt", media.title);
    if (media instanceof VideoMedia) {
      mediaTag.setAttribute("controls", "");
    }

    const mediaInfos = document.createElement("div");
    mediaInfos.className = "media-infos";

    const title = document.createElement("h3");
    title.textContent = media.title;

    const likesContainer = document.createElement("div");
    likesContainer.className = "likes-container";

    const likes = document.createElement("p");
    likes.textContent = media.likes;

    const likeIcon = document.createElement("i");
    likeIcon.className = "fa-solid fa-heart";

    likesContainer.appendChild(likes);
    likesContainer.appendChild(likeIcon);

    mediaInfos.appendChild(title);
    mediaInfos.appendChild(likesContainer);

    article.appendChild(mediaTag);
    article.appendChild(mediaInfos);

    return article;
  }

  return { media, getMediaCardDOM };
}
