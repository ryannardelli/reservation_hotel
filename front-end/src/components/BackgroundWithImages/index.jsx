import P from 'prop-types';
export const BackgroundWithImages = ({ backgroundImage, images }) => {
  return (
    <>
      <img
        src={backgroundImage}
        alt="background"
        className="background-image"
      />
      <div className="overlay-images">
        {images.map((image, index) => {
          return (
            <img
              key={index}
              src={image}
              alt={`Overlay ${index + 1}`}
              className="overlay-image"
            />
          );
        })}
      </div>
    </>
  );
};

BackgroundWithImages.propTypes = {
  backgroundImage: P.string.isRequired,
  images: P.arrayOf(P.string), // Espera um array de strings para as imagens sobre o fundo
};
