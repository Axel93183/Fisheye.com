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
