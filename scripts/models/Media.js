class Media {
    constructor(dataMedia) {
        this.id = dataMedia.id
        this.photographerId = dataMedia.photographerId
        this.title = dataMedia.title
        this.image = dataMedia.image
        this.video = dataMedia.video
        this.likes = dataMedia.likes
        this.date = dataMedia.date
        this.price = dataMedia.price
        this.picture = `assets/medias/photographerID-${dataMedia.photographerId}/${dataMedia.image}`
    }
}
