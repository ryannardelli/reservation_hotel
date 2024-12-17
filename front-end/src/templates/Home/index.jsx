import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { fetchImages } from '../../utils/fetchImages';
import { BackgroundWithImages } from '../../components/BackgroundWithImages';
import { HeroSection } from '../../components/HeroSection';
import { Form } from '../../components/Form';
import './styles.css';

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
    <div className="container-fluid p-0">
      {backgroundImage && overlayImages.length > 0 ? (
        <BackgroundWithImages
          backgroundImage={backgroundImage}
          images={overlayImages}
        />
      ) : (
        <p>Aguarde...</p>
      )}
      <HeroSection />
      <Form />
    </div>
  );
};

export default Home;
