import P from 'prop-types';
import styled from 'styled-components';

const BackgroundImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

// Estilizando o contêiner das imagens sobrepostas
const OverlayImagesContainer = styled.div`
  position: absolute; /* Posiciona as imagens sobre a imagem de fundo */
  top: -60px;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

// Estilizando as imagens sobrepostas
const OverlayImage = styled.img`
  width: 200px;
  height: 150px;
  margin: 10px;
  object-fit: contain;
`;

export const BackgroundWithImages = ({ backgroundImage, images }) => {
  return (
    <>
      <BackgroundImage src={backgroundImage} alt="background" />
      <OverlayImagesContainer>
        {images.map((image, index) => (
          <OverlayImage key={index} src={image} alt={`Overlay ${index + 1}`} />
        ))}
      </OverlayImagesContainer>
    </>
  );
};

BackgroundWithImages.propTypes = {
  backgroundImage: P.string.isRequired,
  images: P.arrayOf(P.string).isRequired, // Espera um array de strings para as imagens sobre o fundo
};
