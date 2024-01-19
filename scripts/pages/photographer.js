async function getMedias() {
    const response = await fetch('data/photographers.json');
    const data = await response.json();
    return data;
}

async function main() {
    // Récupération des données des médias à partir du fichier photographers.json
    const mediasData = await getMedias();

    // Obtention de l'ID du photographe à partir de la chaîne de requête de l'URL (partie de l'URL après ('?'))
    const photographerId = parseInt(new URLSearchParams(window.location.search).get('id'));

    // Filtrage des médias en fonction de l'ID du photographe de la page
    mediasData.media
        .filter(media => media.photographerId === photographerId)
        // Transformation du tableau de médias filtré en un tableau d'objets de classe Media
        .map(filteredMedia => new Media(filteredMedia))
        // Itération sur chaque objet Media résultant
        .forEach(media => {
            console.log(media);
        });
}

main();
