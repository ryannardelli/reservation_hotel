import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BackgroundWithImages } from '.';

describe('BackgroundWithImages Component', () => {
  const backgroundImage = 'https://example.com/background.jpg';
  const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
  ];

  test('should render background image correctly', () => {
    render(
      <BackgroundWithImages
        backgroundImage={backgroundImage}
        images={images}
      />,
    );

    const backgroundImageElement = screen.getByAltText('background');
    expect(backgroundImageElement).toHaveAttribute('src', backgroundImage);
    expect(backgroundImageElement).toBeInTheDocument();
  });

  test('should render overlay images corretly', () => {
    render(
      <BackgroundWithImages
        backgroundImage={backgroundImage}
        images={images}
      />,
    );
    images.forEach((image, index) => {
      const overlayImage = screen.getByAltText(`Overlay ${index + 1}`);
      expect(overlayImage).toHaveAttribute('src', image);
      expect(overlayImage).toBeInTheDocument();
    });
  });

  test('should render the correct alt text for background and overlay images', () => {
    render(
      <BackgroundWithImages
        backgroundImage={backgroundImage}
        images={images}
      />,
    );
    const backgroundImageElement = screen.getByAltText('background');
    expect(backgroundImageElement).toHaveAttribute('alt', 'background');

    images.forEach((_, index) => {
      const overlayImage = screen.getByAltText(`Overlay ${index + 1}`);
      expect(overlayImage).toHaveAttribute('alt', `Overlay ${index + 1}`);
    });
  });

  test('matches snapshot', () => {
    const { asFragment } = render(
      <BackgroundWithImages
        backgroundImage={backgroundImage}
        images={images}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
