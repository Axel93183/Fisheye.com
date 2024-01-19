const photographerId = parseInt(new URLSearchParams(window.location.search).get('id'));

async function getDatas() {
    const response = await fetch('data/photographers.json');
    const data = await response.json();
    return data;
}

async function displayInfos() {
    const photographersData = await getDatas()

    photographersData.photographers.filter(photographer => photographer.id === photographerId)

        .forEach((photographer) => {
            const photographerInfos = infosTemplate(photographer);
            photographerInfos.getInfosCardDOM();
        });
}

async function displayMedia() {
    const mediasData = await getDatas();
    mediasData.media
        .filter(media => media.photographerId === photographerId)
        .map(filteredMedia => new Media(filteredMedia))
        .forEach(media => {
            console.log(media);
        });
}

displayInfos();

displayMedia();
