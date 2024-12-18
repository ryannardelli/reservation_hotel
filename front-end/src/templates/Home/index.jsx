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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      const { backgroundImage, overlayImages } = await fetchImages(
        'el4WbUZIoCSZEcrOjABKOWnZEChb9jarDP0yU1pfffnSPGhMmNw8IedZ',
      );
      setBackgroundImage(backgroundImage);
      setOverlayImages(overlayImages);

      setTimeout(() => {
        setLoading(false);
      }, 1500);
    };

    loadImages();
  }, []);

  return (
    <div className="container-fluid p-0">
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: '100vh' }}
        >
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Carregando...</span>
          </div>
        </div>
      ) : (
        <>
          {backgroundImage && overlayImages.length > 0 && (
            <BackgroundWithImages
              backgroundImage={backgroundImage}
              images={overlayImages}
            />
          )}
          <HeroSection />
          <Form />
        </>
      )}
    </div>
  );
};

export default Home;
