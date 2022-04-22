import { render, screen } from '@testing-library/react';
import { WeatherIcon } from '.';

describe('WeatherIcons', () => {
  it('should render clear night with icon value of 0', () => {
    render(<WeatherIcon iconNumber={0} />);

    const weatherIcon = screen.getByAltText('Clear night');

    expect(weatherIcon).toBeInTheDocument();
  });

  it('should render unknown icon with an invalid icon value', () => {
    render(<WeatherIcon iconNumber={-1} />);

    const unknownIcon = screen.getByText('unknown icon');

    expect(unknownIcon).toBeInTheDocument();
  });
});
