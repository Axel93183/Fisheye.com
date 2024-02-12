class Media {
  constructor(dataMedia) {
    this.id = dataMedia.id;
    this.photographerId = dataMedia.photographerId;
    this.title = dataMedia.title;
    this.likes = dataMedia.likes;
    this.date = dataMedia.date;
    this.price = dataMedia.price;
  }

  get file() {
    throw new Error("not implemented");
  }

  get url() {
    return `assets/medias/photographerID-${this.photographerId}/${this.file}`;
  }
}
