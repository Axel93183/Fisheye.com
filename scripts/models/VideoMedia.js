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
