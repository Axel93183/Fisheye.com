class MediaFactory {
  constructor(dataMedia) {
    if (dataMedia.image) {
      return new ImageMedia(dataMedia);
    } else if (dataMedia.video) {
      return new VideoMedia(dataMedia);
    } else {
      throw "Unknown type format";
    }
  }
}
