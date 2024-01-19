function photographerTemplate(dataPhotographers) {
    const photographerInstance = new Photographer(dataPhotographers);

    function getUserCardDOM() {
        const article = document.createElement('article');

        const linkFocus = document.createElement('a');
        linkFocus.href = "#";
        linkFocus.setAttribute('aria-label', `Accéder au photographe ${photographerInstance.name}, basé à ${photographerInstance.city}, ${photographerInstance.country} ayant pour slogan: ${photographerInstance.tagline}. Tarif : ${photographerInstance.price}€ par jour.`);

        const img = document.createElement('img');
        img.setAttribute("src", photographerInstance.picture);
        img.setAttribute("alt", `Portrait de ${photographerInstance.name}`);

        const h2 = document.createElement('h2');
        h2.textContent = photographerInstance.name;

        const locationArea = document.createElement('p');
        locationArea.textContent = `${photographerInstance.city}, ${photographerInstance.country}`;
        locationArea.className = 'location';

        const tagLine = document.createElement('p');
        tagLine.textContent = photographerInstance.tagline;
        tagLine.className = 'tagline';

        const pricePerDay = document.createElement('p');
        pricePerDay.textContent = `${photographerInstance.price}€/jour`;
        pricePerDay.className = 'price';

        linkFocus.appendChild(h2);
        linkFocus.appendChild(img);
        article.appendChild(linkFocus);
        article.appendChild(locationArea);
        article.appendChild(tagLine);
        article.appendChild(pricePerDay);

        return article;
    }

    return { dataPhotographers, getUserCardDOM };
}