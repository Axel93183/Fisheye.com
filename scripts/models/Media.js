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

class ImageMedia extends Media {
  constructor(dataMedia) {
    super(dataMedia);

    this.image = dataMedia.image;
  }
  get htmlTag() {
    return "img";
  }
  get file() {
    return this.image;
  }
}

class VideoMedia extends Media {
  constructor(dataMedia) {
    super(dataMedia);

    this.video = dataMedia.video;
  }
  get htmlTag() {
    return "video";
  }
  get file() {
    return this.video;
  }
}
