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

    const likeSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
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

    likesContainer.appendChild(likes);
    likesContainer.appendChild(likeSvg);

    mediaInfos.appendChild(title);
    mediaInfos.appendChild(likesContainer);

    article.appendChild(mediaTag);
    article.appendChild(mediaInfos);

    return article;
  }

  return { media, getMediaCardDOM };
}
