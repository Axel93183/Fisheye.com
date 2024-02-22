function mediaSort(sortByOption) {
  const mediaSection = document.querySelector(".media-section");
  const articles = Array.from(mediaSection.querySelectorAll("article"));

  articles.sort(sortByOption);

  articles.forEach((article) => mediaSection.appendChild(article));
}

function sortByTitle() {
  mediaSort((a, b) => {
    const titleA = a.querySelector(".media-infos h3").textContent.toLowerCase();
    const titleB = b.querySelector(".media-infos h3").textContent.toLowerCase();

    return titleA.localeCompare(titleB);
  });
}

function sortByLike() {
  mediaSort((a, b) => {
    const likesA = parseInt(a.querySelector(".likes-container p").textContent);
    const likesB = parseInt(b.querySelector(".likes-container p").textContent);

    return likesB - likesA;
  });
}

function sortByDate() {
  mediaSort((a, b) => {
    const dateA = new Date(a.dataset.date);
    const dateB = new Date(b.dataset.date);

    return dateB - dateA;
  });
}

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
