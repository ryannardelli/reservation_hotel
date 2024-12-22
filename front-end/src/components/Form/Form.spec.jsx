import { fireEvent, render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Form } from '.';

test('should updates form data when inputs change', () => {
  render(<Form handleSubmit={() => {}} />);

  const firstNameInput = screen.getByPlaceholderText(/Insira seu nome/i);
  fireEvent.change(firstNameInput, { target: { value: 'John' } });
  expect(firstNameInput.value).toBe('John');
});

test('should calls handleSubmit with correct data', () => {
  const mockSubmit = jest.fn();
  render(<Form handleSubmit={mockSubmit} />);

  act(() => {
    fireEvent.change(screen.getByPlaceholderText(/Insira seu nome/i), {
      target: { value: 'John' },
    });

    fireEvent.change(screen.getByPlaceholderText(/Insira seu sobrenome/i), {
      target: { value: 'Doe' },
    });

    fireEvent.change(screen.getByPlaceholderText(/Insira seu email/i), {
      target: { value: 'john.doe@example.com' },
    });
  });

  act(() => {
    fireEvent.click(screen.getByText(/Fazer Reserva/i));
  });

  expect(mockSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
    }),
  );
});
