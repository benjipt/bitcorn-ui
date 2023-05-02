// SignInPage.test.tsx
import { vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SignInPage from '../SignInPage';

describe('SignInPage', () => {
  const mockGetData = vi.fn(async (_address: string): Promise<void> => {
    // Simulate a delay to test the loading state
    return new Promise<void>(resolve => setTimeout(resolve, 1000));
  });

  beforeEach(() => {
    render(<SignInPage getData={mockGetData} errorMessage={null} />);
  });

  it('renders the Sign In button', () => {
    const signInButton = screen.getByTestId('sign-in-btn');
    expect(signInButton).toBeInTheDocument();
  });

  it('displays an error message if the input is blank and the Sign In button is clicked', () => {
    const signInButton = screen.getByTestId('sign-in-btn');
    fireEvent.click(signInButton);

    const errorMessage = screen.getByText(/must enter an address to sign in/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it('calls getData with the input value when the Sign In button is clicked', () => {
    const inputElement = screen.getByPlaceholderText(/jilly/i);
    fireEvent.change(inputElement, { target: { value: 'test-address' } });

    const signInButton = screen.getByTestId('sign-in-btn');
    fireEvent.click(signInButton);

    const wakingUpButton = screen.getByTestId('waking-up-btn');
    expect(wakingUpButton).toBeInTheDocument();

    expect(mockGetData).toHaveBeenCalledWith('test-address');
  });
});
