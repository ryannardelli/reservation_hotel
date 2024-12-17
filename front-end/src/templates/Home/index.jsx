import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { fetchImages } from '../../utils/fetchImages';

export const Home = () => {
  const [backgroundImage, setBackgroundImage] = useState('');
  const [overlayImages, setOverlayImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const { backgroundImage, overlayImages } = await fetchImages(
        'el4WbUZIoCSZEcrOjABKOWnZEChb9jarDP0yU1pfffnSPGhMmNw8IedZ',
      );

      setBackgroundImage(backgroundImage);
      setOverlayImages(overlayImages);
    };

    loadImages();
  }, []);

  return (
    <div>
      {backgroundImage && overlayImages.length > 0 ? (
        <div>
          <img
            src={backgroundImage}
            alt="Background"
            className="background-image"
          />
          <div className="overlay-images">
            {overlayImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Overlay ${index + 1}`}
                className="overlay-image"
              />
            ))}
          </div>
        </div>
      ) : (
        <p>Carregando imagens...</p>
      )}
    </div>
  );
};

export default Home;
