async function getMedias() {
    const response = await fetch('data/photographers.json');
    const data = await response.json();
    return data;
}

async function main() {
    const mediasData = await getMedias()
    console.log(mediasData);

    mediasData.media
        // Ici, je transforme mon tableau de données en un tableau de classe Media
        .map(media => new Media(media))
        .forEach(media => {
            console.log(media);
        });
}

main();