function photographerTemplate(dataPhotographers) {
    const photographer = new Photographer(dataPhotographers);

    function getUserCardDOM() {
        const article = document.createElement('article');

        const linkFocus = document.createElement('a');
        linkFocus.id = `photographer-${photographer.id}`;
        linkFocus.href = `photographer.html?id=${photographer.id}`;
        linkFocus.setAttribute('aria-label', `Accéder au photographe ${photographer.name}, basé à ${photographer.city}, ${photographer.country} ayant pour slogan: ${photographer.tagline}. Tarif : ${photographer.price}€ par jour.`);

        const img = document.createElement('img');
        img.setAttribute("src", photographer.picture);
        img.setAttribute("alt", `Portrait de ${photographer.name}`);

        const h2 = document.createElement('h2');
        h2.textContent = photographer.name;

        const locationArea = document.createElement('p');
        locationArea.textContent = `${photographer.city}, ${photographer.country}`;
        locationArea.className = 'location';

        const tagLine = document.createElement('p');
        tagLine.textContent = photographer.tagline;
        tagLine.className = 'tagline';

        const pricePerDay = document.createElement('p');
        pricePerDay.textContent = `${photographer.price}€/jour`;
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