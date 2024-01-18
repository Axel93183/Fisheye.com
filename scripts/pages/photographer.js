//Mettre le code JavaScript lié à la page photographer.html

async function getMedias() {
    const response = await fetch('data/photographers.json');
    const data = await response.json();
    console.log(data);
    return data;
}


getMedias();

