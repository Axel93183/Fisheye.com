function mediaTemplate(media) {
  function getMediaCardDOM() {
    const article = document.createElement("article");

    const mediaTag = document.createElement(media.htmlTag);
    mediaTag.setAttribute("src", media.url);
    mediaTag.setAttribute("alt", media.title);

    const mediaLink = document.createElement('a')
    mediaLink.setAttribute('href', media.url)
    if (media instanceof ImageMedia) {
      mediaLink.setAttribute('aria-label', `Il s'agit d'une photographie : ${media.title}`);
    }
    if (media instanceof VideoMedia) {
      mediaLink.setAttribute('aria-label', `Il s'agit d'une séquence vidéo : ${media.title}`);
    }

    mediaLink.appendChild(mediaTag)

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
    likeIcon.setAttribute('aria-label', 'bouton pour liker le média')
    likeIcon.setAttribute('role', 'button')

    likesContainer.appendChild(likes);
    likesContainer.appendChild(likeIcon);

    mediaInfos.appendChild(title);
    mediaInfos.appendChild(likesContainer);

    article.appendChild(mediaLink);
    article.appendChild(mediaInfos);

    return article;
  }

  return { media, getMediaCardDOM };
}


