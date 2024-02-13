// Fonction pour gérer les clics sur les icônes "like"
function handleLikeClick() {
  const likeCountElement = this.parentNode.querySelector("p");
  let likeCount = parseInt(likeCountElement.textContent);
  likeCount++;
  likeCountElement.textContent = likeCount;

  const totalLikesCountElement = document.querySelector(
    ".totalLikes-container p"
  );
  let totalCount = parseInt(totalLikesCountElement.textContent);
  totalCount++;
  totalLikesCountElement.textContent = totalCount;

  this.removeEventListener("click", handleLikeClick);
}

// Création d'un observateur pour surveiller les modifications du DOM
const observer = new MutationObserver(function (mutationsList, observer) {
  // Parcourir les mutations
  for (let mutation of mutationsList) {
    // Vérifier si des nœuds ont été ajoutés
    if (mutation.type === "childList") {
      // Récupérer les icônes "like" nouvellement ajoutées
      const addedLikeIcons = Array.from(mutation.addedNodes).filter(
        (node) =>
          node.nodeType === Node.ELEMENT_NODE &&
          node.querySelector(".likes-container i.fa-heart")
      );

      // Ajouter un écouteur d'événements à chaque icône "like" nouvellement ajoutée
      addedLikeIcons.forEach((iconContainer) => {
        const likeIcon = iconContainer.querySelector(
          ".likes-container i.fa-heart"
        );
        likeIcon.addEventListener("click", handleLikeClick);
      });
    }
  }
});

// Configuration de l'observateur pour surveiller les ajouts d'enfants au niveau du nœud racine
observer.observe(document.body, { childList: true, subtree: true });
