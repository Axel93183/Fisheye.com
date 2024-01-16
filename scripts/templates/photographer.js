function photographerTemplate(dataPhotographers) {
    const { name, portrait, city, country, tagline, price } = dataPhotographers;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        article.tabIndex = 0;
        article.setAttribute('aria-label', `Photographe ${name}, basé à ${city}, ${country} ayant pour slogan: ${tagline}. Tarif : ${price}€ par jour.`);

        const img = document.createElement('img');
        img.setAttribute("src", picture)
        img.setAttribute("alt", `Portrait de ${name}`);

        const h2 = document.createElement('h2');
        h2.textContent = name;

        const locationArea = document.createElement('p');
        locationArea.textContent = city + ", " + country;
        locationArea.className = 'location'

        const tagLine = document.createElement('p')
        tagLine.textContent = tagline;
        tagLine.className = 'tagline'

        const pricePerDay = document.createElement('p')
        pricePerDay.textContent = price + "€/jour"
        pricePerDay.className = 'price'

        article.appendChild(h2);
        article.appendChild(img);
        article.appendChild(locationArea);
        article.appendChild(tagLine);
        article.appendChild(pricePerDay);
        return (article);
    }
    return { dataPhotographers, getUserCardDOM }
}