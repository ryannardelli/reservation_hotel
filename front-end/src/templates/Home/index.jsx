import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { fetchImages } from '../../utils/fetchImages';
import { BackgroundWithImages } from '../../components/BackgroundWithImages';
import { HeroSection } from '../../components/HeroSection';
import { Form } from '../../components/Form';
import { sendReservation } from '../../utils/sendReservation';
import './styles.css';

export const Home = () => {
  const [backgroundImage, setBackgroundImage] = useState('');
  const [overlayImages, setOverlayImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState('');

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

  const handleSubmit = async (formData) => {
    console.log('Enviando dados do formulário:', formData);

    const result = await sendReservation(formData);

    if (result.success) {
      console.log('Reserva enviada com sucesso!', result.data);
      // Atualiza o estado de feedback com a mensagem de sucesso
      setFeedback('Reserva realizada com sucesso!');
    } else {
      console.log('Erro ao enviar reserva:', result.error);
      // Atualiza o estado de feedback com a mensagem de erro
      setFeedback('Erro ao realizar a reserva. Tente novamente mais tarde.');
    }
  };

  // Função para fechar o alerta
  const closeAlert = () => {
    setFeedback('');
  };

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

          {feedback && (
            <div
              className={`alert ${feedback.includes('sucesso') ? 'alert-success' : 'alert-danger'} alert-dismissible fade show mx-3 mx-md-auto mx-lg-auto text-center `}
              role="alert"
            >
              {feedback}

              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={closeAlert}
              ></button>
            </div>
          )}

          <Form handleSubmit={handleSubmit} />
        </>
      )}
    </div>
  );
};

export default Home;
