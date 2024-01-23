class Photographer {
    constructor(dataPhotographer) {
        this.name = dataPhotographer.name;
        this.id = dataPhotographer.id
        this.city = dataPhotographer.city;
        this.country = dataPhotographer.country;
        this.tagline = dataPhotographer.tagline;
        this.price = dataPhotographer.price;
        this.portrait = dataPhotographer.portrait;
        this.picture = `assets/photographers/${dataPhotographer.portrait}`;
    }
}