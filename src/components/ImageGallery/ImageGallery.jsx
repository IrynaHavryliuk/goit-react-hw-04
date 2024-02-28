function ImageGallery({ images }) {
  return (
    <ul>
      {images.map((image, index) => (
        <li key={index}>
          <ImageCard imageUrl={image.urls.small} altText={image.alt_description} />
        </li>
      ))}
    </ul>
  );
}

function ImageCard({ imageUrl, altText }) {
  return (
    <div>
      <img src={imageUrl} alt={altText} />
    </div>
  );
}

export default ImageGallery;
