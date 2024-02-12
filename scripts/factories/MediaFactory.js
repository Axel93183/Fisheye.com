class MediaFactory {
  constructor(dataMedia) {
    if (dataMedia.image) {
      return new ImageMedia(dataMedia);
    }

    if (dataMedia.video) {
      return new VideoMedia(dataMedia);
    }

    throw "Unknown type format";
  }
}
