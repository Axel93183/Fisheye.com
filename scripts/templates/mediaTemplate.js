function mediaTemplate(media) {
  function getMediaCardDOM() {
    const article = document.createElement("article");
    article.dataset.date = media.date;

    const mediaTag = document.createElement(media.htmlTag);
    mediaTag.setAttribute("src", media.url);
    mediaTag.setAttribute("alt", media.title);
    mediaTag.dataset.mediaId = media.id;

    const mediaLink = document.createElement("a");
    mediaLink.setAttribute("href", media.url);
    mediaLink.dataset.mediaId = media.id;
    if (media instanceof ImageMedia) {
      mediaLink.setAttribute(
        "aria-label",
        `Il s'agit d'une photographie : ${media.title}`
      );
    }
    if (media instanceof VideoMedia) {
      mediaLink.setAttribute(
        "aria-label",
        `Il s'agit d'une séquence vidéo : ${media.title}`
      );
    }

    mediaLink.appendChild(mediaTag);

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
    likeIcon.setAttribute("aria-label", "bouton pour liker le média");
    likeIcon.setAttribute("role", "button");
    likeIcon.setAttribute("tabindex", "0");

    likeIcon.addEventListener("click", handleLikeClick);
    likeIcon.addEventListener("keypress", handleLikeClick);

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

function handleLikeClick(e) {
  if (e.key !== "Enter" && e.type !== "click") {
    return;
  }

  const likeCountElement = e.target.parentNode.querySelector("p");
  let likeCount = parseInt(likeCountElement.textContent);
  likeCount++;
  likeCountElement.textContent = likeCount;

  const totalLikesCountElement = document.querySelector(
    ".totalLikes-container p"
  );
  let totalCount = parseInt(totalLikesCountElement.textContent);
  totalCount++;
  totalLikesCountElement.textContent = totalCount;

  e.target.removeEventListener("click", handleLikeClick);
  e.target.removeEventListener("keypress", handleLikeClick);
}
