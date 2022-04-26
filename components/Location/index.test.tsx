import { render, screen } from '@testing-library/react';
import { Location } from './index';

describe('Location', () => {
  it('should not display location name', () => {
    render(<Location />);

    const locationName = screen.getByTestId('address-not-found');

    expect(locationName).toBeInTheDocument();
  });
});
