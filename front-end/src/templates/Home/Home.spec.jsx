import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Home } from '.';

it('should display spinner while image is loading', () => {
  render(<Home />);
  const spinner = screen.getByRole('status');
  expect(spinner).toBeInTheDocument();
});
