import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroSection } from '.';

test('should render with title and paragraph in screen', () => {
  render(<HeroSection />);
  const title = screen.getByText(/hotel sol e mar/i);
  const subtitle = screen.getByText(/faça já a sua reserva!/i);
  console.log(screen.debug);
  expect(title).toBeInTheDocument();
  expect(subtitle).toBeInTheDocument();
});

test('shound render a h1 and a paragraph', () => {
  render(<HeroSection />);
  const h1Element = screen.getByRole('heading', { level: 1 });
  const paragraphElement = screen.getByRole('paragraph');
  expect(h1Element).toBeInTheDocument();
  expect(paragraphElement).toBeInTheDocument();
});

test('matches snapshot', () => {
  const { asFragment } = render(<HeroSection />);
  expect(asFragment()).toMatchSnapshot();
});
